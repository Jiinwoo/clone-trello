import {ActionType, createAction, createAsyncAction, createReducer} from 'typesafe-actions';
import {AxiosError} from 'axios'
import {IKakaoToken, KakaoToken} from "../utils/kakaoToken";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./index";
import {getKakaoAccessToken, getKakaoAccessTokenAPIType} from "../api/kakaoAPI";
/*
*
* */
const KAKAO_LOGIN_REQUEST = 'kakao/KAKAO_LOGIN_REQUEST';
const KAKAO_LOGIN_SUCCESS = 'kakao/KAKAO_LOGIN_SUCCESS';
const KAKAO_LOGIN_FAILURE = 'kakao/KAKAO_LOGIN_FAILURE';

const GET_KAKAO_ACCESS_TOKEN_REQUEST = 'kakao/GET_KAKAO_ACCESS_TOKEN_REQUEST';
const GET_KAKAO_ACCESS_TOKEN_SUCCESS = 'kakao/GET_KAKAO_ACCESS_TOKEN_SUCCESS';
const GET_KAKAO_ACCESS_TOKEN_FAILURE = 'kakao/GET_KAKAO_ACCESS_TOKEN_FAILURE';

const SAVE_KAKAO_TOKEN = 'kakao/SAVE_KAKAO_TOKEN';
/*
*
* */
const saveKakaoToken = createAction(SAVE_KAKAO_TOKEN)<IKakaoToken>();

const kakaoLoginAsync = createAsyncAction(
    KAKAO_LOGIN_REQUEST,
    KAKAO_LOGIN_SUCCESS,
    KAKAO_LOGIN_FAILURE
)<undefined, any, AxiosError>();

const getKakaoAccessTokenAsync = createAsyncAction(
    GET_KAKAO_ACCESS_TOKEN_REQUEST,
    GET_KAKAO_ACCESS_TOKEN_SUCCESS,
    GET_KAKAO_ACCESS_TOKEN_FAILURE
)<undefined, getKakaoAccessTokenAPIType, AxiosError>();

/*
*
* */

export function getKakaoAccessTokenThunk(code: string): ThunkAction<void, RootState, null, KakaoAction> {
    return async (dispatch) => {
        const {request, success, failure} = getKakaoAccessTokenAsync;
        dispatch(request);
        try {
            const result = await getKakaoAccessToken(code);
            dispatch(success(result))
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

/*
*
* */
const actions = {saveKakaoToken, kakaoLoginAsync, getKakaoAccessTokenAsync}

type KakaoAction = ActionType<typeof actions>

export interface KakaoState {
    access_token: string,
    token_type: "bearer",
    refresh_token: string,
    expires_in: number,
    scope: string
}

const initialState: KakaoState = {
    access_token: "",
    expires_in: 0,
    refresh_token: "",
    scope: "",
    token_type: "bearer"
}
const reducer = createReducer<KakaoState, KakaoAction>(initialState, {
    [KAKAO_LOGIN_REQUEST]: state => ({...state}),
    [KAKAO_LOGIN_SUCCESS]: state => ({...state}),
    [KAKAO_LOGIN_FAILURE]: state => ({...state}),
    [GET_KAKAO_ACCESS_TOKEN_REQUEST]: state => ({...state}),
    [GET_KAKAO_ACCESS_TOKEN_SUCCESS]: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    },
    [GET_KAKAO_ACCESS_TOKEN_FAILURE]: state => ({...state}),
    [SAVE_KAKAO_TOKEN]: (state, action) => {
        KakaoToken.storeToken(action.payload);
        return {
            ...state
        }
    },
})
export default reducer
