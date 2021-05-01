export interface WithdrawSAPIRequest {
  coin: string;
  withdrawOrderId?: string;
  network?: string;
  address: string;
  addressTag?: string;
  amount: number;
  transactionFeeFlag?: boolean;
  name?: string;
  recvWindow?: number;
  timestamp: number;
}

export interface WithdrawSAPIResponse {
  id: string;
}

export interface WithdrawRequest {
  coin: string;
  withdrawOrderId?: string;
  network?: string;
  address: string;
  addressTag?: string;
  amount: number;
  transactionFeeFlag?: boolean;
  name?: string;
  recvWindow?: number;
  timestamp: number;
}

export interface WithdrawResponse {
  msg: string;
  success: boolean;
  id: string;
}
