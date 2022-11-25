import React, { useContext} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import headerLogo from '../images/sindano_health_logo_black.svg';
import PrimaryButton from './PrimaryButton';
import { sectionVariants } from '../utils/animationVariants';
import { ModalContext } from './App';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  max-width: 1440px;
`;

export const LogoImage = styled.img`
  padding: 13px 0 23px 0;
  margin-right: auto;
`;
export const StyledList = styled.ul`
  display: inline-block;
  text-decoration: none;
`;
export const StyledIcons = styled.li`
  text-decoration: none;
  list-style: none;
  display: inline-block;
  padding: 0 32px 0 0;
`;

export const StyledLinks = styled.a`
  text-decoration: none;
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
  color: ${(props) => `${props.theme.colors.default_text_color}`};
  line-height: 20px;
`;

function Header() {
  const { openModal } = useContext(ModalContext);
  return (
    <HeaderStyle
      as={motion.header}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <LogoImage src={headerLogo} alt="Sindano logo"></LogoImage>

      <nav>
        <StyledList>
          <StyledIcons>
            <StyledLinks href="#ourstory">About</StyledLinks>
          </StyledIcons>
          <StyledIcons>
            <StyledLinks href="#whatwedo">What we do</StyledLinks>
          </StyledIcons>
          <StyledIcons>
            <StyledLinks href="#faq">FAQ</StyledLinks>
          </StyledIcons>
        </StyledList>
      </nav>

      <PrimaryButton onClick={openModal} label="Request a call"/>
    </HeaderStyle>
  );
}
export default Header;
