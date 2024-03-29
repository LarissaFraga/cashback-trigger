
type Cashback = {
  id: string
  name: string
  description: string,
  price_in_cents: number,
  limit_date: string,
  company: {
    name: string,
    description: string
  }
}

export type { Cashback }