import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import HeaderWrapper from '../atoms/wrappers/HeaderWrapper';
import LogoTypography from '../atoms/typography/LogoTypography';
import NavMenu from '../molecules/menu/NavMenu';
import NavLink from '../atoms/navLink/NavLink';

const HeaderContainer = styled('div')`
    border-bottom: 1px solid ${props => props.theme.border.main};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
`;

const Menu = styled('nav')`
    height: 20px;
    width: 100%;
    max-width: 653px;
`

const Header = () => {
    const location = useLocation();
    return (
      <HeaderWrapper>
        <HeaderContainer>
            <Link to={'/'}>
                <LogoTypography>Goods4you</LogoTypography>
            </Link>
            {location.pathname !== '/' ? 
                <Link to={'/'}><NavLink name={'Back to site'}/></Link>
                :
                <Menu>
                    <NavMenu />
                </Menu>}
        </HeaderContainer>
      </HeaderWrapper>
    );
};
  
export default Header;