import React, { useState } from 'react' 
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

  const history = useHistory()

  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    image: '',
  })

  const [ errors, setErrors ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {                 
      await axios.post('/api/auth/register/', formData) 
      history.push('/login')
    } catch (err) {
      console.log('ERROR!', err.response.data.errors)
      setErrors(err.response.data.errors)
      console.log(errors) 
    }
  }

  return (
    <div className="container">
      <div className="form-style">
        <div className="row">
          <form onSubmit={handleSubmit} className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
            <h3 className="mb-4">Signup</h3>
            <div className="form-floating mb-3">
              <input type="username" onChange={handleChange} name="username" className="form-control" id="floatingInput" value={formData.username} placeholder="Password"/>
              <label htmlFor="floatingUsername">Username</label>
              {errors.username && <p className="error">{errors.username.message}</p>}
            </div>
            <div className="form-floating mb-3">
              <input type="email" onChange={handleChange} name="email" className="form-control" id="floatingInput" value={formData.email} placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="form-floating mb-3">
              <input type="password" onChange={handleChange} name="password" className="form-control" id="floatingPassword" value={formData.password} placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <div className="form-floating mb-3">
              <input type="passwordConfirmation" onChange={handleChange} name="passwordConfirmation" className="form-control" id="floatingInput" value={formData.passwordConfirmation} placeholder="Password Confirmation"/>
              <label htmlFor="floatingPassword">Passwrd Confirmation</label>
              {errors.passwordConfirmation && <p className="error">{errors.passwordConfirmation.message}</p>}
            </div>
            <button className="btn btn-danger mb-3 w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup