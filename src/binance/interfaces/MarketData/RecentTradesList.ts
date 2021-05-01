export interface RecentTradeListResponse {
  id: number;
  price: number;
  qty: number;
  quoteQty: number;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

export interface RecentTradeListResponse {
  symbol: string;
  limit?: number;
}
