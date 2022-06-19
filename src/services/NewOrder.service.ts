import { DynamicObject, kisApiRequest } from "./kis.service";

export const newOrder = async (symbol: string): Promise<NewOrder> => {
  const data = await kisApiRequest(`/stock/${symbol}/book`);
  return new NewOrder(data);
};

export class NewOrder extends DynamicObject {
  // public quote: Quote = new Quote({});
  // public bids: BidOrAsk[] = [];
  // public asks: BidOrAsk[] = [];
  // public trades: Trade[] = [];
  // public systemEvent: SystemEvent = { systemEvent: "", timestamp: 0 };
}
