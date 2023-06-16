import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import styles from './sliderdesigner.module.css'
import StarIcon from '@mui/icons-material/Star';


const SliderDesigner = ({designer}) => {
    return (
        <div>
            <h2>Дизайнеры</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay,Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                grabCursor
                pagination={{clickable: true}}
                // autoplay={{delay: 2000, disableOnInteraction: false}}
            >
                {designer.map((design,i ) => (
                    <SwiperSlide key={i}>
                        <div className={styles.allBlock}>
                            <div className={styles.block}>
                                <img src={design?.image} alt=""/>
                                <h3>{design?.name}</h3>
                                <h4>{design?.company}</h4>
                                <p>{design?.position}</p>
                                <span>{design?.rating} <StarIcon sx={{fontSize: 15}} color="primary"/> <StarIcon sx={{fontSize: 15}} color="primary"/> <StarIcon sx={{fontSize: 15}} color="primary"/> <StarIcon sx={{fontSize: 15}} color="primary"/> <StarIcon sx={{fontSize: 15}}/></span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderDesigner;