import { query } from "./kis.service";

/**
 * balance
 * 주식주문(현금)
 *
 * API endpoint: GET /uapi/domestic-stock/v1/trading/inquire-balance
 * API doc: https://apiportal.koreainvestment.com/apiservice/apiservice-domestic-stock#L_66c61080-674f-4c91-a0cc-db5e64e9a5e6
 *
 * parameter CANO: string. 종합계좌번호 - 계좌번호 체계(8-2)의 앞 8자리
 * parameter ACNT_PRDT_CD: string. 계좌상품코드 - 계좌번호 체계(8-2)의 뒤 2자리
 * parameter AFHR_FLPR_YN: string. 시간외단일가여부 - N : 기본값 / Y : 시간외단일가
 * parameter OFL_YN: optional string. 오프라인여부 - 공란
 * parameter INQR_DVSN: string. 조회구분 - 01 : 대출일별 / 02 : 종목별
 * parameter UNPR_DVSN: string. 단가구분 - 01 : 기본값
 * parameter FUND_STTL_ICLD_YN: string. 펀드결제분포함여부 - N : 포함하지 않음 / Y : 포함
 * parameter FNCG_AMT_AUTO_RDPT_YN: string. 융자금액자동상환여부 - N : 기본값
 * parameter PRCS_DVSN: string. 처리구분 - 00 : 전일매매포함 / 01 : 전일매매미포함
 * parameter CTX_AREA_FK100: string. 연속조회검색조건100 - 공란 : 최초 조회시 / 이전 조회 Output CTX_AREA_FK100 값 : 다음페이지 조회시(2번째부터)
 * parameter CTX_AREA_NK100: string. 연속조회키100 - 공란 : 최초 조회시 / 이전 조회 Output CTX_AREA_NK100 값 : 다음페이지 조회시(2번째부터)
 */

export const balance = async (params, headers, isTest): Promise<any> => {
  const data = await query(
    "/uapi/domestic-stock/v1/trading/inquire-balance",
    params,
    headers,
    isTest
  );
  return data;
};
