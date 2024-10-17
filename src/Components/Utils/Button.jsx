import React from 'react'

const Button = ({ icon, text }) => {
    return (
        <button className='text-sm text-primary flex items-center gap-1' >
            {text}
            <img src={icon} alt="" />
        </button>
    )
}

export default Button