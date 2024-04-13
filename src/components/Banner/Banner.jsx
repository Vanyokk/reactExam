import './Banner.css'
import banner from '../../../public/banner/banner.jpg'
import Button from '../Button/Button'

export default function Banner() {
    return (
        <>
        
            <div className="banner" id='popular'>


                <img src={banner} alt="banner" className='banner-photo' />

                <div className="banner-content">


                    <h1 className="banner-title">SAFQ</h1>
                    <p className="banner-description">Лучшие решения для вашего дома</p>

                </div>

            </div>
        
        </>
    )
}