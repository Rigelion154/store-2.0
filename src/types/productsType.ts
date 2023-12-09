export interface IProductProps {
  product: MasterData;
}
export type Price = {
  id: string;
  value: {
    type: string;
    currencyCode: string;
    centAmount: number;
    fractionDigits: number;
  };
  key: string;
  discounted?: {
    value: {
      type: string;
      currencyCode: string;
      centAmount: number;
      fractionDigits: number;
    };
    discount: {
      typeId: string;
      id: string;
    };
  };
};

export interface Asset {
  id: string;
  key?: string;
  sources: {
    uri: string;
    key?: string;
    contentType?: string;
    dimensions?: {
      w: number;
      h: number;
    };
  }[];
  name?: string;
  description?: string;
  tags?: string[];
  custom?: {
    [key: string]: string;
  };
}

export interface MasterData {
  id: string;
  version: number;
  description?: {
    'en-US': string;
  };
  productType: {
    typeId: string;
    id: string;
  };
  name: {
    'en-US': string;
  };
  categories: {
    typeId: string;
    id: string;
  }[];
  categoryOrderHints: Record<string, string>;
  slug: {
    'en-US': string;
  };
  variants: {
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
  }[];
  masterVariant: {
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
  searchKeywords: {
    [key: string]: { text: string }[];
  };
  hasStagedChanges: boolean;
  published: boolean;
  key: string;
  taxCategory: {
    typeId: string;
    id: string;
  };
  priceMode: string;
  createdAt: string;
  lastModifiedAt: string;
}

// export interface IProduct {
//   id: string;
//   key: string;
//   masterData: {
//     current: {
//       categories: {
//         id: string;
//         typeId: string;
//       }[];
//       description: {
//         'en-US': string;
//       };
//       masterVariant: MasterVariant;
//       name: {
//         'en-US': string;
//       };
//       slug: {
//         en: string;
//       };
//       variants: MasterVariant[];
//     };
//     staged: {
//       categories: {
//         id: string;
//         typeId: string;
//       }[];
//       description: {
//         en: string;
//       };
//       masterVariant: MasterVariant;
//       name: {
//         'en-US': string;
//       };
//       slug: {
//         en: string;
//       };
//       variants: Attributes[];
//     };
//   };
//   productType: {
//     id: string;
//     typeId: string;
//   };
//   taxCategory: {
//     id: string;
//     typeId: string;
//   };
//   version: number;
//   createdAt: string;
//   lastModifiedAt: string;
// }

// interface MasterVariant {
//   attributes: Attributes[];
//   id: number;
//   images: Image[];
//   prices: Price[];
//   sku: string;
// }
//
// interface Attributes {
//   name: string;
//   value: string | number;
// }
// interface ImageDimensions {
//   h: number;
//   w: number;
// }
//
// interface Image {
//   dimensions: ImageDimensions;
//   url: string;
// }
