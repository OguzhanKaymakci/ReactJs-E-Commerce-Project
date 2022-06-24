import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogin } from './serviceOne'

function Login() {


  const [email, setEmail] = useState("")
  const [passwords, setPasswords] = useState("")
  const [loginerror, setLoginError] = useState(false)
  const [loginmessage, setLoginMessage] = useState("")
  const navigate = useNavigate()




  const fncSend = (evt: React.FormEvent) => {
    evt.preventDefault()

    userLogin(email, passwords).then(res => {
      const durum = res.data.status
      const mesaj = res.data.message

      setLoginMessage(mesaj)
      if (durum) {
        const stData = JSON.stringify(res.data.result)
        const stJwt = JSON.stringify(res.data.jwt)
        sessionStorage.setItem("user", stData)
        sessionStorage.setItem("jwt", stJwt)
        console.log('first', setEmail)
        //navigate('/welcome')

      } else {
        //alert( mesaj )
        setLoginError(true)

      }
    })

  }



  return (
    <>
      <div className='row'>
        <div className='col-sm-4'><h1></h1></div>
        <div className='col-sm-4'><h1>User Login</h1>
          <div style={{ display: loginerror === true ? 'block' : 'none' }} className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> {loginmessage}
            <button type="button" className="btn-close" aria-label="Close" onClick={(evt) => setLoginError(false)}  ></button>
          </div>
          <form onSubmit={fncSend}>

            <div className='mt-3'>
              <input onChange={(evt) => setEmail(evt.target.value)} type='email' className='form-control' placeholder='E-mail' />
            </div>
            <div className='mt-3'>
              <input onChange={(evt) => setPasswords(evt.target.value)} type='password' className='form-control' placeholder='Password' />
            </div>

            <div className="mt-3">
              <a onClick={(evt) => navigate('/welcome')} role='button' className='btn btn-success'>Login</a>
            </div>


          </form>
          <div />
        </div>

        <div className='col-sm-4'><h1></h1></div>
      </div>


    </>
  )
}

export default Login;

