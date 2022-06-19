/**
 * @jest-environment node
 */

import * as kis from "./index";

test("auth", async () => {
  const data = {
    CANO: "50067526",
    ACNT_PRDT_CD: "01",
    AFHR_FLPR_YN: "N",
    OFL_YN: "N",
    INQR_DVSN: "01",
    UNPR_DVSN: "01",
    FUND_STTL_ICLD_YN: "N",
    FNCG_AMT_AUTO_RDPT_YN: "N",
    PRCS_DVSN: "01",
    CTX_AREA_FK100: "",
    CTX_AREA_NK100: "",
  };

  console.log(await kis.balance(data, true));

  expect(await kis.balance(data, true)).toEqual(expect.any(String));
});

// test("balance", async () => {
//   expect(await kis.balance()).toEqual(expect.any(Number));
// });
