import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import BannerImg from '../images/banner1.png'

function APropos() {
  return (
    <div>
      <Header />
      <Banner src={BannerImg} alt="image de montagne" class="banner" />
      <Footer />
    </div>
  )
}

export default APropos
