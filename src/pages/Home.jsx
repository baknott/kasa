import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Cards from '../components/Logements/Card'
import BannerImg from '../images/banner2.png'

function Home() {
  return (
    <div className="main">
      <Header />
      <Banner
        src={BannerImg}
        alt="image de montagne"
        class="banner"
        classImg="bannerImg"
        classTitle="bannerTitleHome"
        text="Chez vous, partout et ailleurs"
      />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
