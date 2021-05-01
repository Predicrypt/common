export interface AssetDividendRecordResponse {
  rows: AssetDividendRecordRow[];
  total: number;
}

export interface AssetDividendRecordRow {
  amount: number;
  asset: string;
  divTime: number;
  enInfo: string;
  tranId: number;
}

export interface AssetDividendRecordRequest {
  asset?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
}
