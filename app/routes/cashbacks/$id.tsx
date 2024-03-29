import { useLoaderData, useNavigate } from "@remix-run/react"

import type { LoaderFunction } from "@remix-run/node"

import { json } from "@remix-run/node"
import { apiGetAllDetailedCashbacks } from "~/server/api.server"

import type { Cashback } from "~/types"

import Dialog from "@mui/material/Dialog"
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import type { TransitionProps } from "@mui/material/transitions"
import type { ReactElement, Ref } from "react"
import { forwardRef } from "react"
import { formatDate, formatPrice, handleLogoCompany } from "~/helpers"
import { NoSsr } from "@mui/material"

type LoaderData = {
  detailedCashbackData: Cashback
}

const loader: LoaderFunction = async ({ params }) => {
  const { id } = params

  if (!id) {
    throw new Error("No id provided")
  }

  const detailedCashbackData = await apiGetAllDetailedCashbacks(id)
  return json<LoaderData>({ detailedCashbackData })
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

function CashbackId() {
  const { detailedCashbackData } = useLoaderData() as LoaderData
  const navigate = useNavigate()

  const handleClose = () => {
    navigate(`/cashbacks`)
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <img
              src={handleLogoCompany(detailedCashbackData.company.name)}
              alt={detailedCashbackData.company.name}
              className="w-[275px] rounded"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={detailedCashbackData.company.description} />
          </ListItem>
          <Divider />
          <ListItem style={{ padding: "4px 16px" }}>
            <ListItemText>
              <strong>Name: </strong>
              {detailedCashbackData.name}
            </ListItemText>
          </ListItem>
          <ListItem style={{ padding: "4px 16px" }}>
            <ListItemText>
              <strong>Description: </strong>
              {detailedCashbackData.description}
            </ListItemText>
          </ListItem>
          <ListItem style={{ padding: "4px 16px" }}>
            <ListItemText>
              <strong>Price: </strong>
              {formatPrice(detailedCashbackData.price_in_cents)}
            </ListItemText>
          </ListItem>
          <ListItem style={{ padding: "4px 16px" }}>
            <ListItemText>
              <strong>Limit date: </strong>
              <NoSsr>{formatDate(detailedCashbackData.limit_date)}</NoSsr>
            </ListItemText>
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export { loader }
export default CashbackId
