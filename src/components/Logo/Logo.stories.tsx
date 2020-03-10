import React from 'react';
import Logo from "./Logo";


export default {
    title: "Component|Logo",
    component: Logo,
}

export const logo = () => {
    return <Logo/>
}

logo.story = {
    name: "Default"
}