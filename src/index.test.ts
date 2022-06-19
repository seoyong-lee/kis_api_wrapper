/**
 * @jest-environment node
 */

import { KIS } from "./index";
import * as dotenv from "dotenv";

dotenv.config();

const appkey = process.env.KIS_APP_KEY || "";
const appsecret = process.env.KIS_SECRET_KEY || "";

const client = new KIS(appkey, appsecret, true);

test("auth", async () => {
  const init = await client.init();
  console.log(init);
  expect(init).toEqual(expect.any(Object));
});

// test("balance", async () => {
//   const data = {
//     CANO: "50067526",
//     ACNT_PRDT_CD: "01",
//     AFHR_FLPR_YN: "N",
//     OFL_YN: "N",
//     INQR_DVSN: "01",
//     UNPR_DVSN: "01",
//     FUND_STTL_ICLD_YN: "N",
//     FNCG_AMT_AUTO_RDPT_YN: "N",
//     PRCS_DVSN: "01",
//     CTX_AREA_FK100: "",
//     CTX_AREA_NK100: "",
//   };

//   expect(await client.balance(data)).toEqual(expect.any(String));
// });

// test("balance", async () => {
//   expect(await client.balance(params)).toEqual(expect.any(Number));
// });
