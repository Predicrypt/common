import { CandlestickIntervals } from "../../enums/CandlestickIntervals";

export interface CandlestickStream {
  e: string;
  E: number;
  s: string;
  k: any;
}

export interface CandlestickStreamData {
  t: number;
  T: number;
  s: string;
  i: CandlestickIntervals;
  f: number;
  L: number;
  o: number;
  c: number;
  h: number;
  l: number;
  v: number;
  n: number;
  x: boolean;
  q: number;
  V: number;
  Q: number;
  B: number;
}
