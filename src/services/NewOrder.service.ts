import { DynamicObject, KVP, post } from "./kis.service";

/**
 * newOrder
 * 주식주문(현금)
 *
 * API endpoint: POST /uapi/domestic-stock/v1/trading/order-cash
 * API doc: https://apiportal.koreainvestment.com/apiservice/apiservice-domestic-stock#L_aade4c72-5fb7-418a-9ff2-254b4d5f0ceb
 *
 * parameter CANO: string. 종합계좌번호 - 계좌번호 체계(8-2)의 앞 8자리
 * parameter ACNT_PRDT_CD: string. 계좌상품코드 - 계좌번호 체계(8-2)의 뒤 2자리
 * parameter PDNO: string. 종목코드(6자리)
 * parameter ORD_DVSN: string. 주문구분 -
 *  00 : 지정가
 *  01 : 시장가
 *  02 : 조건부지정가
 *  03 : 최유리지정가
 *  04 : 최우선지정가
 *  05 : 장전 시간외
 *  06 : 장후 시간외
 *  07 : 시간외 단일가
 *  08 : 자기주식
 *  09 : 자기주식S-Option
 *  10 : 자기주식금전신탁
 *  11 : IOC지정가 (즉시체결,잔량취소)
 *  12 : FOK지정가 (즉시체결,전량취소)
 *  13 : IOC시장가 (즉시체결,잔량취소)
 *  14 : FOK시장가 (즉시체결,전량취소)
 *  15 : IOC최유리 (즉시체결,잔량취소)
 *  16 : FOK최유리 (즉시체결,전량취소)
 * parameter ORD_QTY: string. 주문수량 - 주문주식수
 * parameter ORD_UNPR: string. 주문단가 - 1주당 가격(장전 시간외, 장후 시간외, 시장가의 경우 1주당 가격을 공란으로 비우지 않음 "0"으로 입력 권고)
 * parameter ALGO_NO: optional string. 알고리즘번호 - 미사용
 */

export const newOrder = async (params: NewOrder): Promise<NewOrder> => {
  const data: KVP = await post(
    "/uapi/domestic-stock/v1/trading/order-cash",
    params
  );
  return new NewOrder(data);
};

export class NewOrder extends DynamicObject {
  public CANO: string;
  public ACNT_PRDT_CD: string;
  public PDNO: string;
  public ORD_DVSN: string;
  public ORD_QTY: string;
  public ORD_UNPR: string;
}
