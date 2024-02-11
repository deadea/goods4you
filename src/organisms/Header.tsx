import styled from 'styled-components';
import HeaderWrapper from '../atoms/wrappers/HeaderWrapper';
import LogoTypography from '../atoms/typography/LogoTypography';
import NavMenu from '../molecules/menu/NavMenu';
import Cart from '../molecules/cart/Cart';

const HeaderContainer = styled('header')`
    border-bottom: 1px solid ${props => props.theme.border.main};
    width: 1201.8px;
    display: flex;
    
    align-items: center;
    gap: 233px;
    padding-bottom: 8px;
`;

const Menu = styled('nav')`
    height: 20px;
`

const MenuContainer = styled('div')`
    display: flex;
    gap: 56px;
`

const Header = () => {
    const badgeCount = 1;
    return (
      <HeaderWrapper>
        <HeaderContainer>
            <LogoTypography>Goods4you</LogoTypography>
            <MenuContainer>
                <Menu>
                    <NavMenu />
                </Menu>
                <Cart num={badgeCount}/>
            </MenuContainer>
        </HeaderContainer>
      </HeaderWrapper>
    );
};
  
export default Header;