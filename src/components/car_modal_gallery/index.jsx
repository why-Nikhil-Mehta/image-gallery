import React, { useRef } from 'react'
import "./index.scss"

const CarModalGallery = (props) => {
    const ref = useRef(null)
    const scrolling = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset
    }
    return (
        <>
            <a className='previous' onClick={() => scrolling(-200)}>&#10094;</a>
            <div className='modal-gallery-container' ref={ref}>
                {
                    props.carData.map((car) => {
                        return(
                            <img src={car.url} className='car_image' onClick={() => {
                                props.toggleCarIdFromModal(car.id)
                            }}/>
                        )
                    })
                }
            </div>
            <a className='next' onClick={() => scrolling(200)}>&#10095;</a>
        </>
    )
}

export default CarModalGallery