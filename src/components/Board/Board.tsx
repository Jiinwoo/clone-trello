/** @jsx jsx */
import {css, jsx} from '@emotion/core'

interface IBoard {
    /** 하위자식*/
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수*/
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: 'primary' | 'secondary';
    /** 버튼을 비활성화 시킵니다.*/
    disabled?: boolean;
    /** 버튼의 너비를 임의로 설정합니다. */
    width?: string | number;
    /** 버튼의 크기를 설정합니다 */
    size: 'small' | 'medium' | 'big';
}

const Board = ({children, onClick, disabled, size, theme}: IBoard) => {

    return (<button
        onClick={onClick}
        css={[commonStyle, themes[theme], sizes[size]]}
        disabled={disabled}>
        {children}
    </button>)
}

const commonStyle = css`
   outline: none;
  border: none;
  box-sizing: border-box;
  height: 4rem;
  font-size: 0.875rem;
  padding: 1rem 2rem;
  border-radius: 5.5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  cursor: pointer;
  font-weight: bold;
  webkit-transition: 200ms ease-in-out;
   transition: 200ms ease-in-out;
  
  :hover:enabled {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    -webkit-transition:  200ms ease-in-out;
    transition:  200ms ease-in-out;
    -webkit-transform: scale(1.10);
    -ms-transform: scale(1.10);
    transform: scale(1.10);
  }
   &:disabled {
    cursor : not-allowed;
  }
`
const themes = {
    primary: css`
        text-shadow: 0px 0px 3px #000;
        background-color: #9fe7a4;
        color: white;
    `,
    secondary: css`
      background-color: white;
    color: #333;
  `
}

const sizes = {
    small: css`
    height:100%;
    width : 6rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
    medium: css`
    height:100%;
    width : 10rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
    big: css`
    width : 14rem;
    height : 100%;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `
};


Board.defaultProps = {
    children: "새로운 보드 만들기",
    theme: "primary",
    size: "medium"
}

export default Board