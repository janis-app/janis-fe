import Header from '@/components/InformationGathering/Header'
import React, { useState } from 'react'
import styles from '@/styles/dashboard/dashboard.module.css'
import Image from 'next/image'
import withAuthProtection from '@/components/hoc/withAuthProtection'
import { SlLock } from "react-icons/sl";
import UpdateProfileModal from '@/components/updateProfileModal/UpdateProfileModal'
import { changeUserPassword } from '@/lib/profile'

function Password() {


    const [userDetails ,setUserDetails] = useState({
        currentPassword: '',
        password: '',
        passwordConfirmation: '',
    })
    
    const [errMsg, setErrMsg] = useState('')
    // const [password, setPassword] = useState('')
    // const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [showModal, setShowModal] = useState(false)

    const containsNumber = (inputString) => {
        return /\d/.test(inputString);
    };

    function containsSymbol(str) {
        var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return regex.test(str);
    }


    const updatePassword = async (e) => {
        e.preventDefault();

        await changeUserPassword(userDetails)
          .then((res) => {
            console.log("request responce",res.error.message)
            if (res) {
              setSuccMsg('Password changed successfully');
              setUserDetails({
                currentPassword: '',
                password: '',
                passwordConfirmation: '',
              });
            //   setTimeout(() => {
            //     setSuccMsg('');
            //   }, 2000);
            }
          })
          .catch((err) => {
            if (res?.error?.message) {
              setErrMsg(`${res.error.message}`);
            }
          });
      };

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
                        value={userDetails.currentPassword}
                        onChange={(e)=> setUserDetails({...userDetails, currentPassword :e.target.value})}
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
                            value={userDetails.password}
                            // onChange={(e) => setPassword(e.target.value)}
                            onChange={(e)=> setUserDetails({...userDetails, password :e.target.value})}
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
                            value={userDetails.passwordConfirmation}
                            onChange={(e)=> setUserDetails({...userDetails, passwordConfirmation :e.target.value})}
                            // onChange={(e) => setPasswordConfirmation(e.target.value)}
                            className='ml-[12px] outline-none h-[24px] w-full'
                            placeholder='Confirm new password'
                        />
                    </div>
                    <div className="mx-auto text-center flex flex-col gap-[10px] text-[16px] font-[500] leading-24px]">
                        <div>
                            <span>{userDetails.password?.length > 7 ? "✅" : "❌"}</span> at
                            least 8 characters
                        </div>
                        <div>
                            <span>{containsNumber(userDetails.password) ? "✅" : "❌"}</span>{" "}
                            at least one number
                        </div>
                        <div>
                            <span>{containsSymbol(userDetails.password) ? "✅" : "❌"}</span>{" "}
                            at least one symbol
                        </div>
                    </div>
                    {
                        errMsg && <p style={{ color: 'red' }} className="text-center text-[20px] mt-[20px]">{errMsg}</p>
                    }
                </div>
                {
                    showModal ? <UpdateProfileModal
                        title='Password Changed!'
                        disc='Your account password has been updated, you can already login with your new password.'
                    /> :
                        <div className='w-full fixed bottom-[54px] flex justify-center items-center '>
                            <button
                                disabled={userDetails.password.length < 8}
                                onClick={(e) => {
                                    // setShowModal(true)
                                    updatePassword(e)
                                }}
                                className={`w-full h-[50px] rounded-[30px] mx-[20px] ${userDetails.password.length < 8 ? ' bg-[#F4F8FC]' : 'bg-[#A1DBEF]'} ${userDetails.password.length < 8 ? 'text-[#ADB4C0]' : 'text-white'} `}>
                                Change Password
                            </button>
                        </div>
                }



            </div>
        </div >
    )
}


export default withAuthProtection(Password);

