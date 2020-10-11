import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, firstName: '', lastName: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.firstName || !user.lastName) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
