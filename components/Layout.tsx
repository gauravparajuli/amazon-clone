import React, { ReactNode } from 'react'
import Head from 'next/head'

interface props {
    children: ReactNode
    title?: string
}

const Layout = ({ children, title }: props) => {
    return (
        <div className='container mx-auto'>
            <div>
                <h1>Amazon</h1>
            </div>
            <Head>
                <title>
                    {title ? `${title} - Amazon Clone` : 'Amazon Clone'}
                </title>
            </Head>
            <div>
                {/* content goes here */}
                {children}
            </div>
            <div className='text-xs text-center'>
                <p> &#169; Amazon Clone 2023</p>
            </div>
        </div>
    )
}

export default Layout
