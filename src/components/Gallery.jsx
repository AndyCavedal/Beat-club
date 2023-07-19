import React from 'react';
import '../styles/Gallery.scss';
import Img1 from '../assets/gallery/gallery-img1.jpeg';
import Img2 from '../assets/gallery/gallery-img2.jpeg';
import Img3 from '../assets/gallery/gallery-img3.jpg';
import Img4 from '../assets/gallery/gallery-img4.jpg';
import Img5 from '../assets/gallery/gallery-img5.jpg';
import Img6 from '../assets/gallery/gallery-img6.jpg';
import Img7 from '../assets/gallery/gallery-img7.jpg';
import Img8 from '../assets/gallery/gallery-img8.jpg';
import Img9 from '../assets/gallery/gallery-img9.jpg';
import Img10 from '../assets/gallery/gallery-img10.jpg';
import Img11 from '../assets/gallery/gallery-img11.jpg';
import Img12 from '../assets/gallery/gallery-img12.jpg';
import Img14 from '../assets/gallery/gallery-img14.jpg';
import Img15 from '../assets/gallery/gallery-img15.jpg';
import Img16 from '../assets/gallery/gallery-img16.jpg';
import Img17 from '../assets/gallery/gallery-img17.jpg';
import Img18 from '../assets/gallery/gallery-img18.jpg';
import Img19 from '../assets/gallery/gallery-img19.jpg';
import Img20 from '../assets/gallery/gallery-img20.jpg';


const Galeria = () =>{
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
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
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
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
                    <div className='pics' key={index}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>
    );
}

export default Galeria;