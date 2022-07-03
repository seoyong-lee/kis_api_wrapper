import axios from "axios";
import { GetOverseasDayOrNightResponse } from "../../types";
import { getHeaderBase, getTrId, getUrlPrefix } from "../../utils";

/**
 * getOverseasDayOrNight
 * 해외주식 주야간원장구분조회
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 */
export const getOverseasDayOrNight = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest?: boolean
): Promise<GetOverseasDayOrNightResponse> => {
  if (!token) {
    return;
  }

  try {
    const headers = {
      ...getHeaderBase(token, appkey, appsecret),
      "tr_id": getTrId("overseasDayOrNight"),
    };

    const { data } = await axios.get(
      `${getUrlPrefix(isTest)}/uapi/overseas-stock/v1/trading/dayornight`,
      {
        headers,
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
