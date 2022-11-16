import type { LoaderFunction } from '@remix-run/node'

import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react';

import {
  apiGetAllSimpleCashbacks,
} from '~/server/api.server'
import type { SimpleCashback } from '~/types';

// import Button from '@mui/material/Button';


/**
 * Backend: "get"
 */
 const loader: LoaderFunction = async () => {
  const cashbacks = await apiGetAllSimpleCashbacks()

  return json({cashbacks})
}

function Cashbacks() {
  const { cashbacks } = useLoaderData()
  console.log(cashbacks)
  
  return (
    <div>
      <h1>Cashbacks</h1>
      {/* <Button variant="contained">Contained</Button> */}
        {cashbacks.map((cashback: SimpleCashback) => (
          <h3 key={cashback.name}>{cashback.name}</h3>
        ))}
    </div>
  )
}


export { loader }
export default Cashbacks
