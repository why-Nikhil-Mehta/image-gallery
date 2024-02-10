import React, { useEffect, useRef, useState } from 'react'
import "./index.scss"
import CarModalGallery from '../car_modal_gallery'

const CarModal = (props) => {

  const [currentCarId, setCurrentCarId] = useState(props.activeCarId)

  const getSelectedCarUrl = () => {
    let selectedCarData  
    if(currentCarId){
      selectedCarData = props.carData.filter((item) => {
        return item.id === currentCarId
      })
     }
    return selectedCarData[0].url
  }

  const toggleCarIdFromModal = (newCarId) => {
    setCurrentCarId(newCarId)
  }

  return (
    <div className='main-modal-container'>
      <span onClick={props.closeModal} className='close-modal'>X</span>
      <div className='modal-content'>
        <div className='selected-image-container'>
          {
            props.carData.length > 0 && <img src={getSelectedCarUrl()} className='car_image'/>
          }
        </div>
      </div>
      <div className='image-gallery-container'>
          {/* <a className='previous'>&#10094;</a> */}
          <CarModalGallery carData={props.carData} activeCarId={currentCarId} toggleCarIdFromModal={toggleCarIdFromModal}/>      
          {/* <a className='next'>&#10095;</a> */}
      </div>
    </div>
  )
}

export default CarModal