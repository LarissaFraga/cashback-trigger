import PicPayLogo from "../../public/logos/picpay.png"
import BeblueLogo from "../../public/logos/beblue.jpg"
import MyCashback from "../../public/logos/mycashback.png"
import Meliuz from "../../public/logos/meliuz.png"
import MyWorld from "../../public/logos/myworld.png"

function handleLogoCompany(company: string) {
  switch (company) {
    case "PicPay":
      return PicPayLogo
    case "Beblue":
      return BeblueLogo
    case "Mycashback":
      return MyCashback
    case "Méliuz":
      return Meliuz
    case "myWorld":
      return MyWorld
    default:
      return "https://github.com/LarissaFraga.png"
  }
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100)
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export { handleLogoCompany, formatPrice, formatDate }