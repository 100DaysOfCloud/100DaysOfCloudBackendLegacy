import React from 'react'
import NavBar, {NavItem, NavLink} from '../../shared/navbar'
import {MobileMenuWrap} from './mobilemenu.stc'

export const MobileMenu = ({menuData}) => {
    return (
        <MobileMenuWrap>
            <NavBar>
                {menuData.map((menu, i) => {
                    return(
                        <NavItem 
                            key={`menu-item-${i}`} 
                            id={`menu-item-${i}`}>
                            <NavLink path={menu.node.path}>{menu.node.title}</NavLink>
                        </NavItem>
                    )
                })}
            </NavBar>
        </MobileMenuWrap>
    )
}
