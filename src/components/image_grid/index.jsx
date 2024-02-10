import React, { useState } from 'react'
import { Cars } from '../../constants/cars'
import "./index.scss"
import CarModal from '../car_modal'
import { ALL } from '../../constants/generic_const'

const ImageGrid = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [activeCar, setActiveCar] = useState(1)
  const [carBrand, setCarBrand] = useState(props.currentBrand)

  const openModal = (carId) => {
    setShowModal(true)
    setActiveCar(carId)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const toggleDisplayGrid = (currentBrand) => {
    let carGrid
    if(currentBrand === ALL){
      carGrid = Cars.map((car) => {
        return(
          <div className='car_image_container'>
            <img src={car.url} className='car_image' onClick={() => {openModal(car.id)}}/>
          </div>
        )
      })
    }else{
      carGrid = Cars.map((car) => {
        if(car.brand === currentBrand){
          return(
            <div className='car_image_container'>
              <img src={car.url} className='car_image' onClick={() => {openModal(car.id)}}/>
            </div>
          )
        }
      })
    }
    return carGrid
  }

  return (
    <>
      <div className='image_container'>
        {
          toggleDisplayGrid(props.currentBrand)
        }
        {
          showModal && 
          <CarModal 
            activeCarId={activeCar}
            closeModal={closeModal}
            carData={Cars}
          />
        }
      </div>
    </>
  )
}

export default ImageGrid