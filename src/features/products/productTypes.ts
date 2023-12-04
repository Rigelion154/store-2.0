import { MasterData } from '../../types/productsType';

export interface IProductsResponse {
  results: MasterData[];
}

export interface CategoriesState {
  productsArray: MasterData[];
  loading: boolean;
  error: string | undefined;
}
