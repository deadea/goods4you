import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { MENUITEMS } from "../../consts/consts";
import NavLink from "../../atoms/navLink/NavLink";

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
            <Link to={'/admin'}><MenuItem><NavLink name={'For staff'}/></MenuItem></Link>
        </MenuList>
    );
};
  
export default NavMenu;