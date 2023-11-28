import React from 'react'
import styles from '@/styles/dashboard/plans.module.css'
import Header from '@/components/InformationGathering/Header'
import profile from '@/public/assets/profileImg.svg'
import magnifier from "@/public/assets/search.svg"
import Image from 'next/image'
import map1 from '@/public/assets/map1.png'
import map2 from '@/public/assets/map2.png'
import map3 from '@/public/assets/map3.png'
import map4 from '@/public/assets/map4.png'
import map5 from '@/public/assets/map5.png'
import calendar from '@/public/assets/calendar.svg'
import location from '@/public/assets/loc_icon.svg'
import withAuthProtection from '@/components/hoc/withAuthProtection'
function Plans() {
    const plans = [
        {
            img: map1,
            title: 'Las Palmas',
            date: '17th September 2023',
            loc: 'Gran Canaria, Spain',
            time: '8.5h',
            distance: '57km',
            money: '20€ '
        },
        {
            img: map2,
            title: 'Tarifa',
            date: '3rd September 2023',
            loc: 'Andalusia, Spain',
            time: '7h',
            distance: '33km',
            money: '40€ '
        },
        {
            img: map3,
            title: 'Amsterdam',
            date: '28th August 2023',
            loc: 'Netherlands',
            time: '7.5h',
            distance: '7km',
            money: '70€ '
        },
        {
            img: map1,
            title: 'Sevilla',
            date: '26th August 2023',
            loc: 'Andalusia, Spain',
            time: '8h',
            distance: '17km',
            money: '35€ '
        },
        {
            img: map5,
            title: 'Capoliveri',
            date: '20th August 2023',
            loc: 'Isola dElba, Italy',
            time: '7.7h',
            distance: '47km',
            money: '55€ '
        },
    ]
    return (
        <>
            <div className={styles.main_conatiner}>
                <div style={{ margin: "0px 24px" }} >
                    <Header progess={17} title="Recent plans" link="" profile={profile} />
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
                    <div >
                        {
                            plans.map((item, index) => {
                                return (
                                    <div className='bg-[#EDF0F4] p-[10px] rounded-[20px] flex justify-between item-center rounded-[10px] mt-[20px]' key={index}>
                                        <Image
                                            src={item.img}
                                            height={80}
                                            width={80}
                                            alt='map image'
                                        />
                                        <div className='flex flex-col justify-between item-center mt-[7px] mb-[14px]'>
                                            <p className='flex item-center text-xs text-[#B4B4B4] '>
                                                <Image
                                                    src={calendar}
                                                    height={16}
                                                    width={16}
                                                    alt='map image'
                                                />
                                                {item.date}
                                            </p>
                                            <p className='text-sm font-medium'>{item.title}</p>
                                            <p className='flex item-center text-xs text-[#B4B4B4]'>
                                                <Image
                                                    src={location}
                                                    height={16}
                                                    width={16}
                                                    alt='map image'
                                                />
                                                {item.loc}
                                            </p>
                                        </div>
                                        <div className='flex flex-col justify-between item-center mt-[7px] mb-[14px]'>
                                            <p className='text-[10px] text-[#B4B4B4]'>🕖 {item.time}</p>
                                            <p className='text-[10px] text-[#B4B4B4]'>🛣️ {item.distance}</p>
                                            <p className='text-[10px] text-[#B4B4B4]'>💶 {item.money}</p>
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

export default withAuthProtection(Plans);

