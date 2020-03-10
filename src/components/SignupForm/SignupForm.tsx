/** @jsx jsx */
import {jsx} from '@emotion/core'
import {Fragment} from 'react';
import {useFormik} from "formik";
import {IUserAccount} from "../../api/userAPI";

const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
        errors.email = "필수입니다.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.name) {
        errors.name = "필수입니다."
    }
    if (!values.password) {
        errors.password = "필수입니다."
    }
    return errors;
}


interface ISignupForm {
    onSignup?: (userAccount: IUserAccount) => void
}

const SignupForm = ({onSignup}: ISignupForm) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: ''
        },
        validate,
        onSubmit: values => {
            onSignup && onSignup({
                name: values.name,
                email: values.email,
                password: values.password,
            })
        }
    });
    return (<Fragment>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor={"email"}>Email Address</label>
            <input
                id={"email"}
                name={"email"}
                type={"text"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            >
            </input>
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="name">이름</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}
            <label htmlFor="password">패스워드</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

            <button type={"submit"}>Submit</button>

        </form>
    </Fragment>)
}
export default SignupForm