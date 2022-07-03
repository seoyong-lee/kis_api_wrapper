import axios from "axios";
import { OverseasBalanceParams, OverseasBalanceResponse } from "../../types";
import {
  getHeaderBase,
  getTrIdForOverseasBalance,
  getUrlPrefix,
} from "../../utils";
import { getOverseasDayOrNight } from "./GetOverseasDayOrNight.service";

/**
 * getOverseasBalance
 * 주식잔고조회
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const getOverseasBalance = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: OverseasBalanceParams
): Promise<OverseasBalanceResponse> => {
  if (!token) {
    return;
  }

  const dayOrNight = await getOverseasDayOrNight(
    appkey,
    appsecret,
    token,
    isTest
  ).then(result => result.output.PSBL_YN);

  const headers = {
    ...getHeaderBase(token, appkey, appsecret),
    "tr_id": getTrIdForOverseasBalance(dayOrNight, isTest),
  };

  try {
    const { data } = await axios.get(
      `${getUrlPrefix(isTest)}/uapi/overseas-stock/v1/trading/inquire-balance`,
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
