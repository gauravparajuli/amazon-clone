import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface props {
    children: ReactNode
    title?: string
}

const Layout = ({ children, title }: props) => {
    return (
        <>
            {/* Navbar goes here */}
            <div className='bg-[#203040] text-white py-1'>
                <div className='container mx-auto'>
                    <Link href='/'>
                        <h1>Amazon</h1>
                    </Link>
                </div>
            </div>
            {/* content goes here */}
            <div className='container mx-auto min-h-[90vh]'>
                <Head>
                    <title>
                        {title ? `${title} - Amazon Clone` : 'Amazon Clone'}
                    </title>
                </Head>
                <div>{children}</div>
            </div>
            {/* footer goes here */}
            <div className='text-xs text-center'>
                <p> &#169; Amazon Clone 2023</p>
            </div>
        </>
    )
}

export default Layout
