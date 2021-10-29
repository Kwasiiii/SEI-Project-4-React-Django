import React, { useState } from 'react'
import axios from 'axios' 
import { Link, useHistory } from 'react-router-dom'

const Login = () => {

  const history = useHistory() 

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token) 
    history.push('/clothing') 
  }

  const handleSubmit = async (event) => {
    event.preventDefault() 
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setTokenToLocalStorage(data.token)

      console.log(data) 
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="container">
      <div className="form-style">
        <div className="row">
          <form onSubmit={handleSubmit} className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
            <h3 className="mb-4">Login</h3>
            <div className="form-field">
              <div className="social-login mb-3">
                <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
              </div>
              <p>OR</p>
              <div className="form-floating mb-3">
                <input type="email" onChange={handleChange} name="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="password" onChange={handleChange} name="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-danger mb-3 w-100">Login</button>
            <p className="no-account">Don&apos;t have an Account?<Link to="/signup"><span> Click Here</span></Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login