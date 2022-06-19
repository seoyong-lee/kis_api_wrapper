/**
 * @jest-environment node
 */

import { KIS } from "../src/index";
import * as dotenv from "dotenv";

dotenv.config();

const appkey = process.env.KIS_APP_KEY || "";
const appsecret = process.env.KIS_SECRET_KEY || "";

import { balanceData } from "./fixtures/balance";

const client = new KIS(appkey, appsecret, true);

test("auth", async () => {
  const init = await client.init();
  console.log(init);
  expect(init).toEqual(expect.any(Object));
});

test("balance", async () => {
  const getBalance = await client.balance(balanceData);
  console.log(getBalance);
  expect(getBalance).toEqual(expect.any(Object));
});

// test("balance", async () => {
//   expect(await client.balance(params)).toEqual(expect.any(Number));
// });
