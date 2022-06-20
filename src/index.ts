import { initialize } from "./services/kis.service";
import { balance, BalanceParams } from "./services/Balance.service";
import { newOrder, NewOrderParams } from "./services/NewOrder.service";

/**
 * Initialize.
 *
 * @param appkey UserConfig
 * @param appsecret UserConfig
 * @param isTest
 */
export class KIS {
  appkey: string;
  appsecret: string;
  isTest?: boolean;
  token: string | undefined;

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
    await initialize(this.appkey, this.appsecret, this.isTest).then(data => {
      this.token = data.access_token;
      return data;
    });

  /**
   * balance
   * 주식잔고조회
   *
   * API endpoint: GET /uapi/domestic-stock/v1/trading/inquire-balance
   *
   * @param params 요청값
   */
  balance = (params: BalanceParams) =>
    balance(this.appkey, this.appsecret, this.token, this.isTest, params);

  /**
   * newOrder
   * 주식주문(현금)
   *
   * API endpoint: POST /uapi/domestic-stock/v1/trading/order-cash
   *
   * @param params 요청값
   */
  newOrder = (params: NewOrderParams) =>
    newOrder(this.appkey, this.appsecret, this.token, this.isTest, params);
}
