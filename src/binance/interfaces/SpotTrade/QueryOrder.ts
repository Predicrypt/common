export interface QueryOrderRequest {
  symbol: string;
  orderId?: number;
  origClientOrderId?: string;
  recvWindow?: number;
  timestamp: number;
}

export interface QueryOrderResponse {
  symbol: string;
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
  stopPrice: number;
  icebergQty: number;
  time: number;
  updateTime: number;
  isWorking: boolean;
  origQuoteOrderQty: number;
}
