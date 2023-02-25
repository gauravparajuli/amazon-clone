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
                <div className='container mx-auto flex justify-between items-center'>
                    <Link href='/'>
                        <h1>Amazon</h1>
                    </Link>
                    <div className='flex gap-2'>
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                                />
                            </svg>
                        </div>
                        <Link className='hover:underline' href='/login'>Login</Link>
                    </div>
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
