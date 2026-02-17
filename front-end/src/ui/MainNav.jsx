import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { IoCalendar, IoHome } from "react-icons/io5";
const NavList=styled.ul`
     display: flex;
     flex-direction: column;
     gap:0.8rem;
`

const StyledNavLink=styled(NavLink)`
         
  &:link,
  &:visited{
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color:gray;
    font-size:1.6rem;
    font-weight:500;
    padding: 1.2rem 2.4rem;
    transition:all 0.4s;
  }
  
  &:hover,
  &:active,
  &.active:link,
  &.active:visited
  {
  border-radius: 7px;
    color:gray;
    background-color: #c4b6b6;
  }
  
  & svg{
    width: 2.4rem;
    height: 2.4rem;
    color:gray;
    transition:all 0.4s;
  }
  `
function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
        <StyledNavLink to="/dashboard"><IoHome/>
       <span>
       Home
        </span> </StyledNavLink>
        </li>

        <li>
        <StyledNavLink to="/bookings">
        <IoCalendar/>
        Bookings</StyledNavLink>
        </li>

        <li>
        <StyledNavLink to="/cabins">
        <IoCalendar/>
        Cabins</StyledNavLink>
        </li>
        </NavList>
    </nav>
  )
}

export default MainNav
