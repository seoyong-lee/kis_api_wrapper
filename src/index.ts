import { getHashkey, init } from "./services/kis.service";
import { balance } from "./services/Balance.service";
import { newOrder, NewOrderParams } from "./services/NewOrder.service";
import { cancelOrder, CancelOrderParams } from "./services/CancelOrder.service";

export class KIS {
  appkey: string;
  appsecret: string;
  isTest?: boolean;
  token?: string;

  constructor(appkey: string, appsecret: string, isTest?: boolean) {
    this.appkey = appkey;
    this.appsecret = appsecret;
    this.isTest = isTest;
  }

  getHeaders = (data: { access_token: any }) => {
    return {
      "Content-Type": "application/json; charset=utf-8",
      authorization: `Bearer ${data.access_token}`,
      appkey: this.appkey,
      appsecret: this.appsecret,
      tr_id: this.isTest ? "VTTC8434R" : "TTTC8434R",
    };
  };

  init() {
    return init(this.appkey, this.appsecret, this.isTest);
  }

  async balance(params) {
    const data = await init(this.appkey, this.appsecret, this.isTest);
    return await balance(params, this.getHeaders(data), this.isTest);
  }

  async newOrder(params: NewOrderParams) {
    const data = await init(this.appkey, this.appsecret, this.isTest);
    const headers = {
      appkey: this.appkey,
      appsecret: this.appsecret,
    };
    const jsonBody = JSON.stringify(params);
    const hashkeyResponse = await getHashkey(jsonBody, headers, this.isTest);
    const hashkey = hashkeyResponse["HASH"] as string;
    const headersWithHashkey = {
      "Content-Type": "application/json; charset=utf-8",
      authorization: `Bearer ${data.access_token}`,
      appkey: this.appkey,
      appsecret: this.appsecret,
      tr_id: this.isTest ? "VTTC0802U" : "TTTC0802U",
      hashkey: hashkey,
    };
    console.log(hashkeyResponse);
    return await newOrder(params, headersWithHashkey, this.isTest);
  }

  async cancelOrder(params: CancelOrderParams) {
    const data = await init(this.appkey, this.appsecret);
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      appkey: this.appkey,
      appsecret: this.appsecret,
    };
    const jsonBody = JSON.stringify(params);
    const hashkeyResponse = await getHashkey(jsonBody, headers, this.isTest);
    const hashkey = hashkeyResponse["HASH"] as string;
    const headersWithHashkey = {
      "Content-Type": "application/json; charset=utf-8",
      authorization: `Bearer ${data.access_token}`,
      appkey: this.appkey,
      appsecret: this.appsecret,
      tr_id: this.isTest ? "VTTC0803U" : "TTTC0803U",
      hashkey: hashkey,
    };
    console.log(hashkeyResponse);
    return await cancelOrder(params, headersWithHashkey, this.isTest);
  }
}
