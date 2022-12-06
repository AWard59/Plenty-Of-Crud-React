import apiUrl from '../apiConfig'
import axios from 'axios'

export const createInitialProfile = (user) => {
  return axios.post(
    apiUrl + 'userProfile/',
    {
      data: {

      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const profileUpdate = (name, tag, age, gender, location, description, user) => {
  return axios.patch(
    apiUrl + 'userProfile/',
    {
      userProfile: {
        name,
        tag,
        age,
        gender,
        location,
        description
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}