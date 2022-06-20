/**
 * @jest-environment node
 */

import * as dotenv from "dotenv";

import { KIS } from "../src/index";
import balanceData from "./fixtures/balance.json";
import newOrderData from "./fixtures/new_order.json";
// import  cancelOrderData from "./fixtures/cancel_order";

dotenv.config();

const appkey = process.env.KIS_APP_KEY || "";
const appsecret = process.env.KIS_SECRET_KEY || "";
const isTestURL = true;

const client = new KIS(appkey, appsecret, isTestURL);

test("auth", async () => {
  expect(client.init()).toEqual(expect.any(Object));
});

test("balance", () => {
  const getBalance = client.balance(balanceData);
  console.log(getBalance);
  expect(getBalance).toEqual(expect.any(Object));
});

// test("newOrder", () => {
//   const postNewOrder = client.newOrder(newOrderData);
//   console.log(postNewOrder);
//   expect(postNewOrder).toEqual(expect.any(Object));
// });

// test("cancelOrder", async () => {
//   const postCancelOrder = await client.cancelOrder(cancelOrderData);
//   console.log(postCancelOrder);
//   expect(postCancelOrder).toEqual(expect.any(Object));
// });
