export interface DepositHistorySupportingNetworkRequest {
  coin?: string;
  status?: 0 | 6 | 1;
  startTime?: number;
  endTime?: number;
  offest?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
}

export interface DepositHistorySupportingNetworkResponse {
  amount: number;
  coin: string;
  network: string;
  status: number;
  address: string;
  addressTag: string;
  txId: string;
  insertTime: number;
  transferType: number;
  confirmTimes: string;
}

export interface DepositHistoryResponse {
  depositList: Deposit[];
  success: boolean;
}

export interface Deposit {
  insertTime: number;
  amount: number;
  asset: string;
  address: string;
  txId: string;
  status: number;
}

export interface DepositHistoryRequest {
  asset?: string;
  status?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
  timestamp: number;
}
