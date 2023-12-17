import { MasterData } from '../../types/productsType';

export interface IProductsResponse {
  results: MasterData[];
}

export interface CategoriesState {
  productsArray: MasterData[];
  lessThenProducts: MasterData[];
  saleProducts: MasterData[];
  randomProducts: MasterData[];
  searchedProducts: MasterData[];
  loading: boolean;
  error: string | undefined;
}
