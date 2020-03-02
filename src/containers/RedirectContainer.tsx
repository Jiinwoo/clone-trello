import React, {useEffect} from "react";
import Redirect from "../components/Redirect";
import {useQuery, useSelector} from "../hooks";
import {getKakaoAccessTokenThunk} from "../modules/kakao";
import {useDispatch} from "react-redux";

function RedirectContainer() {
    const dispatch = useDispatch();
    const {access_token} = useSelector(state => state.kakao);
    let query = useQuery();
    useEffect(() => {
        if (query.get('code')) {
            dispatch(getKakaoAccessTokenThunk(query.get('code')!))
        }
    }, []);

    return (<Redirect
        code={query.get('code')!} accessToken={access_token}/>)
}


export default RedirectContainer