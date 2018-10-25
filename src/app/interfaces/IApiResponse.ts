export interface IApiResponse<T> {
  Data: T[];
  IsSuccess: boolean;
  Message: any;
}
