// import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

interface Props {
  image: any
  title: string
  price: string
  date: string
}

function formatPriceDateText(price: string, date: string) {
  return (
    `Price: ${price} Date: ${date}`
  )
}

function SimpleCashback({image, title, price, date} : Props) {

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height={140}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {formatPriceDateText(price, date)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More Details</Button>
        </CardActions>
      </Card>
    </>
  )
}

export { SimpleCashback }
