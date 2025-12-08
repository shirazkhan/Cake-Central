import { WEBSITE_NAME } from "./GlobalVariables";

export default {
    title: "Cake Central - Order Cakes Online",
    description: "Delicious, freshly baked cakes, cupcakes, and brownies. Order online for local delivery in Grantham, Lincolnshire!",
    canonical: "Cake Central",
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: "https://www.cakecentral.co.uk/",
      title: "Cake Central - Freshly Baked Cakes & Treats",
      description: "Order handcrafted cakes, cupcakes, and brownies online. Local delivery in Grantham!",
      images: [
        {
          url: "https://www.cakecentral.co.uk/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Cake Central - Delicious Cakes",
        },
      ],
      site_name: WEBSITE_NAME
    },
    twitter: {
      handle: "@cakecentraluk",
      site: "@cakecentraluk",
      cardType: "summary_large_image",
    },
  };
  