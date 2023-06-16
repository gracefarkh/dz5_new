import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import 'swiper/swiper-bundle.min.css';
import styles from './slidercompany.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SliderCompany = ({ slides }) => {


    return (
        <div>
            <h2>Компании</h2>
            <Swiper
                modules={[ Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                grabCursor
                pagination={{clickable: true}}
                autoplay={{delay: 2000, disableOnInteraction: false}}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className={styles.allBlock}>
                            <div className={styles.block}>
                                <img className={styles.img} src={slide.image} alt={slide.title} />
                                <div className={styles.inner__block}>
                                    <div className={styles.top}>
                                        <p>{slide.title}</p>
                                        <div className={styles.stars}>
                                            <StarIcon color='primary' sx={{fontSize: 15}}/> <StarIcon sx={{fontSize: 15}} color='primary'/> <StarIcon sx={{fontSize: 15}} color='primary'/> <StarIcon sx={{fontSize: 15}} color='primary'/> <StarBorderIcon sx={{fontSize: 15}}/>
                                        </div>
                                    </div>
                                    <div className={styles.description}>
                                        <h3>{slide.subtitle}</h3>
                                    </div>
                                </div>
                                <div className={styles.bottom}>
                                    <div className={styles.left}>
                                        <VisibilityIcon/>
                                        <h4>3222</h4>
                                    </div>
                                    <div className={styles.right}>
                                        <p>Подробнее <ArrowForwardIosIcon/></p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <img className={styles.img} src={slide.image} alt={slide.title} />
                                <div className={styles.inner__block}>
                                    <div className={styles.top}>
                                        <p>{slide.title}</p>
                                        <div className={styles.stars}>
                                            <StarIcon sx={{fontSize: 15}} color='primary'/> <StarIcon sx={{fontSize: 15}} color='primary'/> <StarIcon sx={{fontSize: 15}} color='primary'/> <StarIcon sx={{fontSize: 15}} color='primary'/> <StarBorderIcon sx={{fontSize: 15}}/>
                                        </div>
                                    </div>
                                    <div className={styles.description}>
                                        <h3>{slide.subtitle}</h3>
                                    </div>
                                </div>
                                <div className={styles.bottom}>
                                    <div className={styles.left}>
                                        <VisibilityIcon/>
                                        <h4>3222</h4>
                                    </div>
                                    <div className={styles.right}>
                                        <p>Подробнее <ArrowForwardIosIcon/></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderCompany;
