import {
  BalanceParams,
  CancelOrderParams,
  NewOrderOverseasParams,
  NewOrderParams,
  NewReservedOrderOverseasParams,
  OverseasBalanceParams,
} from "./types";
import {
  GetTokenResponse,
  getToken,
} from "./services/account/GetToken.service";
import { getBalance } from "./services/account/Balance.service";
import { newOrder } from "./services/orders/NewOrder.service";
import { cancelOrder } from "./services/orders/CancelOrder.service";
import { newOrderOverseas } from "./services/orders_overseas/NewOrderOverseas.service";
import { newReservedOrderOverseas } from "./services/orders_overseas/NewReservedOrderOverseas.service";
import { getOverseasBalance } from "./services/account/OverseasBalance.service";
import { getOverseasDayOrNight } from "./services/account/GetOverseasDayOrNight.service";

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
