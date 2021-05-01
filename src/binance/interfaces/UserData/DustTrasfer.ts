export interface DustTransferResponse {
  totalServiceCharge: number;
  totalTransfered: number;
  transferResult: TransferResult[];
}

export interface TransferResult {
  amount: number;
  fromAsset: string;
  operateTime: number;
  serviceChargeAmount: number;
  tranId: number;
  transferedAmount: number;
}

export interface DustTransferRequest {
    asset: string[];
    recvWindow?: number;
    timestamp: number;
}
