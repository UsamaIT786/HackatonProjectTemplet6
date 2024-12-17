import Header from "@/components/Header"
import Products from "@/components/Product"
import Shop2ndlastbar from '@/components/Shop2ndlastbar'
import Slides from "@/components/Slides"
import Hero from "@/components/Hero"
import Contact from "@/components/Contact"
import SubHero from "@/components/Subhero"
import Footer from "@/components/Footers"
import Cart from "@/components/Cart"
export default function Home(){


  return(
    <main>

      <Header />
      <Products />
      <Shop2ndlastbar />
      <Hero />
      <Slides />
      <Contact />
      <SubHero />
      <Cart />
      <Footer />
      

      

    </main>
  )
}