export interface ITokenResponse {
  access_token: string;
  expires_in: number; // 3599
  refresh_token: string;
  token_type: string; // bearer
}
