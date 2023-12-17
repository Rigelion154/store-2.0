import { $dataApi } from '../../axios/dataApi';
import { IProductsResponse } from '../../features/products/productTypes';

interface IFilteredRequest {
  categoryId?: string;
  color?: string | null;
  minPrice?: string | null;
  maxPrice?: string | null;
  screenSize?: string | null;
  sortType?: string;
  sortValue?: string;
  limit?: number;
  slug?: string;
  search?: string;
}

export const getFilteredProducts = async (params: IFilteredRequest) => {
  const baseURL = params.search
    ? `product-projections/search?text.en-us=searchKeywords:"${params.search}`
    : 'product-projections/search';

  const filter = [];
  const sort = [];

  // if (params.search) {
  //   filter.push(`searchKeywords.en-US:"${params.search}"`);
  // }
  console.log(params.search);
  if (params.slug) {
    filter.push(`slug.en-US:"${params.slug}"`);
  }

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
      // 'text.en-us': params.search ? `searchKeywords:"${params.search}"` : '',
    },
  });
  const { results } = await response.data;
  return results;
};
