import styled from 'styled-components';

import { MENUITEMS } from "../../consts/consts";
import NavLink from "../../atoms/navLink/NavLink";

const MenuList = styled('ul')`
    display: flex;
    gap: 36px;
    justify-content: space-between;
    width: 653px;
`

const MenuItem = styled('li')`
    height: 20px;
`

const NavMenu = () => {
    const links = MENUITEMS.map((item) => (
        <MenuItem key={item}><NavLink name={item}/></MenuItem>
    ))
    return (
        <MenuList>
            <MenuItem><NavLink url='#catalog' name={'Catalog'}/></MenuItem>
            <MenuItem><NavLink url='#about' name={'About us'}/></MenuItem>
            <MenuItem><NavLink url='#product-selection' name={'Product selection'}/></MenuItem>
            <MenuItem><NavLink url='#team' name={'Our team'}/></MenuItem>
            <MenuItem><NavLink url='#' name={'Shipping and payment'}/></MenuItem>
            <MenuItem><NavLink url='#' name={'Contacts'}/></MenuItem>
        </MenuList>
    );
};
  
export default NavMenu;