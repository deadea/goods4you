import styled from 'styled-components';
import HeaderWrapper from '../atoms/wrappers/HeaderWrapper';
import LogoTypography from '../atoms/typography/LogoTypography';
import NavMenu from '../molecules/menu/NavMenu';
import FooterWrapper from '../atoms/wrappers/FooterWrapper';

const FooterContainer = styled('footer')`
    width: 1201.8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    padding-top: 21px;
`;

const Menu = styled('nav')`
    height: 20px;
`

const MenuContainer = styled('div')`
    display: flex;
    gap: 56px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
          <LogoTypography>Goods4you</LogoTypography>
          <MenuContainer>
              <Menu>
                  <NavMenu />
              </Menu>
          </MenuContainer>
      </FooterContainer>
    </FooterWrapper>
  );
  }
  
export default Footer;