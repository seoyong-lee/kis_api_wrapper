import axios from "axios";
import { getUrlPrefix } from "../../utils";

export interface GethashKeyResponse {
  BODY: object;
  HASH: string;
}

/**
 * getHashkey
 * Hashkey 발급
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
): Promise<string> => {
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

    return data.HASH;
  } catch (error) {
    console.error(error);
  }
};
