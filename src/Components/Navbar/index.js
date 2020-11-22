import React  from 'react';
import { Link } from 'react-router-dom'
import { NavbarSection , Logo , LogoText , UlList , ListItem , Anchor } from './style.js'


const Navbar = () => {
    return (
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Abdelmalek Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><Link exact className='anchor' to="/">Home</Link></ListItem>
                    <ListItem><Link exact className='anchor' to="/work">Work</Link></ListItem>
                    <ListItem><Link exact className='anchor' to="/profile">Profile</Link></ListItem>
                    <ListItem><Link exact className='anchor' to="/portfolio">Portolio</Link></ListItem>
                    <ListItem><Link exact className='anchor' to="/about">About</Link></ListItem>
                    <ListItem><Link className='anchor' to="/contact">Contac1t</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    )
}

export default Navbar;
