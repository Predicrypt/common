export interface WithdrawHistorySupportingNetworkResponse {
  address: string;
  amount: number;
  applyTime: string;
  coin: string;
  id: string;
  withdrawOrderId?: string;
  network: string;
  transferType: number;
  status: number;
  txId: string;
}

export interface WithdrawHistoryResponse {
  withdrawList: Withdraw[];
  success: boolean;
}

export interface Withdraw {
  id: string;
  withdrawOrderId: string;
  amount: number;
  transactionFee: number;
  address: string;
  asset: string;
  txId: string;
  applyTime: number;
  status: number;
}

export interface WithdrawHistorySupportingNetworkRequest {
  coin?: string;
  status?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  offset?: number;
  limit?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
  timestamp: number;
}

export interface WithdrawHistoryRequest {
    asset?: string;
    status?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
    timestamp: number;
  }
