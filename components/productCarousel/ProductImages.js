import React, { useState, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { InView } from "react-intersection-observer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Indicator from "./Indicator";
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW } from "../../GlobalVariables";

const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;

  ${DESKTOP_VIEW} {
    width: 50vw;
    border-radius: 10px;
    position: sticky;
    top: 150px;
  }
`;

const Container = styled.div`
  height: 400px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    height: 500px;
  }

  ${DESKTOP_VIEW} {
    border-radius: 10px;
    height: 500px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: inline-block;
  scroll-snap-align: start;

  @media only screen and (min-width: 600px) {
    height: 500px;
  }

  ${DESKTOP_VIEW} {
    height: 500px;
  }
`;

/* Shimmer Effect for Image Placeholder */
const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
        <stop stop-color="${PRIMARY_THEME_COLOR}" offset="20%" />
        <stop stop-color="#edeef1" offset="50%" />
        <stop stop-color="#f6f7f8" offset="70%" />
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#FFFFFF" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

/* Lightbox Next.js Image Renderer */
const NextJsLightboxImage = ({ slide }) => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <Image
      src={slide.src}
      alt={slide.alt || "Product Image"}
      fill
      placeholder={slide.blurDataURL ? "blur" : undefined}
      style={{ objectFit: "contain" }}
    />
  </div>
);

/* Main Component */
export default function ProductImages({ images, variants }) {
  const [imageIdx, setImageIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const myRef = useRef();

  /* Function to Render Images */
  const renderImages = () =>
    images.map((img, i) => (
      <InView
        key={img.id}
        ref={myRef}
        onChange={(inView) => inView && setImageIdx(i)}
        threshold={0.5}
        initialInView={false}
      >
        {({ inView, ref }) => (
          <ImageContainer id={variants[0]?.handle} ref={ref}>
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              fill
              loading={i ? "lazy" : "eager"}
              priority={!i}
              src={img.src}
              alt={img.altText}
              quality={10}
              style={{ objectFit: "cover" }}
            />
          </ImageContainer>
        )}
      </InView>
    ));

  return (
    <>
      <MainContainer>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          controller={{closeOnBackdropClick: true, closeOnPullDown: true}}
          slides={images.map((image) => ({
            src: image.src,
            width: image.width || 1000, // Default width if not provided
            height: image.height || 750, // Default height if not provided
            alt: image.altText || "Product Image",
          }))}
          render={{ slide: NextJsLightboxImage }}
        />

        {/* Image Gallery - Opens Lightbox on Click */}
        <Container onClick={() => setOpen(true)}>{renderImages()}</Container>

        {/* Indicator for Current Image */}
        <Indicator quantity={images.length} idx={imageIdx} />
      </MainContainer>
    </>
  );
}
