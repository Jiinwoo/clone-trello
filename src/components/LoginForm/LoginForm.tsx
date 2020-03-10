/** @jsx jsx */
import {jsx} from '@emotion/core'
import React, {Fragment, useCallback} from 'react';
import {Field, Form, Formik, FormikProps} from "formik";
import {FormikHelpers} from "formik/dist/types";
import {FieldAttributes} from "formik/dist/Field";
import * as Yup from 'yup';

interface ILoginForm {
}

interface LoginFormValues {
    email: string;
    password: string;

}

const LoginForm = (props: ILoginForm) => {
    const initValues: LoginFormValues = {email: '', password: ''}
    const onSubmit: (values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>) => void | Promise<any>
        = (values, actions) => {
        console.log({values, actions});
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }
    const onKakaoLogin = useCallback(() => {
        window.open(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID!}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT}`)
    }, [])
    return (<Fragment>
        <Formik
            initialValues={initValues}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('이메일 형식과 다릅니다.'),
                password: Yup.string()
                    .max(20)
            })}
            render={(formikBag: FormikProps<LoginFormValues>) => (
                <Form>
                    <label htmlFor={"email"}>Email</label>
                    <Field
                        name="email"
                        render={({field, form, meta}: FieldAttributes<any>) => (
                            <div>
                                <input type="text" {...field} placeholder="Email"/>
                                {meta.touched && meta.error && meta.error}
                            </div>
                        )}
                    />
                    <label htmlFor={"password"}>Password</label>
                    <Field
                        name="password"
                        render={({field, form, meta}: FieldAttributes<any>) => (
                            <div>
                                <input type="password" {...field} placeholder="Password"/>
                                {meta.touched && meta.error && meta.error}
                            </div>
                        )}
                    />
                    <button type={"submit"}>로그인</button>
                    <button onClick={onKakaoLogin}>카카오 계정으로 로그인 하기</button>
                </Form>
            )}
        >

        </Formik>
    </Fragment>)
}
export default LoginForm