import CartBar from "@/components/Cart/CartBar"
import Catalog from "@/components/Catalog"
import Hero from "@/components/Hero"
import Locations from "@/components/Locations/Locations"
import Testimionals from "@/components/Testimionals/Testimionals"

const Home = () => {
  return (
    <>
      <CartBar />
      <Hero />
      <Catalog />
      <Testimionals />
      <Locations />
    </>
  )
}

export default Home