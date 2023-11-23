import Header from '@/components/InformationGathering/Header'
import React from 'react'
import profile from '@/public/assets/profileImg.svg'
import styles from '@/styles/dashboard/dashboard.module.css'
import Image from 'next/image'
import arrowIcon from "@/public/assets/arrowIcon.svg"
import Link from 'next/link'

export default function Dashboard() {
  const data = [
    {
      title: "🌋 Volcano Visit",
      disc: "Las Palmas"
    },
    {
      title: "🍽️ Lunch Locale",
      disc: "Las Palmas"
    },
    {
      title: "🧘‍♂ Yoga in Nature Reserve ",
      disc: "Tarifa"
    },

  ]

  return (
    <div className={styles.main_conatiner}>
      <div style={{ margin: "0px 24px" }} >
        <Header progess={17} title="Dashboard" link="" profile={profile} />
      </div>
      <div className={styles.container}>
        <div style={{ margin: "29px 24px" }} className='pt-[10px]'>
          <p style={{ fontSize: 12, paddingTop: 19 }}>Credits</p>
          <h1>5</h1>
          <Link href="/dashboard/credits" className={styles.creditBtn} type='button' >
            <Image
              src={arrowIcon}
              width={24}
              height={24}
              alt="Profile image"
              className="rounded-2xl"
            /> <h2>Get credits</h2>
          </Link>

          <div className='mt-[21px] flex justify-between items-center'>
            <p>Recent plans</p>
            <Link href='/dashboard/plans' className={styles.viewAll}  >View All</Link>
          </div>
          <div className='flex justify-between items-center'>
            <div className={styles.recent_div}>
              <p className={styles.recent_div_heading}>Las Palmas, Spain</p>
              <p className={styles.date}>17th September 2023</p>
              <p className={styles.info}>🕖 8.5h   🛣️ 57km  💶 20€ </p>
            </div>
            <div className={styles.recent_div}>
              <p className={styles.recent_div_heading}>Las Palmas, Spain</p>
              <p className={styles.date}>17th September 2023</p>
              <p className={styles.info}>🕖 8.5h   🛣️ 57km  💶 20€ </p>
            </div>
          </div>

        </div>


        <div className={styles.sub_container}>
          <div className='flex justify-between items-center'>
            <p style={{ fontWeight: 700 }}>You liked</p>
            <Link href="/dashboard/likes" className={styles.viewAll}>View All</Link>
          </div>

          {
            data.map((items, index) => {
              return (
                <div className={styles.card} key={index}>
                  <div className={styles.ellips}></div>
                  <div style={{ marginLeft: 12 }}>
                    <p style={{ fontWeight: 500 }}>{items.title}</p>
                    <p className={styles.disc}>{items.disc}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
