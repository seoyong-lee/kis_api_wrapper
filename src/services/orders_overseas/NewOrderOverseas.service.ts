import axios from "axios";
import { NewOrderOverseasParams, OrderResponse } from "../../types";
import {
  getHeaderBase,
  getTrIdForNewOrderOverseas,
  getUrlPrefix,
} from "../../utils";
import { getHashkey } from "../account/GetHashkey.service";

/**
 * newOrderOverseas
 * 해외주식 주문
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const newOrderOverseas = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: NewOrderOverseasParams
): Promise<OrderResponse> => {
  if (!token) {
    return;
  }

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": getTrIdForNewOrderOverseas(
      params.SLL_TYPE,
      params.OVRS_EXCG_CD,
      isTest
    ),
    "hashkey": await getHashkey(appkey, appsecret, params, isTest),
  };

  try {
    const { data } = await axios.post(
      `${getUrlPrefix(isTest)}/uapi/overseas-stock/v1/trading/order`,
      params,
      { headers }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
