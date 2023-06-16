import React from 'react';
import styles from './footer.module.css';
import { LocationOn, Instagram, Email, WhatsApp } from '@mui/icons-material';
import logo from '../../assets/other/logo.svg';
import appStore from '../../assets/footer/appStore.svg';

const Footer = () => {
    //qwerty Aizhamal
    const columnData = [
        {
            title: 'О нас',
            list: ['Контакты', 'Миссия и цель', 'Гарантии'],
        },
        {
            title: 'Услуги',
            list: ['Консультация', 'Архитектура', 'Ремонт'],
        },
        {
            title: 'Компании',
            list: ['Design plus', 'Family design', 'Neostyle'],
        },
        {
            title: 'Контакты',
            icons: [<Instagram color="blue" />, <Email color="blue" />, <WhatsApp color="blue" />],
        },
        {
            title: 'Адрес',
            address: 'Ибрагимова 103,БЦ Victory',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7042092897755!2d74.61576867572877!3d42.87908697114935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794b532a8f1%3A0xcea5bfa3cae816aa!2sVictory!5e0!3m2!1sru!2skg!4v1684255120961!5m2!1sru!2skg',
        },
    ];

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.allBlock}>
                    <div className={styles.columnBlock}>
                        {columnData.map((column, index) => (
                            <div className={styles.column} key={index}>
                                <h2>{column.title}</h2>
                                {column.list && (
                                    <ul>
                                        {column.list.map((item, itemIndex) => (
                                            <li className={styles.li} key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {column.icons && (
                                    <div className={styles.columnGap}>
                                        {column.icons.map((icon, iconIndex) => (
                                            <div key={iconIndex}>{icon}</div>
                                        ))}
                                    </div>
                                )}
                                {column.address && (
                                    <div className={styles.local}>
                                        <LocationOn style={{ fontSize: 40 }} color="error" />
                                        <p>{column.address}</p>
                                    </div>
                                )}
                                {column.mapSrc && (
                                    <iframe
                                        src={column.mapSrc}
                                        width="225"
                                        height="96"
                                        style={{ borderRadius: '8px', cursor: 'grab' }}
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.foot}>
                        <div className={styles.logo}>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className={styles.app}>
                            <img src={appStore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer