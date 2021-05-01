export interface AssetDetailResponse {
  success: boolean;
  assetDetail: any;
}

export interface AssetDetail {
  CTR: any;
  SKY: any;
}

export interface CTR{
    minWithdrawAmount: number;
    depositStatus: boolean;
    withdrawFee: number;
    withdrawStatus: boolean;
    depositTip: string;
}

export interface SKY{
    minWithdrawAmount: number;
    depositStatus: boolean;
    withdrawFee: number;
    withdrawStatus: boolean;
}

export interface AssetDetailRequest {
    recvWindow?: number;
    timestamp: number;
}