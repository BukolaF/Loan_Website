import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavItems = () => {
    const navItems =[
        {path:"/", link: "Home"},
        {path: "/loans", link: "Loans"},
        {path: "/about", link: "About"},
        {path: "/login", link: "Login"},
        {path: "/contact", link: "Contact"},
      ]
  return (
    <> 
        {navItems.map(({path,link}) => <li key={link} className='p-8 font-semibold'>
        <NavLink
        className={({isActive, isPending}) => isActive
        ? "active"
        : isPending
        ? "pending"
        : ""} 
        to={path}>{link}</NavLink> </li>)}
        </>
  )
}
