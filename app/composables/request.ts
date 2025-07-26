// blog Response
import {createError, useFetch, UseFetchOptions} from "nuxt/app";

export interface BRS<T> {
    code: number;
    data: T;
}

// API 方法封装
export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // GET 方法 - 只需要传递 params
    get<T = any, R = any>(endpoint: string, params?: T, options?: Omit<UseFetchOptions<BRS<R>>, "method" | "query">) {
        return this.request<R>("GET", endpoint, { params }, options);
    }

    // POST 方法 - 只需要传递 data
    post<T = any, R = any>(endpoint: string, data?: T, options?: Omit<UseFetchOptions<BRS<R>>, "method" | "body">) {
        return this.request<R>("POST", endpoint, { data }, options);
    }

    // PUT 方法 - 只需要传递 data
    put<T = any, R = any>(endpoint: string, data?: T, options?: Omit<UseFetchOptions<BRS<R>>, "method" | "body">) {
        return this.request<R>("PUT", endpoint, { data }, options);
    }

    // PATCH 方法 - 只需要传递 data
    patch<T = any, R = any>(endpoint: string, data?: T, options?: Omit<UseFetchOptions<BRS<R>>, "method" | "body">) {
        return this.request<R>("PATCH", endpoint, { data }, options);
    }

    // DELETE 方法 - 可选传递 params
    delete<T = any, R = any>(endpoint: string, params?: T, options?: Omit<UseFetchOptions<BRS<R>>, "method" | "query">) {
        return this.request<R>("DELETE", endpoint, { params }, options);
    }

    // 底层请求方法
    private request<R>(
        method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
        endpoint: string,
        payload: { params?: any; data?: any },
        options?: UseFetchOptions<BRS<R>>
    ) {
        const url = `${this.baseUrl}${endpoint}`;

        const fetchOptions: UseFetchOptions<BRS<R>> = {
            ...options,
            method,
            headers: {
                "Content-Type": "application/json",
                ...options?.headers
            },
            onRequestError({ error }) {
                console.error("Request error:", error);
                throw createError({
                    statusCode: 500,
                    message: "API request failed",
                    data: error
                });
            }
        };

        // 根据方法类型处理参数
        if (method === "GET") {
            fetchOptions.query = payload.params;
        } else if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
            if (payload.data) fetchOptions.body = payload.data;
        }

        // 使用响应处理器
        return withResponseHandler<R>(() => useFetch<BRS<R>>(url, fetchOptions));
    }
}


export function withResponseHandler<T>(fn: (...args: any[]) => Promise<any>) {
    return async (...args: any[]): Promise<T> => {
        try {
            const { data, error } = await fn(...args);

            if (error.value) {
                throw createError({
                    statusCode: 500,
                    message: 'API request failed',
                    data: error.value
                });
            }

            return data.value?.data || [];
        } catch (err) {
            throw err;
        }
    };
}

export const apiClient = new ApiClient("/api/v1")