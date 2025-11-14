import { Link } from "react-router-dom";
import './Signup.css';   


function Signup() {
  return (
  <div className='container'>
      <h2 className='page-header'>Sign Up</h2>
      <div className='register-container'>

        <div className="row">
          <div className='mb-3 flex-item'>
            <label>First Name</label>
            <input type='text' className='form-control' />
          </div>

          <div className='mb-3 flex-item'>
            <label>Last Name</label>
            <input type='text' className='form-control' />
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Phone Number</label>
          <input
            type='tel'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            type='password'
            className='form-control'
          />
        </div>

        <div>
          Already have an account? <Link to='/signin'>Sign-in here</Link>
        </div>
        <div>
          <button
            className='btn btn-success'
          >
            Sign Up 
          </button>
        </div>
      </div>
    </div>
    );
}

export default Signup
