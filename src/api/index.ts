import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const Axios = axios.create({
    // baseURL: process.env.NODE_ENV === 'production' ?
    //     'http://localhost:8080' :
    //     'http://localhost:8080',
})

export const KakaoAxios = axios.create({
    baseURL: 'https://kauth.kakao.com',
})


export default Axios;