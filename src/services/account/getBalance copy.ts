import axios from "axios";
import { BalanceParams, BalanceResponse } from "../../types";
import { getHeaderBase, getTrId, getUrlPrefix } from "../../utils";

/**
 * getBalance
 * 주식잔고조회
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const getBalance = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: BalanceParams
): Promise<BalanceResponse> => {
  if (!token) {
    return;
  }

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": getTrId("balance", isTest),
  };

  try {
    const { data } = await axios.get(
      `${getUrlPrefix(isTest)}/uapi/domestic-stock/v1/trading/inquire-balance`,
      {
        params,
        headers,
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
