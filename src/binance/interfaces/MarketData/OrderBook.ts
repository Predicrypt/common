export interface OrderBookResponse {
  lastUpdateId: number;
  bids: [number[]];
  asks: [number[]];
}

export interface OrderBookRequest {
    symbol: string;
    limit?: number;
}