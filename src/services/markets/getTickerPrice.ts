import axios from "axios";
import { SingleResponse, TickerPriceParams } from "../../types";
import { getHeaderBase, getUrlPrefix } from "../../utils";

/**
 * getTickerPrice
 * 주식현재가 시세
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const getTickerPrice = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: TickerPriceParams
): Promise<SingleResponse> => {
  if (!token) {
    return;
  }

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": "FHKST01010100",
  };

  try {
    const { data } = await axios.get(
      `${getUrlPrefix(isTest)}/uapi/domestic-stock/v1/quotations/inquire-price`,
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
