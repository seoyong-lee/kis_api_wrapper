import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";
const sandboxURL = "https://sandbox.iexapis.com/";

// const baseSSEURL = "https://cloud.sse.iexapis.com/";

dotenv.config();

const pk = process.env.IEXCLOUD_PUBLIC_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;

const prefix = () => {
  return pk && pk[0] === "T" ? sandboxURL : baseURL;
};

export const kisApiRequest = async (
  endpoint: string,
  params = {}
): Promise<any> => {
  try {
    const { data } = await axios.get(`${prefix()}${apiversion}${endpoint}`, {
      params: {
        ...params,
        token: pk,
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
