import React from 'react'
import {Carousel} from 'react-bootstrap'
import './HeroSlider.css'
import SuitImage from './suit.webp'
const HeroSlider = () => {
    return (
        <div className='MainCarousel'>
            <Carousel>
                <Carousel.Item interval={100000000}>
                    <img
                        className="d-block w-100"
                        src={SuitImage}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={SuitImage}
                        alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SuitImage}
                        alt="Third slide"
                    />
                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SuitImage}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSlider;