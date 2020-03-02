import React from 'react';


interface IRedirect {
    code: string;
    error?: string;
    accessToken?: string;
}

function Redirect({accessToken, code, error}: IRedirect) {

    return (
        <>

            {code ? '엑세스 코드 발급 완료되었습니다'
                :
                `엑세스 코드 발급 실패 사유${error}`}
            {
                accessToken ? `엑세스 토큰 : ${accessToken}` : ''
            }
        </>
    )
}

export default Redirect;