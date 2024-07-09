export interface IBeansRequestParams {
  currentPage: number;
  pageSize: number;
}

export interface IBean {
  beanId: number,
  groupName: string[],
  ingredients: string[],
  flavorName: string,
  description: string
  colorGroup: string,
  backgroundColor: string,
  imageUrl: string,
  glutenFree: boolean,
  sugarFree: boolean,
  seasonal: boolean,
  kosher: boolean,
}

export interface IBeansRequest {
  totalCount?: number,
  pageSize?:	number,
  currentPage?: number,
  totalPages?:	number,
  items?: IBean[]
}

export interface IBeans {
  beans: IBeansRequest,
  isLoading: string
}