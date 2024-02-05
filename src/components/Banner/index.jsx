import './style.scss'

function Banner ({image, text}) {
    return ( 
    <div className='banner'>
        <img src={image} alt="Banniere-img" className="banner-img"/>
        <h1 className='banner-title'>{text}</h1>
    </div>
    )
}

export default Banner;