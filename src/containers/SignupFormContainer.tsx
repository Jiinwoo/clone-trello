import React from 'react';
import SignupForm from "../components/SignupForm/SignupForm";
import {useDispatch} from "react-redux";
import {signupThunk} from "../modules/user";
import {IUserAccount} from "../api/userAPI";

function SignupFormContainer() {
    const dispatch = useDispatch();
    const onSignup = (userAccount: IUserAccount) => {
        dispatch(signupThunk(userAccount))
    }
    return (
        <SignupForm onSignup={onSignup}/>
    )
}

export default SignupFormContainer