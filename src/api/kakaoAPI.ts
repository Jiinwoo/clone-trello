import {KakaoAxios} from "./index";
import qs from 'querystring';

export interface getKakaoAccessTokenAPIType {
    access_token: string,
    token_type: "bearer",
    refresh_token: string,
    expires_in: number,
    scope: string,
    refresh_token_expires_in: number
}

export async function getKakaoAccessToken(code: string) {
    const response = await KakaoAxios.post<getKakaoAccessTokenAPIType>("/oauth/token",
        qs.stringify({
            grant_type: "authorization_code",
            client_id: process.env.REACT_APP_CLIENT_ID,
            redirect_id: process.env.REACT_APP_REDIRECT,
            code: code,
        }));
    return response.data;
}

