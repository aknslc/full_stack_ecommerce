
// components
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Brands from '../components/Brands/Brands';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Promo from '../components/Promo/Promo';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';


const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <Brands />
            <FeaturedProducts />
            <Promo />
            <Footer />
        </>
    )
}

export default Home