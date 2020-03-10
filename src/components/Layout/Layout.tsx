/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import React, {Fragment} from 'react';
import Logo from "../Logo/Logo";

interface ILayout {
    children?: React.ReactNode;
}

/**
 * 레이아웃입니다
 * @param children
 * @constructor
 */
const Layout = ({children}: ILayout) => {
    return (<Fragment>
        <div css={logoWrapper}>
            <Logo/>
            {/*    */}
        </div>

        {children}
    </Fragment>)
}
const logoWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top : 20px;
`


export default Layout