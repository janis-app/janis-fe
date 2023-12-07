import Header from '@/components/InformationGathering/Header'
import React, { useContext } from 'react'
import styles from '@/styles/dashboard/dashboard.module.css'
import Image from 'next/image'
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import { SlLock } from "react-icons/sl";
import Link from 'next/link'
import withAuthProtection from '@/components/hoc/withAuthProtection'
import profile_svg from '@/public/assets/profile_svg.svg'
import { AppContext } from '@/components/context/AppContext';

function EditProfile() {
    const {state, dispatch} = useContext(AppContext)
    // console.log("state value for edit profile",state.user)

    return (
        <div className={styles.main_conatiner}>
            <div style={{ margin: "0px 24px" }} >
                <Header progess={17} title="Edit Profile" link="" />
            </div>
            <div className={styles.container} >
                <div style={{ margin: "29px 24px" }} className='pt-[20px]'>

                    <Link 
                        href={'/edit-profile/name'}
                         className="flex justify-between mb-[24px]">
                        <div className="flex items-center gap-[27px]">
                            <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                                <Image
                                    src={profile_svg}
                                    height={22}
                                    width={22}
                                    alt='Profile svg'
                                />
                            </span>
                            <p className="text-[16px] font-medium">Name</p>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <p className="text-[#ADB3C2] text-[14px] font-normal text-right">
                            {state?.user?.username}
                            </p>
                            <RxCaretRight color="#C8C9CF" size={30} />
                        </div>
                    </Link>
                    <Link 
                    href={'/edit-profile/email'}
                    className="flex justify-between mb-[24px]">
                        <div className="flex items-center gap-[27px]">
                            <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                                <HiOutlineEnvelope size={22} />
                            </span>
                            <p className="text-[16px] font-medium">Email</p>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <p className="text-[#ADB3C2] text-[14px] font-normal text-right">
                                {state?.user?.email}
                            </p>
                            <RxCaretRight color="#C8C9CF" size={30} />
                        </div>
                    </Link>
                    <Link
                    href={'/edit-profile/password'}
                    className="flex justify-between mb-[24px]">
                        <div className="flex items-center gap-[27px]">
                            <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                                <SlLock size={22} />
                            </span>
                            <p className="text-[16px] font-medium">Password</p>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <RxCaretRight color="#C8C9CF" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default withAuthProtection(EditProfile);

