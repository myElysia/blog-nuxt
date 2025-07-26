export interface Article {
  md5?: string;
  author: string;
  title: string;
  content: string;
  metaData: string;
  status: boolean;
  category: Array<string>;
  tags: Array<string>;
  read_count: number;
  description: string;
  background?: string;
}

export interface Category {
  children?: Array<Category>;
  name: string;
}

export interface Tag {
  name: string;
}