import Axios from "./index";

export interface loginAPIType {

}

export interface IUserAccount {
    email: string;
    password: string;
    name: string;
}

export async function signup({email, password, name}: IUserAccount) {
    const response = await Axios.post<loginAPIType>("/api/signup", {
        email: email,
        password: password,
        name: name,
    })

    return response.data;
}

