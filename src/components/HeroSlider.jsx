import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


function HeroSlider() {

    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="content">
                        <motion.h4
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.2 }}
                        >
                            Introducing the new
                        </motion.h4>

                        <motion.h3
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                        >
                            Microsoft Xbox <br /> 360 Controller
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Windows Xp/10/8 ps3 ,Tv Box
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.6 }}
                        >
                            <Link to="/">Shop Now</Link>
                        </motion.div>
                    </div>

                    <motion.img
                        src="/src/assets/logo.png"
                        alt="logo"
                        initial={{ opacity: 0, x: 80, scale: 0.9, rotate: -6 }}
                        animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
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
        </>
    )
}

export default HeroSlider
