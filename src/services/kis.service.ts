import axios from "axios";

const baseURL = "https://openapi.koreainvestment.com:9443";
const testURL = "https://openapivts.koreainvestment.com:29443";

const prefix = (isTest?: boolean) => {
  return isTest ? testURL : baseURL;
};

export const init = async (
  appkey: string,
  appsecret: string,
  isTest?: boolean
): Promise<any> => {
  try {
    const { data } = await axios.post(`${prefix(isTest)}/oauth2/tokenP`, {
      grant_type: "client_credentials",
      appkey,
      appsecret,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getHashkey = async (
  body = {},
  headers = {},
  isTest?: boolean
): Promise<any> => {
  try {
    const { data } = await axios.post(`${prefix(isTest)}/uapi/hashkey`, body, {
      headers,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const query = async (
  endpoint: string,
  params = {},
  headers = {},
  isTest?: boolean
): Promise<any> => {
  try {
    const { data } = await axios.get(`${prefix(isTest)}${endpoint}`, {
      params: {
        ...params,
      },
      headers: {
        ...headers,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const request = async (
  endpoint: string,
  params = {},
  headers = {},
  isTest?: boolean
): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${prefix(isTest)}${endpoint}`,
      {
        params,
      },
      {
        headers: headers,
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
