import { useLoaderData } from '@remix-run/react'

import type { LoaderFunction } from '@remix-run/node'

import { json } from '@remix-run/node'
import { apiGetAllDetailedCashbacks } from '~/server/api.server'

import type { DetailedCashback } from '~/types'

type LoaderData = {
  detailedCashbackData: DetailedCashback
}

const loader: LoaderFunction = async ({ params }) => {
  const { id } = params

  if (!id) {
    throw new Error('No id provided')
  }

  const detailedCashbackData = await apiGetAllDetailedCashbacks(id)
  return json<LoaderData>({ detailedCashbackData })
}

function CashbackId() {
  const { detailedCashbackData } = useLoaderData<LoaderData>()
  return(
    <div>
      <h1>{detailedCashbackData.name}</h1>
      <p>{detailedCashbackData.description}</p>
    </div>
  )
}

export { loader}
export default CashbackId