// services/auth_token.ts
import Cookie from 'js-cookie';

export const TOKEN_STORAGE_KEY = process.env.REACT_APP_KAKAO_TOKEN_KEY ?
    process.env.REACT_APP_KAKAO_TOKEN_KEY
    : 'asdadasdasd'
;

export type IKakaoToken = {
    access_token: string;
    readonly token_type: string;
    refresh_token: string;
    expires_in: number;
    readonly scope: String;
};

export type IRefreshKakaoToken = {
    readonly access_token: string;
    readonly token_type: string;
    readonly refresh_token?: string;
    readonly expires_in: number;
}

export class KakaoToken {
    readonly kakaoToken: IKakaoToken;

    constructor(readonly token?: IKakaoToken) {
        // we are going to default to an expired decodedToken
        this.kakaoToken = {
            access_token: '',
            token_type: "bearer",
            refresh_token: '',
            expires_in: 0,
            scope: '',
        };

        // then try and decode the jwt using jwt-decode
        try {
            if (token) this.kakaoToken = token;
        } catch (e) {
        }
    }

    get authorizationString() {
        return `Bearer ${this.token}`;
    }

    get expiresAt(): Date {
        return new Date(this.kakaoToken.expires_in);
    }

    get isExpired(): boolean {
        return new Date() > this.expiresAt;
    }

    get isValid(): boolean {
        return !this.isExpired;
    }

    static storeToken(kakaoToken: IKakaoToken) {
        Cookie.set(TOKEN_STORAGE_KEY, JSON.stringify(kakaoToken));
        return;
        // return ;
        // return await Router.push('/').then(() => window.scrollTo(0, 0));
    }

    refresh(refreshToken: IRefreshKakaoToken) {
        this.kakaoToken.access_token = refreshToken.access_token;
        this.kakaoToken.expires_in = refreshToken.expires_in;
        if (refreshToken.refresh_token) {
            this.kakaoToken.refresh_token = refreshToken.refresh_token;
        }
    }
}
