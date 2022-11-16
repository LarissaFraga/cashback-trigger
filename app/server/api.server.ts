import axiosModule from 'axios'
import { v4 as uuid } from 'uuid'

import type { SimpleCashback, DetailedCashback } from '~/types'

const axios = axiosModule.create({ baseURL: 'http://localhost:3001' })

async function apiGetAllSimpleCashbacks(): Promise<SimpleCashback[]> {
  const { data } = await axios.get('/cashbacks')

  const response = data.map((item: SimpleCashback) => {
    const { name, price_in_cents, limit_date, company } = item

    return {
      id: uuid(),
      name,
      price_in_cents,
      limit_date,
      company_name: company.name,
      company_logo: company.logo,
    }
  }) as SimpleCashback[]

  return response
}

async function apiGetAllDetailedCashbacks(id: string) {
  const { data } = await axios.get(`/cashbacks${id}`)

  const response = data.map((item: DetailedCashback) => {
    const { name, description, price_in_cents, limit_date, company } = item

    return {
      id: uuid(),
      name,
      description,
      price_in_cents,
      limit_date,
      company: company,
    }
  }) as DetailedCashback

  return response
}

export { apiGetAllSimpleCashbacks, apiGetAllDetailedCashbacks }