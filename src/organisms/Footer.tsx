import styled from 'styled-components';
import LogoTypography from '../atoms/typography/LogoTypography';
import NavMenu from '../molecules/menu/NavMenu';
import FooterWrapper from '../atoms/wrappers/FooterWrapper';

const FooterContainer = styled('div')`
    width: 100%;
    max-width: 1180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    padding-top: 21px;
`;

const Menu = styled('nav')`
    height: 20px;
    width: 100%;
    max-width: 653px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
          <LogoTypography>Goods4you</LogoTypography>
              <Menu>
                  <NavMenu />
              </Menu>
      </FooterContainer>
    </FooterWrapper>
  );
  }
  
export default Footer;