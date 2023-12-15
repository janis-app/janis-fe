"use client";
import styles from "@/styles/food.module.css";
import Image from "next/image";
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
import Switch from "react-switch";
import { useState } from "react";
import Button from "../Common/Buttons";

export default function DietItems({
  lactose,
  setLactose,
  gluten,
  setGluten,
  fructose,
  setFructose,
  setDietType,
  cuisineType,
  setCuisineType,
  dietType,
}) {
  // const [lactose, setLacktose] = useState(false);
  // const [gluten, setGluten] = useState(false);
  // const [fructose, setFructose] = useState(false);
  // const [selectedBtn, setSelectedBtn] = useState(null);
  const [cuisineindex, setCuisineindex] = useState([]);
  // const [selectedCousines, setSelectedCousines] = useState([]);

  // console.log("selectedCousines: ", cuisineType);

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

  // const cousinesHandler = (newCousine) => {
  //   console.log("cuisine array length=>", cuisineType.length);
  //   if (cuisineType.length < 5) {
  //     setCuisineType([...cuisineType, newCousine]) 
  //   }
  // }

  const cousinesHandler = (newCousine) => {
    console.log("cuisine array length =>", cuisineType.length);
  
    // Check if the newCousine is already in the array
    const isCuisineExist = cuisineType.includes(newCousine);
  
    if (isCuisineExist) {
      // If the cuisine already exists, remove it from the array
      const updatedCuisineType = cuisineType.filter(cuisine => cuisine !== newCousine);
      setCuisineType(updatedCuisineType);
    } else {
      // If the cuisine does not exist and the array length is less than 5, add it to the array
      if (cuisineType.length < 5) {
        setCuisineType([...cuisineType, newCousine]);
      }
    }
  };
  


  const colorHandler = (index) => {
    setCuisineindex([index, ...cuisineindex]);
  };

  const lactoseHandler = () => {
    setLactose(!lactose);
  };

  const glutenHandler = () => {
    setGluten(!gluten);
  };

  const fructoseHandler = () => {
    setFructose(!fructose);
  };

  const clickHandler = (title) => {
    setCuisineType(title);
  };

  const selectDietType = (type) => {
    setDietType(type);
  };


  const handleBtnClick = async () => {
    setLoading(true);
    const token = getTokenFromLocalCookie();
    await axios({
      url: state?.user?.user?.information_gathering?.id
        ? process.env.NEXT_PUBLIC_STRAPI_URL +
        `/information-gatherings/${state?.user?.user?.information_gathering?.id}`
        : process.env.NEXT_PUBLIC_STRAPI_URL + `/information-gatherings`,
      method: state?.user?.user?.information_gathering ? "put" : "post",
      data: {
        data: {
          crew: value,
          users_permissions_user: state?.user?.user,
        },
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        setLoading(false);
        router.push("/start-adventure/location");
        if (res) {
          dispatch({
            type: "UPDATE_USER_INFOMATION_GATHERING",
            payload: res?.data?.data,
          });
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };


  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.contentDiv}>
          <div style={{ textAlign: "center" }}>
            <p className={styles.text}>Diet</p>
            <div className={styles.btnDiv}>
              <Button
                title="🥩 Omnivore"
                clickHandler={() => selectDietType("🥩 Omnivore")}
                selectedBtn={dietType}
              />
              <Button
                title="🐟 Pescatarian"
                clickHandler={() => selectDietType("🐟 Pescatarian")}
                selectedBtn={dietType}
              />
            </div>
            <div className={styles.btnDiv}>
              <Button
                title="🌱 Vegan"
                clickHandler={() => selectDietType("🌱 Vegan")}
                selectedBtn={dietType}
              />
              <Button
                title="🚫🥩 Vegetarian"
                clickHandler={() => selectDietType("🚫🥩 Vegetarian")}
                selectedBtn={dietType}
              />
            </div>
            <p className={styles.text}>Cuisine</p>
            <div className={styles.countryBtn} style={{ marginBottom: 20 }}>
              {
                cuisine.map((item, index) => {
                  return (
                    <button key={index}
                      className={styles.btns}
                      style={{
                        backgroundColor:
                          cuisineType.includes(item.text) ? "#D9F5FE80" : "#F9FAFB",
                      }}
                      onClick={() => {
                        // clickHandler(item.text)
                        cousinesHandler(item.text)
                      }}
                    >
                      <Image
                        src={item.img}
                        width={16}
                        height={20}
                        alt="Picture of the author"
                      />
                    </button>
                  )
                })
              }
              {/* <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "it" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("it")}
              >
                <Image
                  src={it}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "vn" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("vn")}
              >
                <Image
                  src={vn}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "es" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("es")}
              >
                <Image
                  src={es}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "cn" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("cn")}
              >
                <Image
                  src={cn}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
            </div>
            <div className={styles.countryBtn}>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "ind" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("ind")}
              >
                <Image
                  src={ind}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "us" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("us")}
              >
                <Image
                  src={us}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "th" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("th")}
              >
                <Image
                  src={th}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "turkey" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("turkey")}
              >
                <Image
                  src={turkey}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    cuisineType == "mx" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("mx")}
              >
                <Image
                  src={mx}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button> */}
            </div>
            <div style={{ marginTop: 16 }}>
              <div className={styles.textBtn}>
                <p style={{ fontSize: 14, fontWeight: 500 }}>
                  🥛 Lactose-intolerance
                </p>
                <Switch
                  onChange={lactoseHandler}
                  checked={lactose}
                  onColor="#B9E6F5"
                  offColor="#E2E2E4"
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </div>
              <div className={styles.textBtn}>
                <p style={{ fontSize: 14, fontWeight: 500 }}>
                  🌾 Gluten-intolerance
                </p>
                <Switch
                  onChange={glutenHandler}
                  checked={gluten}
                  onColor="#B9E6F5"
                  offColor="#E2E2E4"
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </div>
              <div className={styles.textBtn}>
                <p style={{ fontSize: 14, fontWeight: 500 }}>
                  🍓 Fructose-intolerance
                </p>
                <Switch
                  onChange={fructoseHandler}
                  checked={fructose}
                  onColor="#B9E6F5"
                  offColor="#E2E2E4"
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
