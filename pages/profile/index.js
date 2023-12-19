"use client"
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { PiCaretLeftBold } from "react-icons/pi";
import styles from "@/styles/profile/profile.module.css"
import setting from '@/public/assets/setting.svg'
import profile from '@/public/assets/profile.png'
import Image from 'next/image';
import location from '@/public/assets/location.svg'
import vector from '@/public/assets/Vector.svg'
import redo from '@/public/assets/redo.svg'
import transport from '@/public/assets/transport.svg'
import diet from '@/public/assets/diet.svg'
import budget from '@/public/assets/budget.svg'
import crew from '@/public/assets/crew.svg'
import pencil from '@/public/assets/pencil.svg'
import Switch from "react-switch";
import Link from 'next/link';
import { useRouter } from 'next/router';
import withAuthProtection from '@/components/hoc/withAuthProtection';
import { AppContext } from '@/components/context/AppContext';
import profileIcon from '@/public/assets/profileIcon.jpg'
import bg from "@/public/assets/profile-bg.png"
import { FiEdit } from 'react-icons/fi';
import { changeProfileImage } from '@/lib/profile';
import jp from "@/public/assets/jp.svg";
import it from "@/public/assets/it.svg";
import vn from "@/public/assets/vn.svg";
import es from "@/public/assets/es.svg";
import cn from "@/public/assets/cn.svg";
import ind from "@/public/assets/in.svg";
import us from "@/public/assets/us.svg";
import th from "@/public/assets/th.svg";
import turkey from "@/public/assets/tr.svg";
import mx from "@/public/assets/mx.svg";




const cuisine = [
    {
        img: jp,
        text: 'jp'
    },
    {
        img: it,
        text: 'it'
    },
    {
        img: vn,
        text: 'vn'
    },
    {
        img: es,
        text: 'es'
    },
    {
        img: cn,
        text: 'cn'
    },
    {
        img: ind,
        text: 'ind'
    },
    {
        img: us,
        text: 'us'
    },
    {
        img: th,
        text: 'th'
    },
    {
        img: turkey,
        text: 'turkey'
    },
    {
        img: mx,
        text: 'mx'
    },

]



function Profile() {
    const { state, dispatch } = useContext(AppContext)


    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [validationErr, setValidationErr] = useState({ type: '', err: '' })
    const [filterCuisine, setFilterCuisine] = useState([])
    const [filterInterest, setFilterInterest] = useState([])

    const userCuisines = useMemo(() => {
        return state?.user?.user?.information_gathering?.attributes?.cuisine_type ?
            state?.user?.user?.information_gathering?.attributes?.cuisine_type :
            state?.user?.user?.information_gathering?.cuisine_type;
    }, [state?.user?.user?.information_gathering?.attributes?.cuisine_type, state?.user?.user?.information_gathering?.cuisine_type]);


    const userInterest = useMemo(() => {
        return state?.user?.user?.information_gathering?.attributes?.Interests ?
            state?.user?.user?.information_gathering?.attributes?.Interests :
            state?.user?.user?.information_gathering?.Interests;
    }, [state?.user?.user?.information_gathering?.attributes?.Interests, state?.user?.user?.information_gathering?.Interests]);

    


    async function handleImageChange(e) {
        const file = e.target.files?.[0];

        if (file) {
            if (!isValidFileType(file)) {
                setValidationErr('Invalid file type. Only JPG and PNG files are allowed.');
            } else if (!isValidFileSize(file)) {
                setValidationErr('File size exceeds the maximum limit of 2MB.');
            } else {
                setValidationErr('');
                setSelectedImage(file);
            }
        }

        const res = await changeProfileImage(file, null, null);



        if (res?.success) {
            dispatch({
                type: "UPDATE_USER",
                payload: {
                    profile_image: res.profile_image
                }
            });
        }
    }



    useEffect(() => {
        if (userCuisines) {
            const filteredCuisine = cuisine.filter(item => userCuisines.includes(item.text));
            setFilterCuisine(filteredCuisine);
        }
    }, [state?.user?.user?.information_gathering?.cuisine_type]);

    useEffect(() => {
        if (userInterest) {
            const interestsArray = userInterest.split(',');
            const trimmedInterestsArray = interestsArray.map(item => item.trim());
            // console.log("trimmedInterestsArray", trimmedInterestsArray)
            setFilterInterest(trimmedInterestsArray)
        }
    }, [state?.user?.user?.information_gathering?.cuisine_type]);


    const isValidFileType = (file) => {
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const fileType = file.type.toLowerCase();
        return allowedTypes.includes(fileType);
    };
    const isValidFileSize = (file) => {
        if (file && file.size) {
            const maxSizeBytes = 2 * 1024 * 1024;
            return file.size <= maxSizeBytes;
        }
        return false; // or handle the case when file or file.size is null
    };

    const router = useRouter()

    const handleSwitch1 = (checked) => {
        setSwitch1(checked);
    };

    const handleSwitch2 = (checked) => {
        setSwitch2(checked);
    };

    const handleSwitch3 = (checked) => {
        setSwitch3(checked);
    };
    const data = [
        {
            img: "🚗",
            title: 'Transport',
        },
        {
            img: "🍲",
            title: 'Diet',
        },
        {
            img: "💰",
            title: 'Budget',
        },
        {
            img: "👱‍♂️",
            title: 'Crew',
        },
    ]

    const flag = [
        { img: it },
        { img: vn },
        { img: ind },
        { img: mx },
    ]

    return (
        <div>
            <div className={styles.main_conatiner}>
                <div className={styles.overlay_conatiner}>
                </div>
                <div className='px-[24px] pt-[24px] flex justify-between relative z-[20]'>
                    <div
                        className="bg-[#D9F5FE80]  h-[32px] w-[32px] flex justify-center items-center rounded-full"
                        onClick={() => router.back()}
                    >
                        <PiCaretLeftBold size={20} />
                    </div>
                    <Link href="/settings">
                        <Image
                            src={setting}
                            width={25}
                            height={25}
                            alt="setting icon"
                        />
                    </Link>
                </div>
                <div className={styles.container}>
                    <label htmlFor="file">
                        <p className={styles.profile_no}>5</p>
                        <input
                            type="file"
                            className="hidden h-[100%] w-[100%] rounded-full"
                            id='file'
                            name='files'
                            accept="image/*"
                            onChange={(e) => {
                                handleImageChange(e);
                            }}
                        />
                        <img
                            src={state?.user?.user?.profile_image ? state?.user?.user?.profile_image?.url : profileIcon}
                            // src={`https://res.cloudinary.com/dmbidfbiq/image/upload/v1699454859/service1_Image_b11ab5a96c.png`}
                            // width={108}
                            // height={108}
                            alt="Profile Image"
                            className="rounded-full"
                            style={{
                                border: "2px solid #fff",
                                width: "110px",
                                height: "110px"
                            }}
                        />
                    </label>
                    <h2 className='text-[22px] z-[10]' style={{ fontWeight: 700, marginTop: 17 }}>{state.user?.user?.username}</h2>
                    {
                        validationErr && <p className='text-[red]'>
                            {validationErr.err}
                        </p>
                    }
                    <p
                        style={{ fontSize: 14 }}
                        className='flex items-center z-[10]'>
                        <Image
                            src={location}
                            width={20}
                            height={20}
                            alt="location icon"
                        />
                        {/* Las Palmas, Gran Canaria, Spain */}
                        {state?.user?.user?.information_gathering?.attributes?.location ? state?.user?.user?.information_gathering?.attributes?.location : state?.user?.user?.information_gathering?.location}
                    </p>

                    <div className='flex flex-col gap-[10px] items-center mt-[17px]'>
                        <button className={styles.dashboardBtn} type='button' onClick={() => router.push('/dashboard')}>
                            Dashboard
                        </button>
                        <button className={styles.planBtn} type='button' onClick={() => router.push('/dashboard/plans')}>
                            <Image
                                src={vector}
                                width={13}
                                height={13}
                                alt="vector icon"
                            />
                            Your plans</button>
                    </div>
                </div>
                <div className={styles.profile_container}>
                    <h2 style={{ fontWeight: 600 }} className='text-[24px] font-semibold mb-[3px]'>Your profile</h2>
                    <button className={styles.redoBtn}>
                        Redo
                        <Image
                            src={redo}
                            width={14}
                            height={14}
                            alt="vector icon"
                        />
                    </button>

                    <hr style={{ margin: "16px 0px", color: '#DDE3EA' }} />

                    <div className='flex justify-between mb-[18px]'>
                        {
                            data.map((items, Index) => {
                                return (
                                    <div className={styles.card} key={Index}>
                                        <div className={styles.mini_card}>
                                            <p className='block !text-[22px] mb-[2px]'>{items?.img}</p>
                                        </div>
                                        <p className='text-[12px] font-[500] text-[#AFB3BC]'>{items.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={styles.personality}>
                        <div className='flex gap-[6px] mb-[11px] '>
                            <p className='text-[14px] font-[600] leading-[20px]'>Personality
                            </p>
                            {/* <Image
                                src={pencil}
                                width={20}
                                height={20}
                                alt="vector icon"
                            /> */}
                            <FiEdit color="#d3d3d3" />
                        </div>
                        <div className={styles.radius_container}>
                            <div className={styles.radius_div}>🤫</div>
                            <div className={styles.radius_div}>
                                <Image
                                    src={profile}
                                    width={20}
                                    height={20}
                                    alt="vector icon"
                                    className='rounded-full'
                                />
                            </div>
                            <div className={styles.radius_div}>🎉</div>
                        </div>
                    </div>
                    <div className='mt-[16px] h-auto'>
                        <Link
                            href="/information-gathering/interests?ref=edit-interest"
                            className='flex items-center gap-[6px] '>
                            <p className='text-[16px] font-[600] leading-[20px]'>Interests
                            </p>
                            {/* <Image
                                src={pencil}
                                width={20}
                                height={20}
                                alt="vector icon"
                            /> */}
                            <FiEdit color="#d3d3d3" />
                        </Link>
                        <div className='mt-[16px]'>
                            {
                                filterInterest?.map((item, index) => {
                                    return (
                                        <button key={index} className={styles.btn}>
                                            {item}
                                        </button>
                                    )
                                })
                            }
                            {/* <button className={styles.btn}>
                                🏖️ Beaches
                            </button>
                            <button className={styles.btn}>
                                🎵 Music
                            </button> */}
                        </div>
                    </div>

                    <div className={`mt-[28px] ${styles.personality}`}>
                        <Link
                            href="/information-gathering/diet?ref=edit-cuisine"
                            className='flex gap-[6px] mb-[11px] '>
                            <p className='text-[14px] font-[600] leading-[20px]'>Cuisine
                            </p>
                            {/* <Image
                                src={pencil}
                                width={22}
                                height={22}
                                alt="vector icon"
                            /> */}
                            <FiEdit color="#d3d3d3" />
                        </Link>
                        <div className='flex  items-center '>
                            {filterCuisine?.map((items, Index) => {
                                return (
                                    <div className={styles.radius_div} key={Index}>
                                        <Image
                                            src={items.img}
                                            width={18}
                                            height={18}
                                            alt="vector icon"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <p style={{ fontWeight: 700 }} className='text-left mt-[20px] text-[16px] leading-[20px]'>Intolerances</p>
                        <div style={{ marginTop: 16 }} >
                            <div className='flex justify-between items-center w-full px-[16px] py-[14px]'>
                                <p style={{ fontSize: 14, fontWeight: 500 }}>🥛 Lactose-intolerance</p>
                                <Switch
                                    onChange={handleSwitch1}
                                    onColor="#B9E6F5"
                                    checked={switch1}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />

                            </div>
                            <div className='flex justify-between items-center w-full px-[16px] py-[14px]'>
                                <p style={{ fontSize: 14, fontWeight: 500 }}>🌾 Gluten-intolerance</p>
                                <Switch
                                    onChange={handleSwitch2}
                                    checked={switch2}
                                    onColor="#B9E6F5"
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />

                            </div>
                            <div className='flex justify-between items-center w-full px-[16px] py-[14px]'>
                                <p style={{ fontSize: 14, fontWeight: 500 }}>🍓 Fructose-intolerance</p>
                                <Switch
                                    onChange={handleSwitch3}
                                    checked={switch3}
                                    onColor="#B9E6F5"
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default withAuthProtection(Profile);

