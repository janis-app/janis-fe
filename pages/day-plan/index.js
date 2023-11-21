"use client";
import Header from "@/components/InformationGathering/Header";
import React, { useState } from "react";
import profile from "@/public/assets/profileImg.svg";
import styles from "@/styles/day-plan/day-plan.module.css";
import Image from "next/image";
import location from "@/public/assets/location.svg";
import mdi_like from "@/public/assets/mdi_like.svg";
import cardImg1 from "@/public/assets/cardimg1.svg";
import cardImg2 from "@/public/assets/cardImg2.svg";
import cardImg3 from "@/public/assets/cardImg3.svg";
import cardImg4 from "@/public/assets/cardImg4.svg";
import arrow from "@/public/assets/arrowright.svg";
import darkArrow from "@/public/assets/darkArrow.svg";
import mask1 from "@/public/assets/Mask.png";
import mask2 from "@/public/assets/Mask1.png";
import mask3 from "@/public/assets/Mask2.png";
import sun from "@/public/assets/sun.svg";
import track from "@/public/assets/track.png";
import box from "@/public/assets/box.png";
import arrow1 from "@/public/assets/arrow.png";

export default function DayPlan() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [updatedIndex, setUpdatedIndex] = useState(null);
  const [foodIndex, setFoodIndex] = useState(null);
  const accordionHandler = (index) => {
    setIsTextVisible(!isTextVisible);
    setUpdatedIndex(index);
  };
  const colorHandler = (index) => {
    setFoodIndex(index);
  };
  const data = [
    {
      title: "☕  Coffee Kickstart",
      time: "08:00 AM",
      disc: 'Start your day early with a cup of coffee at "Ristretto Coffee Shop", it has great reviews... and a comfortable ambience',
    },
    {
      title: "🌋  Volcano Visit",
      time: "09:00 AM",
      disc: 'Drive down to "Caldera de Bandama", a volcanic crater located in the island could... hike up the trail for a panoramic view of the island while enjoying the tranquility of nature.',
    },
    {
      title: "🌷  Garden Gaze",
      time: "11:00 AM",
      disc: 'Visit "Jardin Botanico Canario Viera Y Clavijo" - a beautiful botanical garden that houses a variety of endemic plants. Perfect for some photography.',
    },
    {
      title: "🍽️  Lunch Locale",
      time: "01:00 AM",
      disc: 'Lunch at "Bochinche El Chato". Its a local restaurant known for its seafood dishes.',
    },
    {
      title: "🧘‍♂️  Reservoir Relax",
      time: "02:00 AM",
      disc: 'Drive towards "Presa de las Niñas", a beautiful reservoir surrounded by pine trees. You could... spend some time there taking in the scenery and snap some great photos.',
    },
  ];

  const menu = [
    {
      title: "Food",
      subTitle: "3 locations",
      img: cardImg1,
    },
    {
      title: "Activities",
      subTitle: "2 locations",
      img: cardImg2,
    },
    {
      title: "Viewpoints",
      subTitle: "4 locations",
      img: cardImg3,
    },
    {
      title: "Breaks",
      subTitle: "2 locations",
      img: cardImg4,
    },
  ];
  return (
    <div className={styles.main_container}>
      <div className="absolute left-[6rem] top-[6rem]">
        <Image src={track} alt="track" />
      </div>
      <div style={{ margin: "0px 24px" }}>
        <Header progess={17} link="" profile={profile} />
      </div>
      <div className={styles.conatiner}>
        <div className="flex justify-between">
          <div>
            <h2 style={{ fontWeight: 600 }}>Janis’ Day Plan</h2>
            <p className={styles.location}>
              <Image
                src={location}
                width={20}
                height={20}
                alt="location icon"
              />
              Las Palmas, Gran Canaria, Spain
            </p>
          </div>
          <div className={styles.mdi_like}>
            <Image src={mdi_like} width={24} height={24} alt="location icon" />
          </div>
          <div className={styles.temp_div}>
            <div
              style={{
                alignItems: "flex-end",
                border: "1px solid white",
                backgroundColor: "#A1DBEF",
                borderRadius: "50%",
                position: "relative",
                top: -4,
                left: 18,
              }}
            >
              <Image src={sun} width={18} height={18} alt="sun image" />
            </div>
            <p style={{ display: "flex", fontSize: 14, marginTop: -8 }}>25°</p>
            <p style={{ fontSize: 8, padding: 0, margin: 0, color: "#fff" }}>
              Sunny
            </p>
          </div>
        </div>

        <hr style={{ margin: "16px 0px", color: "#DDE3EA" }} />

        <div className="flex justify-between">
          <div className={styles.time_card}>
            <p style={{ color: "#7B8487", fontSize: 10 }}>Time</p>
            <p style={{ fontWeight: 600 }}>8.5h</p>
          </div>
          <div className={styles.time_card}>
            <p style={{ color: "#7B8487", fontSize: 10 }}>Distance</p>
            <p style={{ fontWeight: 600 }}>57km</p>
          </div>
          <div className={styles.time_card}>
            <p style={{ color: "#7B8487", fontSize: 10 }}>Budget</p>
            <p style={{ fontWeight: 600 }}>20€</p>
          </div>
          <div className={styles.time_card}>
            <p style={{ color: "#7B8487", fontSize: 10 }}>Transport</p>
            <p style={{ fontWeight: 600 }}>🚗</p>
          </div>
        </div>

        <hr style={{ margin: "16px 0px", color: "#DDE3EA" }} />

        <p style={{ fontSize: 14, fontWeight: 400, color: "#B0B6BF" }}>
          Embark on a day of volcanic vistas, serene reservoir retreats, and
          sunsets on sandy shores in Las Palmas.Your camera and soul will thank
          you!
        </p>
      </div>
      <div className="mx-[24px] grid grid-cols-2 gap-x-[18px] gap-y-[12px]">
        <div className=" p-[12px] bg-[#697EEF] rounded-[15px]">
          <div className="w-[30px] h-[30px] bg-white rounded-full mb-[15px] flex justify-center items-center">
            <p>🍴</p>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-white">
                <h3 className="font-medium text-[14px]">Food</h3>
                <p className="text-[#AAA3FF] text-[12px] font-normal leading-[14.32px]">3 locations</p>
            </div>
            <div>
                <Image src={box} alt="box" />
            </div>
          </div>
        </div>
        <div className="p-[12px] bg-[#22B1D1] rounded-[15px]">
          <div className="w-[30px] h-[30px] bg-white rounded-full mb-[15px] flex justify-center items-center">
            <p>🏃🏼‍♀️</p>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-white">
                <h3 className="font-medium text-[14px]">Activities</h3>
                <p className="text-[#6EDFF8] text-[12px] font-normal leading-[14.32px]">2 locations</p>
            </div>
            <div>
                <Image src={arrow1} alt="box" />
            </div>
          </div>
        </div>
        <div className="p-[12px] bg-[#FB9D2E] rounded-[15px]">
          <div className="w-[30px] h-[30px] bg-white rounded-full mb-[15px] flex justify-center items-center">
            <p>📸</p>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-white">
                <h3 className="font-medium text-[14px]">Viewpoints</h3>
                <p className="text-[#FFCF95] text-[12px] font-normal leading-[14.32px]">4 locations</p>
            </div>
            <div>
                <Image src={arrow1} alt="box" />
            </div>
          </div>
        </div>
        <div className="p-[12px] bg-[#FF477D] rounded-[15px]">
          <div className="w-[30px] h-[30px] bg-white rounded-full mb-[15px] flex justify-center items-center">
            <p>⏸️</p>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-white">
                <h3 className="font-medium text-[14px]">Breaks</h3>
                <p className="text-[#FFCF95] text-[12px] font-normal leading-[14.32px]">2 locations</p>
            </div>
            <div>
                <Image src={arrow1} alt="box" />
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar px-[20px] mt-[20px] flex items-center">
        <div className={`mr-[15px] ${styles.sidebar}`}>
          <div className={styles.sidebar_line} style={{ height: 32 }}></div>
          <div className={styles.sidebar_circle}></div>
          <div className={styles.sidebar_line} style={{ height: 85 }}></div>
          <div className={styles.sidebar_circle}></div>
          <div className={styles.sidebar_line} style={{ height: 85 }}></div>
          <div className={styles.sidebar_circle}></div>
          <div className={styles.sidebar_line} style={{ height: 85 }}></div>
          <div className={styles.sidebar_circle}></div>
          <div className={styles.sidebar_line} style={{ height: 85 }}></div>
          <div className={styles.sidebar_circle}></div>
          <div className={styles.sidebar_line} style={{ height: 32 }}></div>
        </div>
        <div className="mr-[4px]">
          {data.map((items, index) => {
            return (
              <div
                onClick={() => accordionHandler(index)}
                key={index}
                className={`${index == updatedIndex ? "bg-[#DAF5FE]" : "bg-transparent"} w-auto p-[15px] mt-[12px] rounded-[10px] border-2 border-[#DAF5FE]`}
              >
                <div className="flex justify-between ">
                  <p style={{ fontWize: 500, fontSize: 15 }}>{items.title}</p>
                  <p style={{ fontSize: 13 }}>{items.time}</p>
                </div>

                {isTextVisible && updatedIndex == index ? (
                  <>
                    <p style={{ fontSize: 12, color: "#7A7676" }}>
                      {items.disc}
                    </p>
                    <div className="flex items-center">
                      <Image
                        className={styles.sub_img}
                        src={mask1}
                        width={43}
                        height={43}
                        alt="rights arrow"
                      />
                      <Image
                        className={styles.sub_img}
                        src={mask2}
                        width={43}
                        height={43}
                        alt="rights arrow"
                      />
                      <Image
                        className={styles.sub_img}
                        src={mask3}
                        width={43}
                        height={43}
                        alt="rights arrow"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <p style={{ fontSize: 12, color: "#7A7676" }}>
                      {items.disc.length > 15
                        ? items.disc.slice(0, 90) + "..."
                        : items.disc}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
