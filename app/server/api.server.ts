import axiosModule from "axios"

import type { Cashback } from "~/types"

const axios = axiosModule.create({ baseURL: "https://demo3904716.mockable.io/" })

async function apiGetAllSimpleCashbacks(): Promise<Cashback[]> {
  const { data } = await axios.get("/cash")

  const response = data.map((item: Cashback) => {
    const { id, name, price_in_cents, limit_date, company } = item

    return {
      id: id,
      name,
      price_in_cents,
      limit_date,
      company: company
    }
  }) as Cashback[]

  return response
}

async function apiGetAllDetailedCashbacks(id: number) {
  const { data: DetailedCashbackData } = await axios.get(`/cashbacks/${id}`)

  const { name, description, price_in_cents, limit_date, company } =
    DetailedCashbackData

  const response = {
    id: id,
    name,
    description,
    price_in_cents,
    limit_date,
    company: company,
  } as Cashback

  return response
}

export { apiGetAllSimpleCashbacks, apiGetAllDetailedCashbacks }
