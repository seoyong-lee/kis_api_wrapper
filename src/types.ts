export interface Params {
  /**
   * 종합계좌번호 - 계좌번호 체계(8-2)의 앞 8자리
   */
  CANO: string;
  /**
   * 계좌상품코드 - 계좌번호 체계(8-2)의 뒤 2자리
   */
  ACNT_PRDT_CD: string;
}

export interface BalanceParams extends Params {
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

export interface NewOrderParams extends Params {
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

export interface CancelOrderParams extends Params {
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

export interface Response {
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
}

export interface BalanceResponse extends Response {
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

export interface OrderResponse extends Response {
  /**
   * 응답상세
   */
  output: object[];
}