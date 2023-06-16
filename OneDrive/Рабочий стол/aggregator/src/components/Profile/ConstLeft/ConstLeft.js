import React from 'react';
import styles from './constleft.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LogoutIcon from '@mui/icons-material/Logout';

const ConstLeft = () => {
    return (
        <>
            <div className={styles.allBlock}>
                <div className={styles.leftBlock}>
                     <div className={styles.accountProfile}>
                         <AccountCircleIcon style={{fontSize: 150}} color="white"/>
                         <div className={styles.accountDescription}>
                             <h6>Person</h6>
                             <p>person80@gmail.com</p>
                         </div>
                     </div>
                    <div className={styles.profileIcon}>
                        <PermIdentityIcon style={{fontSize: 50}} color="white"/>
                        <h3>Профиль</h3>
                    </div>
                    <div className={styles.profileIcon}>
                        <ReviewsIcon style={{fontSize: 50}} color="white"/>
                        <h3>Мои отзывы</h3>
                    </div>
                    <div className={styles.profileIcon}>
                        <BookmarkIcon style={{fontSize: 50}} color="white"/>
                        <h3>Избранные</h3>
                    </div>
                    <div className={styles.profileIcon}>
                        <LogoutIcon style={{fontSize: 50}} color="error"/>
                        <h3 style={{color: 'red'}}>Выйти</h3>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ConstLeft;