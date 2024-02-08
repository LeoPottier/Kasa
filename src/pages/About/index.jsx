import Banner from '../../components/Banner';
import AboutBanner from '../../assets/AboutBanner.png';
import Collapse from '../../components/Collapse';
import CollapseData from '../../data/collapse.json'
import './style.scss'

function About() {

    document.title = "About - Kasa"

    return (
        <section className='About'>
          <Banner text="" image={AboutBanner}/>
        <div className='divBar'>
          {CollapseData.map((data) => {
            return (
              <div key={data.id}>
                <Collapse title={data.title} content={data.content} />
              </div>
            );
          })}
        </div>
        </section>
      );
}
export default About;