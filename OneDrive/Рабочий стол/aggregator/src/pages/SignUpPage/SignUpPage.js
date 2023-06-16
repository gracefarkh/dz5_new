import React, {useState} from 'react';
import styles from './signUp.module.css'
import img from "../../assets/other/pdf.png";
import {ReactComponent as Eye} from '../../assets/other/eye.svg'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {Formik} from "formik";
import * as yup from 'yup'


const SignUpPage = () => {
    const [ye, setYe] = useState(false)
    const yeast = () => setYe(!ye)

    const [checkBoxChecked, setCheckBoxChecked] = useState(false)

    function handleCheckBoxChange(event) {
        setCheckBoxChecked(event.target.checked)
    }


    const validationShema = yup.object().shape({
        name: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Обязательно к заполнению'),
        password: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Обязательно к заполнению')
            .min(6, 'Пароль должен содержать не менее 6 символов')
            .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
            .matches(/^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)[a-zA-Zа-яА-Я\d]{6,}$/, 'Пароль должен содержать хотя бы одну строчную и заглавную буквы, одну цифру'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Пороли не совпадают')
            .required('Обязательно к заполнению'),
        email: yup
            .string()
            .email('Введите верный Email')
            .required('Обязательно к заполнению')
            .max(40, 'Email должен содержать не более 40 символов')
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Введите верный Email адрес'),

    })


    return <div className={styles.our}>
        <div className={styles.left} style={{background: `url(${img})`}}></div>
        <div className={styles.right}>
            <h2>Регистрация</h2>
            <p>Добро пожаловать! Пожалуйста введите свои данные</p>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    confirmEmail: "",
                    password: "",
                    confirmPassword: ""
                }}
                validateOnBlur
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationShema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div className={`form`}>
                        <div className={styles.nickName}>
                            <label htmlFor="name">Имя пользователя</label><br/>
                            <input
                                type="text"
                                id="name"
                                name={`name`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </div>
                        {touched.name && errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                        <div className={styles.emailBox}>
                            <label htmlFor="email">Email</label><br/>
                            <input
                                type="email"
                                id="email"
                                name={`email`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>
                        {touched.email && errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                        <div className={styles.passwordBox}>
                            <label htmlFor="password">Пароль</label><br/>
                            <input
                                type={ye ? 'text' : 'password'}
                                id="password"
                                name={`password`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                maxLength={10}
                            />
                            {ye ? <Eye onClick={yeast}/> : <VisibilityOffIcon onClick={yeast}/>}
                        </div>
                        {touched.password && errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                        <div className={styles.passwordBox}>
                            <label htmlFor="confirmPassword">Подтвердить пароль</label><br/>
                            <input
                                type="password"
                                id="confirmPassword"
                                name={`confirmPassword`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            {touched.confirmPassword && errors.confirmPassword &&
                            <p style={{color: "red"}}>{errors.confirmPassword}</p>}
                        </div>
                        <div className={styles.checkLink}>
                            <div className={styles.checkBox}>
                                <input
                                    type="checkbox"
                                    id="check"
                                    checked={checkBoxChecked}
                                    onChange={handleCheckBoxChange}
                                />
                                <label htmlFor="check">Запомнить меня</label>
                            </div>
                            <div className={styles.link}>
                                <a href="#">Забыли пароль?</a>
                            </div>
                        </div>

                        <div className={styles.register}>
                            <Link to="/enterCode" style={{color: 'white', textDecoration: 'none'}}>
                                <button
                                    disabled={!isValid && !dirty}
                                    onClick={(event) => {
                                        handleSubmit(event)
                                        if (checkBoxChecked) {
                                            Swal.fire(
                                                'Я запомнил тебя',
                                                'Хорошая работа',
                                                'success'
                                            )
                                        } else {
                                            Swal.fire(
                                                'Не запомнил тебя',
                                                'Плохая работа',
                                                'error'
                                            )
                                        }
                                    }}
                                    type="submit"
                                >
                                    Зарегистрироваться
                                </button>
                            </Link>

                        </div>
                        <div className={styles.account}>
                            <p>Еще нет аккаунта?</p>
                            <Link to="/login">
                                Войти
                            </Link>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    </div>
};

export default SignUpPage;