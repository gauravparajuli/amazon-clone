import React, { ReactNode } from 'react'

interface props {
    children: ReactNode
}

const Card = ({ children }: props) => {
    return (
        <div className='border shadow-md hover:scale-105 transition-all'>
            {children}
        </div>
    )
}

export default Card
