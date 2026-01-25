// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
function HeroSlider() {

    return (
        <div className='hero'>
            <div className='container'>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                    <SwiperSlide>
                        <div className="content">
                            <h4>Welcome to our Online store</h4>
                            <h3>Discover our  <br /> products </h3>
                            <p>and enjoy a modern, fast, and secure shopping experience</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                        <img src={logo} alt="logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <h4>Welcome to our Online store</h4>
                            <h3>Discover our  <br /> products </h3>
                            <p>and enjoy a modern, fast, and secure shopping experience</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                        <img src={logo} alt="logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <h4>Welcome to our Online store</h4>
                            <h3>Discover our  <br /> products </h3>
                            <p>and enjoy a modern, fast, and secure shopping experience</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                        <img src={logo} alt="logo" />

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HeroSlider
