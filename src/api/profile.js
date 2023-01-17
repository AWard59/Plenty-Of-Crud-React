import apiUrl from '../apiConfig'
import axios from 'axios'

export const createInitialProfile = (name, tag, age, gender, location, description, user) => {
  console.log(name)
	return axios.post(
		apiUrl + 'userProfile/',
		{
			data: {
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
				Authorization: `Token ${user.token}`,
			},
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