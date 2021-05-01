import { OrderResponseType } from "../../enums/OrderResponseType";
import { OrderSide } from "../../enums/OrderSide";
import { OrderTypes } from "../../enums/OrderTypes";
import { TimeInForce } from "../../enums/TimeInForce";

export interface NewOrderRequest {
  symbol: string;
  side: OrderSide | string;
  type: OrderTypes | string;
  timeInForce?: TimeInForce | string;
  quantity?: number;
  quoteOrderQty?: number;
  price?: number;
  newClientOrderId?: string;
  stopPrice?: number;
  icebergQty?: number;
  newOrderRespType?: OrderResponseType;
  recvWindow?: number;
  timestamp: number;
}

export interface NewOrderRequestNoType {
  symbol: string;
  side: OrderSide | string;
  timeInForce?: TimeInForce | string;
  quantity?: number;
  quoteOrderQty?: number;
  price?: number;
  newClientOrderId?: string;
  stopPrice?: number;
  icebergQty?: number;
  recvWindow?: number;
  timestamp: number;
}

export interface NewLimitOrderRequest extends NewOrderRequestNoType {
  timeInForce: TimeInForce | string;
  quantity: number;
  price: number;
}

export interface NewMarketOrderRquest extends NewOrderRequestNoType {
  quantity: number;
  quoteOrderQty?: number;
}

export interface NewMarketQuoteOrderRquest extends NewOrderRequestNoType {
  quantity?: number;
  quoteOrderQty: number;
}

export interface NewStopLossOrderRequest extends NewOrderRequestNoType {
  quantity: number;
  stopPrice: number;
}

export interface NewStopLossLimitOrderRequest extends NewOrderRequestNoType {
  timeInForce: TimeInForce | string;
  quantity: number;
  price: number;
  stopPrice: number;
}

export interface NewTakeProfitOrderRequest extends NewOrderRequestNoType {
  quantity: number;
  stopPrice: number;
}

export interface NewTakeProfitLimitOrderRequest extends NewOrderRequestNoType {
  timeInForce: TimeInForce | string;
  quantity: number;
  price: number;
  stopPrice: number;
}

export interface NewLimitMakerOrderRequest extends NewOrderRequestNoType {
  quantity: number;
  price: number;
}

export interface NewOrderResponseACK {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
}

export interface NewOrderResponseResult {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
  price: number;
  origQty: number;
  executedQty: number;
  cummulativeQuoteQty: number;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
}

export interface NewOrderResponseFull {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
  price: number;
  origQty: number;
  executedQty: number;
  cummulativeQuoteQty: number;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  fills: Fills[];
}

export interface Fills {
  price: number;
  qty: number;
  commission: number;
  commissionAsset: string;
}
