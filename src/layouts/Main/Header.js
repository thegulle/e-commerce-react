import { useRef } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Box } from '@mui/material';
import CartMenu from 'components/CartMenu';
import Logo from 'images/logo.png';

export default function Header() {
  const mainNav = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > 90) {
      mainNav.current.classList.add('bg-blur');
    } else {
      mainNav.current.classList.remove('bg-blur');
    }
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <Box className='main-nav' ref={mainNav} component="nav">
      <Container>
        <Box className="main-header" component="header">
          <Box className="main-header__logo">
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </Box>
          <Box className='main-header__menu'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <CartMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
