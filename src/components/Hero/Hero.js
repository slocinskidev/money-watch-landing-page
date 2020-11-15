import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { device } from '../../theme/device';

const Wrapper = styled.section`
  padding: 60px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.laptop} {
    position: absolute;
    text-align: left;
    height: auto;
    width: 50%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    justify-content: flex-start;
  }
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.grey1};
  letter-spacing: 0.2px;
  line-height: 46px;
  font-weight: ${({ theme }) => theme.font.bold};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.color.grey3};
  letter-spacing: 0.2px;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.regular};
  padding-bottom: 20px;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Heading>Lorem ipsum dolor sit amet</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <Text>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Button>Get Early Access</Button>
      <Button outline>Contact Us</Button>
    </Wrapper>
  );
};

export default Hero;
