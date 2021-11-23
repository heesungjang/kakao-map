//REACT
import { Fragment, ReactChild } from "react";

//STYLE
import styled from "styled-components";

//TYPE
import CSS from "csstype";

import Icon from "./assets/back_arrow.svg";

interface IHeader {
    title?: string;
    renderLeft?: React.ReactElement | JSX.Element;
    renderRight?: React.ReactElement | JSX.Element;
    isFixed?: boolean;
    containerStyle?: CSS.Properties;
}

const Header: React.FC<IHeader> = ({
    title = "",
    renderLeft,
    renderRight,
    isFixed,
    containerStyle,
}) => {
    return (
        <HeaderContainer isFixed={isFixed} style={containerStyle}>
            {!renderLeft ? (
                <Button>
                    <img src={Icon} alt="" />
                </Button>
            ) : (
                renderLeft
            )}
            {title !== "" ? <HeaderTitle>{title}</HeaderTitle> : <Fragment />}
            {renderRight ? renderRight : <Button tabIndex={-1}></Button>}
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header<{ isFixed: boolean | undefined }>`
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    ${({ isFixed }) =>
        isFixed &&
        `
    position:fixed;
    top : 0;
  `}
`;

const HeaderTitle = styled.h1`
    font-size: 16px;
    color: #111723;
    line-height: 56px;
    text-align: center;
`;
const Button = styled.button`
    padding: 0 25px;
    height: 100%;
    background-color: white;
    border: none;
`;

export default Header;
