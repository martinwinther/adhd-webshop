export interface ShopifyImage {
  id: string;
  url: string;
  altText?: string;
  width?: number;
  height?: number;
}

export interface ShopifyMoney {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: ShopifyMoney;
  compareAtPrice?: ShopifyMoney;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  image?: ShopifyImage;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: ShopifyImage[];
  variants: ShopifyProductVariant[];
  tags: string[];
  productType: string;
  vendor: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: ShopifyMoney;
    maxVariantPrice: ShopifyMoney;
  };
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: ShopifyImage;
  products: ShopifyProduct[];
}

export interface ShopifyCartItem {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: ShopifyProduct;
    selectedOptions: {
      name: string;
      value: string;
    }[];
  };
  cost: {
    subtotalAmount: ShopifyMoney;
    totalAmount: ShopifyMoney;
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: ShopifyMoney;
    totalAmount: ShopifyMoney;
    totalTaxAmount: ShopifyMoney;
  };
  lines: ShopifyCartItem[];
  totalQuantity: number;
}

export interface ShopifyCustomer {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  acceptsMarketing: boolean;
}

export interface ShopifyShop {
  name: string;
  description?: string;
  primaryDomain: {
    url: string;
    host: string;
  };
  privacyPolicy?: {
    title: string;
    url: string;
  };
  termsOfService?: {
    title: string;
    url: string;
  };
  refundPolicy?: {
    title: string;
    url: string;
  };
} 