import React from 'react';
import '../styles/Gallery.scss';
import Img1 from '../assets/gallery/gallery-img1.webp';
import Img3 from '../assets/gallery/gallery-img3.webp';
import Img4 from '../assets/gallery/gallery-img4.webp';
import Img5 from '../assets/gallery/gallery-img5.webp';
import Img6 from '../assets/gallery/gallery-img6.webp';
import Img7 from '../assets/gallery/gallery-img7.webp';
import Img8 from '../assets/gallery/gallery-img8.webp';
import Img10 from '../assets/gallery/gallery-img10.webp';
import Img11 from '../assets/gallery/gallery-img11.webp';
import Img14 from '../assets/gallery/gallery-img14.webp';
import Img15 from '../assets/gallery/gallery-img15.webp';
import Img17 from '../assets/gallery/gallery-img17.webp';
import Img18 from '../assets/gallery/gallery-img18.webp';
import Img19 from '../assets/gallery/gallery-img19.webp';


const Galeria = () =>{
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        // {
        //     id: 2,
        //     imgSrc: Img2,
        // },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        // {
        //     id: 9,
        //     imgSrc: Img9,
        // },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        // {
        //     id: 12,
        //     imgSrc: Img12,
        // },
        
        {
            id: 15,
            imgSrc: Img15,
        },
        // {
        //     id: 16,
        //     imgSrc: Img16,
        // },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img14,
        },
        {
            id: 20,
            imgSrc: Img19,
        },
    ]

    return(
        <div className='gallery'>
            {data.map((item, index)=> {
                return(
                    <div className='pics' data-aos="fade-up" data-aos-duration="2000" key={index}>
                        <img src={item.imgSrc} alt={item.imgSrc} />
                    </div>
                )
            })}
        </div>
    );
}

export default Galeria;