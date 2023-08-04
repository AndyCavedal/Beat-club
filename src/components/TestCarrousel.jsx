import React, { Component } from 'react';
import Slider from "react-slick";
import '../styles/TestCarrousel.scss';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToScroll: 3,
            slidesToShow: 3, // Cantidad de elementos visibles en cada slide
            centerMode: true, // Habilitar el "Center Mode"
            centerPadding: '60px',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <div className='slider__container'>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                        <img src="https://beatclubmendoza.com.ar/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-03-at-01.29.53.jpeg" alt="" />
                    </div>
                    <div>
                        <h3>2</h3>
                        <img src="https://beatclubmendoza.com.ar/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-03-at-01.29.53-1.jpeg" alt="" />
                    </div>
                    <div>
                        <h3>3</h3>
                        <img src="https://beatclubmendoza.com.ar/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-03-at-01.29.52-2.jpeg" alt="" />
                    </div>
                    <div>
                        <h3>4</h3>
                        <img src="https://beatclubmendoza.com.ar/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-05-at-16.45.47-1.jpeg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}