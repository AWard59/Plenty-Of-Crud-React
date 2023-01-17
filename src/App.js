import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header'
import Home from './components/Home'

import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import Profile from './components/User/Profile'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='container'>
        <Routes>
          {/* Auth Routes */}
          <Route
            path='/sign-up/'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-in/'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-out/'
            element={
              <SignOut
                msgAlert={msgAlert}
                user={user}
                clearUser={clearUser}
              />
            }
          />
          <Route
            path='/change-password/'
            element={<ChangePassword msgAlert={msgAlert} user={user} />}
          />
          {/* Generic Routes */}
          <Route path='/' element={<Home user={user} />} />
          {/* User Routes */}
          {/* <Route path='/browse' element={<Browse user={user} />} /> */}
          <Route path='/userProfile' element={<Profile user={user} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
