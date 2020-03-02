import React, {useCallback} from 'react';

function Login() {
    const kakaoLoginBtn = useCallback(() => {
        window.open(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID!}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT}`)
    }, [])
    return (
        <>
            <button>증가</button>
            <button onClick={kakaoLoginBtn}>카카오 계정으로 로그인 하기</button>
        </>
    )
}

export default Login;