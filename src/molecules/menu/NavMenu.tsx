import styled from 'styled-components';
import NavLink from "../../atoms/navLink/NavLink";
import { RouterLinkTypography } from '../../atoms/typography/LinkTypography';

const MenuList = styled('ul')`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const MenuItem = styled('li')`
    height: 20px;
`

const NavMenu = () => {
    return (
        <MenuList>
            <MenuItem><NavLink url='#catalog' name={'Catalog'}/></MenuItem>
            <MenuItem><NavLink url='#about' name={'About us'}/></MenuItem>
            <MenuItem><NavLink url='#product-selection' name={'Product selection'}/></MenuItem>
            <MenuItem><NavLink url='#team' name={'Our team'}/></MenuItem>
            <MenuItem><NavLink url='#faq' name={'FAQ'}/></MenuItem>
            <MenuItem><RouterLinkTypography to={'/admin'}>For staff</RouterLinkTypography></MenuItem>
        </MenuList>
    );
};
  
export default NavMenu;