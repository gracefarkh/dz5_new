import React from "react";
import styles from "./CardsOfDesigner.module.css";
import designerPhoto from "../../../assets/images/ProfileHistoryImages/photoOfDesigner.svg";
import burger from '../../../assets/images/ProfileHistoryImages/burger.svg'
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const CadsOfDesigner = ({card}) => {
  return (
    <div className={styles.reviewsToDesigner}>
      <div className={styles.publishedAndBurgerBlock}>
        <h3 className={styles.infoOfPublish}>Опубликовано 18 часов назад</h3>
        <img src={burger} />
      </div>
      <div>
        <div className={styles.frameOfImageAndInfo}>
          <div>
            <img className={styles.burgerStyle} src={designerPhoto} />
          </div>
          <div>
            <h4>{card.title}</h4>
            <p className={styles.textdesignOfCompany}>дизайн компании</p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.nameAndNick}>
          <h5>Anton</h5>
          <p>@antonkrem</p>
        </div>
        <div>
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
        </div>
        <div>
        <p className={styles.comm}>
            Я доволен дизайном этой <span>компании</span> , <i>все сделано качественно</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CadsOfDesigner;
