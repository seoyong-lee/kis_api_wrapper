import axios from "axios";
import { NewReservedOrderOverseasParams, OrderResponse } from "../../types";
import {
  getHeaderBase,
  getTrIdForNewReservedOrderOverseas,
  getUrlPrefix,
} from "../../utils";
import { getHashkey } from "../account/kis.service";

/**
 * newReservedOrderOverseas
 * 해외주식 예약주문접수
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const newReservedOrderOverseas = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: NewReservedOrderOverseasParams
): Promise<OrderResponse> => {
  if (!token) {
    return;
  }

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": getTrIdForNewReservedOrderOverseas(params.SLL_TYPE, isTest),
    "hashkey": await getHashkey(appkey, appsecret, params, isTest),
  };

  try {
    const { data } = await axios.post(
      `${getUrlPrefix(isTest)}/uapi/overseas-stock/v1/trading/order-resv`,
      params,
      { headers }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
