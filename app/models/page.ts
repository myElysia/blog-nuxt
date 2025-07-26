export interface PageParams {
  page?: number;
  size?: number;
}

export interface CategorySearchParams extends PageParams {
  name: string;
}

export interface TagSearchParams extends PageParams {
  name: string;
}

export interface ContentSearchParams extends PageParams {
  keyword?: string;
  tag?: string;
  category?: string;
}
