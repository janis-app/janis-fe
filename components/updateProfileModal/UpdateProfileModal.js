import Link from 'next/link'
import React from 'react'

export default function UpdateProfileModal(props) {
    const { title, disc } = props
    return (
        <>
            <div
                style={{ borderRadius: '20px 20px 0px 0px', }}
                className='fixed bottom-[0px] bg-gradient-to-b from-blue-200 via-blue-300 to-blue-100 text-center w-full h-[280px]  pt-[33px]'
            >
                <p className='text-3xl mb-[14px]'>✅</p>
                <p class="text-xl font-semibold text-white">{title}</p>
                <p class="text-base font-normal text-white">{disc}</p>
                <Link
                    href={'/edit-profile'}  >
                    <div
                        className='w-full fixed bottom-[54px]  text-center px-[24px]'>
                        <button
                            className='w-full h-[50px] rounded-[30px] bg-[#A1DBEF]  text-white '>
                            Confirm
                        </button>
                    </div>
                </Link>
            </div>

        </>
    )
}
