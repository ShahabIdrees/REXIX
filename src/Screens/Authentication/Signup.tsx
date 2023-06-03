import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faApple,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  return (
    <div className='card bg-dark align-content-center justify-self-center mt-5 p-3 p-md-4 p-lg-5 mb-5 col-10 col-md-7 col-lg-5' style={{height:"100%", margin:"auto" }}>
    <form className='d-flex flex-column'>
        <h2 className="form-title text-center text-info">Sign up</h2>
        <label className='text-bg-dark mt-2 fs-4'>Enter email</label>
        <input type="email" name="email" placeholder='Email' className='mb-2 mt-1 form-control-lg' />
        <label className='d-block text-bg-dark fs-4 mt-2'>Enter Password</label>
        <input type="password" name="password" placeholder='Password' className='mb-2 mt-1 form-control-lg' />
        <label className='d-block text-bg-dark fs-4 mt-2'>Confirm Password</label>
        <input type="password" name="confirmPassword" placeholder='Confirm Password' className='mb-2 mt-1 form-control-lg'/>
        <button type="submit" className="btn btn-outline-info align-self-center mt-4 w-25">Sign up</button>
    </form>
    <p className='text-bg-dark mt-3 fs-5'>Or sign up with:</p>
    <span className="d-flex col-sm-6 col-md-5  col-12 justify-content-center justify-content-lg-evenly mb-4 p-2">
        <a
        className="btn btn-outline-info text-bg-dark m-1 p-0"
        href="https://www.google.com"
        >
        <FontAwesomeIcon
            icon={faFacebook}
            className="icon fs-1 m-1 text-info text-bg-dark"
        />
        </a>
        <a className="btn  btn-outline-info text-bg-dark p-0  m-1">
        <FontAwesomeIcon
            icon={faApple}
            className="fs-1 m-1 ps-1 text-info text-bg-dark"
        />
        </a>
        <a className="btn  btn-outline-info text-bg-dark p-0 m-1">
        <FontAwesomeIcon
            icon={faGoogle}
            className="fs-1 m-1 text-info text-bg-dark"
        />
        </a>
        <a className="btn  btn-outline-info text-bg-dark p-0 m-1">
        <FontAwesomeIcon
            icon={faTwitter}
            className="fs-1 text-info m-1 text-bg-dark"
        />
        </a>
    </span>
    <p className='text-bg-dark mt-3 fs-5 text-center'>Already have an account? <Link to="/login" className='text-info text-decoration-none'>Login here</Link></p>
    </div>

  )
}

export default Signup