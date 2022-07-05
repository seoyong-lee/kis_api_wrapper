import axios from "axios";
import { getUrlPrefix } from "../../utils";

export interface GetTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

/**
 * getToken
 * 접근토큰발급
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param isTest 모의투자 여부
 */
export const getToken = async (
  appkey: string,
  appsecret: string,
  isTest?: boolean
): Promise<GetTokenResponse> => {
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
