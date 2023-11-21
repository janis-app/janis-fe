'use client'
import Header from '@/components/InformationGathering/Header'
import React, { useState } from 'react'
import styles from '@/styles/dashboard/credits.module.css'
import profile from '@/public/assets/profileImg.svg'
import Image from 'next/image'
import crown from '@/public/assets/crown.svg'
import Switch from "react-switch";
import { FiCheck } from "react-icons/fi";

export default function Credits() {
    const [switchs, setSwitch] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null)


    const handleSwitch = (checked) => {
        setSwitch(checked);
    };


    const data = [
        {
            title: '1 Credit',
            sub_title: 'For one tailor-made adventure',
            price: '€0.99'
        },
        {
            title: '5 Credit',
            sub_title: 'Perfect for a short trip',
            price: '€2.49',
            discount_price: '€4.99',
            isDiscount: true
        },
        {
            title: '10 Credit',
            sub_title: 'Stack up for a long trip',
            price: '€7.99'
        },
    ]

    return (
        <div className={styles.main_conatiner}>
            <div style={{ margin: "0px 24px" }} >
                <Header progess={17} title="Dashboard" link="" profile={profile} />
            </div>
            <div className='mt-[33px] pt-[15px] px-[25px] bg-white rounded-t-[32px] '>
                <div className='bg-[#A2DCF0] rounded-[20px] px-[17px] py-[12px] text-white flex items-center	'>
                    <Image
                        src={crown}
                        height={40}
                        width={49}
                        alt='Crown image'
                    />
                    <div className='ml-[12px]'>
                        <p className='font-bold	text-[20px]'>Join Our Premium</p>
                        <p className='text-[14px] font-normal'>Invite Friends, make new ones &
                            get 15 free credits</p>
                        <div>
                            <span className='font-bold	text-[20px]'>€9.99</span>
                            <span className='text-[14px] font-normal'>/month</span>
                        </div>
                    </div>
                </div>
                {
                    data.map((item, index) => {
                        return (
                            <div className='border-2 mt-[14px] rounded-[20px] p-[16px]  flex items-center'
                                key={index}
                                onClick={() => setSelectedIndex(index)}>
                                {
                                    selectedIndex == index ?
                                        <div className='h-[24px] w-[24px] bg-[#A2DCF0] rounded-full flex justify-center text-white items-center'><FiCheck size={13} /></div>
                                        :
                                        <div className='h-[24px] w-[24px] border-[#D9D9D9] border-2	 rounded-full'></div>
                                }

                                <div className='ml-3 w-full'>
                                    <div className='w-full flex justify-between items-center'>
                                        <p className='font-semibold text-2xl'>{item.title}</p>
                                        <div>
                                            {item.isDiscount && (
                                                <p className='bg-blue-300 px-4 py-2 text-white rounded-full'>50% OFF</p>
                                            )}
                                        </div>
                                    </div>


                                    <p className='text-[14px] font-normal color-[#807C83]'>{item.sub_title}</p>
                                    <div>
                                        <span className='font-semibold text-[18px]'>{item.price}</span>
                                        {
                                            (item.isDiscount && item.discount_price) &&
                                            < span className='font-normal text-[14px] color-[#B5B5B5]'
                                                style={{ textDecoration: 'line-through', marginLeft: 4, color: '#B5B5B5' }}
                                            >€4.99</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='flex justify-between items-center mt-[21px]'>
                    <p className='font-medium text-sm'>Auto recurring</p>
                    <Switch
                        onChange={handleSwitch}
                        checked={switchs}
                        onColor="#B9E6F5"
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>
                <div className='bg-white flex flex-col justify-center item-center text-center mt-[20px] w-full'>
                    <div className={styles.nextBtnDIv}>
                        <button className={styles.nextBtn}>Next</button>
                    </div>
                    <div className='font-medium text-[10px] mt-[15px]'>
                        <p >By continuing you will agree to our</p>
                        <span style={{ color: '#A2DCF0' }} >Terms of Service</span>
                        <span> and </span>
                        <span style={{ color: '#A2DCF0' }} >Privacy Policy</span>
                    </div>
                </div>

            </div>
        </div >
    )
}
