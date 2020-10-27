export type Product = {
  id: string;
  productName: string;
  price: number;
  url: string;
  description: string;
  image: string;
  category?: optionCategory;
};

export type productProps = {
  product?: Product;
};

export type productListProps = {
  productList: Product[];
  shopId?: string;
};

export interface formProductProps {
  show: boolean;
  handleClose: () => void;
  handleAction: (product: {}, productId?: string) => void;
  product?: Product;
}

export interface optionCategory {
  value: string;
  label: string;
}

export type optionCategoriesList = optionCategory[] | [];

export const initProducts: Product[] = [
  {
    id: "nextjs_halfmoon",
    productName: "Halfmoon Betta",
    price: 25.0,
    url: "",
    image: "/images/halfmoon.jpg",
    description:
      "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
  },
  {
    id: "nextjs_dragonscale",
    productName: "Dragon Scale Betta",
    price: 35,
    url: "",
    image: "/images/dragonscale.jpg",
    description:
      "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
  },
  {
    id: "nextjs_crowntail",
    productName: "Crowntail Betta",
    price: 7.5,
    url: "",
    image: "/images/crowntail.jpg",
    description:
      "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
  },
  {
    id: "nextjs_veiltail",
    productName: "Veiltail Betta",
    price: 5.0,
    image: "/images/veiltail.jpg",
    description:
      "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
  } as Product,
];
