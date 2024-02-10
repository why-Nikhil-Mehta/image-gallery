import React from 'react'
import "./index.scss"
import { ALL, BRAND_ARRAY } from '../../constants/generic_const'

const FilterBrands = (props) => {
    return (
        <div className='filter-btn-content'>
            {
                BRAND_ARRAY.map((brand) => {
                    return (
                        <>
                            <button className='filter-btn' onClick={() => { props.toggleCarBrand(brand) }}>
                                {brand}
                            </button>
                        </>
                    )
                })
            }
            <button className='filter-btn' onClick={() => { props.toggleCarBrand(ALL) }}>
                All
            </button>
        </div>
    )
}

export default FilterBrands