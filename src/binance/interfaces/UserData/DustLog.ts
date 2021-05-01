export interface DustLogResponse {
  success: boolean;
  resuls: any;
}

export interface Result {
  total: number;
  rows: DustLogRow[];
}

export interface DustLogRow {
  transfered_total: number;
  service_charge_total: number;
  tran_id: number;
  logs: Log[];
  operate_time: Date;
}

export interface Log {
  tranId: number;
  serviceChargeAmount: number;
  uid: number;
  amount: number;
  operateTime: Date;
  transferedAmount: number;
  fromAsset: string;
}

export interface DustLogRequest {
  recvWindow?: number;
  timestamp: number;
}
