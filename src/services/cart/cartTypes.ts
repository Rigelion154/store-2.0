import { Asset, Price } from '../../types/productsType';

export interface ILineItem {
  id: string;
  productId: string;
  quantity: number;
  price: {
    value: {
      centAmount: number;
    };
    discounted: {
      value: {
        centAmount: number;
      };
    };
  };
  variant: {
    attributes: {
      name: string;
      value: string | number;
    }[];
    assets: Asset[];
    images: {
      url: string;
      dimensions: {
        w: number;
        h: number;
      };
      label?: string;
    }[];
    prices: Price[];
    key: string;
    sku: string;
    id: number;
  };
}

export interface ICart {
  id: string;
  version: number;
  lineItems: ILineItem[];
  cartState: string;
}
