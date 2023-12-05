import Header from '@/components/InformationGathering/Header'
import React, { useState } from 'react'
import styles from '@/styles/dashboard/dashboard.module.css'
import Image from 'next/image'
import withAuthProtection from '@/components/hoc/withAuthProtection'
import { SlLock } from "react-icons/sl";
import UpdateProfileModal from '@/components/updateProfileModal/UpdateProfileModal'

function Password() {


    const [newPassword, setNewPassword] = useState('')
    const [showModal, setShowModal] = useState(false)

    const containsNumber = (inputString) => {
        return /\d/.test(inputString);
    };

    function containsSymbol(str) {
        var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return regex.test(str);
    }

    return (
        <div className={styles.main_conatiner}>
            <div style={{ margin: "0px 24px" }} >
                <Header progess={17} title="Password" link="" />
            </div>
            <div className={styles.container} >
                <div style={{ margin: "29px 24px" }} className='pt-[20px]'>
                    <div
                        style={{ boxShadow: '0px 12px 60px 0px rgba(67, 71, 77, 0.10)' }}
                        className='flex items-center mt-[19px] mb-[24px] w-full h-[58px] bg-white rounded-[30px] px-[18px]'>
                        <div className="flex items-center gap-[27px]">
                            <span className="w-[40px] h-[40px] flex justify-center items-center">
                                <SlLock size={22} />
                            </span>
                        </div>
                        <input type="password"
                            className='ml-[12px] outline-none h-[24px] w-full'
                            placeholder='Enter Current Password'
                        />
                    </div>
                    <div
                        style={{ boxShadow: '0px 12px 60px 0px rgba(67, 71, 77, 0.10)' }}
                        className='flex items-center mt-[19px] mb-[24px] w-full h-[58px] bg-white rounded-[30px] px-[18px]'>
                        <div className="flex items-center gap-[27px]">
                            <span className="w-[40px] h-[40px] flex justify-center items-center">
                                <SlLock size={22} />
                            </span>
                        </div>
                        <input type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='ml-[12px] outline-none h-[24px] w-full'
                            placeholder='Create new password'
                        />
                    </div>
                    <div
                        style={{ boxShadow: '0px 12px 60px 0px rgba(67, 71, 77, 0.10)' }}
                        className='flex items-center mt-[19px] mb-[24px] w-full h-[58px] bg-white rounded-[30px] px-[18px]'>
                        <div className="flex items-center gap-[27px]">
                            <span className="w-[40px] h-[40px] flex justify-center items-center">
                                <SlLock size={22} />
                            </span>
                        </div>
                        <input type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='ml-[12px] outline-none h-[24px] w-full'
                            placeholder='Confirm new password'
                        />
                    </div>
                    <div className="mx-auto text-center flex flex-col gap-[10px] text-[16px] font-[500] leading-24px]">
                        <div>
                            <span>{newPassword?.length > 7 ? "✅" : "❌"}</span> at
                            least 8 characters
                        </div>
                        <div>
                            <span>{containsNumber(newPassword) ? "✅" : "❌"}</span>{" "}
                            at least one number
                        </div>
                        <div>
                            <span>{containsSymbol(newPassword) ? "✅" : "❌"}</span>{" "}
                            at least one symbol
                        </div>
                    </div>
                    {/* {
                        err && <p style={{ color: 'red' }} className="text-center text-[20px] mt-[20px]">{err}</p>
                    } */}
                </div>
                {
                    showModal ? <UpdateProfileModal
                        title='Password Changed!'
                        disc='Your account password has been updated, you can already login with your new password.'
                    /> :
                        <div className='w-full fixed bottom-[54px] flex justify-center items-center '>
                            <button
                                onClick={() => setShowModal(true)}
                                className={`w-full h-[50px] rounded-[30px] ${newPassword ? 'bg-[#A1DBEF]  text-white' : 'bg-[#F4F8FC] text-[#ADB4C0]'} bg-[#F4F8FC] mx-[20px] text-[#ADB4C0]`}>
                                Change Password
                            </button>
                        </div>
                }



            </div>
        </div >
    )
}


export default withAuthProtection(Password);

