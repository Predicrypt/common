export interface SymbolOrderBookResponse {
  symbol: string;
  bidPrice: number;
  bidQty: number;
  askPrice: number;
  askQty: number;
}

export interface SymbolOrderBookRequest {
  symbol?: string;
}
