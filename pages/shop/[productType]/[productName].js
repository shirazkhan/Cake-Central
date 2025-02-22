import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import {Primary} from '../../../src/styled/App';
import ProductImages from '../../../components/productCarousel/ProductImages';
import ProductSpec from '../../../components/ProductSpec';
import BuyButton from '../../../components/BuyButton';
import Head from 'next/head';
import {WEBSITE_NAME, DESKTOP_VIEW, DOMAIN, MOBILE_NAV_HEIGHT} from '../../../GlobalVariables';
import { client } from '../../../apollo-client';
import { GET_PRODUCT_AND_COLLECTION_HANDLES, GET_VARIANTS } from "../../../graphql/Queries";
import ProductAccordion from '../../../components/ProductAccordion';
import parse from 'html-react-parser';
import { NextSeo } from 'next-seo';

const MainContainer = styled.div`
    margin: -${MOBILE_NAV_HEIGHT} 0 0 0;

  ${DESKTOP_VIEW}{
    display: flex;
    gap: 20px;
    width: calc(100% - 20px);
    margin: -25px auto 0 auto;
  }
`;

const SpecContainer = styled.div`
  width: 100vw;
  margin-top: -40px;
  ${DESKTOP_VIEW}{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 20px;
      width: 50%;
      margin-top: -20px;
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

const extractFragmentHandle = (router, variants) => { 
  const fragmentIndex = router.asPath.indexOf('#');
  if (fragmentIndex === -1 || !variants.some(v => v.handle === router.asPath.slice(fragmentIndex + 1))) {
    return variants[0]?.handle || '';
  }
  return router.asPath.slice(fragmentIndex + 1);
};

const defaultIngredientsAllergens = `
<p>Our cakes are made with the finest ingredients to ensure a delectable experience. Each cake is lovingly crafted using:</p>

<h3>Ingredients</h3>
<p>Flour, sugar, butter, eggs, milk, natural flavorings, and food coloring. (Specific ingredients may vary depending on the cake type.)</p>

<h3>Decorations</h3>
<p>Our cakes may feature buttercream flowers, fondant details, or other edible embellishments, all made with high-quality ingredients and food-safe edible colors. 
Some designs may also include non-edible elements such as faux or dried florals, decorative butterflies, and personalized toppers. These should be removed before consumption.</p>

<h3>Allergens</h3>
<p>Contains gluten, dairy, eggs, and may contain traces of nuts due to being prepared in a facility that handles nut products. 
If you have any specific dietary requirements or allergen concerns, please contact us before placing your order.</p>`;

const defaultDeliveryCollection = `<p>We offer flexible delivery and collection options to suit your needs:</p>
<ul>
  <li><strong>Delivery:</strong> Available across Grantham and nearby areas. Orders are carefully packaged to ensure your item arrives in perfect condition. Delivery times may vary based on location and demand.</li>
  <li><strong>Collection:</strong> You can pick up your order from our location situated in Grantham.</li>
</ul>
<p>To ensure the freshest and most beautiful presentation, we recommend enjoying your bakes within 24 hours of delivery or collection.</p>`

const defaultTravelStorage = `<p>When you're on the move with your cake, make sure it's stored flat and secure—no cake disasters, please! If it's a warm day, keep the aircon running to help keep your cake cool and happy.</p>

<p>Your cake should hang out in an odour-free fridge. But before you dig in, take it out about 3 hours ahead of time so it can reach room temperature and taste its best.</p>

<p>For the freshest experience, cakes are best enjoyed right after being cut. The sponge will start to dry out once exposed to air, so go ahead and enjoy it sooner rather than later!</p>

<p>We recommend eating your cake within 3 days of delivery for optimal deliciousness.</p>

<p>Once you've sliced your cake, pop it in an air-tight container to lock in all that freshness and keep the quality top-notch.</p>`

const defaultCakeSizesServings = `<ul>
<li>A 6” cake serves 12 Party slices and 24 Finger slices.</li>
<li>An 8” cake serves 24 Party slices and 48 Finger slices.</li>
<li>A 10” cake serves 32 Party slices and 74 Finger slices.</li>
<li>A 2-tier 8” & 6” cake serves 32 Party slices and 74 Finger slices.</li>
<li>A 3-tier 8” & 6” & 4” cake serves 42 Party slices and 84 Finger slices.</li>
<li>A 3-tier 10” & 8” & 6” cake serves 74 Party slices and 148 Finger slices.</li>
</ul>

<h3>Slice Sizes:</h3>
<ul>
<li>Party slices are 1x2 inches.</li>
<li>Finger slices are 1x1 inch.</li>
</ul>

<p>Most of our cakes come with 3 layers of delicious sponge, typically 5-7 inches tall, so feel free to request smaller slices if that’s what you prefer!</p>`;

export default function Product({id,title,collection,descriptions,images,price,variants,options,handle,canonicalHandle,allowDate,allowMessage,advancedNotice}){

  const router = useRouter();

  const { productType, productName } = router.query;

  const [selectedVariant, setSelectedVariant] = useState(extractFragmentHandle(router, variants));
  
  const [selectedOptions, setSelectedOptions] = useState(
    options.map(option => ({ name: option.name, value: option.values[0] }))
  );

  const [customMessage, setCustomMessage] = useState('');
  const [date, setDate] = useState(null);

  useEffect(() => {
    const matchedVariant = variants.find(variant =>
      selectedOptions.some(sel =>
        variant.selectedOptions.some(opt => sel.name === opt.name && sel.value === opt.value)
      )
    );
    setSelectedVariant(matchedVariant ? matchedVariant.id : variants[0]?.id);
  }, [selectedOptions, variants]);

  return <>
    <NextSeo
        title={`${title} | ${WEBSITE_NAME}`}
        description={descriptions.main}
        canonical={`${DOMAIN}/shop/${canonicalHandle}/${handle}`}
        openGraph={{
          title: `${title} | ${WEBSITE_NAME}`,
          description: descriptions.main,
          url: `${DOMAIN}/shop/${title}`,
          images: [
            {
              url: images[0].src,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@cakecentraluk',
          title: title,
          description: descriptions.main,
          image: images[0].src,
        }}
      />
    <Primary>
      <MainContainer>
        <ProductImages images = {images} variants = {variants}/>
        <SpecContainer>
        <ProductSpec
          title={title}
          collection={collection}
          variants={variants} // Pass variants
          options={options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          customMessage={customMessage}
          setCustomMessage={setCustomMessage}
          date={date}
          setDate={setDate}
          allowDate={allowDate}
          allowMessage={allowMessage}
          advancedNotice={advancedNotice}
/>
          <ButtonsContainer>
            <BuyButton
              handle={handle}
              selectedOptions={selectedOptions}
              customMessage = {customMessage} 
              date = {date}
            />
          </ButtonsContainer>
          <AccordionContainer>
            <ProductAccordion title = 'Description' content = {parse(descriptions.main)} initial = {true} />
            <ProductAccordion title = 'Ingredients & Allergens' content = {parse(descriptions.IngredientsAllergens)} initial = {false} />
            <ProductAccordion title = 'Delivery & Collection' content = {parse(descriptions.DeliveryCollection)} initial = {false} />
            <ProductAccordion title = 'Travel & Storage Tips' content = {parse(defaultTravelStorage)} initial = {false} />
            <ProductAccordion title = 'Cake Sizes & Servings' content = {parse(defaultCakeSizesServings)} initial = {false} />
          </AccordionContainer>
        </SpecContainer>
      </MainContainer>
    </Primary>
  </>
}

export async function getStaticProps({ params }) {
  const { productType, productName } = params;
  
  const { data } = await client.query(GET_VARIANTS(productName));

  if (!data.productByHandle) {
    return {
      notFound: true, // Return a 404 page if product does not exist
    };
  }

  const variants = data.productByHandle.variants.nodes.map(v => ({
    id: v.id,
    title: v.title,
    handle: v.sku,
    price: v.price.amount,
    selectedOptions: v.selectedOptions,
  }));

  const images = data.productByHandle.images.edges.map(i => ({
    id: i.node.id,
    src: i.node.src,
    altText: i.node.altText,
  }));

  const collection = data.productByHandle.collections.nodes[0];

  const optionsMap = new Map();
  data.productByHandle.variants.nodes.forEach((variant) => {
    variant.selectedOptions.forEach((option) => {
      if (!optionsMap.has(option.name)) {
        optionsMap.set(option.name, new Set());
      }
      optionsMap.get(option.name).add(option.value);
    });
  });

  const options = [...optionsMap.entries()].map(([name, values]) => ({
    name,
    values: [...values],
  }));

  return {
    props: {
      id: data.productByHandle.id,
      title: data.productByHandle.title,
      descriptions: {
        main: data.productByHandle.descriptionHtml,
        IngredientsAllergens: data.productByHandle.IngredientsAllergens?.value || defaultIngredientsAllergens,
        DeliveryCollection: data.productByHandle.DeliveryCollection?.value || defaultDeliveryCollection,
      },
      price: data.productByHandle.priceRange.minVariantPrice.amount,
      images,
      variants,
      handle: productName,
      canonicalHandle: data.productByHandle.PrimaryCollection?.reference?.handle || collection.handle,
      collection,
      options,
      advancedNotice: data.productByHandle.AdvancedNotice?.value ?? 0,
      allowMessage: data.productByHandle.Message?.value ?? false,
      allowDate: data.productByHandle.CollectionDeliveryDate?.value ?? false,
      key: data.productByHandle.id,
    },
  };
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