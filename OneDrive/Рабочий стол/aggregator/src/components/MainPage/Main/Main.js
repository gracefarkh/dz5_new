import React from 'react';
import styles from './main.module.css'
import main from '../../../assets/other/main.png'
import Input from "../Input/Input";

const Main = () => {
    return (
       <div id='main' className={styles.container}>
            <div className={styles.left}>
                <h2><span>Style</span>Scope</h2>
                <h3>Ваш проводник в мир дизайна</h3>
                <Input/>
            </div>
            <div style={{background: `url(${main})`}} className={styles.right}></div>
       </div>
    );
};

export default Main;