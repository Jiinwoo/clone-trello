import {ActionType, createAsyncAction, createReducer} from 'typesafe-actions';
import {AxiosError} from 'axios'
import {ThunkAction} from "redux-thunk";
import {RootState} from "./index";
import {IUserAccount, signup} from "../api/userAPI";
/*
*
* */
const LOGIN_REQUEST = 'user/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'user/LOGIN_FAILURE';

const SIGNUP_REQUEST = 'user/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE';

/*
*
* */

const loginAsync = createAsyncAction(
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
)<undefined, any, AxiosError>();

const signupAsync = createAsyncAction(
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
)<undefined, any, AxiosError>();


/*
*
* */

export function signupThunk(userAccount: IUserAccount): ThunkAction<void, RootState, null, UserAction> {
    return async (dispatch) => {
        const {request, success, failure} = signupAsync;
        dispatch(request);
        try {
            const result = await signup(userAccount);
            dispatch(success(result))
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

export function loginThunk(userAccount: IUserAccount): ThunkAction<void, RootState, null, UserAction> {
    return async (dispatch) => {
        const {request, success, failure} = signupAsync;
        dispatch(request);
        try {
            const result = await signup(userAccount);
            dispatch(success(result))
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

/*
*
* */
const actions = {loginAsync, signupAsync}

type UserAction = ActionType<typeof actions>

export interface UserState {

    error: Error;
}

const initialState: UserState = {


    //디버깅용 Axios Error
    error: {
        name: '',
        message: '',
        stack: '',
    }
}
const reducer = createReducer<UserState, UserAction>(initialState, {
    [LOGIN_REQUEST]: state => ({...state}),
    [LOGIN_SUCCESS]: state => ({...state}),
    [LOGIN_FAILURE]: (state, action) => ({...state, error: {...action.payload}}),
    [SIGNUP_REQUEST]: state => ({...state}),
    [SIGNUP_SUCCESS]: state => ({...state}),
    [SIGNUP_FAILURE]: (state, action) => ({...state, error: {...action.payload}}),

})
export default reducer
