import React from "react";
import { useState } from "react";
import styles from "./ProfileHistoryReviews.module.css";
import CardsForCompany from "../CardsForCompany.js/CardsForCompany";
import CadsOfDesigner from "../CardsOfDesigner/CadsOfDesigner";

const ProfileHistoryReviews = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Js", body: "Description" },
    { id: 2, title: "Js", body: "Description" },
    { id: 3, title: "Js", body: "Description" },
    { id: 4, title: "Js", body: "Description" },
  ]);
  return (
    <div className={styles.reviewsBigBlock}>
      <h4 className={styles.myReviewsText}>Мои отзывы</h4>
      <div>
        <div>
          <h4>Отзывы на компанию</h4>
          <p className={styles.reviewsInDigital}>123 отзыва</p>
        </div>
        <div className={styles.card}>
          {cards.map((card) => (
            <CardsForCompany card={card} key={card.id} />
          ))}
        </div>
      </div>
      a
      <div>
        <h4>Отзывы на компанию</h4>
        <p>123 отзыва</p>
        <div className={styles.card}>
          {cards.map((card) => (
            <CadsOfDesigner card={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHistoryReviews;
