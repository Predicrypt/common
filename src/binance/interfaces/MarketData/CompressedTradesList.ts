export interface CompressedTradesListResponse {
  a: number;
  p: number;
  q: number;
  f: number;
  l: number;
  T: number;
  m: boolean;
  M: boolean;
}

export interface CompressedTradeListRequest {
  symbol: string;
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}
