import React, { Fragment } from 'react'


function Login() {
  return (
    <>
    <Fragment>
        <div className="login">
            <label htmlFor="Name">Name: </label>
            <input type="text" name="name" id="uname" />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="pwd" />
            <label htmlFor="Mail">Email: </label>
            <input type="email" name="mail" id="gmail" />
            <input type="submit" value="Submit" />
        </div>
    </Fragment>
    </>
  )
}

export default Login