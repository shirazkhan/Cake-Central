import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import {Primary} from '../../../src/styled/App';
import ProductImages from '../../../components/productCarousel/ProductImages';
import ProductSpec from '../../../components/ProductSpec';
import BuyButton from '../../../components/BuyButton';
import Head from 'next/head';
import {WEBSITE_NAME, DESKTOP_VIEW} from '../../../GlobalVariables';
import { client } from '../../../apollo-client';
import { GET_PRODUCT_AND_COLLECTION_HANDLES, GET_VARIANTS } from "../../../graphql/Queries";
import ProductAccordion from '../../../components/ProductAccordion';
import FavouriteButton from '../../../components/FavouriteButton';
import parse from 'html-react-parser';

const MainContainer = styled.div`
    margin: -50px 0 0 0;

  ${DESKTOP_VIEW}{
    display: flex;
    gap: 20px;
    width: calc(100% - 20px);
    margin: 0 auto;
  }
`;

const SpecContainer = styled.div`
  width: 100vw;
  ${DESKTOP_VIEW}{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 20px;
      width: 50%;
    }
`;

const AccordionContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    ${DESKTOP_VIEW}{
      gap: 5px;
      align-self: center;
      width: 100%;
    }
`;

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. If it does, then use this as initial state.
  const fragment = router.asPath.slice(router.asPath.indexOf('#')+1)
  return fragment === router.asPath ? variants[0].handle : fragment
}

const defaultIngredientsAllergens = `<p>Our Floral Cupcake Bouquets are made with the finest ingredients to ensure a delectable experience. Each cupcake is lovingly crafted using:</p>
<ul>
  <li><strong>Ingredients:</strong> Flour, sugar, butter, eggs, milk, natural flavorings, and food coloring.</li>
  <li><strong>Buttercream flowers:</strong> Made with high-quality butter, powdered sugar, and food-safe edible colors.</li>
</ul>
<p><strong>Allergens:</strong> Contains gluten, dairy, eggs, and may contain traces of nuts due to being prepared in a facility that handles nut products. If you have any specific dietary requirements or allergen concerns, please contact us before placing your order.</p>`

const defaultDeliveryCollection = `<p>We offer flexible delivery and collection options to suit your needs:</p>
<ul>
  <li><strong>Delivery:</strong> Available across Grantham and nearby areas. Orders are carefully packaged to ensure your item arrives in perfect condition. Delivery times may vary based on location and demand.</li>
  <li><strong>Collection:</strong> You can pick up your order from our location situated in Grantham.</li>
</ul>
<p>To ensure the freshest and most beautiful presentation, we recommend enjoying your bakes within 24 hours of delivery or collection.</p>`

export default function Product({id,title,collection,descriptions,images,price,variants,options,handle}){

  const router = useRouter();

  const { productType, productName } = router.query;

  const [selectedVariant, setSelectedVariant] = useState(extractFragmentHandle(router, variants));
  
  const [selectedOptions, setSelectedOptions] = useState(
    options.reduce((acc, option) => {
      acc.push({name: option.name, value: option.values[0]})
      return acc;
    }, [])
  );

  useEffect(() => {
    const matchedVariant = variants.find(variant =>
      variant.selectedOptions.every(opt =>
        selectedOptions.some(sel => sel.name === opt.name && sel.value === opt.value)
      )
    );
    setSelectedVariant(matchedVariant ? matchedVariant.handle : variants[0].handle);
  }, [selectedOptions, variants]);

  return <>
    <Head>
        <title>{`${title} | ${WEBSITE_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Primary>
      <MainContainer>
        <ProductImages images = {images} variants = {variants}/>
        <SpecContainer>
          <ProductSpec
                title={title}
                collection={collection}
                price={parseFloat(variants.find(v => v.handle === selectedVariant)?.price || price).toFixed(2)}
                variants={variants}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
                options={options}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
          <ButtonsContainer>
            <BuyButton handle={handle} selectedOptions={selectedOptions} selectedVariant = {selectedVariant} variants = {variants} />
            <FavouriteButton
              variantId = {variants.find(v => v.handle === selectedVariant).id}
              productTitle = {title}
              imgSrc = {variants.find(v => v.handle === selectedVariant).image}
              price = {price}
              variantHandle = {selectedVariant}
              variantTitle = {variants.find(v => v.handle === selectedVariant).title}
              productType = {productType}
              productHandle = {productName}
            />
          </ButtonsContainer>
          <AccordionContainer>
            <ProductAccordion title = 'Description' content = {parse(descriptions.main)} initial = {true} />
            <ProductAccordion title = 'Ingredients & Allergens' content = {parse(descriptions.IngredientsAllergens)} initial = {true} />
            <ProductAccordion title = 'Delivery & Collection' content = {parse(descriptions.DeliveryCollection)} initial = {true} />
          </AccordionContainer>
        </SpecContainer>
      </MainContainer>
    </Primary>
  </>
}

export async function getStaticProps({params}) {

  const { productType, productName } = params;
  
  const { data } = await client.query(GET_VARIANTS(productName));

  const variants = data.productByHandle.variants.nodes.map(v => {
    return ({
      id: v.id,
      title: v.title,
      handle: v.sku,
      price: v.price.amount,
      selectedOptions: v.selectedOptions
    })
  })

  const images = data.productByHandle.images.edges.map(i => {
    return {
      id: i.node.id,
      src: i.node.src,
      altText: i.node.altText
    }
  })
  
  const collection = data.productByHandle.collections.nodes[0];
  
  // Get selectable options function
  const options = data.productByHandle.variants.nodes.reduce((acc, variant) => {
    variant.selectedOptions.forEach((option) => {
      const existingOption = acc.find((o) => o.name === option.name);
      if (existingOption) {
        if (!existingOption.values.includes(option.value)) {
          existingOption.values.push(option.value);
        }
      } else {
        acc.push({ name: option.name, values: [option.value] });
      }
    });
    return acc;
  }, []);


  return {
      props: {
        id: data.productByHandle.id,
        title: data.productByHandle.title,
        descriptions: {
          main: data.productByHandle.descriptionHtml,
          IngredientsAllergens: data.productByHandle.IngredientsAllergens ? data.productByHandle.IngredientsAllergens.value : defaultIngredientsAllergens,
          DeliveryCollection: data.productByHandle.DeliveryCollection ? data.productByHandle.DeliveryCollection.value : defaultDeliveryCollection
        },
        price: data.productByHandle.priceRange.minVariantPrice.amount,
        images,
        variants,
        handle: productName,
        collection,
        options,
        key: data.productByHandle.id
      },
    }
}

export async function getStaticPaths() {
  
  const { data } = await client.query(GET_PRODUCT_AND_COLLECTION_HANDLES);

  const paths = data.collections.nodes.map(c => {
    return c.products.nodes.map(p => {
      return {
        params: {
          productType: c.handle,
          productName: p.handle
        }
      }
    })
  }).flat()

  return {
    paths,
    fallback: false
  };
}