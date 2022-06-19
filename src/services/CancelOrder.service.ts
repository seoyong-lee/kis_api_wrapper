import { request } from "./kis.service";

export interface CancelOrderParams {
  /**
   * 종합계좌번호 - 계좌번호 체계(8-2)의 앞 8자리
   */
  CANO: string;
  /**
   * 계좌상품코드 - 계좌번호 체계(8-2)의 뒤 2자리
   */
  ACNT_PRDT_CD: string;
  /**
   * 한국거래소전송주문조직번호 - 주문시 한국투자증권 시스템에서 지정된 영업점코드
   */
  KRX_FWDG_ORD_ORGNO: string;
  /**
   * 원주문번호 - 주문시 한국투자증권 시스템에서 채번된 주문번호
   */
  ORGN_ODNO: string;
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
   * 정정취소구분코드 - 정정 : 01 / 취소 : 02
   */
  RVSE_CNCL_DVSN_CD: string;
  /**
   * 주문수량 - [잔량전부 주문] 원주문수량과 일치 / [잔량일부 주문] 취소/정정 수량
   */
  ORD_QTY: string;
  /**
   * 주문단가 - 정정인 경우는 정정주문 1주당 가격
   */
  ORD_UNPR: string;
  /**
   * 잔량전부주문여부 - Y : 잔량전부 / N : 잔량일부
   */
  QTY_ALL_ORD_YN: string;
}

/**
 * cancelOrder
 * 주식예약주문정정취소
 *
 * API endpoint: POST /uapi/domestic-stock/v1/trading/order-rvsecncl
 */
export const cancelOrder = async (
  params: CancelOrderParams,
  headers = {},
  isTest?: boolean
): Promise<unknown> => {
  const data = await request(
    "/uapi/domestic-stock/v1/trading/order-rvsecncl",
    params,
    headers,
    isTest
  );
  return data;
};
