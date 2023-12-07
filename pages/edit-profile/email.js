import Header from '@/components/InformationGathering/Header'
import React, { useContext, useState } from 'react'
import styles from '@/styles/dashboard/dashboard.module.css'
import Image from 'next/image'
import withAuthProtection from '@/components/hoc/withAuthProtection'
import { HiOutlineEnvelope } from "react-icons/hi2";
import UpdateProfileModal from '@/components/updateProfileModal/UpdateProfileModal'
import { AppContext } from '@/components/context/AppContext'
import { updateUserAccounnt } from '@/lib/profile'

function Email() {
    const {state, dispatch} = useContext(AppContext)

    const [showModal, setShowModal] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [validationErr, setValidationErr] = useState({ type: '', err: '' })

    const isValidEmail = /\S+@\S+\.\S+/.test(newEmail);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        let data = { email: newEmail };
        updateUserAccounnt(data)
          .then((res) => {
            if (res?.id) {
                dispatch({
                    type: "UPDATE_USER",
                    payload: {
                        email: newEmail
                    }
                  });
            //   setSuccMsg('Changes Saved Successfully');
            //   setErrMsg('')
            //   setTimeout(() => {
            //     setSuccMsg('');
            //   }, 2000);
            setNewEmail("")
            setShowModal(true)
            }
          })
          .catch((err) => {
            if (err?.response?.data?.error?.message) {
              setErrMsg(`${err?.response?.data?.error?.message}`);
            }
          });
      };
    



    return (
        <div className={styles.main_conatiner}>
            <div style={{ margin: "0px 24px" }} >
                <Header progess={17} title="Email" link="" />
            </div>
            <div className={styles.container} >
                <div style={{ margin: "29px 24px" }} className='pt-[40px]'>
                    <div className='flex justify-between items-center'>
                        <p className='font-medium text-base	'>Current Email</p>
                        <p className="text-[#ADB3C2] text-[14px] font-normal ">{state.user?.email}</p>
                    </div>
                    <div
                        style={{ boxShadow: '0px 12px 60px 0px rgba(67, 71, 77, 0.10)' }}
                        className='flex items-center mt-[19px] w-full h-[58px] bg-white rounded-[30px] px-[18px]'>
                        <HiOutlineEnvelope size={22} />
                        <input type="email"
                        value={newEmail}
                            className='ml-[12px] outline-none h-[24px] w-full'
                            placeholder='Change Name'
                            onChange={(e) => {
                                const newEmail = e.target.value;
                                const isValidEmail = /\S+@\S+\.\S+/.test(newEmail); // Basic email format check

                                setNewEmail(newEmail);

                                if (!isValidEmail) {
                                  setValidationErr({
                                    type: 'email',
                                    err: 'Please enter a valid email address.',
                                  });
                                } else {
                                  setValidationErr({ type: null, err: null });
                                }
                            }}
                        />
                    </div>
                    <p className="text-[#f54242] text-center mt-[10px]"> {(validationErr.type == 'email' && validationErr.err)}</p>

                </div>
                {
                    showModal ? <UpdateProfileModal
                        title='Email Changed!'
                        disc='Your account email has been updated, you can already login with your new email.'
                    /> :

                        <div className='w-full fixed bottom-[54px] flex justify-center items-center '>
                            <button
                            disabled={newEmail.trim()===""}
                                onClick={(e) => {
                                    // setShowModal(true)
                                    handleProfileUpdate(e)
                                }}
                                className={`w-full h-[50px] rounded-[30px]  mx-[20px] ${newEmail.trim()==="" ? 'bg-[#F4F8FC]' : 'bg-[#A1DBEF]'} ${newEmail.trim()==="" ? 'text-[#ADB4C0]' : 'text-white'} `}>
                                Change Email
                            </button>
                        </div>
                }

            </div>
        </div>
    )
}


export default withAuthProtection(Email);

