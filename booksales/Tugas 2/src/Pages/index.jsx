import Contact from "../components/shared/Contact";
import Footer from "../components/shared/Footer";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import Team from "../components/shared/Team";

export default function Home(){
    return (
      <>
        <Hero />
        <ProductList />
        <Team />
        <Contact />
        <Footer />
      </>
    );
}