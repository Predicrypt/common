export interface AccountTradingStatusResponse {
  success: boolean;
  status: any;
}

export interface Status {
  isLocked: boolean;
  plannedRecoverTime: number;
  triggerCondition: TriggerCondition;
  indicators: string[];
  updateTime: number;
}

export interface TriggerCondition {
  gcr: number;
  ifer: number;
  ufr: number;
}

export interface IndicatorSymbol {
  i: string;
  c: number;
  v: number;
  t: number;
}

export interface AccountTradingStatusRequest {
  recvWindow?: number;
  timestamp: number;
}
