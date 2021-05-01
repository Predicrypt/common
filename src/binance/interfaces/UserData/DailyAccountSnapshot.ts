export interface DailyAccountSnapshotResponse {
  code: number;
  msg: string;
  snapshotVos: SnapshotVos[];
}

export interface SnapshotVos {
  data: DataSnapshotVos;
  type: string;
  updateTime: number;
}

export interface DataSnapshotVos {
  balances: BalanceSnapshot[];
  totalAssetOfBtc: number;
}

export interface BalanceSnapshot {
  asset: string;
  free: number;
  locked: number;
}

export interface DailyAccountSnapshotRequest {
  type: "SPOT" | "MARGIN" | "FUTURES";
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
  timestamp: number;
}
