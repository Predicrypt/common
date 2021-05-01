export interface WebsocketResponse {
  result: any;
  id: number;
}

export interface WebsocketRequest {
  method:
    | "SUBSCRIBE"
    | "UNSUBSCRIBE"
    | "LIST_SUBSCRIPTIONS"
    | "SET_PROPERTY"
    | "GET_PROPERTY";
  params: any[];
  id: number;
}
