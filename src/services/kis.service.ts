import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://openapi.koreainvestment.com:9443";
const testURL = "https://openapivts.koreainvestment.com:29443";

dotenv.config();

const appkey = process.env.KIS_APP_KEY;
const appsecret = process.env.KIS_SECRET_KEY;
const token = "";

const prefix = (isTest?: boolean) => {
  return isTest ? testURL : baseURL;
};

export const kisApiRequest = async (
  endpoint: string,
  params = {},
  isTest?: boolean
): Promise<any> => {
  try {
    const { data } = await axios.get(`${prefix(isTest)}${endpoint}`, {
      params: {
        ...params,
        appkey,
        appsecret,
        token,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export interface KVP {
  [k: string]: any;
}

export class DynamicObject implements KVP {
  [k: string]: any;

  constructor(theObject: { [x: string]: any }) {
    for (const key of Object.keys(theObject)) {
      this[key] = theObject[key];
    }
  }
}
