/** @jsx jsx */
import {jsx} from '@emotion/core'
import {Fragment} from 'react';
import {Field, Form, Formik, FormikHelpers} from "formik";
import {FieldAttributes} from "formik/dist/Field";

interface IKakaoSignupForm {
    code: string;
    error?: string;
    accessToken?: string;
}

interface KakaoSignupFormValues {
    name: string
}

const KakaoSignupForm = ({code, error, accessToken}: IKakaoSignupForm) => {
    const initialState: KakaoSignupFormValues = {name: ''}
    const onSubmit: (values: KakaoSignupFormValues, formikHelpers: FormikHelpers<KakaoSignupFormValues>) =>
        (void | Promise<any>) = (values) => {
        console.log(values);
    }
    return (<Fragment>
        <Formik
            initialValues={initialState}
            onSubmit={onSubmit}
            render={(formikback) => (
                <Form>
                    <label htmlFor={"name"}>이름</label>
                    <Field
                        name="name"
                        render={({field, form, meta}: FieldAttributes<any>) => (
                            <div>
                                <input type="text" {...field} placeholder="Name"/>
                                {meta.touched && meta.error && meta.error}
                            </div>
                        )}
                    />
                </Form>

            )}
        />
    </Fragment>)
}

KakaoSignupForm.defaultProps = {
    code: 'asd'
}

export default KakaoSignupForm