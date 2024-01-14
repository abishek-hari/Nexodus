import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Empower homes with thoughtfully designed furniture that transcends trends, providing comfort and joy to every household we touch. At Nexodus, we strive to make quality and style accessible to all, enhancing the way you live.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Envisioning a world where every living space reflects the unique essence of its inhabitants. Nexodus aims to be a catalyst for positive change, setting new standards in the furniture industry by redefining the way people connect with their living spaces.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Founded with passion in 2023, Nexodus has evolved into a beacon of quality and craftsmanship. With a rich history of delivering timeless furniture, we take pride in our journey, embracing innovation while staying true to our commitment to excellence.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
