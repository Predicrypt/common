export interface AllCoinsInformationResponse {
  coin: string;
  depositAllEnable: boolean;
  free: number;
  freeze: number;
  ipoable: number;
  ipoing: number;
  isLegalMoney: boolean;
  locked: number;
  name: String;
  networkList: Network[];
  storage: number;
  trading: boolean;
  withdrawAllEnable: true;
  withdrawing: number;
}

export interface Network {
  addressRegex: string;
  coin: string;
  depositDesc?: string;
  depositEnable: boolean;
  isDefault: boolean;
  memoRegex: string;
  minConfirm: number;
  name: string;
  network: string;
  resetAddressStatus: boolean;
  specialTips: string;
  unLockConfirm: number;
  withdrawDesc: string;
  withdrawEnable: boolean;
  withdrawFee: number;
  withdrawMin: number;
}

export interface AllCoinsInformationRequest {
  recvWindow?: number;
  timestamp: number;
}
