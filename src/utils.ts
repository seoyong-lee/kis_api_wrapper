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
    "authorization": `Bearer ${token}`,
    "appkey": appkey,
    "appsecret": appsecret,
  };
}

export function getTrId(endpoint: string, isTest: boolean) {
  switch (endpoint) {
    case "balance":
      return isTest ? "VTTC8434R" : "TTTC8434R";
    case "newOrder":
      return isTest ? "VTTC0802U" : "TTTC0802U";
    case "cancelOrder":
      return isTest ? "VTTC0803U" : "TTTC0803U";
  }
}
