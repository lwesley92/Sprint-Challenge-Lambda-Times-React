import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const HeaderSpan = styled.span `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const HeaderTemp = styled(HeaderSpan) `
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const HeaderDate = styled(HeaderSpan) `
  margin-left: 25px;
  flex: 1;
`;

const HeaderTitle = styled.h1 `
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;


const Header = () => {
  return (
    <StyledHeader>
      <HeaderDate>April 5, 2019</HeaderDate>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderTemp>44°</HeaderTemp>
    </StyledHeader>
  )
}

export default Header;