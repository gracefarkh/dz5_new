import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from './navbar.module.css'
import logo from '../../assets/other/logo.svg'

const NavBar = () => {
    const navigate = useNavigate()

    const login = () => {
        navigate("/login")
    }

    const signUp = () => {
        navigate("/signUp")
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <NavLink className={'link'} to='/'><div>
                            <img src={logo} alt="logo"/>
                        </div></NavLink>
                    </li>
                    <li>
                        <NavLink className={'link'} to='/about'>О нас</NavLink>
                    </li>
                    <li>
                        <a href="#uslugi">Услуги</a>
                    </li>
                    <li>
                        <NavLink className={'link'} to='/designer'>Дизайнеры</NavLink>
                    </li>
                </ul>
                <div className={styles.buttons}>
                    <button className={styles.login} onClick={login}>Регистрация</button>
                    <button className={styles.signUp} onClick={signUp}>Войти</button>
                </div>
            </div>

        </div>
    );
};

export default NavBar;