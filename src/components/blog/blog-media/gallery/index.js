import React from 'react'
import Swiper from '../../../shared/swiper'
import Image from '../../../image'
import {GalleryWrap} from './gallery.stc'

const Gallery = ({images, swiperSettings}) => {
    return (
        <GalleryWrap>
            <Swiper settings={swiperSettings}>
                {images && images.map((image, i) => (
                    <div className="item" key={`gallery-${i}`}>
                        <Image fluid={image.childImageSharp.fluid} alt="gallery"/>
                    </div>
                ))}
            </Swiper>
        </GalleryWrap>
    )
}

Gallery.defaultProps = {
    swiperSettings: {
        autoplay: {
            delay: 2500,
        },
        arrows: true
    }
}

export default Gallery
