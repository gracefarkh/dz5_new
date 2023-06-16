import React, { useEffect } from "react";
import styles from "./CardsOfFavorits.module.css";
import image from "../../../assets/images/ProfileHistoryImages/image.png";
import eyeImg from "../../../assets/images/ProfileHistoryImages/eye.svg";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useDispatch } from "react-redux";
import { getFavorits } from "../../../store/slices/ProfileFavoritsSlice";

const CardsOfFavorits = ({item}) => {

  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getFavorits())
  },[])


  return (
    <div className={styles.CardsOfFavorits}>
      <div>
        <img className={styles.imageSize} src={image} />
      </div>
      <div>
        <div className={styles.familyDes}>
          <h3>{item?.title}</h3>
          <div>
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
          <p className={styles.rateInDigital}>4.0</p>
        </div>
        <div>
          <p className={styles.descriptionText_aboutDesign}>
            Дизайн компания основана на ремонте и архитектуре
          </p>
        </div>
      </div>
      <div className={styles.bluePart_profilefavorits}>
        <div className={styles.eye_and_rate}>
          <img src={eyeImg} />
          <p>1234</p>
        </div>
        <p className={styles.more}>Подробнее</p>
      </div>
    </div>
  );
};

export default CardsOfFavorits;
