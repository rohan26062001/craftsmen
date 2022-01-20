import React from 'react';

const myStyle = {
  background: `linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  center`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
};
const removeOutline = {
  boxShadow: 'none',
  width: '80%',
};
export default function Login() {
  return (
    <div className='container-fluid' style={myStyle}>
      <div className='row justify-content-center pt-5'>
        <div className='col-lg-4 col-md-6 col-sm-6'>
          <div className='card shadow'>
            <div className='card-title text-center border-bottom my-4'>
              <h2 className='p-3'>Sign in</h2>
            </div>
            <div className='card-body'>
              <form>
                <div className='d-flex justify-content-center'>
                  <input
                    type='text'
                    className='form-control border border-dark p-2'
                    placeholder='username'
                    id='username'
                    style={removeOutline}
                  />
                </div>
                <div className='d-flex justify-content-center my-4'>
                  <input
                    type='password'
                    placeholder='password'
                    className='form-control border border-dark p-2'
                    id='password'
                    style={removeOutline}
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <button type='submit' className='btn btn-success w-50'>
                    Login
                  </button>
                </div>
                <div className='d-flex justify-content-center my-4'>
                  <a href='https://www.google.com/'> Forgot Password</a>
                </div>
                <div className='d-flex justify-content-center my-2'>
                  Don't have an account?&nbsp;
                  <a href='https://www.google.com/'>
                    <strong>Sign Up</strong>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
