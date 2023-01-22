import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useNavigate } from "@remix-run/react"
import { NoSsr } from "@mui/material"

interface Props {
  image: any
  title: string
  price: string
  date: string
  id: number
}

function SimpleCashback({ image, title, price, date, id }: Props) {
  const navigate = useNavigate()

  function navigateToCashback() {
    navigate(`/cashbacks/${id}`)
  }

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
          <NoSsr>
            <p className="m-0 text-[1rem] font-[400] leading-normal tracking-[.00938em] text-secondary-text">
              Date: {date}
            </p>
          </NoSsr>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigateToCashback()}>
            See More Details
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export { SimpleCashback }
