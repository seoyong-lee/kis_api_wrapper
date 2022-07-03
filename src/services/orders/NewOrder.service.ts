import axios from "axios";
import { NewOrderParams, OrderResponse } from "../../types";
import { getHeaderBase, getTrId, getUrlPrefix } from "../../utils";
import { getHashkey } from "../account/GetHashkey.service";

/**
 * newOrder
 * 주식주문(현금)
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const newOrder = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: NewOrderParams
): Promise<OrderResponse> => {
  if (!token) {
    return;
  }

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": getTrId("newOrder", isTest),
    "hashkey": await getHashkey(appkey, appsecret, params, isTest),
  };

  try {
    const { data } = await axios.post(
      `${getUrlPrefix(isTest)}/uapi/domestic-stock/v1/trading/order-cash`,
      params,
      { headers }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
