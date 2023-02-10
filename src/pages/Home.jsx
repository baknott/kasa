import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import ListeLogements from '../components/Logements/Logements'
import BannerImg from '../images/banner2.png'

function Home() {
  return (
    <div>
      <Header />
      <Banner src={BannerImg} alt="image de montagne" class="banner" />
      <ListeLogements />
      <Footer />
    </div>
  )
}

export default Home
