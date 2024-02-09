import Banner from '../../components/Banner';
import AboutBanner from '../../assets/AboutBanner.png';
import Collapse from '../../components/Collapse';
import CollapseData from '../../data/collapse.json'
import './style.scss'

function About() {
  document.title = "About - Kasa"

  return (
      <section className='about'>
        <Banner text="" image={AboutBanner}/>
        <div className='collapse-container'>
        {CollapseData.map((data) => (
          <Collapse key={data.id} title={data.title} content={data.content} />
        ))}
        </div>
      </section>
  );
}

export default About;