import PicPayLogo from "~/assets/logos/picpay.png"
import BeblueLogo from "~/assets/logos/beblue.jpg"
import MyCashback from "~/assets/logos/mycashback.png"
import Meliuz from "~/assets/logos/meliuz.png"
import MyWorld from "~/assets/logos/myworld.png"

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

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export { handleLogoCompany, formatPrice, formatDate }