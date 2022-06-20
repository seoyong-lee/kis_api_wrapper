export function getUrlPrefix(isTest: boolean) {
  const baseURL = "https://openapi.koreainvestment.com:9443";
  const testURL = "https://openapivts.koreainvestment.com:29443";

  return isTest ? testURL : baseURL;
}

export function getHeaderBase(
  token: string,
  appkey: string,
  appsecret: string
) {
  return {
    "Content-Type": "application/json; charset=utf-8",
    authorization: `Bearer ${token}`,
    appkey,
    appsecret,
  };
}

export function getTrId(endpoint: string, isTest: boolean) {
  switch (endpoint) {
    case "/uapi/domestic-stock/v1/trading/order-cash":
      return isTest ? "VTTC0802U" : "TTTC0802U";
    case "/uapi/domestic-stock/v1/trading/order-rvsecncl":
      return isTest ? "VTTC0803U" : "TTTC0803U";
    case "/uapi/domestic-stock/v1/trading/inquire-balance":
      return isTest ? "VTTC8434R" : "TTTC8434R";
  }
}
