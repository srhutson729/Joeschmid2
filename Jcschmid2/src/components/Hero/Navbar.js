import React, { useEffect, useState  } from 'react'
import { IconContext } from "react-icons"
import { FaBars, FaTimes} from "react-icons/fa"
import {Link} from "gatsby"
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

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
         <nav class="main-nav white stick-fixed js-transparent transparent">
         <div className='Navbar' active={scroll} click={click} >
        <div className='navbar-container'> 
        <Link to="about" className="navbar-logo" onClick={closeMobileMenu}>
       Joseph C. Schmid 
        </Link>
        <div className='menu-icon' onClick={handleClick}>
      {click ? <FaTimes /> : <FaBars/> }
     </div>
     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
     <li className='nav-item'>
            </li>
         <li className='nav-item'>
             <Link to="#about" className='nav-links' onClick={closeMobileMenu}>
                 About
             </Link>
            </li>
            <li className='nav-item'>
             <Link to="/research" className='nav-links' onClick={closeMobileMenu}>
                 Research
             </Link>
             </li>  
             <li className='nav-item'>
             <Link to="/videos" className='nav-links' onClick={closeMobileMenu}>
                 Videos
             </Link>
             </li>
                <li className='nav-item'>
             <Link to="/blog" className='nav-links' onClick={closeMobileMenu}>
                 Blog
             </Link>
                </li>
             <li className='nav-item'>
             <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                 Q & A
             </Link>
            </li>
            <li className='nav-item'>
         </li>
     </ul>  
         </div>
         </div>
         </nav>
        </IconContext.Provider>
     </>
 );
}


export default Navbar;