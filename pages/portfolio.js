import Image from "next/image";
import styled from "styled-components";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { DESKTOP_VIEW } from "../GlobalVariables";
import Banner from "../components/Banner";

const Container = styled.div`
    margin: -100px auto 10px auto;
    width: calc(100% - 10px);
    z-index: 3;

    ${DESKTOP_VIEW}{
    width: 85%;
    margin: -100px auto 25px auto;

    }
`;

const photos = [
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800, alt: 'Picture 1' },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800, alt: 'Picture 2' },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800, alt: 'Picture 3' },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800, alt: 'Picture 4' },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 600 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    { src: "/AdobeStock_364652589.jpeg", width: 800, height: 800 },
    { src: "/Wedding-Cake2.jpeg", width: 800, height: 800 },
    
  ];

  function renderNextImage(props, context) {
    const { alt = "", title, sizes } = props;
    const { photo, width, height } = context;
  
    return (
      <div
        style={{
          width: "100%",
          position: "relative",
          aspectRatio: `${width} / ${height}`,
        }}
      >
        <Image
          fill
          style={{objectFit:'cover'}}
          src={photo}
          alt={alt}
          title={title}
          sizes={sizes}
          placeholder={photo.blurDataURL ? "blur" : undefined}
        />
      </div>
    );
  }

export default function PhotoGallery() {
  return (
    <>
          <Banner backgroundImage={'/patterns/sprinkles.svg'} title={'Portfolio'} description={'Explore some of our creations.'} />

        <Container>
            <MasonryPhotoAlbum
            photos={photos}
            render={{ image: renderNextImage }}
            defaultContainerWidth={1200}
                />
        </Container>
    </>
  );
}