import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import Shape from '../Shape/Shape';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in-out;
  /* z-index: 9; */
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderWrapper id="home">
      <Overlay isMenuOpen={isMenuOpen} onClick={handleToggleMenu} />
      <Menu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
      <Logo />
      <Shape />
      <Hero />
    </HeaderWrapper>
  );
};

export default Header;