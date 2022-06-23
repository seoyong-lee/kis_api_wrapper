import axios from "axios";
import { getUrlPrefix } from "../../utils";

export interface InitResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

/**
 * 접근토큰발급
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param isTest 모의투자 여부
 */
export const initialize = async (
  appkey: string,
  appsecret: string,
  isTest?: boolean
): Promise<InitResponse> => {
  try {
    const { data } = await axios.post(`${getUrlPrefix(isTest)}/oauth2/tokenP`, {
      grant_type: "client_credentials",
      appkey,
      appsecret,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export interface GethashKeyResponse {
  BODY: object;
  HASH: string;
}

/**
 * Hashkey
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param jsonBody 요청값
 * @param isTest 모의투자 여부
 */
export const getHashkey = async (
  appkey: string,
  appsecret: string,
  jsonBody: object,
  isTest: boolean
): Promise<GethashKeyResponse> => {
  const headers = {
    "content-Type": "application/json",
    appkey,
    appsecret,
  };

  try {
    const { data } = await axios.post(
      `${getUrlPrefix(isTest)}/uapi/hashkey`,
      jsonBody,
      {
        headers,
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
