import React from 'react';
import styles from './mainpage.module.css'
import Main from "../../components/MainPage/Main/Main";
import Services from "../../components/MainPage/Services/Services";
import Footer from "../../components/Footer/Footer";
import SliderCompany from "../../components/MainPage/SliderCompany/SliderCompany";
import slides from '../../components/MainPage/SliderCompany/mock.json'
import designer from '../../components/MainPage/SliderDesigner/design.json'
import SliderDesigner from "../../components/MainPage/SliderDesigner/SliderDesigner";

const MainPage = () => {
    return <>
        <div className={styles.container}>
            <Main/>
            <Services/>
            <SliderCompany slides={slides}/>
            <SliderDesigner designer={designer}/>
        </div>
        <Footer/>
    </>
};

export default MainPage;