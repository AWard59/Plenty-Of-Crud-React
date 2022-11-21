import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

// import '../assets/navStyle.css'

const unauthenticatedOptions = (
  <>
    <NavLink to='/' className='nav-link'>Home</NavLink>
    <NavLink to='/sign-up/' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Container>
			<Navbar.Brand>
				{/* <Link to='/courses/' style={{ color: '#FFF', textDecoration: 'none' }}>
					<img className='navLogo' src='https://i.imgur.com/E9e7s2r.png'></img>
				</Link> */}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ms-auto'>
					{user && (
						<span className='navbar-text me-2'>
							Welcome, {user.email}
						</span>
					)}
					{unauthenticatedOptions}
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
)

export default Header