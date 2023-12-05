import Header from '@/components/InformationGathering/Header'
import React, { useState } from 'react'
import styles from '@/styles/dashboard/dashboard.module.css'
import Image from 'next/image'
import withAuthProtection from '@/components/hoc/withAuthProtection'
import { HiOutlineEnvelope } from "react-icons/hi2";
import UpdateProfileModal from '@/components/updateProfileModal/UpdateProfileModal'

function Email() {

    const [showModal, setShowModal] = useState(false)
    const [newEmail, setNewEmail] = useState('')

    const isValidEmail = /\S+@\S+\.\S+/.test(newEmail);
    return (
        <div className={styles.main_conatiner}>
            <div style={{ margin: "0px 24px" }} >
                <Header progess={17} title="Email" link="" />
            </div>
            <div className={styles.container} >
                <div style={{ margin: "29px 24px" }} className='pt-[40px]'>
                    <div className='flex justify-between items-center'>
                        <p className='font-medium text-base	'>Current Email</p>
                        <p className="text-[#ADB3C2] text-[14px] font-normal ">{`test@gmail.com`}</p>
                    </div>
                    <div
                        style={{ boxShadow: '0px 12px 60px 0px rgba(67, 71, 77, 0.10)' }}
                        className='flex items-center mt-[19px] w-full h-[58px] bg-white rounded-[30px] px-[18px]'>
                        <HiOutlineEnvelope size={22} />
                        <input type="email"
                            className='ml-[12px] outline-none h-[24px] w-full'
                            placeholder='Change Name'
                            onChange={(e) => {
                                const newEmail = e.target.value;
                                // const isValidEmail = /\S+@\S+\.\S+/.test(newEmail); // Basic email format check

                                setNewEmail(newEmail);

                                // if (!isValidEmail) {
                                //   setValidationErr({
                                //     type: 'email',
                                //     err: 'Please enter a valid email address.',
                                //   });
                                // } else {
                                //   setValidationErr({ type: null, err: null });
                                // }
                            }}
                        />
                    </div>
                </div>
                {
                    showModal ? <UpdateProfileModal
                        title='Email Changed!'
                        disc='Your account email has been updated, you can already login with your new email.'
                    /> :

                        <div className='w-full fixed bottom-[54px] flex justify-center items-center '>
                            <button
                                onClick={() => setShowModal(true)}
                                className={`w-full h-[50px] rounded-[30px] ${newEmail ? 'bg-[#A1DBEF]  text-white' : 'bg-[#F4F8FC] text-[#ADB4C0]'} bg-[#F4F8FC] mx-[20px] text-[#ADB4C0]`}>
                                Change Email
                            </button>
                        </div>
                }

            </div>
        </div>
    )
}


export default withAuthProtection(Email);

