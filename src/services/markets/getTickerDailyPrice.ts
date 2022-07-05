import axios from "axios";
import { TickerDailyPriceParams, TickerDailyPriceResponse } from "../../types";
import { getHeaderBase, getUrlPrefix } from "../../utils";

/**
 * getTickerDailyPrice
 * 주식현재가 일자별
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const getTickerDailyPrice = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: TickerDailyPriceParams
): Promise<TickerDailyPriceResponse> => {
  if (!token) {
    return;
  }

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": "FHKST01010400",
  };

  try {
    const { data } = await axios.get(
      `${getUrlPrefix(
        isTest
      )}/uapi/domestic-stock/v1/quotations/inquire-daily-price`,
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
