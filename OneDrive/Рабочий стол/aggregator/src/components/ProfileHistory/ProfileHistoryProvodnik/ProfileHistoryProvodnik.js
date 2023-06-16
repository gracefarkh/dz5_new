import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileHistoryProvodnik.module.css";
import profile from "../../../assets/images/ProfileHistoryImages/icon.svg";
import whiteprofile from "../../../assets/images/ProfileHistoryImages/whiteprofile.svg";
import whitereviews from "../../../assets/images/ProfileHistoryImages/whitereviews.svg";
import whitefavorits from "../../../assets/images/ProfileHistoryImages/hitefavorites.svg";
import out from "../../../assets/images/ProfileHistoryImages/out.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  openModalRd,
  changeStateNavigationProfile,
} from "../../../store/slices/ProfileHistorySlice";
import ModalOfProfile from "../ModalOfProfile/ModalOfProfile";

const ProfileHistoryProvodnik = () => {
  const dispatch = useDispatch();

  const { openModal, navigationProfile } = useSelector(
    (state) => state.ProfileHistorySlice
  );
  // console.log(changeStateNavigationProfile, "openModal");
  console.log(navigationProfile, "navigationProfile");

  return (
    // <container>
    <>
      <div className={styles.blueBlock}>
        <div className={styles.blockWithAvatar}>
          <img src={profile} />
          <h6 className={styles.name}>Антон</h6>
          <p>@antonkrem</p>
        </div>
        <div className={styles.navigationBar}>
          <div
            onClick={() => {
              dispatch(changeStateNavigationProfile(0));
            }}
            className={navigationProfile === 0 ? styles.active_block : ""}
          >
            <div>
              <img className={styles.img} src={whiteprofile} />
            </div>
            <h4>Профиль</h4>
          </div>
          <div
            onClick={() => {
              dispatch(changeStateNavigationProfile(1));
            }}
            className={navigationProfile === 1 ? styles.active_block : ""}
          >
            <img className={styles.img} src={whitereviews} />
            <h4>Отзывы</h4>
          </div>
          <div
            onClick={() => {
              dispatch(changeStateNavigationProfile(2));
            }}
            className={navigationProfile === 2 ? styles.active_block : ""}
          >
            <img className={styles.img} src={whitefavorits} />
            <h4> Избранные</h4>
          </div>
        </div>
        <div>
          <button
            onClick={() => dispatch(openModalRd(true))}
            className={styles.logOut}
          >
            <img src={out} />
            <p>Выйти</p>
          </button>
        </div>
      </div>
      {openModal && <ModalOfProfile />}
    </>
    // </container>
  );
};

export default ProfileHistoryProvodnik;
