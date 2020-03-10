/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import {Fragment} from 'react';
import {ReactComponent as LogoIcon} from "../../assets/logo.svg";


interface ILogo {
}

const Logo = (props: ILogo) => {
    return (<Fragment>
        <LogoIcon css={animatedIcon}/>
    </Fragment>)
}

const animatedIcon = css`
  witdh : 65px;
  height : 65px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover {
      filter: drop-shadow(6px 6px 6px #333);
      transform: scale(1.10) rotate(-4.5deg);
      transition: transform 200ms ease-in-out;
   }
  
`;
export default Logo;