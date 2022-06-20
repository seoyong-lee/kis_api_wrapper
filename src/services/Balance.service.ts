import { query } from "./kis.service";

export interface BalanceParams {
  /**
   * 종합계좌번호 - 계좌번호 체계(8-2)의 앞 8자리
   */
  CANO: string;
  /**
   * 계좌상품코드 - 계좌번호 체계(8-2)의 뒤 2자리
   */
  ACNT_PRDT_CD: string;
  /**
   *시간외단일가여부 - N : 기본값 / Y : 시간외단일가
   */
  AFHR_FLPR_YN: string;
  /**
   * 오프라인여부 - 공란
   */
  OFL_YN?: string;
  /**
   * 조회구분 - 01 : 대출일별 / 02 : 종목별
   */
  INQR_DVSN: string;
  /**
   * 단가구분 - 01 : 기본값
   */
  UNPR_DVSN: string;
  /**
   * 펀드결제분포함여부 - N : 포함하지 않음 / Y : 포함
   */
  FUND_STTL_ICLD_YN: string;
  /**
   * 융자금액자동상환여부 - N : 기본값
   */
  FNCG_AMT_AUTO_RDPT_YN: string;
  /**
   * 처리구분 - 00 : 전일매매포함 / 01 : 전일매매미포함
   */
  PRCS_DVSN: string;
  /**
   * 연속조회검색조건100 - 공란 : 최초 조회시 / 이전 조회 Output CTX_AREA_FK100 값 : 다음페이지 조회시(2번째부터)
   */
  CTX_AREA_FK100: string;
  /**
   * 연속조회키100 - 공란 : 최초 조회시 / 이전 조회 Output CTX_AREA_NK100 값 : 다음페이지 조회시(2번째부터)
   */
  CTX_AREA_NK100: string;
}

export interface BalanceResponse {
  /**
   * 성공 실패 여부 - 0 : 성공 / 0 이외의 값 : 실패
   */
  rt_cd: "0" | string;
  /**
   * 응답코드
   */
  msg_cd: string;
  /**
   * 응답메세지
   */
  msg1: string;
  /**
   * 연속조회검색조건100
   */
  CTX_AREA_FK100: string;
  /**
   * 연속조회키100
   */
  CTX_AREA_NK100: string;
  /**
   * 응답상세1
   */
  output1: object[];
  /**
   * 응답상세2
   */
  output2: object[];
}

/**
 * getBalance
 * 주식잔고조회
 *
 * @param appkey 앱키
 * @param appsecret 앱시크릿키
 * @param token 접근토큰
 * @param isTest 모의투자 여부
 * @param params 요청값
 */
export const balance = async (
  appkey: string,
  appsecret: string,
  token: string | undefined,
  isTest: boolean,
  params: BalanceParams
): Promise<BalanceResponse> => {
  if (!token) {
    return;
  }
  const data: BalanceResponse = await query(
    appkey,
    appsecret,
    token,
    "/uapi/domestic-stock/v1/trading/inquire-balance",
    isTest,
    params,
    {}
  );
  return data;
};
