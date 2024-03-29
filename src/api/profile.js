import apiUrl from '../apiConfig'
import axios from 'axios'

export const createInitialProfile = (name, tag, age, gender, location, description, user) => {
	return axios.post(
		apiUrl + '/userProfile/',
		{
			userProfile: {
				name,
				tag,
				age,
				gender,
				location,
				description,
			},
		},
		{
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}
	)
}

export const profileUpdate = (name, tag, age, gender, location, description, user, profileId) => {
  console.log('update', name)
  return axios.patch(
    `${apiUrl}/userProfile/${profileId}`,
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
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}