import React, { useState } from 'react';
import css from './Login.module.css';

type FormData = {
    login: string;
    password: string;
}

export const Login: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ login: '', password: '' });

    const onSubmit = () => {
        alert(JSON.stringify(formData))
    }

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <form name="login">
                    <div className={css.layout}>
                        <h3 className={css.header}>Login</h3>
                        <label
                            htmlFor='login'
                            className={css['login-label']}
                        >
                            Login
                        </label>
                        <input
                            id='login'
                            name='login'
                            type={'text'}
                            value={formData.login}
                            className={css['login-input']}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setFormData({ ...formData, login: event.target.value ?? '' })
                            }}
                        />

                        <label
                            htmlFor='password'
                            className={css['password-label']}
                        >
                            Password
                        </label>
                        <input
                            id='password'
                            name='password'
                            type={'password'}
                            value={formData.password}
                            className={css['password-input']}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setFormData({ ...formData, password: event.target.value ?? '' })
                            }}
                        />
                        <button className={css.button} onClick={onSubmit} type="button">Submit</button>
                    </div>
                </form >
            </div>
        </div>
    )
}