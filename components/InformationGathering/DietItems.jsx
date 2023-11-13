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

export default function DietItems() {
  const [lactose, setLacktose] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [fructose, setFructose] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(null);

  const lactoseHandler = () => {
    setLacktose(!lactose);
  };

  const glutenHandler = () => {
    setGluten(!gluten);
  };

  const fructoseHandler = () => {
    setFructose(!fructose);
  };

  const clickHandler = (title) => {
    setSelectedBtn(title);
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
                clickHandler={() => clickHandler("🥩 Omnivore")}
                selectedBtn={selectedBtn}
              />
              <Button
                title="🐟 Pescatarian"
                clickHandler={() => clickHandler("🐟 Pescatarian")}
                selectedBtn={selectedBtn}
              />
            </div>
            <div className={styles.btnDiv}>
              <Button
                title="🌱 Vegan"
                clickHandler={() => clickHandler("🌱 Vegan")}
                selectedBtn={selectedBtn}
              />
              <Button
                title="🚫🥩 Vegetarian"
                clickHandler={() => clickHandler("🚫🥩 Vegetarian")}
                selectedBtn={selectedBtn}
              />
            </div>
            <p className={styles.text}>Cuisine</p>
            <div className={styles.countryBtn} style={{ marginBottom: 20 }}>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    selectedBtn == "jp" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("jp")}
              >
                <Image
                  src={jp}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
              <button
                className={styles.btns}
                style={{
                  backgroundColor:
                    selectedBtn == "it" ? "#D9F5FE80" : "#F9FAFB",
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
                    selectedBtn == "vn" ? "#D9F5FE80" : "#F9FAFB",
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
                    selectedBtn == "es" ? "#D9F5FE80" : "#F9FAFB",
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
                    selectedBtn == "cn" ? "#D9F5FE80" : "#F9FAFB",
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
                    selectedBtn == "ind" ? "#D9F5FE80" : "#F9FAFB",
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
                    selectedBtn == "us" ? "#D9F5FE80" : "#F9FAFB",
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
                    selectedBtn == "th" ? "#D9F5FE80" : "#F9FAFB",
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
                    selectedBtn == "turkey" ? "#D9F5FE80" : "#F9FAFB",
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
                    selectedBtn == "mx" ? "#D9F5FE80" : "#F9FAFB",
                }}
                onClick={() => clickHandler("mx")}
              >
                <Image
                  src={mx}
                  width={16}
                  height={20}
                  alt="Picture of the author"
                />
              </button>
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
