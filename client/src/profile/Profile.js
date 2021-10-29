import React from 'react'
// import { Link } from 'react-router-dom'


const Profile = ({ user }) => {

  console.log(user)

  return (
    <>
      <div className="site-wrapper">
        <div className="beer-page">
          { user &&
            <>
              <h1 className='profile-title'>My Profile</h1>
              <div className="details d-flex justify-content-center">
                <div className='profile-info d-flex flex-column justify-content-center'>
                  <h3>👤 {user.username}</h3>
                  <h3>📧 {user.email}</h3>
                </div>
              </div>
            </>
          }
        </div>
      </div></>
  )
}

export default Profile