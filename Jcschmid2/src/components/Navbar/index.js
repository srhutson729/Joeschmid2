import React, { useEffect, useState  } from 'react'
import { FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import {Nav, NavbarContainer, NavLogo, MobileIcon} from "./NavbarElements"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
      changeNav()
      window.addEventListener("scroll", changeNav)
    }, [])

 return (
     <> 
     <IconContext.Provider value={{ color: "#141414"}}>
         <Nav active={scroll} click={click}>
        <NavbarContainer>
            <NavLogo to="/">
                Joseph C Schmid
            </NavLogo>
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
        </NavbarContainer>
         </Nav>
     </IconContext.Provider>
     </>
 )
}

export default Navbar