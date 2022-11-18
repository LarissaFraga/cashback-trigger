import axiosModule from "axios"
import { v4 as uuid } from "uuid"

import type { Cashback } from "~/types"

const axios = axiosModule.create({ baseURL: "http://localhost:3001" })

async function apiGetAllSimpleCashbacks(): Promise<Cashback[]> {
  const { data } = await axios.get("/cashbacks")

  const response = data.map((item: Cashback) => {
    const { name, price_in_cents, limit_date, company } = item

    return {
      id: uuid(),
      name,
      price_in_cents,
      limit_date,
      company: company
    }
  }) as Cashback[]

  return response
}

async function apiGetAllDetailedCashbacks(id: string) {
  const { data: DetailedCashbackData } = await axios.get(`/cashbacks/${id}`)

  const { name, description, price_in_cents, limit_date, company } =
    DetailedCashbackData

  const response = {
    id: uuid(),
    name,
    description,
    price_in_cents,
    limit_date,
    company: company,
  } as Cashback

  return response
}

export { apiGetAllSimpleCashbacks, apiGetAllDetailedCashbacks }
