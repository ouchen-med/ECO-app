import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


function HeroSlider() {
   
    return (
        <div className='hero'>
            <div className='container'>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br /> 360 Controller</h3>
                            <p>Windows Xp/10/8 ps3 ,Tv Box</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                        <img src="/src/assets/logo.png" alt="logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br /> 360 Controller</h3>
                            <p>Windows Xp/10/8 ps3 ,Tv Box</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                        <img src="/src/assets/logo.png" alt="logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br /> 360 Controller</h3>
                            <p>Windows Xp/10/8 ps3 ,Tv Box</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                        <img src="/src/assets/logo.png" alt="logo" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HeroSlider
