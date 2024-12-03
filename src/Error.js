import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
	return(
		<div key='error-box' className='w-screen h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-row flex-wrap w-full h-fill py-10 justify-center items-center'>
                <svg key='error-svg' className='w-20 h-20 fill-red' viewBox='0 -960 960 960'>
                    <path key='error-path' d='M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z'/>
                </svg>
                <span key='error-text' className='text-7xl text-text'>The path specified is incorrect</span>
            </div>
            <Link key='return-box' to='/dashboard/home' className='h-auto w-auto text-4xl rounded-2xl p-8 border-2 border-primary text-text hover:bg-primary hover:text-white'>
                <span key='return-label' className='text-center font-bold'>
                    Return to Homepage
                </span>
            </Link>
        </div>
	)
}