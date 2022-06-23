import axios from "axios";
import { CancelOrderParams, OrderResponse } from "../../types";
import { getHeaderBase, getTrId, getUrlPrefix } from "../../utils";
import { getHashkey } from "../account/kis.service";

/**
 * cancelOrder
 * 주식주문(정정취소)
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const cancelOrder = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: CancelOrderParams
): Promise<OrderResponse> => {
  if (!token) {
    return;
  }

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": getTrId("cancelOrder", isTest),
    "hashkey": (await getHashkey(appkey, appsecret, params, isTest)).HASH,
  };

  try {
    const { data } = await axios.post(
      `${getUrlPrefix(isTest)}/uapi/domestic-stock/v1/trading/order-rvsecncl`,
      params,
      { headers }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
