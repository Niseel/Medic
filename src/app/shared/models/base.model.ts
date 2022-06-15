export interface BaseResponseModel<TData> {
  data: TData;
  errorsMessage: string;
  statusCode: number;
  errorCode: number;
}

export interface BaseRequestModel<TData> {
  data: TData;
  headers: object;
}
