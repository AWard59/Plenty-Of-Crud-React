import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
		<>
			<br />
			<div className='container'>
				<h1>Welcome to Plenty of CRUD</h1>
				<br />
				<h5>
					If you are new, <Link to='/sign-up'>Sign Up</Link> now to be able to view other members!
				</h5>
			</div>
		</>
	)
}

export default Home