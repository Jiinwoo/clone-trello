import React, {useEffect} from "react";
import {useQuery, useSelector} from "../hooks";
import {getKakaoAccessTokenThunk} from "../modules/kakao";
import {useDispatch} from "react-redux";
import KakaoSignupForm from "../components/KakaoSignupForm/KakaoSignupForm";

function KakaoSignupFormContainer() {
    const dispatch = useDispatch();
    const {access_token} = useSelector(state => state.kakao);
    let query = useQuery();
    useEffect(() => {
        if (query.get('code')) {
            dispatch(getKakaoAccessTokenThunk(query.get('code')!))
        }
    }, []);

    return (<KakaoSignupForm
        code={query.get('code')!} accessToken={access_token}/>)
}


export default KakaoSignupFormContainer