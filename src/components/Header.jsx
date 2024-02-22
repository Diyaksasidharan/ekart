import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer);
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
    <Navbar style={{zIndex:"1"}} expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{color:'#eef2e2',textDecoration:'none',fontWeight:'bold'}}><i class="fa-solid fa-cart-shopping me-2"></i>E-Kart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'wishlist'} style={{color:'#eef2e2',textDecoration:'none',fontWeight:'bold'}}><i class="fa-solid fa-heart fa-shake me-1 text-danger"></i>Wishlist<Badge  className='rounded ms-2 bg-success'>{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link><Link to={'cart'} style={{color:'#eef2e2',textDecoration:'none',fontWeight:'bold'}}><i class="fa-solid fa-cart-shopping fa-fade me-1 text-primary"></i>Cart<Badge  className='rounded ms-2 bg-success'>{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header