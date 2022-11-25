import React from 'react'
import closeIcon from '../close.svg'

const PopUp = ({ close, changeCurrency, newSelected }) => {     
    return (
        <div className="absolute text-dark bg-blue w-full h-full flex flex-col z-50">
            <button className="w-8 absolute right-4 top-4" onClick={close}><img src={closeIcon} alt="" /></button>
            <button onClick={(e) => changeCurrency(e, newSelected)} className="bg-white bg-opacity-20 hover:bg-opacity-30 text-sm sm:text-lg py-3 sm:py-4 mt-16 btn font-bold">GBP</button>
            <button onClick={(e) => changeCurrency(e, newSelected)} className="bg-white bg-opacity-20 hover:bg-opacity-30 text-sm sm:text-lg py-3 sm:py-4 btn font-bold">USD</button>
            <button onClick={(e) => changeCurrency(e, newSelected)} className="bg-white bg-opacity-20 hover:bg-opacity-30 text-sm sm:text-lg py-3 sm:py-4 btn font-bold">EUR</button>
            <button onClick={(e) => changeCurrency(e, newSelected)} className="bg-white bg-opacity-20 hover:bg-opacity-30 text-sm sm:text-lg py-3 sm:py-4 btn font-bold">CAD</button>
        </div>
    )
}

export default PopUp
