export interface OldTradeLookupResponse {
  id: number;
  price: number;
  qty: number;
  quoteQty: number;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

export interface OldTradeLookupRequest {
  symbol: string;
  limit?: number;
  fromId?: number;
}
