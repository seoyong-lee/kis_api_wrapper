import { init } from "./services/kis.service";
import { balance } from "./services/Balance.service";
export { newOrder } from "./services/NewOrder.service";

export class KIS {
  appkey: string;
  appsecret: string;
  isTest?: boolean;

  constructor(appkey, appsecret, isTest?) {
    this.appkey = appkey;
    this.appsecret = appsecret;
    this.isTest = isTest;
  }

  init() {
    return init(this.appkey, this.appsecret, this.isTest);
  }

  balance(params) {
    return init(this.appkey, this.appsecret, this.isTest).then(data => {
      const headers = {
        "Content-Type": "application/json; charset=utf-8",
        authorization: `Bearer ${data.access_token}`,
        appkey: this.appkey,
        appsecret: this.appsecret,
        tr_id: "VTTC8434R",
      };

      return balance(params, headers, this.isTest);
    });
  }
}
