import React from 'react';
import styles from './input.module.css'
import SearchIcon from '@mui/icons-material/Search';

const Input = () => {
    return (
        <div className={styles.input}>
            <input type="text" placeholder="Поиск"/>
            <div className={styles.button}><SearchIcon/></div>
        </div>
    );
};

export default Input;