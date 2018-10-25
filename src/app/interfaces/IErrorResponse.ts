export interface IErrorResponse {
  error: {
    error: string;
    error_description: string; // user friendly message.
  };
  headers: any;
  message: string;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
}
