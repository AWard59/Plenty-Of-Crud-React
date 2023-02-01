import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'

import { createInitialProfile, profileUpdate } from '../../api/profile'


const Profile = ({ msgAlert, user }) => {
  const [userName, setUserName] = useState('')
  const [userTag, setUserTag] = useState('')
  const [userAge, setUserAge] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userLocation, setUserLocation] = useState('')
  const [userAbout, setUserAbout] = useState('')
  const location = useLocation()
  let newUser

  if (location.state.value === true) {
    newUser= location.state.value
  } else {
    newUser = false
  }

  if (!user) {
    return <Navigate to='/' />
  }

  const onUpdateProfile = async (event) => {
    event.preventDefault()
    console.log(newUser)
    try {
        if (newUser === true) {
        await createInitialProfile(userName, userTag, userAge, userGender, userLocation, userAbout, user)
        msgAlert({
          heading: 'Profile Create Success',
          variant: 'success',
        })
    } else {
        await profileUpdate(userName, userTag, userAge, userGender, userLocation, userAbout, user)
        msgAlert({
          heading: 'Profile Update Success',
          variant: 'success',
        })
      } 
    } catch (error) {
        console.log(error)
        msgAlert({
          heading: 'Profile Update/Create Failed',
          variant: 'danger'
        })
    }
  }

  return (
		<div className='row'>
			<div className='col-sm-10 col-md-8 mx-auto mt-5'>
				<h3>Update Profile</h3>
				<Form onSubmit={onUpdateProfile}>
					<Form.Group controlId='userName'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							name='userName'
							value={userName}
							type='text'
							placeholder='Name'
							onChange={(event) => setUserName(event.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId='userTag'>
						<Form.Label>Tag</Form.Label>
						<Form.Control
							name='userTag'
							value={userTag}
							type='text'
							placeholder='Tag'
							onChange={(event) => setUserTag(event.target.value)}
						/>
					</Form.Group>
          <br></br>
            <Form.Group controlId='userAge'>
              <Form.Label>Age</Form.Label>
                <RangeSlider
                  name='userAge'
                  value={userAge}
                  variant='primary'
                  min='18'
                  max='99'
                  onChange={(event) => setUserAge(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='userGender'>
              <Form.Label>Gender</Form.Label>
              {['radio'].map((type) => (
                <div key={userGender} className='mb-3'>
                  <Form.Check
                    inline
                    name='userGender'
                    id='Male'
                    label='Male'
                    onChange={(event) => setUserGender(event.target.id)}
                  />
                  <Form.Check
                    inline
                    name='userGender'
                    id='Female'
                    label='Female'
                    onChange={(event) => setUserGender(event.target.id)}
                  />
							  </div>
              ))}
            </Form.Group>
					<Form.Group controlId='userLocation'>
						<Form.Label>Location</Form.Label>
						<Form.Control
							name='userLocation'
							value={userLocation}
							type='text'
							placeholder='Location'
							onChange={(event) => setUserLocation(event.target.value)}
              />
					</Form.Group>
					<Form.Group controlId='userAbout'>
						<Form.Label>About</Form.Label>
						<Form.Control
							name='userAbout'
							value={userAbout}
							type='text'
							placeholder='About'
							onChange={(event) => setUserAbout(event.target.value)}
              />
					</Form.Group>
					<Button className='mt-2' variant='primary' type='submit'>
						Update Profile
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default Profile