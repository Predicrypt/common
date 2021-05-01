export interface CancelOpenOrdersRequest {
  symbol: string;
  recvWindow?: number;
  timestamp: number;
}

export interface CancelOpenOrdersResponse {
  symbol: string;
  origClientOrderId: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: number;
  origQty: number;
  executedQty: number;
  cummulativeQuoteQty: number;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
}
