import type { LoaderFunction } from "@remix-run/node"

import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { apiGetAllSimpleCashbacks } from "~/server/api.server"
import type { Cashback } from "~/types"

import { SimpleCashback as CashbackCard } from "~/components/SimpleCashback/SimpleCashback"

import { formatDate, formatPrice, handleLogoCompany } from "~/helpers"

// import Button from '@mui/material/Button'

/**
 * Backend: "get"
 */
const loader: LoaderFunction = async () => {
  const cashbacks = await apiGetAllSimpleCashbacks()

  return json({ cashbacks })
}

function Cashbacks() {
  const { cashbacks } = useLoaderData()

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {cashbacks.map((cashback: Cashback) => (
        <div key={cashback.id} className="my-4 mx-4 max-w-fit">
          <CashbackCard
            image={handleLogoCompany(cashback.company.name)}
            title={cashback.company.name}
            price={formatPrice(cashback.price_in_cents)}
            date={formatDate(cashback.limit_date)}
            id={cashback.id}
          />
        </div>
      ))}
      {/* <section className="flex-1">
          <Outlet />
        </section> */}
    </div>
  )
}

export { loader }
export default Cashbacks
