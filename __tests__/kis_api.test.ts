/**
 * @jest-environment node
 */

import { KIS } from "../src/index";
import * as dotenv from "dotenv";

import { balanceData } from "./fixtures/balance";
import { newOrderData } from "./fixtures/new_order";
import { cancelOrderData } from "./fixtures/cancel_order";

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
//   const getBalance = await client.balance(balanceData);
//   console.log(getBalance);
//   expect(getBalance).toEqual(expect.any(Object));
// });

test("newOrder", async () => {
  const postNewOrder = await client.newOrder(newOrderData);
  console.log(postNewOrder);
  expect(postNewOrder).toEqual(expect.any(Object));
});

// test("cancelOrder", async () => {
//   const postCancelOrder = await client.cancelOrder(cancelOrderData);
//   console.log(postCancelOrder);
//   expect(postCancelOrder).toEqual(expect.any(Object));
// });
