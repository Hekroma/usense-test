export interface IParamsRequestKeys extends Partial<IParamsRequest> {
  [key: string]: any;
}
export interface IParamsRequest {
  engine: string;
  q: string;
  location: string;
  api_key: string;
}
