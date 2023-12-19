import Header from '@/components/InformationGathering/Header'
import React, { useContext, useState } from 'react'
import styles from '@/styles/dashboard/dashboard.module.css'
import Image from 'next/image'
import withAuthProtection from '@/components/hoc/withAuthProtection'
import profile_svg from '@/public/assets/profile_svg.svg'
import UpdateProfileModal from '@/components/updateProfileModal/UpdateProfileModal'
import { AppContext } from '@/components/context/AppContext'
import { getTokenFromLocalCookie } from '@/lib/auth'
import { updateUserAccounnt } from '@/lib/profile'

function Name() {
    const { state, dispatch } = useContext(AppContext)

    const [newName, setNewName] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        let data = { username: newName };
        updateUserAccounnt(data)
            .then((res) => {
                if (res?.id) {
                    setErrMsg('')
                    dispatch({
                        type: "UPDATE_USER",
                        payload: {
                                username: newName
                        }
                    });
                    //   setTimeout(() => {
                    //     setSuccMsg('');
                    //   }, 2000);
                    setNewName('')
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
                <Header progess={17} title="Name" link="" />
            </div>

            <div className={styles.container} >
                <div style={{ margin: "29px 24px" }} className='pt-[40px]'>
                    <div className='flex justify-between items-center'>
                        <p className='font-medium text-base	'>Current Name</p>
                        <p className="text-[#ADB3C2] text-[14px] font-normal ">{state.user?.user?.username}</p>
                    </div>

                    <div
                        style={{ boxShadow: '0px 12px 60px 0px rgba(67, 71, 77, 0.10)' }}
                        className='flex items-center mt-[19px] w-full h-[58px] bg-white rounded-[30px] px-[18px]'>
                        <Image
                            src={profile_svg}
                            alt='Profile svg'
                        />
                        <input type="text "
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className='ml-[12px] outline-none h-[24px] w-full'
                            placeholder='Change Name'
                        />
                    </div>
                </div>
                {
                    showModal
                        ?
                        <UpdateProfileModal
                            title='Name Changed!'
                            disc='Your account name has been updated.'
                        />
                        :
                        <div
                            className='absolute px-[5%] w-[100%] bottom-[54px] flex justify-center items-center '
                        >
                            <button
                                disabled={newName.length < 3}
                                onClick={(e) => {
                                    handleProfileUpdate(e)
                                }}
                                className={`w-full h-[50px] rounded-[30px] ${newName.length >= 3 ? 'bg-[#A1DBEF]' : 'bg-[#F4F8FC]'} ${newName.length >= 3 ? 'text-white' : 'text-[#ADB4C0]'}`}>
                                Change Name
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}


export default withAuthProtection(Name);

