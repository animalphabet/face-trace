import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const Nav = styled.nav`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 36px;
`;

const UnorderedList = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: ${(props) => (props.primary ? '1px solid' : 'none')};
  border-radius: 24px;
  padding: 10px 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (!isSignedIn) {
    return (
      <Nav>
        <UnorderedList>
          <li style={{ cssFloat: 'left' }}>
            <img src={logo} alt="logo" width="40px"></img>
          </li>
          <li style={{ cssFloat: 'right' }}>
            <Button onClick={() => onRouteChange('signIn')}>Sign Out</Button>
          </li>
        </UnorderedList>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <UnorderedList>
          <li style={{ cssFloat: 'left' }}>
            <img src={logo} alt="logo" width="40px"></img>
          </li>
          <li style={{ cssFloat: 'right' }}>
            <Button primary onClick={() => onRouteChange('registration')}>
              Register
            </Button>
          </li>
          <li style={{ cssFloat: 'right' }}>
            <Button onClick={() => onRouteChange('signIn')}>Sign In</Button>
          </li>
        </UnorderedList>
      </Nav>
    );
  }
};

export default Navigation;
