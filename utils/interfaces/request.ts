export interface IRequestProp {
  url: string;
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  results: number;
}
