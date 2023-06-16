import React from 'react';
import styles from './services.module.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const servicesData = [
    {
        image: require('../../../assets/services/persons.svg').default,
        title: 'Консультация',
        listItems: [
            'Выслушивание всех требований клиента',
            'Рассмотрение всех дальнейших путей клиента'
        ]
    },
    {
        image: require('../../../assets/services/architest.svg').default,
        title: 'Архитектура',
        listItems: [
            'Частные дома, коттеджные поселки и пансионаты',
            'Общественные и коммерческие объекты: офисы, торговые центры, гостиницы, рестораны, спортивные сооружения'
        ]
    },
    {
        image: require('../../../assets/services/molot.svg').default,
        title: 'Ремонт',
        listItems: [
            'Квартиры, коттеджи, загородные дома и другие жилые помещения',
            'Офисы, рестораны, клубы и другие общественные места'
        ]
    }
];

const Services = () => {
    return (
        <div id='uslugi' className={styles.container}>
            <h2 className={styles.h2}>Услуги</h2>
            <p className={styles.p}>наших компаний</p>
            <div className={styles.blocks}>
                {servicesData.map((service, index) => (
                    <div key={index} className={styles.block}>
                        <div className={styles.between}>
                            <img src={service.image} alt={service.title} />
                            <h3>{service.title}</h3>
                        </div>
                        <div className={styles.ul}>
                            <ul>
                                {service.listItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.link}>
                            <Link to='service'>
                                <h4>
                                    подробнее{' '}
                                    <ArrowForwardIosIcon style={{ width: '15.64px', height: '25.25px' }} />
                                </h4>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
