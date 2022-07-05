/**
 * @jest-environment node
 */

import * as dotenv from "dotenv";
import fs from "fs";
import { KIS } from "../src/index";

const getDataFromJsonFile = (filename: string) =>
  JSON.parse(fs.readFileSync(__dirname + `/fixtures/${filename}.json`, "utf8"));

const balanceData = getDataFromJsonFile("balance");
const tickerPriceData = getDataFromJsonFile("ticker_price");
const tickerDailyPriceData = getDataFromJsonFile("ticker_daily_price");
const newOrderData = getDataFromJsonFile("new_order");
const cancelOrderData = getDataFromJsonFile("cancel_order");
const newOrderOverseasData = getDataFromJsonFile("new_order_overseas");
const newReservedOrderOverseasData = getDataFromJsonFile(
  "new_reserved_order_overseas"
);
const overseasBalanceData = getDataFromJsonFile("overseas_balance");

dotenv.config();

const appkey = process.env.KIS_APP_KEY || "";
const appsecret = process.env.KIS_SECRET_KEY || "";
const isTestURL = true;

const client = new KIS(appkey, appsecret, isTestURL);

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

test("tickerPrice", async () => {
  const getTickerPrice = await client.tickerPrice(tickerPriceData);
  console.log(getTickerPrice);
  expect(getTickerPrice).toEqual(expect.any(Object));
});

test("tickerDailyPrice", async () => {
  const getTickerDailyPrice = await client.tickerDailyPrice(
    tickerDailyPriceData
  );
  console.log(getTickerDailyPrice);
  expect(getTickerDailyPrice).toEqual(expect.any(Object));
});

test("newOrder", async () => {
  const postNewOrder = await client.newOrder(newOrderData);
  console.log(postNewOrder);
  expect(postNewOrder).toEqual(expect.any(Object));
});

test("cancelOrder", async () => {
  const postCancelOrder = await client.cancelOrder(cancelOrderData);
  console.log(postCancelOrder);
  expect(postCancelOrder).toEqual(expect.any(Object));
});

test("newOrderOverseas", async () => {
  const postNewOrderOverseas = await client.newOrderOverseas(
    newOrderOverseasData
  );
  console.log(postNewOrderOverseas);
  expect(postNewOrderOverseas).toEqual(expect.any(Object));
});

test("newReservedOrderOverseas", async () => {
  const postNewReservedOrderOverseas = await client.newReservedOrderOverseas(
    newReservedOrderOverseasData
  );
  console.log(postNewReservedOrderOverseas);
  expect(postNewReservedOrderOverseas).toEqual(expect.any(Object));
});

test("overseasBalance", async () => {
  const getOverseasBalance = await client.overseasBalance(overseasBalanceData);
  console.log(getOverseasBalance);
  expect(getOverseasBalance).toEqual(expect.any(Object));
});

test("overseasDayOrNight", async () => {
  const getOverseasDayOrNight = await client.overseasDayOrNight();
  console.log(getOverseasDayOrNight);
  expect(getOverseasDayOrNight).toEqual(expect.any(Object));
});
