import React, { useState } from 'react'
import { Cars } from '../../constants/cars';
import ImageGrid from '../image_grid';
import "./index.scss"
import FilterBrands from '../filter_buttons';
import { ALL } from '../../constants/generic_const';

const ImageGallery = () => {

    const [currentBrand, setCurrentBrand] = useState(ALL)

    const toggleCarBrand = (brand) => {
        setCurrentBrand(brand)
    }

    return (
        <>
            <div className='main-container'>
                {/* Header */}
                <div className='main-header'>
                    <h1>Photo Gallery</h1>
                    <p>Collection of cars brand wise</p>
                </div>

                {/* Filter Buttons */}
                <div className='filter-button-container'>
                    <FilterBrands toggleCarBrand={toggleCarBrand}/>
                </div>
                {/* Image Gallery */}
                <ImageGrid currentBrand={currentBrand}/>
            </div>
        </>
    )
}

export default ImageGallery