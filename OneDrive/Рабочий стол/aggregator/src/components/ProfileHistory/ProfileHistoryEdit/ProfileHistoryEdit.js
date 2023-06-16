import React from "react";
import styles from "./ProfileHistoryEdit.module.css";
import profile from "../../../assets/images/ProfileHistoryImages/profile.svg";
import pochta from "../../../assets/images/ProfileHistoryImages/pochta.svg";
import password from "../../../assets/images/ProfileHistoryImages/password.svg";
import neweditpen from "../../../assets/images/ProfileHistoryImages/neweditpen.svg";
import { useDispatch } from "react-redux";
import { changeEdit } from "../../../store/slices/ProfileHistorySlice";

const ProfileHistoryEdit = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.for3Components}>
      <div className={styles.for2MainBlocks}>
        <div className={styles.for2Blocks}>
          <div className={styles.profile_Block}>
            <div>
              <h4 className={styles.profile_text}>Профиль</h4>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div>
              <h4 className={styles.name}>Имя :</h4>
              <div>
                <h3 className={styles.nameOfUser}>Антон</h3>
                <div className={styles.lines}></div>
              </div>
            </div>
            <div>
              <h4 className={styles.name}>Фамилие :</h4>
              <div>
                <h3 className={styles.surNameofUser}>Григорьев</h3>
                <div className={styles.lines}></div>
              </div>
            </div>
            <div>
              <h4 className={styles.name}>Обо мне</h4>
              <input
                className={styles.input}
                placeholder="Введите информацию"
              />
            </div>
          </div>
        </div>
        <div className={styles.for2Blocks}>
          <div className={styles.profile_Block}>
            <h4 className={styles.profile_text}>Профиль</h4>
            <p className={styles.p_with_text_profile}>видно только вам</p>
          </div>
          <div className={styles.secondBlock_With_Info}>
            <div className={styles.imagesBlock}>
              <div>
                <img className={styles.iconicImages} src={profile} />
              </div>
              <div className={styles.forTextsWithInfo}>
                <h4>Имя пользователя</h4>
                <p className={styles.adresses}>@antonkrem</p>
              </div>
            </div>
            <div className={styles.imagesBlock}>
              <div>
                <img className={styles.iconicImages} src={pochta} />
              </div>
              <div className={styles.forTextsWithInfo}>
                <h4>Почта</h4>
                <p className={styles.adresses}>aizhamalFark</p>
              </div>
            </div>
            <div className={styles.imagesBlock}>
              <div>
                <img className={styles.iconicImages} src={password} />
              </div>
              <div className={styles.forTextsWithInfo}>
                <h4>Пароль</h4>
                <p className={styles.adresses}>************</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className={styles.editBtn}
          onClick={() => dispatch(changeEdit(false))}
        >
          <h5 className={styles.editText}>Редактировать</h5>
          <img className={styles.editImage} src={neweditpen} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHistoryEdit;
