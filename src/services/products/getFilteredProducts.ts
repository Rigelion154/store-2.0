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
  // limit?: number;
  slug?: string;
  search?: string;
  offset?: number;
  // lastId?: string;
}

export const getFilteredProducts = async (params: IFilteredRequest) => {
  const baseURL = params.search
    ? `product-projections/search?text.en-us=searchKeywords:"${params.search}`
    : `product-projections/search?withTotal=false&sort=id+asc`;

  // response = client.get(
  //   endpoint + '?withTotal=false&limit=100&sort=id+asc&where=id%3E' + lastId,
  // );

  const filter = [];
  const sort = [];

  // if (params.lastId) {
  //   filter.push(`where=id%3E${params.lastId}`);
  // }

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
      limit: 3,
      offset: params.offset,
    },
  });
  const { results } = await response.data;
  return results;
};
