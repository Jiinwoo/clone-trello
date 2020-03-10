import React from 'react';
import SignupForm from "./SignupForm";

export default {
    title: "Component|SignupForm",
    component: SignupForm
}


export const signupForm = () => {
    return <SignupForm/>
}

signupForm.story = {
    name: "Default"
}

