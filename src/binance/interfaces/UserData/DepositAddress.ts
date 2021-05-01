export interface DepositAddressSupportingNetworkResponse {
  address: string;
  coin: string;
  tag: string;
  url: string;
}

export interface DepositAddressResponse {
  address: string;
  success: boolean;
  addressTag: string;
  asset: string;
}

export interface DepositAddressSupportingNetworkRequest {
  coin: string;
  network?: string;
  recvWindow?: number;
  timestamp: number;
}

export interface DepositAddressRequest {
  asset: string;
  status?: boolean;
  recvWindow?: number;
  timestamp: number;
}
