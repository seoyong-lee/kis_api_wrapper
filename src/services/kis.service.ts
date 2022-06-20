import axios from "axios";
import { getHeaderBase, getTrId, getUrlPrefix } from "../utils";

/**
 * 접근토큰발급
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param isTest 모의투자 여부
 */
export const init = async (
  appkey: string,
  appsecret: string,
  isTest?: boolean
): Promise<any> => {
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
  jsonBody = {},
  isTest: boolean
): Promise<any> => {
  const headers = {
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

/**
 * query (GET)
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param endpoint url 엔드포인트
 * @param params 요청값
 * @param headerParams 헤더 정보
 * @param isTest 모의투자 여부
 */
export const query = async (
  appkey: string,
  appsecret: string,
  token: string,
  endpoint: string,
  isTest: boolean,
  params = {},
  headerParams = {}
): Promise<any> => {
  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    tr_id: getTrId(endpoint, isTest),
    ...headerParams,
  };

  try {
    const { data } = await axios.get(`${getUrlPrefix(isTest)}${endpoint}`, {
      params,
      headers,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * request (POST)
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param endpoint url 엔드포인트
 * @param params 요청값
 * @param headerParams 헤더 정보
 * @param isTest 모의투자 여부
 */
export const request = async (
  appkey: string,
  appsecret: string,
  token: string,
  endpoint: string,
  isTest: boolean,
  params = {},
  headerParams = {}
): Promise<any> => {
  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    tr_id: getTrId(endpoint, isTest),
    ...headerParams,
  };

  try {
    const { data } = await axios.post(
      `${getUrlPrefix(isTest)}${endpoint}`,
      {
        params,
      },
      {
        headers,
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
