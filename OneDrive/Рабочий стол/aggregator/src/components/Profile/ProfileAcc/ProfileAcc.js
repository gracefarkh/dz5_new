import React from 'react';
import styles from './profileacc.module.css'
import { TextField} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const ProfileAcc = () => {
    return (
        <div className={styles.container}>
            <div className={styles.allBlock}>
                <div className={styles.formBlocks}>
                    <form>
                        <div className={styles.profileText}>
                            <h2>Профиль</h2>
                        </div>
                        <div className={styles.dataUsers}>
                            <label htmlFor="name">Имя:</label>
                            <TextField type='text' id="name" label="Standard" variant="standard" color="blue"/>
                            <br/>
                            <label htmlFor="surname"></label>
                            <TextField type='text' id="surname" label="Standard" variant="standard" color="blue"/>
                            <br/>
                            <label htmlFor="about">Обо мне: </label>
                            <textarea id="about" placeholder="Введите информацию"/>
                        </div>
                    </form>
                </div>
                <div className={styles.formBlocks}>
                    <div className={styles.profileText}>
                        <h2>Данные аккаунта</h2>
                        <p>видно только вам</p>
                    </div>
                    <div className={styles.dataUsers}>
                        <div className={styles.formUsers}>
                            <PermIdentityIcon style={{fontSize: 30}}/>
                            <div className={styles.users}>
                                <h3>Имя пользователя</h3>
                                <h5>@antonkrem</h5>
                            </div>
                        </div>
                        <div className={styles.formUsers}>
                            <EmailIcon style={{fontSize: 30}}/>
                            <div className={styles.users}>
                                <h3>Почта</h3>
                                <h5>@gmail.com</h5>
                            </div>
                        </div>
                        <div className={styles.formUsers}>
                            <LockIcon style={{fontSize: 30}}/>
                            <div className={styles.users}>
                                <h3>Пароль</h3>
                                <h5>********</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileAcc;