"use client"
import React, { useState } from 'react'
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
import it from '@/public/assets/it.svg'
import vn from '@/public/assets/vn.svg'
import ind from '@/public/assets/in.svg'
import mx from '@/public/assets/mx.svg'
import Switch from "react-switch";
import { useRouter } from 'next/router';


export default function Profile() {

    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);

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
            img: transport,
            title: 'Transport',
        },
        {
            img: diet,
            title: 'Diet',
        },
        {
            img: budget,
            title: 'Budget',
        },
        {
            img: crew,
            title: 'Crew',
        },
    ]

    const flag = [
        {img: it},
        {img: vn},
        {img: ind},
        {img: mx},
    ]

    return (
        <>
            <div className={styles.main_conatiner}>
                <div className='px-[24px] pt-[24px] flex justify-between'>
                    <div
                        className="bg-[#D9F5FE80]  h-[32px] w-[32px] flex justify-center items-center rounded-full"
                        onClick={() => router.back()}
                    >
                        <PiCaretLeftBold size={20} />
                    </div>
                    <Image
                        src={setting}
                        width={25}
                        height={25}
                        alt="setting icon"
                        onClick={()=>router.push('/settings')}
                    />
                </div>
                <div className={styles.container}>
                    <div>
                        <p className={styles.profile_no}>5</p>
                        <Image
                            src={profile}
                            width={108}
                            height={108}
                            alt="setting icon"
                            className="rounded-full"
                            style={{ border: "2px solid #fff" }}
                        />
                    </div>
                    <h2 style={{ fontWeight: 700, marginTop: 17 }}>Janis</h2>
                    <p
                        style={{ fontSize: 14 }}
                        className='flex items-center'>
                        <Image
                            src={location}
                            width={14}
                            height={14}
                            alt="location icon"
                        />
                        Las Palmas, Gran Canaria, Spain
                    </p>

                    <div className='flex items-center mt-[17px]'>
                        <button className={styles.dashboardBtn}>
                            Dashboard
                        </button>
                        <button className={styles.planBtn}>
                            <Image
                                src={vector}
                                width={13}
                                height={13}
                                alt="vector icon"
                            />
                            Your plan</button>
                    </div>
                </div>
                <div className={styles.profile_container}>
                    <h2 style={{ fontWeight: 600 }}>Your profile</h2>
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

                    <div className='flex justify-between'>
                        {
                            data.map((items, Index) => {
                                return (
                                    <div className={styles.card} key={Index}>
                                        <div className={styles.mini_card}>
                                            <Image
                                                src={items.img}
                                                width={22}
                                                height={22}
                                                alt="vector icon"
                                            />
                                        </div>
                                        <p>{items.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={styles.personality}>
                        <p>Personality
                            <Image
                                src={pencil}
                                width={22}
                                height={22}
                                alt="vector icon"
                            />
                        </p>
                        <div className={styles.radius_container}>
                            <div className={styles.radius_div}>🤫</div>
                            <div className={styles.radius_div}>
                                <Image
                                    src={profile}
                                    width={22}
                                    height={22}
                                    alt="vector icon"
                                    className='rounded-full'
                                />
                            </div>
                            <div className={styles.radius_div}>🎉</div>
                        </div>
                    </div>
                    <div className='mt-[16px] h-auto'>
                        <p className='flex items-center'>Interests
                            <Image
                                src={pencil}
                                width={22}
                                height={22}
                                alt="vector icon"
                            />
                        </p>
                        <div className='mt-[16px]'>
                            <button className={styles.btn}>
                                🏞️ Hiking
                            </button>
                            <button className={styles.btn}>
                                🏖️ Beaches
                            </button>
                            <button className={styles.btn}>
                                🎵 Music
                            </button>
                        </div>
                    </div>

                    <div className={`mt-[28px] ${styles.personality}`}>
                        <p>Cuisine
                            <Image
                                src={pencil}
                                width={22}
                                height={22}
                                alt="vector icon"
                            />
                        </p>

                        <div className='flex justify-between items-center '>
                            {flag.map((items, Index) => {
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
                        <p style={{ fontWeight: 700 }} className='text-left mt-[20px]'>Intolerances</p>
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
        </>
    )
}
