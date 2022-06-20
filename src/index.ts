import { init } from "./services/kis.service";
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
  token: string;

  constructor(appkey: string, appsecret: string, isTest?: boolean) {
    this.appkey = appkey;
    this.appsecret = appsecret;
    this.isTest = isTest;
  }

  init = () => {
    return init(this.appkey, this.appsecret, this.isTest).then(data => {
      this.token = data.access_token;
      return data;
    });
  };

  balance = (params: BalanceParams) =>
    balance(this.appkey, this.appsecret, this.token, this.isTest, params);

  newOrder = (params: NewOrderParams) =>
    newOrder(this.appkey, this.appsecret, this.token, this.isTest, params);
}
