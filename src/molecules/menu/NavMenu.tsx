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
            {links}
        </MenuList>
    );
};
  
export default NavMenu;