import React, { useState } from "react";
import styles from "./ProfileFavorits.module.css";
import CardsOfFavorits from "../CardsOfFavorits/CardsOfFavorits";

const ProfileFavorits = () => {
  const [favoritsInfo, setFavoritsInfo] = useState([
    { id: 1, title: "Family Design", body: "Description" },
    { id: 2, title: "Family Design", body: "Description" },
    { id: 3, title: "Family Design", body: "Description" },
    { id: 4, title: "Family Design", body: "Description" },
  ]);
  return (
    <div className={styles.ProfileFavorits}>
      <h4 className={styles.Favoritetext}>Избранные</h4>
      <div className={styles.blockFor_favoritsCard}>
        {favoritsInfo?.map((item) => (
          <CardsOfFavorits item={item} key={item.id} />
        ))}
      </div>
      <CardsOfFavorits />
    </div>
  );
};

export default ProfileFavorits;
