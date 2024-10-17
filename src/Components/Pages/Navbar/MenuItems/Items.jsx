import React from 'react'
import { NavLink } from 'react-router-dom'

const Items = ({ route }) => {
    return (

        <li>
            <NavLink
                className={({ isActive }) => isActive ? "text-primary font-bold duration-300" : "hover:text-primary"}

                to={route.path}>{route.name}</NavLink>
        </li>

    )
}

export default Items