import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../store/app'

interface props {
    children: ReactNode
    title?: string
}

const Layout = ({ children, title }: props) => {
    const isDarkMode = useSelector((state) => state.app.darkMode)
    const dispatch = useDispatch()

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
                            {!isDarkMode && (
                                <svg
                                    onClick={() => dispatch(toggleDarkMode())}
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6 cursor-pointer'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                                    />
                                </svg>
                            )}

                            {isDarkMode && (
                                <svg
                                    onClick={() => dispatch(toggleDarkMode())}
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6 cursor-pointer'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                                    />
                                </svg>
                            )}
                        </div>
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
                        <Link className='hover:underline' href='/login'>
                            Login
                        </Link>
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
