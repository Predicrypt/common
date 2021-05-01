export interface AccoutStatusResponse {
  msg: string;
  success: boolean;
  objs: number[];
}

export interface AccoutStatusRequest {
    recvWindow: number;
    timestamp: number;
}
  