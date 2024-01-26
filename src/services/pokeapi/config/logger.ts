import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const handleRequest = (
  config: InternalAxiosRequestConfig,
  isLogsEnabled?: boolean,
): InternalAxiosRequestConfig => {
  if (isLogsEnabled)
    console.error(
      `[REQUEST] ${config.method?.toUpperCase() ?? 'UNKNOWN'} ${config.url ?? ''}`,
    );
  return config;
};

export const handleRequestError = (
  error: AxiosError,
  isLogsEnabled?: boolean,
): Promise<AxiosError> => {
  if (isLogsEnabled)
    console.error(
      `[REQUEST ERROR] code ${error.code ?? 'UNKNOWN'} | ${error.message}`,
    );
  return Promise.reject(error);
};

export const handleResponse = (
  response: AxiosResponse,
  isLogsEnabled?: boolean,
): AxiosResponse => {
  if (isLogsEnabled)
    console.error(`[RESPONSE] status ${response.status} | not cached`);
  return response;
};

export const handleResponseError = (
  error: AxiosError,
  isLogsEnabled?: boolean,
): Promise<AxiosError> => {
  if (isLogsEnabled)
    console.error(
      `[RESPONSE ERROR] CODE ${error.code ?? 'UNKNOWN'} ${error.message}`,
    );
  return Promise.reject(error);
};
