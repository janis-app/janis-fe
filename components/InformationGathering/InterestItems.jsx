import styles from "@/styles/interest.module.css";
import Button from "../Common/Buttons";
import { useState } from "react";

function InterestItems() {
  const [selectedBtn, setSelectedBtn] = useState([]);
  const clickHandler = (title) => {
    // Check if the item is already in the selected items array
    const index = selectedBtn.indexOf(title);

    if (index === -1) {
      // If not in the array, add it
      setSelectedBtn([...selectedBtn, title]);
    } else {
      // If already in the array, remove it
      const updatedSelection = [...selectedBtn];
      updatedSelection.splice(index, 1);
      setSelectedBtn(updatedSelection);
    }
  };

  return (
    <div className="mt-[11px]">
      <div className={styles.btnDiv}>
        <Button
          title="🏞️ Hiking"
          clickHandler={() => clickHandler("🏞️ Hiking")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="🎨 Art & Culture"
          clickHandler={() => clickHandler("🎨 Art & Culture")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
      </div>
      <div className={styles.btnDiv}>
        <Button
          title="🏖️ Beaches"
          clickHandler={() => clickHandler("🏖️ Beaches")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="🍔 Foodie"
          clickHandler={() => clickHandler("🍔 Foodie")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
      </div>
      <div className={styles.btnDiv}>
        <Button
          title="🏰 History"
          clickHandler={() => clickHandler("🏰 History")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="🎵Music"
          clickHandler={() => clickHandler("🎵Music")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="🧘 Yoga"
          clickHandler={() => clickHandler("🧘 Yoga")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
      </div>
      <div className={styles.btnDiv}>
        <Button
          title="🏊‍♂️ Swimming"
          clickHandler={() => clickHandler("🏊‍♂️ Swimming")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="🏄‍♂️ Surfing"
          clickHandler={() => clickHandler("🏄‍♂️ Surfing")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
      </div>
      <div className={styles.btnDiv}>
        <Button
          title="🏃‍♂️ Runs"
          clickHandler={() => clickHandler("🏃‍♂️ Runs")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="🚴️ Bicycling"
          clickHandler={() => clickHandler("🚴️ Bicycling")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
      </div>
      <div className={styles.btnDiv}>
        <Button
          title="🌃️ Nightlife"
          clickHandler={() => clickHandler("🌃️ Nightlife")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="☕ Coffee"
          clickHandler={() => clickHandler("☕ Coffee")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="🍷 Wine"
          clickHandler={() => clickHandler("🍷 Wine")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
      </div>
      <div className={styles.btnDiv}>
        <Button
          title="🗽 Sightseeing"
          clickHandler={() => clickHandler("🗽 Sightseeing")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
        <Button
          title="🗣️ Socializing "
          clickHandler={() => clickHandler("🗣️ Socializing ")}
          selectedBtn={selectedBtn}
          isMulti={true}
        />
      </div>
    </div>
  );
}

export default InterestItems;
