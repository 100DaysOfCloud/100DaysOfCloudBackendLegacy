import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import 'swiper/css/swiper.css'
import { SwiperWrap, SwiperBtnGroup } from './swiper.stc'

const SwiperSlider = ({ children, settings = {}, ...props }) => {
    const {
        slidesPerView, spaceBetween, centeredSlides, loop,
        autoplay = false, arrows = false, customArrows = false, breakpoints = {},
    } = settings;
    const swiperStyles = {
        ...props,
        arrows,
        customArrows
    }
    const params = {
        slidesPerView: slidesPerView ? slidesPerView : 1,
        spaceBetween: spaceBetween ? spaceBetween : 0,
        centeredSlides: centeredSlides ? centeredSlides : false,
        loop: loop ? loop : false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay,
        renderPrevButton: () => <button className="swiper-button-prev swiper-btn"><FiArrowLeft /></button>,
        renderNextButton: () => <button className="swiper-button-next swiper-btn"><FiArrowRight /></button>,
        breakpoints
    }
    const [swiper, setSwiper] = useState(null);
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(false)
    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
        setIsEnd(swiper.isEnd)
        setIsBeginning(swiper.isBeginning)
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
        setIsEnd(swiper.isEnd)
        setIsBeginning(swiper.isBeginning)
    };
    return (
        <SwiperWrap {...swiperStyles}>
            <Swiper {...params} getSwiper={setSwiper}>
                {children}
            </Swiper>
            <SwiperBtnGroup>
                {!isBeginning && <button className="swiper-custom-prev" onClick={goPrev}><FiArrowLeft /></button>}
                {!isEnd && <button className="swiper-custom-next" onClick={goNext}><FiArrowRight /></button>}
            </SwiperBtnGroup>
        </SwiperWrap>
    )
}

SwiperSlider.propTypes = {
    children: PropTypes.node.isRequired
}

export default SwiperSlider; 