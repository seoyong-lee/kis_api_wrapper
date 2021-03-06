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

export function getTrId(endpoint: string, isTest?: boolean) {
  switch (endpoint) {
    case "balance":
      return isTest ? "VTTC8434R" : "TTTC8434R";
    case "possibleOrder":
      return isTest ? "VTTC8908R" : "TTTC8908R";
    case "newOrder":
      return isTest ? "VTTC0802U" : "TTTC0802U";
    case "cancelOrder":
      return isTest ? "VTTC0803U" : "TTTC0803U";
    case "overseasBalance":
      return isTest ? "VTTS3012R" : "TTTS3012R";
    case "overseasDayOrNight":
      return "JTTT3010R";
  }
}

export function getTrIdForNewOrderOverseas(
  orderType: string,
  exchangeCode: string,
  isTest: boolean
) {
  if (orderType === "00") {
    switch (exchangeCode) {
      case "TKSE":
        return isTest ? "VTTS0307U" : "TTTS0307U";
      case "SHAA":
        return isTest ? "VTTS1005U" : "TTTS1005U";
      case "SEHK":
        return isTest ? "VTTS1001U" : "TTTS1001U";
      case "SZAA":
        return isTest ? "VTTS0304U" : "TTTS0304U";
      default:
        return isTest ? "VTTT1001U" : "JTTT1006U";
    }
  } else {
    switch (exchangeCode) {
      case "TKSE":
        return isTest ? "VTTS0308U" : "TTTS0308U";
      case "SHAA":
        return isTest ? "VTTS0202U" : "TTTS0202U";
      case "SEHK":
        return isTest ? "VTTS1002U" : "TTTS1002U";
      case "SZAA":
        return isTest ? "VTTS0305U" : "TTTS0305U";
      default:
        return isTest ? "VTTT1002U" : "JTTT1002U";
    }
  }
}

export function getTrIdForNewReservedOrderOverseas(
  orderType: string,
  isTest: boolean
) {
  if (orderType === "00") {
    return isTest ? "VTTT3016U" : "JTTT3016U";
  } else {
    return isTest ? "VTTT3014U" : "JTTT3014U";
  }
}

export function getTrIdForOverseasBalance(
  isNighttime: string,
  isTest: boolean
) {
  if (isNighttime === "Y") {
    return isTest ? "VTTT3012R" : "JTTT3012R";
  } else if (isNighttime === "N") {
    return isTest ? "VTTS3012R" : "TTTS3012R";
  }
}
