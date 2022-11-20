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
  id: number
}

function SimpleCashback({ image, title, price, date, id }: Props) {
  return (
    <>
      <Card>
        <div style={{ maxWidth: 345, height: 150 }}>
          <CardMedia
            component="img"
            height={210}
            image={image}
            alt="green iguana"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <p className="m-0 text-[1rem] font-[400] leading-normal tracking-[.00938em] text-secondary-text">
            Price: {price}
          </p>
          <p className="m-0 text-[1rem] font-[400] leading-normal tracking-[.00938em] text-secondary-text">
            Date: {date}
          </p>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/cashbacks/${id}`}>
            See More Details
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export { SimpleCashback }
