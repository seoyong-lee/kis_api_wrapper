import { getHashkey, request } from "./kis.service";

export interface NewOrderParams {
  /**
   * 종합계좌번호 - 계좌번호 체계(8-2)의 앞 8자리
   */
  CANO: string;
  /**
   * 계좌상품코드 - 계좌번호 체계(8-2)의 뒤 2자리
   */
  ACNT_PRDT_CD: string;
  /**
   * 종목코드(6자리)
   */
  PDNO: string;
  /**
   * 주문구분 -
   * 00 : 지정가
   * 01 : 시장가
   * 02 : 조건부지정가
   * 03 : 최유리지정가
   * 04 : 최우선지정가
   * 05 : 장전 시간외
   * 06 : 장후 시간외
   * 07 : 시간외 단일가
   * 08 : 자기주식
   * 09 : 자기주식S-Option
   * 10 : 자기주식금전신탁
   * 11 : IOC지정가 (즉시체결,잔량취소)
   * 12 : FOK지정가 (즉시체결,전량취소)
   * 13 : IOC시장가 (즉시체결,잔량취소)
   * 14 : FOK시장가 (즉시체결,전량취소)
   * 15 : IOC최유리 (즉시체결,잔량취소)
   * 16 : FOK최유리 (즉시체결,전량취소)
   */
  ORD_DVSN: string;
  /**
   * 주문수량 - 주문주식수
   */
  ORD_QTY: string;
  /**
   * 주문단가 - 1주당 가격(장전 시간외, 장후 시간외, 시장가의 경우 1주당 가격을 공란으로 비우지 않음 "0"으로 입력 권고)
   */
  ORD_UNPR: string;
}

/**
 * createNewOrder
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
): Promise<any> => {
  if (!token) {
    return;
  }

  const jsonBody = JSON.stringify(params);
  const hashkey = getHashkey(appkey, appsecret, jsonBody, isTest).then(
    res => res.HASH
  );

  const headers = {
    hashkey: hashkey,
  };

  const data = await request(
    appkey,
    appsecret,
    token,
    "/uapi/domestic-stock/v1/trading/order-cash",
    isTest,
    params,
    headers
  );
  return data;
};
