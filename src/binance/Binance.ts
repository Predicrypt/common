import axios from "axios";
import * as cryptojs from "crypto-js";
import WebSocket from "ws";
import winston from "winston";
import { OrderResponseType } from "./enums/OrderResponseType";
import { OrderSide } from "./enums/OrderSide";
import { OrderTypes } from "./enums/OrderTypes";
import {
  AllOrdersRequest,
  OrderResponse,
} from "./interfaces/SpotTrade/AllOrders";
import {
  CancelOrderRequest,
  CancelOrderResponse,
} from "./interfaces/SpotTrade/CancelOrder";
import {
  CancelOpenOrdersRequest,
  CancelOpenOrdersResponse,
} from "./interfaces/SpotTrade/CanellAllOpenOrders";
import {
  NewLimitMakerOrderRequest,
  NewLimitOrderRequest,
  NewMarketOrderRquest,
  NewMarketQuoteOrderRquest,
  NewOrderRequest,
  NewOrderResponseFull,
  NewStopLossLimitOrderRequest,
  NewStopLossOrderRequest,
  NewTakeProfitLimitOrderRequest,
  NewTakeProfitOrderRequest,
} from "./interfaces/SpotTrade/NewOrder";
import {
  OpenOrdersRequest,
  OpenOrdersResponse,
} from "./interfaces/SpotTrade/OpenOrders";
import {
  QueryOrderRequest,
  QueryOrderResponse,
} from "./interfaces/SpotTrade/QueryOrder";
import {
  AccoutStatusRequest,
  AccoutStatusResponse,
} from "./interfaces/UserData/AccountStatus";
import {
  AccountTradingStatusRequest,
  AccountTradingStatusResponse,
} from "./interfaces/UserData/AccountTradingStatus";
import {
  AllCoinsInformationRequest,
  AllCoinsInformationResponse,
} from "./interfaces/UserData/AllCoinsInformation";
import {
  AssetDetailRequest,
  AssetDetailResponse,
} from "./interfaces/UserData/AssetDetail";
import {
  AssetDividendRecordRequest,
  AssetDividendRecordResponse,
} from "./interfaces/UserData/AssetDividendRecord";
import {
  DailyAccountSnapshotRequest,
  DailyAccountSnapshotResponse,
} from "./interfaces/UserData/DailyAccountSnapshot";
import {
  DepositAddressRequest,
  DepositAddressResponse,
  DepositAddressSupportingNetworkRequest,
  DepositAddressSupportingNetworkResponse,
} from "./interfaces/UserData/DepositAddress";
import {
  DepositHistoryRequest,
  DepositHistoryResponse,
  DepositHistorySupportingNetworkRequest,
  DepositHistorySupportingNetworkResponse,
} from "./interfaces/UserData/DepositHistory";
import { DisableFastWithdrasSwitchRequest } from "./interfaces/UserData/DisableFastWithdrasSwitch";
import { DustLogRequest, DustLogResponse } from "./interfaces/UserData/DustLog";
import {
  DustTransferRequest,
  DustTransferResponse,
} from "./interfaces/UserData/DustTrasfer";
import { EnableFastWithdrasSwitchRequest } from "./interfaces/UserData/EnableFastWithdrasSwitch";
import {
  TradeFeeRequest,
  TradeFeeResponse,
} from "./interfaces/UserData/TradeFee";
import {
  WithdrawRequest,
  WithdrawResponse,
  WithdrawSAPIRequest,
  WithdrawSAPIResponse,
} from "./interfaces/UserData/Withdraw";
import {
  WithdrawHistoryRequest,
  WithdrawHistoryResponse,
  WithdrawHistorySupportingNetworkRequest,
  WithdrawHistorySupportingNetworkResponse,
} from "./interfaces/UserData/WithdrawHistory";
import { Enums } from "..";
import {
  CandlestickDataRequest,
  ChangeTicker24hChangeRequest,
  ChangeTicker24hChangeResponse,
  CheckServerTimeResponse,
  CompressedTradeListRequest,
  CompressedTradesListResponse,
  CurrentAveragePriceRequest,
  CurrentAveragePriceResponse,
  ExchangeInfoResponse,
  OldTradeLookupRequest,
  OldTradeLookupResponse,
  OrderBookRequest,
  OrderBookResponse,
  RecentTradeListRequest,
  RecentTradeListResponse,
  SymbolOrderBookRequest,
  SymbolOrderBookResponse,
  SymbolPriceTickerRequest,
  SymbolPriceTickerResponse,
} from "./interfaces/MarketData";

export class BinanceClient {
  private URL = "https://api.binance.com";
  private HEADER_APIKEY = "X-MBX-APIKEY";

  private apiKey: string;
  private secretKey: string;
  private log: winston.Logger;

  constructor(apiKey?: string, secretKey?: string) {
    this.log = winston.createLogger();
    this.apiKey = apiKey || "";
    this.secretKey = secretKey || "";
  }

  setApiKeys(apiKey: string, secretKey: string): void {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
  }

  private addSignatureParam(params: any) {
    if (this.apiKey && this.secretKey) {
      this.log.warn(
        "You cant do this request whithout an api key and secret key"
      );
      return;
    }
    let paramsString = "";
    for (let key of Object.keys(params)) {
      paramsString += `${key}=${params[key]}&`;
    }
    paramsString = paramsString.slice(0, paramsString.length - 1);
    let signature = cryptojs
      .HmacSHA256(paramsString, this.secretKey)
      .toString();
    params["signature"] = signature;
    return params;
  }

  private addAuthorizationHeader(header?: any) {
    if (this.apiKey === null || this.apiKey === undefined) {
      this.log.warn("You cant do this request whithout an api key");
      return;
    }
    if (header !== undefined) {
      header[this.HEADER_APIKEY] = this.apiKey;

      return header;
    }

    return {
      "X-MBX-APIKEY": this.apiKey,
    };
  }

  // User data functions

  allCoinsInformation(params: AllCoinsInformationRequest) {
    const url = `${this.URL}/sapi/v1/capital/config/getall`;
    return axios.get<AllCoinsInformationResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  dailyAccountSnapshot(params: DailyAccountSnapshotRequest) {
    const url = `${this.URL}/sapi/v1/accountSnapshot`;
    return axios.get<DailyAccountSnapshotResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  disableFastWithdrawSwitch(params: DisableFastWithdrasSwitchRequest) {
    const url = `${this.URL}/sapi/v1/account/disableFastWithdrawSwitch`;
    return axios.post(url, this.addSignatureParam(params), {
      headers: this.addAuthorizationHeader(),
    });
  }

  enableFastWithdrawSwitch(params: EnableFastWithdrasSwitchRequest) {
    const url = `${this.URL}/sapi/v1/account/enableFastWithdrawSwitch`;
    return axios.post(url, this.addSignatureParam(params), {
      headers: this.addAuthorizationHeader(),
    });
  }

  withdrawSAPI(params: WithdrawSAPIRequest) {
    const url = `${this.URL}/sapi/v1/capital/withdraw/apply`;
    return axios.post<WithdrawSAPIResponse>(
      url,
      this.addSignatureParam(params),
      {
        headers: this.addAuthorizationHeader(),
      }
    );
  }

  withdraw(params: WithdrawRequest) {
    const url = `${this.URL}/wapi/v3/withdraw.html`;
    return axios.post<WithdrawResponse>(url, this.addSignatureParam(params), {
      headers: this.addAuthorizationHeader(),
    });
  }

  depositHistorySupportingNetwork(
    params: DepositHistorySupportingNetworkRequest
  ) {
    const url = `${this.URL}/sapi/v1/capital/deposit/hisrec`;
    return axios.get<DepositHistorySupportingNetworkResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  depositHistory(params: DepositHistoryRequest) {
    const url = `${this.URL}/wapi/v3/depositHistory.html`;
    return axios.get<DepositHistoryResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  withdrawHistorySupportingNetwork(
    params: WithdrawHistorySupportingNetworkRequest
  ) {
    const url = `${this.URL}/sapi/v1/capital/withdraw/history`;
    return axios.get<WithdrawHistorySupportingNetworkResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  withdrawHistory(params: WithdrawHistoryRequest) {
    const url = `${this.URL}/wapi/v3/withdrawHistory.html`;
    return axios.get<WithdrawHistoryResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  depositAddressSupportingNetwork(
    params: DepositAddressSupportingNetworkRequest
  ) {
    const url = `${this.URL}/sapi/v1/capital/deposit/address`;
    return axios.get<DepositAddressSupportingNetworkResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  depositAddress(params: DepositAddressRequest) {
    const url = `${this.URL}/wapi/v3/depositAddress.html`;
    return axios.get<DepositAddressResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  accountStatus(params: AccoutStatusRequest) {
    const url = `${this.URL}/wapi/v3/accountStatus.html`;
    return axios.get<AccoutStatusResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  accountAPITradingStatus(params: AccountTradingStatusRequest) {
    const url = `${this.URL}/wapi/v3/apiTradingStatus.html`;
    return axios.get<AccountTradingStatusResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  dustLog(params: DustLogRequest) {
    const url = `${this.URL}/wapi/v3/userAssetDribbletLog.html`;
    return axios.get<DustLogResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  dustTransfer(params: DustTransferRequest) {
    const url = `${this.URL}/sapi/v1/asset/dust`;
    return axios.get<DustTransferResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  assetDividendRecord(params: AssetDividendRecordRequest) {
    const url = `${this.URL}/sapi/v1/asset/assetDividend`;
    return axios.get<AssetDividendRecordResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  assetDetail(params: AssetDetailRequest) {
    const url = `${this.URL}/wapi/v3/assetDetail.html`;
    return axios.get<AssetDetailResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  tradeFee(params: TradeFeeRequest) {
    const url = `${this.URL}/wapi/v3/tradeFee.html`;
    return axios.get<TradeFeeResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  testNewOrder(params: NewOrderRequest) {
    const url = `${this.URL}/api/v3/order/test`;
    return axios.post<{}>(url, null, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  // Spot trade functions

  newLimitOrder(params: NewLimitOrderRequest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.post<NewOrderResponseFull>(url, null, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }
  newMarketOrder(params: NewMarketOrderRquest | NewMarketQuoteOrderRquest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.post<NewOrderResponseFull>(url, null, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  newStopLossOrder(params: NewStopLossOrderRequest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.post<NewOrderResponseFull>(url, null, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  newStopLossLimitOrder(params: NewStopLossLimitOrderRequest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.post<NewOrderResponseFull>(url, null, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  newTakeProfitOrder(params: NewTakeProfitOrderRequest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.post<NewOrderResponseFull>(url, null, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  newTakeProfitLimitOrder(params: NewTakeProfitLimitOrderRequest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.post<NewOrderResponseFull>(url, null, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  newLimitMakerOrder(params: NewLimitMakerOrderRequest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.post<NewOrderResponseFull>(url, null, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  cancelOrder(params: CancelOrderRequest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.delete<CancelOrderResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  cancelAllOpenOrders(params: CancelOpenOrdersRequest) {
    const url = `${this.URL}/api/v3/openOrders`;
    return axios.delete<CancelOpenOrdersResponse[]>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  queryOrder(params: QueryOrderRequest) {
    const url = `${this.URL}/api/v3/order`;
    return axios.get<QueryOrderResponse>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  currentOpenOrders(params: OpenOrdersRequest) {
    const url = `${this.URL}/api/v3/openOrders`;
    return axios.get<OpenOrdersResponse[]>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  allOrders(params: AllOrdersRequest) {
    const url = `${this.URL}/api/v3/allOrders`;
    return axios.get<OrderResponse[]>(url, {
      headers: this.addAuthorizationHeader(),
      params: this.addSignatureParam(params),
    });
  }

  // Market Data functions

  testConnectivity() {
    const url = `${this.URL}/api/v3/ping`;
    return axios.get<{}>(url);
  }

  checkServerTIme() {
    const url = `${this.URL}/api/v3/time`;
    return axios.get<CheckServerTimeResponse>(url);
  }

  exchangeInformation() {
    const url = `${this.URL}/api/v3/exchangeInfo`;
    return axios.get<ExchangeInfoResponse>(url);
  }

  getOrderBook(params: OrderBookRequest) {
    const url = `${this.URL}/api/v3/depth`;
    return axios.get<OrderBookResponse>(url, { params });
  }

  recentTradeList(params: RecentTradeListRequest) {
    const url = `${this.URL}/api/v3/trades`;
    return axios.get<RecentTradeListResponse>(url, { params });
  }

  oldTradeLookup(params: OldTradeLookupRequest) {
    const url = `${this.URL}/api/v3/historicalTrades`;
    return axios.get<OldTradeLookupResponse>(url, { params });
  }

  compressedTradeList(params: CompressedTradeListRequest) {
    const url = `${this.URL}/api/v3/aggTrades`;
    return axios.get<CompressedTradesListResponse>(url, { params });
  }

  klineData(params: CandlestickDataRequest) {
    const url = `${this.URL}/api/v3/klines`;
    return axios.get<[[]]>(url, { params });
  }

  currentAveragePrice(params: CurrentAveragePriceRequest) {
    const url = `${this.URL}/api/v3/avgPric`;
    return axios.get<CurrentAveragePriceResponse>(url, { params });
  }

  tickerPriceChangeStatistics24h(params: ChangeTicker24hChangeRequest) {
    const url = `${this.URL}/api/v3/ticker/24hr`;
    return axios.get<ChangeTicker24hChangeResponse>(url, { params });
  }

  symbolPriceTicker(params: SymbolPriceTickerRequest) {
    const url = `${this.URL}/api/v3/ticker/price`;
    return axios.get<SymbolPriceTickerResponse | [SymbolPriceTickerResponse]>(
      url,
      { params }
    );
  }

  symbolOrderBookTicker(params: SymbolOrderBookRequest) {
    const url = `${this.URL}/api/v3/ticker/bookTicker`;
    return axios.get<SymbolOrderBookResponse | [SymbolOrderBookResponse]>(url, {
      params,
    });
  }
}

export class BinanceWebsocket {
  private URL_WEBSOCKET = "wss://stream.binance.com:9443/ws";
  public ws: WebSocket;

  constructor() {
    this.ws = new WebSocket(this.URL_WEBSOCKET);
    this.ws.on("error", (event) => {
      console.log(event.message);
    });
    this.ws.on("ping", () => {
      this.ws.emit("pong");
    });
  }

  subscribeToKline(symbol: string, interval: Enums.CandlestickIntervals) {
    const req = {
      method: "SUBSCRIBE",
      params: [`${symbol}@kline_${interval}`],
      id: 1,
    };
    this.ws.emit(JSON.stringify(req));
  }

  unsubscribeToKline(symbol: string, interval: Enums.CandlestickIntervals) {
    const req = {
      method: "UNSUBSCRIBE",
      params: [`${symbol}@kline_${interval}`],
      id: 2,
    };
    this.ws.emit(JSON.stringify(req));
  }

  subscribeToMultipleKlines(
    paramsArr: { symbol: string; interval: Enums.CandlestickIntervals }[]
  ) {
    let params = [];
    for (let kline of paramsArr) {
      params.push(`${kline.symbol}@kline_${kline.interval}`);
    }

    console.log(params)

    const req = {
      method: "SUBSCRIBE",
      params: params,
      id: 3,
    };

    this.ws.emit(JSON.stringify(req));
  }

  unsubscribeToMultipleKlines(
    paramsArr: { symbol: string; interval: Enums.CandlestickIntervals }[]
  ) {
    let params = [];
    for (let kline of paramsArr) {
      params.push(`${kline.symbol}@kline_${kline.interval}`);
    }

    const req = {
      method: "UNSUBSCRIBE",
      params: params,
      id: 3,
    };

    this.ws.emit(JSON.stringify(req));
  }
}

const ws = new BinanceWebsocket();
