import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

import '../assets/navStyle.scss'

const unauthenticatedOptions = (
  <>
    <NavLink to='/' className='nav-link'>Home</NavLink>
    <NavLink to='/sign-up/' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const Header = ({ user }) => (
	<Navbar className='navBar' variant='light' expand='md'>
		<Container>
			<Navbar.Brand>
				<Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
					<img
						className='navLogo'
						alt=''
						src='https://i.imgur.com/n7FH6re.png'></img>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ms-auto'>
					{user && (
						<span className='navbar-text me-2'>Welcome, {user.email}</span>
					)}
					{unauthenticatedOptions}
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
)

export default Header