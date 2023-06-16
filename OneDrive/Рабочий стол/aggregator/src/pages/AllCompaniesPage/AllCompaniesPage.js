import React from 'react';
import styles from './allcompanies.module.css'

const AllCompaniesPage = ({companies}) => {
    return (
        <div className="container">
            <div className={styles.allBlock}>
                {companies.map((company, i) => (
                    <div className={styles.block} key={i}>
                        <img src={company.image} alt={company.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCompaniesPage;