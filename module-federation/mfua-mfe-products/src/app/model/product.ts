export interface Product {
  "id": string,
  "subscriptions": ProductSubscription[]
}

export interface ProductSubscription {
  "id": string,
  "description": string,
  "co_signees": string[]
}
