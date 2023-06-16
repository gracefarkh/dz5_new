import React, { useEffect } from "react";
import styles from "./CardsForCompany.module.css";
import image from "../../../assets/images/ProfileHistoryImages/image.png";
import burger from "../../../assets/images/ProfileHistoryImages/burger.svg";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../store/slices/ProfileReviewsSlice";

const CardsForCompany = ({ card }) => {
  const { nurdin } = useSelector((state) => state.ProfileReviewsSlice);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getReviews())
  }, [])


  console.log(nurdin, "pppppppp");
  return (
    <div className={styles.reviewsOfDesign}>
      <div className={styles.publishedAndBurgerBlock}>
        <h3 className={styles.infoOfPublish}>Опубликовано 18 часов назад</h3>
        <img src={burger} />
      </div>
      <div>
        <img className={styles.burgerStyle} src={image} />
      </div>
      <div>
        <div className={styles.nameAndNick}>
          <h5>{card.title}</h5>
          <p className={styles.name}>@antonkrem</p>
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

export default CardsForCompany;
