export interface TradeFeeResponse {
  tradeFee: TradeFee[];
  success: boolean;
}

export interface TradeFee {
  symbol: string;
  maker: number;
  taker: number;
}

export interface TradeFeeRequest {
  recvWindow?: number;
  timestamp: number;
  symbol?: string;
}
