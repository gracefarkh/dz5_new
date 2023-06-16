import React from "react";
import styles from "./ModalOfProfile.module.css";
import iks from "../../../assets/images/ProfileHistoryImages/iks.svg";
import { useDispatch } from "react-redux";
import { openModalRd } from "../../../store/slices/ProfileHistorySlice";

const ModalOfProfile = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.parent_modal}>
      <div className={styles.ModalOfProfile}>
        <div
          className={styles.block_forIks_image}
          onClick={() => dispatch(openModalRd(false))}
        >
          <img className={styles.iks} src={iks} />
        </div>
        <div>
          <p className={styles.are_u_sure}>Вы уверены что хотите выйти ?</p>
          <div className={styles.modal_buttons}>
            <button
              onClick={() => dispatch(openModalRd(false))}
              className={styles.modal_cancelBtn}
            >
              Отмена
            </button>
            <button className={styles.modal_outBtn}>Выйти</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalOfProfile;
