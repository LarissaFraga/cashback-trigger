type SimpleCashback = {
  id: string,
  name: string,
  price_in_cents: number,
  limit_date: Date,
  company: {
    name: string,
    description: string,
    logo: string
  }
}

type DetailedCashback = {
  id: string
  name: string
  description: string,
  price_in_cents: number,
  limit_date: Date,
  company: {
    name: string,
    description: string,
    logo: string
  }
}

export type { SimpleCashback, DetailedCashback }