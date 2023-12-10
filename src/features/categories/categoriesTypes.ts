export interface ICategory {
  id: string;
  key: string;
  version: number;
  versionModifiedAt: string;
  name: {
    'en-US': string;
  };
  slug: {
    'en-US': string;
  };
  ancestors: Ancestors[] | [];
  orderHint: string;
  assets?: [];
}

interface Ancestors {
  typeId: string;
  id: string;
}

export interface ICategoriesResponse {
  results: ICategory[];
}

export interface CategoriesState {
  categoriesArray: ICategory[];
  subCategoriesArray: ICategory[];
  loading: boolean;
  activeSubCategory: ICategory[];
  activeCategoryId: string;
}
