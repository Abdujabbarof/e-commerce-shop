import React from 'react'
import "./Servises.css"
import Clok from "../../assets/image 6.png"
import hend from "../../assets/image 7.png"
import prise from "../../assets/image 8.png"

const Servises = () => {
  return (
    <>
    <div className='main_container'>
    <div className='descriptionn'>
        <p>Почему стоит заказывать у нас:</p>
    </div>
    <div className='container'>
        <div className='title'>
            <img src={Clok} alt="" />
            <p>Быстрая <br />доставка</p>
        </div>
        <div className='title1'>
            <img src={hend} alt="" />
            <p>Возврат и <br /> замена</p>
        </div>
        <div className='title1'>
            <img src={prise} alt="" />
            <p>Скидки</p>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Servises