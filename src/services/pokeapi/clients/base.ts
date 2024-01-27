import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { NamedAPIResourceList } from '..';
import {
  handleRequest,
  handleRequestError,
  handleResponse,
  handleResponseError,
} from '../config/logger';
import { BASE_URL, ENDPOINTS } from '../constants';

type ObjectValue<T> = T[keyof T];
type Endpoint = ObjectValue<typeof ENDPOINTS>;

export interface ClientArgs {
  logs?: boolean;
  baseUrl?: string;
}

export class BaseClient {
  private api: AxiosInstance;

  constructor(clientOptions?: ClientArgs) {
    this.api = axios.create({
      baseURL: clientOptions?.baseUrl ?? BASE_URL.REST,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) =>
        handleRequest(config, clientOptions?.logs),
      (error: AxiosError) => handleRequestError(error, clientOptions?.logs),
    );

    this.api.interceptors.response.use(
      (config: AxiosResponse) => handleResponse(config, clientOptions?.logs),
      (error: AxiosError) => handleResponseError(error, clientOptions?.logs),
    );
  }

  protected async getResource<T>(
    endpoint: Endpoint,
    identifier?: string | number,
  ): Promise<T> {
    return (await this.api.get<T>(`${endpoint}/${identifier ?? ''}`)).data;
  }

  protected async getResourceList(
    endpoint: Endpoint,
    offset = 0,
    limit = 20,
  ): Promise<NamedAPIResourceList> {
    return (
      await this.api.get<NamedAPIResourceList>(
        `${endpoint}?offset=${offset}&limit=${limit}`,
      )
    ).data;
  }
}
