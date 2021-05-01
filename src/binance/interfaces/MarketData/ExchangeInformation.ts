export interface ExchangeInfoResponse {
  timezone: string;
  serverTime: number;
  rateLimits: [];
  exchangeFilters: [];
  symbols: ExchageInfoSymbols[];
}

export interface ExchageInfoSymbols {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  orderTypes: string[];
  icebergAllowed: boolean;
  ocoAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  filters: [];
  permissions: string[];
}
