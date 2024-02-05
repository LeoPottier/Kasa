import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import HomeBanner from '../../assets/HomeBanner.png'
import './style.scss'

function Home() {

    document.title = "Accueil - Kasa"

    return (
        <section className='home'>
          <Banner text="Chez vous, partout et ailleurs" image={HomeBanner}/>
          <Gallery />
        </section>
      );
}
export default Home