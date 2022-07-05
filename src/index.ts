import {
  BalanceParams,
  CancelOrderParams,
  NewOrderOverseasParams,
  NewOrderParams,
  NewReservedOrderOverseasParams,
  OverseasBalanceParams,
  TickerDailyPriceParams,
  TickerPriceParams,
} from "./types";
import { GetTokenResponse, getToken } from "./services/account/getToken";
import { getBalance } from "./services/account/getBalance";
import { newOrder } from "./services/orders/newOrder";
import { cancelOrder } from "./services/orders/cancelOrder";
import { newOrderOverseas } from "./services/orders_overseas/newOrderOverseas";
import { newReservedOrderOverseas } from "./services/orders_overseas/newReservedOrderOverseas";
import { getOverseasBalance } from "./services/account/getOverseasBalance";
import { getOverseasDayOrNight } from "./services/account/getOverseasDayOrNight";
import { getTickerPrice } from "./services/markets/getTickerPrice";
import { getTickerDailyPrice } from "./services/markets/getTickerDailyPrice";

/**
 * KIS
 * 서비스 기본 클래스
 *
 * @param appkey UserConfig
 * @param appsecret UserConfig
 * @param isTest
 */
export class KIS {
  appkey: string;
  appsecret: string;
  isTest?: boolean;
  private token: string | undefined;

  constructor(appkey: string, appsecret: string, isTest?: boolean) {
    this.appkey = appkey;
    this.appsecret = appsecret;
    this.isTest = isTest;
  }

  /**
   * init
   * 접근토큰발급
   *
   * API endpoint: POST /oauth2/tokenP
   */
  init = async () =>
    await getToken(this.appkey, this.appsecret, this.isTest).then(
      (data: GetTokenResponse) => {
        this.token = data.access_token;
        return data;
      }
    );

  /**
   * balance
   * 주식잔고조회
   *
   * API endpoint: GET /uapi/domestic-stock/v1/trading/inquire-balance
   *
   * @param params 요청 값
   */
  balance = (params: BalanceParams) =>
    getBalance(this.appkey, this.appsecret, this.token, this.isTest, params);

  /**
   * tickerPrice
   * 주식현재가 시세
   *
   * API endpoint: GET /uapi/domestic-stock/v1/quotations/inquire-price
   *
   * @param params 요청 값
   */
  tickerPrice = (params: TickerPriceParams) =>
    getTickerPrice(
      this.appkey,
      this.appsecret,
      this.token,
      this.isTest,
      params
    );

  /**
   * tickerDailyPrice
   * 주식현재가 일자별
   *
   * API endpoint: GET /uapi/domestic-stock/v1/quotations/inquire-daily-price
   *
   * @param params 요청 값
   */
  tickerDailyPrice = (params: TickerDailyPriceParams) =>
    getTickerDailyPrice(
      this.appkey,
      this.appsecret,
      this.token,
      this.isTest,
      params
    );

  /**
   * newOrder
   * 주식주문(현금)
   *
   * API endpoint: POST /uapi/domestic-stock/v1/trading/order-cash
   *
   * @param params 요청 값
   */
  newOrder = (params: NewOrderParams) =>
    newOrder(this.appkey, this.appsecret, this.token, this.isTest, params);

  /**
   * cancelOrder
   * 주식주문(정정취소)
   *
   * API endpoint: POST /uapi/domestic-stock/v1/trading/order-rvsecncl
   *
   * @param params 요청 값
   */
  cancelOrder = (params: CancelOrderParams) =>
    cancelOrder(this.appkey, this.appsecret, this.token, this.isTest, params);

  /**
   * newOrderOverseas
   * 해외주식주문
   *
   * API endpoint: POST /uapi/overseas-stock/v1/trading/order
   *
   * @param params 요청 값
   */
  newOrderOverseas = (params: NewOrderOverseasParams) =>
    newOrderOverseas(
      this.appkey,
      this.appsecret,
      this.token,
      this.isTest,
      params
    );

  /**
   * newReservedOrderOverseas
   * 해외주식 예약주문접수
   *
   * API endpoint: POST /uapi/overseas-stock/v1/trading/order-resv
   *
   * @param params 요청 값
   */
  newReservedOrderOverseas = (params: NewReservedOrderOverseasParams) =>
    newReservedOrderOverseas(
      this.appkey,
      this.appsecret,
      this.token,
      this.isTest,
      params
    );

  /**
   * overseasBalance
   * 해외주식 잔고
   *
   * API endpoint: GET /uapi/overseas-stock/v1/trading/inquire-balance
   *
   * @param params 요청 값
   */
  overseasBalance = (params: OverseasBalanceParams) =>
    getOverseasBalance(
      this.appkey,
      this.appsecret,
      this.token,
      this.isTest,
      params
    );

  /**
   * getOverseasDayOrNight
   * 해외주식 주야간원장구분조회
   *
   * API endpoint: GET /uapi/overseas-stock/v1/trading/dayornight
   */
  overseasDayOrNight = () =>
    getOverseasDayOrNight(this.appkey, this.appsecret, this.token, this.isTest);
}
