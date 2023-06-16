import React from 'react';
import styles from './notFound.module.css'
import error from '../../assets/other/404-error.jpg'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Страница не найдена</h1>
                <p>Возможно она была удалена
                    или просто устарела...</p>
                <Link to="/">
                    <div className={styles.button}>
                        <button>Вернуться к главной странице</button>
                    </div>
                </Link>
            </div>
            <div className={styles.img}>
                <img src={error} alt=""/>
            </div>
        </div>
    )
};

export default NotFound;