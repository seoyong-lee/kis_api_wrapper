import axios from "axios";
import { SingleResponse, PossibleOrderParams } from "../../types";
import { getHeaderBase, getTrId, getUrlPrefix } from "../../utils";

/**
 * getPossibleOrder
 * 매수가능조회
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const getPossibleOrder = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: PossibleOrderParams
): Promise<SingleResponse> => {
  if (!token) {
    return;
  }

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": getTrId("possibleOrder", isTest),
  };

  try {
    const { data } = await axios.get(
      `${getUrlPrefix(
        isTest
      )}/uapi/domestic-stock/v1/trading/inquire-psbl-order`,
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
