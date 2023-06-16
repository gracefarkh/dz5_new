import React from "react";
import styles from "./ProfileHistoryEditSecond.module.css";
import profile from "../../../assets/images/ProfileHistoryImages/profile.svg";
import pochta from "../../../assets/images/ProfileHistoryImages/pochta.svg";
import password from "../../../assets/images/ProfileHistoryImages/password.svg";
import { useDispatch } from "react-redux";
import { changeEdit } from "../../../store/slices/ProfileHistorySlice";

const ProfileHistoryEditSecond = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.profileEditSecond}>
      <div className={styles.forFirstBlock}>
        <div>
          <h4>Профиль</h4>
        </div>
        <div>
          <div>
            <div>
              <h4>Фамилие :</h4>
              <p>Григорьев</p>
              <div></div>
            </div>
            <div>
              <h4>Имя :</h4>
              <p>Aнтон</p>
              <div></div>
            </div>
          </div>
          <div>
            <h4>Обо мне :</h4>
            <input
              className={styles.writeInfoInput}
              placeholder="Введите информацию"
            />
          </div>
        </div>
      </div>
      <div className={styles.forEveryBlock}>
        <div className={styles.ProfileBlock}>
          <h4 className={styles.profileText}>Данные аккаунта </h4>
          <p className={styles.canseOnlyYou}>данные видны только вам</p>
        </div>
        <div className={styles.secondPart}>
          <div className={styles.profile}>
            <div>
              <img className={styles.images} src={profile} />
            </div>
            <div className={styles.nameAnd}>
              <h4>Имя пользователя</h4>
              <p className={styles.forName}>@antonkrem</p>
            </div>
          </div>
          <div className={styles.profile}>
            <div>
              <img className={styles.images} src={pochta} />
            </div>
            <div className={styles.nameAnd}>
              <h4>Почта</h4>
              <p className={styles.forPochta}>aizhamalFark</p>
            </div>
          </div>
          <div className={styles.profile}>
            <div>
              <img className={styles.images} src={password} />
            </div>
            <div className={styles.nameAnd}>
              <h4>Пароль</h4>
              <p className={styles.forPassword}>***************</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.forBtns}>
        <div className={styles.boxForCancel}>
          <button
            className={styles.cancel_btn}
            onClick={() => dispatch(changeEdit(true))}
          >
            Отмена
          </button>
        </div>
        <div className={styles.boxForKeep}>
          <button
            className={styles.keep_btn}
            onClick={() => dispatch(changeEdit(true))}
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistoryEditSecond;
