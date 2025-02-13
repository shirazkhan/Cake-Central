import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { InView } from "react-intersection-observer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Indicator from "./Indicator";
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW } from "../../GlobalVariables";

// Styled Components
const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;

  ${DESKTOP_VIEW} {
    width: 50vw;
    border-radius: 10px;
    position: sticky;
    top: 175px;
  }
`;

const Container = styled.div`
  height: 400px;
  white-space: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${DESKTOP_VIEW} {
    height: 500px;
    border-radius: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: inline-block;
  scroll-snap-align: start;

  ${DESKTOP_VIEW} {
    height: 500px;
  }
`;

// Lightbox Custom Renderer
const NextJsLightboxImage = ({ slide }) => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <Image
      src={slide.src}
      alt={slide.alt || "Product Image"}
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

export default function ProductImages({ images, variants }) {
  const [imageIdx, setImageIdx] = useState(0);
  const [open, setOpen] = useState(false);

  const renderImages = () =>
    images.map((img, i) => (
      <InView key={img.id} onChange={(inView) => inView && setImageIdx(i)} threshold={0.5}>
        {({ ref }) => (
          <ImageContainer id={variants[0]?.handle} ref={ref}>
            <Image
              fill
              loading={i === 0 ? "eager" : "lazy"}
              priority={i === 0}
              src={img.src}
              alt={img.altText || "Product image"}
              quality={50}
              style={{ objectFit: "cover", cursor: "pointer" }}
              onClick={() => setOpen(true)}
            />
          </ImageContainer>
        )}
      </InView>
    ));

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
        slides={images.map((image) => ({
          src: image.src,
          width: image.width || 1000,
          height: image.height || 750,
          alt: image.altText || "Product Image",
        }))}
        render={{ slide: NextJsLightboxImage }}
      />

      <MainContainer>
        <Container>{renderImages()}</Container>
        <Indicator quantity={images.length} idx={imageIdx} />
      </MainContainer>
    </>
  );
}
