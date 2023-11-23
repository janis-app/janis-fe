import React from 'react'
import styles from '@/styles/dashboard/likes.module.css'
import Header from '@/components/InformationGathering/Header'
import profile from '@/public/assets/profileImg.svg'
import magnifier from "@/public/assets/search.svg"
import image from '@/public/assets/like_img.svg'
import Image from 'next/image'
export default function likes() {
    const data = [
        {
            img: image,
            title: '🌋 Volcano Visit',
            sub_title: 'Las Palmas'

        },
        {
            img: image,
            title: '🍽️ Lunch Locale',
            sub_title: 'Las Palmas'

        },
        {
            img: image,
            title: '🧘‍♂ Yoga in Nature Reserve',
            sub_title: 'Tarifa'

        },
        {
            img: image,
            title: '🌷 Garden Gaze',
            sub_title: 'Tarifa'

        },
        {
            img: image,
            title: '🏄‍♂️ Surfing at the promenadet',
            sub_title: 'Las Palmas'

        },
        {
            img: image,
            title: '🏖️ Beach & Snacks',
            sub_title: 'Capoliveri'

        },
        {
            img: image,
            title: '🏞️ Highest Viewpoint',
            sub_title: 'Porto Azzurro'

        }
    ]
    return (
        <>
            <div className={styles.main_conatiner}>
                <div style={{ margin: "0px 24px" }} >
                    <Header progess={17} title="Recent Likes" link="" profile={profile} />
                </div>
                <div className={`mt-[33px] pt-[15px] px-[25px] bg-white rounded-t-[32px] ${styles.container} `}>

                    <div className={styles.search_div}>
                        <input
                            type="text"
                            placeholder='Search Plan...'
                            className={styles.search_bar} />
                        <div className='h-[36px] w-[36px] bg-[#A2DCF0] rounded-full flex item-center justify-center ' >
                            <Image
                                src={magnifier}
                                height={20}
                                width={20}
                                alt='Search icon'
                            />
                        </div>
                    </div>
                    <div className='mt-[8px]'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className='my-[8px] flex item-center p-[16px] bg-[#EDF0F4] rounded-[24px]' key={index}>
                                        <Image
                                            src={item.img}
                                            height={40}
                                            width={40}
                                            alt='Search icon'
                                            className='rounded-full'
                                        />
                                        <div className='ml-[12px]'>
                                            <p className='font-medium'>{item.title}</p>
                                            <p className='font-normal text-xs text-[#7C7D81]'>{item.sub_title}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
