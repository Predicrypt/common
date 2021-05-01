import { CandlestickIntervals } from "../../enums/CandlestickIntervals";

export interface CandlestickDataRequest {
  symbol: string;
  interval: CandlestickIntervals | string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}
