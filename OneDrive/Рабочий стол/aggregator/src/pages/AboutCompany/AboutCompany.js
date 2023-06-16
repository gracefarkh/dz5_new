import React, { useRef } from 'react';
import styles from './aboutcompany.module.css';
import { Link } from 'react-router-dom';
import scope from '../../assets/about/stylesScope.jpg';
import Swal from 'sweetalert2';
import Footer from '../../components/Footer/Footer';
import { Breadcrumbs, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const AboutCompany = () => {
    const textRefs = useRef([]);

    const copyText = (textElement) => {
        window.getSelection().selectAllChildren(textElement);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        Swal.fire('Текст скопирован: ' + textElement.textContent, 'На буфер обмена', 'success');
    };

    const contacts = [
        {
            icon: <WhatsAppIcon color="blue" sx={{ width: 100, height: 100 }} />,
            text: '+996 596 666 567',
        },
        {
            icon: <InstagramIcon color="blue" sx={{ width: 100, height: 100 }} />,
            text: 'stylescope@inst.com',
        },
        {
            icon: <EmailIcon color="blue" sx={{ width: 100, height: 100 }} />,
            text: 'stylescope@gmail.com',
        },
    ];

    return (
        <div style={{ marginTop: '150px' }}>
            <div className="breadCrumbsBgc">
                <div className="breadCrumbs">
                    <Breadcrumbs maxItems={2} aria-label="breadcrumb" separator={<ChevronRightIcon fontSize="small" />}>
                        <Link to="/" underline="hover" color="inherit" href="#" className="link">
                            Главная
                        </Link>
                        <Typography color="text.primary">О нас</Typography>
                    </Breadcrumbs>
                </div>
            </div>
            <div className={styles.background} style={{ background: `url(${scope}) no-repeat` }}>
                <div className="container">
                    <div className={styles.texts}>
                        <h1>
                            Style<span className={styles.span}>Scope</span>
                        </h1>
                        <h3>Ваш проводник в мир дизайна</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.allTexts}>
                    {[
                        {
                            title: 'Краткое описание агрегатора',
                            content:
                                'Аггрегатор дизайнерских услуг, предоставляющий широкий выбор профессиональных услуг дизайна интерьера и экстерьера от лучших компаний и дизайнеров.',
                        },
                        {
                            title: 'Наша миссия и цели',
                            content:
                                'Наша миссия - помочь клиентам найти профессиональные дизайнерские услуги, которые помогут им создать идеальное пространство, отражающее их индивидуальный стиль и потребности',
                        },
                        {
                            title: 'Какие услуги мы предоставляем',
                            content:
                                'Мы предоставляем широкий спектр услуг дизайна интерьера и экстерьера компаний, включая проектирование, меблировку, подбор материалов, декорирование, ремонт, обучение.',
                        },
                        {
                            title: 'Гарантия качества услуг',
                            content:
                                'Мы тщательно отбираем компании и дизайнеров, чтобы предоставлять только высококачественные услуги, гарантируя тем самым, что наши клиенты получат лучшее в своей отрасли',
                        },
                        {
                            title: 'Как связаться с нами и какие преимущества получат клиенты, выбрав нас',
                            content:
                                'Связаться с нами можно через наш сайт, телефон или электронную почту. Мы предоставляем удобный и быстрый способ найти лучшие дизайнерские услуги в Кыргызстане и получить профессиональную помощь в создании уникального пространства.',
                        },
                    ].map((item, index) => (
                        <div className={styles.text} key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.contacts}>
                    <h2>Наши контакты</h2>
                    <div className={styles.icons}>
                        {contacts.map((contact, index) => (
                            <div className={styles.icon} key={index}>
                                {contact.icon}
                                <p ref={(ref) => (textRefs.current[index] = ref)} onClick={() => copyText(textRefs.current[index])}>
                                    {contact.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutCompany;
