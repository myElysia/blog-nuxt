import type { CategorySearchParams, TagSearchParams, ContentSearchParams } from "../models/page";
import type { Category, Tag, Article } from "../models/article";
import { apiClient } from "./request";

export const getArticles = (params: ContentSearchParams) => apiClient.get<typeof params, Article[]>("/article", params);

export const getCategorys = (params: CategorySearchParams) => apiClient.get<typeof params, Category[]>("/category", params);

export const getTags = (params: TagSearchParams) => apiClient.get<typeof params, Tag[]>("/tag", params);

export const getArticle = (params: { md5: string }) => apiClient.get<typeof params, Article>("/article", params);

export const createArticle = (data: Article) => apiClient.post("/article", data);

export const updateArticle = (data: Article) => apiClient.put("/article", data);

export const deleteArticle = (params: { md5: string }) => apiClient.delete("/article", params);