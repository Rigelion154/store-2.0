import { $dataApi } from '../../axios/dataApi';
import { IProductsResponse } from '../../features/products/productTypes';

interface IFilteredRequest {
  categoryId: string;
  color?: string | null;
  minPrice?: string | null;
  maxPrice?: string | null;
  screenSize?: string | null;
  sortType?: string;
  sortValue?: string;
  limit?: number;
}

export const getFilteredProducts = async (params: IFilteredRequest) => {
  const baseURL = 'product-projections/search';

  const filter = [];
  const sort = [];

  if (params.sortType && params.sortValue) {
    sort.push(`${params.sortType} ${params.sortValue}`);
  }
  if (params.maxPrice && params.maxPrice) {
    filter.push(
      `variants.price.centAmount:range(${params.minPrice || '0'} to ${
        params.maxPrice && +params.maxPrice === 0 ? '10000000' : params.maxPrice
      })`,
    );
  }

  if (params.categoryId) {
    filter.push(`categories.id:subtree("${params.categoryId}")`);
  }

  if (params.color) {
    filter.push(`variants.attributes.product_color:"${params.color}"`);
  }

  if (params.screenSize) {
    filter.push(`variants.attributes.screen_size:"${params.screenSize}"`);
  }

  const response = await $dataApi<IProductsResponse>(baseURL, {
    params: {
      filter,
      limit: params.limit,
    },
  });
  const { results } = await response.data;
  return results;
};
