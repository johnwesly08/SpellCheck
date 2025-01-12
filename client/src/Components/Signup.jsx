import React, { Fragment } from 'react'

function Signup() {
  return (
    <Fragment>
        <div className="signup">
            <label htmlFor="firstname">First Name: </label>
            <input type="text" name="firstname" id="fname" />
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" name="lastname" id="lname" />
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="uname" />
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" id="pwd" />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="Gmail" />
            <input type="submit" value="Submit" />
        </div>
    </Fragment>
  )
}

export default Signup