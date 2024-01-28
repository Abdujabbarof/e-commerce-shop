import About from "@/components/AboutUs/About"
import CartBar from "@/components/Cart/CartBar"
import Catalog from "@/components/Futbolki"
import Hero from "@/components/Hero"
import Hudilar from "@/components/Hudilar/Hudilar"
import Kepkalar from "@/components/Kepkalar/Kepkalar"
import Locations from "@/components/Locations/Locations"
import Sales from "@/components/Sales/Sales"
import Testimionals from "@/components/Testimionals/Testimionals"

const Home = () => {
  return (
    <>
      <CartBar />
      <Hero />
      <Sales />
      <Kepkalar />
      <Catalog />
      <Hudilar />
      <Testimionals />
      <Locations />
      <About />
    </>
  )
}

export default Home