import React from 'react'
import btnIcon from "../../assets/images/button-icon.png"

const Button = ({ icon, text }) => {
    return (
        <button className='text-sm text-primary flex items-center gap-1' >
            {text}
            <img src={btnIcon} alt="" />
        </button>
    )
}

export default Button