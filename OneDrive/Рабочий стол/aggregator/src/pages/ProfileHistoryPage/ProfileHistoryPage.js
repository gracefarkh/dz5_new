import React from "react";
import ProfileHistoryProvodnik from "../../components/ProfileHistory/ProfileHistoryProvodnik/ProfileHistoryProvodnik";
import ProfileHistoryEdit from "../../components/ProfileHistory/ProfileHistoryEdit/ProfileHistoryEdit";
import ProfileHistoryEditSecond from "../../components/ProfileHistory/ProfileHistoryEditSecond/ProfileHistoryEditSecond";
import ProfileHistoryReviews from "../../components/ProfileHistory/ProfileHistoryReviews/ProfileHistoryReviews";
import styles from "./ProfileHistoryPage.module.css";
import ProfileFavorits from "../../components/ProfileHistory/ProfileFavorits/ProfileFavorits";
// import ModalOfProfile from "../../components/ProfileHistory/ModalOfProfile/ModalOfProfile";
import { useSelector } from "react-redux";

const ProfileHistorypage = () => {
  const { navigationProfile, edit } = useSelector(
    (state) => state.ProfileHistorySlice
  );

  return (
    <div className={styles.forComponentsInProfileHistoryPage}>
      <div>
        <ProfileHistoryProvodnik />
      </div>
      <div className={styles.rightPart}>
        {edit ? (
          <>
            {navigationProfile === 0 && <ProfileHistoryEdit />}
            {navigationProfile === 1 && <ProfileHistoryReviews />}
            {navigationProfile === 2 && <ProfileFavorits />}
          </>
        ) : (
          <ProfileHistoryEditSecond />
        )}

        {/* <ProfileHistoryEdit /> */}
        {/* <ModalOfProfile/> */}
        {/* <ProfileHistoryEditSecond /> */}
        {/* <ProfileHistoryReviews/> */}
        {/* <ProfileFavorits />
        <ModalOfProfile /> */}
      </div>
    </div>
  );
};

export default ProfileHistorypage;
