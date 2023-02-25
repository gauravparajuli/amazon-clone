import React, { ReactNode } from 'react'

interface props {
    children: ReactNode
    growOnHover?: boolean
}

const Card = ({ children, growOnHover = true }: props) => {
    return (
        <div
            className={`border shadow-md transition-all ${
                growOnHover ? 'hover:scale-105' : ''
            }`}
        >
            {children}
        </div>
    )
}

export default Card
