export interface AccountInformationRequest {
  recvWindow?: number;
  timestamp: number;
}

export interface AccountInformationResponse {
  makerComission: number;
  takerComission: number;
  buyerComission: number;
  sellerComission: number;
  canTrade: boolean;
  canWithdraw: boolean;
  canDeposit: boolean;
  updateTime: number;
  accountType: string;
  balances: BalanceInterface[];
  permissions: string[];
}

export interface BalanceInterface {
  asset: string;
  free: string;
  locked: string;
}
