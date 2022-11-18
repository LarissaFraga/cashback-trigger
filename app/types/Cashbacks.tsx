
type Cashback = {
  id: number
  name: string
  description: string,
  price_in_cents: number,
  limit_date: Date,
  company: {
    name: string,
    description: string
  }
}

export type { Cashback }