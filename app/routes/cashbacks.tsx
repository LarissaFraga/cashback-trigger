import { useState } from "react"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import type { SelectChangeEvent } from "@mui/material/Select"
import Select from "@mui/material/Select"

import type { LoaderFunction } from "@remix-run/node"

import { json } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react"

import { apiGetAllSimpleCashbacks } from "~/server/api.server"
import type { Cashback } from "~/types"

import { SimpleCashback as CashbackCard } from "~/components/SimpleCashback"

import { formatDate, formatPrice, handleLogoCompany } from "~/helpers"

import { useHydrated } from "remix-utils"

/**
 * Backend: "get"
 */
const loader: LoaderFunction = async () => {
  const cashbacks = await apiGetAllSimpleCashbacks()

  return json({ cashbacks })
}

function Cashbacks() {
  const { cashbacks } = useLoaderData()
  const isJavaScriptEnabled = useHydrated()

  const [filter, setFilter] = useState("")

  const priceHandleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value)
  }

  function filterCashbacks() {
    if (filter === "Price: High to Low") {
      return cashbacks.sort((a: Cashback, b: Cashback) => {
        return b.price_in_cents - a.price_in_cents
      })
    } else if (filter === "Price: Low to High") {
      return cashbacks.sort((a: Cashback, b: Cashback) => {
        return a.price_in_cents - b.price_in_cents
      })
    } else if (filter === "Date: Oldest to Newest") {
      return cashbacks.sort((a: Cashback, b: Cashback) => {
        return (
          new Date(a.limit_date).getTime() - new Date(b.limit_date).getTime()
        )
      })
    } else if (filter === "Date: Newest to Oldest") {
      return cashbacks.sort((a: Cashback, b: Cashback) => {
        return (
          new Date(b.limit_date).getTime() - new Date(a.limit_date).getTime()
        )
      })
    } else {
      return cashbacks.sort((a: Cashback, b: Cashback) => {
        return +a.id - +b.id
      })
    }
  }

  return (
    <>
      {isJavaScriptEnabled ? (
        <div>
          <div className="ml-4 flex flex-row flex-wrap items-center justify-center gap-4">
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="filter-select">Order by</InputLabel>
              <Select
                labelId="filter-select"
                id="filter-select"
                value={filter}
                label="Order by"
                onChange={priceHandleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Date: Oldest to Newest">
                  Date: Oldest to Newest
                </MenuItem>
                <MenuItem value="Date: Newest to Oldest">
                  Date: Newest to Oldest
                </MenuItem>
                <MenuItem value="Price: Low to High">
                  Price: Low to High
                </MenuItem>
                <MenuItem value="Price: High to Low">
                  Price: High to Low
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center">
            {cashbacks
              .map((cashback: Cashback) => (
                <div key={cashback.id} className="my-4 mx-4 max-w-fit">
                  <CashbackCard
                    image={handleLogoCompany(cashback.company.name)}
                    title={cashback.company.name}
                    price={formatPrice(cashback.price_in_cents)}
                    date={formatDate(cashback.limit_date)}
                    id={+cashback.id}
                  />
                </div>
              ))
              .sort(() => {
                return filterCashbacks()
              })}
          </div>
          <section className="flex-1">
            <Outlet />
          </section>
        </div>
      ) : (
        <div className="ml-4 flex flex-row flex-wrap items-center justify-center gap-4">
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="filter-select">Order by</InputLabel>
            <Select
              labelId="filter-select"
              id="filter-select"
              value={filter}
              label="Order by"
              onChange={priceHandleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Date: Oldest to Newest">
                Date: Oldest to Newest
              </MenuItem>
              <MenuItem value="Date: Newest to Oldest">
                Date: Newest to Oldest
              </MenuItem>
              <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
              <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}
    </>
  )
}

export { loader }
export default Cashbacks
