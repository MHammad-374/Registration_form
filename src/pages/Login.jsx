import React, { useEffect, useState } from 'react'
import { RegistrationForm, Loading, Message } from '../components/components'
import { useNavigate } from 'react-router-dom'

function Login({ setNavbar, setLogin, setUserRole, setUserName }) {
  const inputFeilds = [
    {
      id: 1,
      type: 'email',
      label: 'Email',
      defaultValue: ''
    },
    {
      id: 2,
      type: 'password',
      label: 'Password',
      defaultValue: ''
    }
  ]
  const navigate = useNavigate()

  const [value, setValue] = useState(inputFeilds.map((input) => input.defaultValue))
  const [loading, setLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(null);




  useEffect(() => {
    setNavbar('hidden')
  }, [])

  // Function to show the message and auto-hide it after 3 seconds
  const handleMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide after 3 seconds
  };

  const loginUser = async () => {
    setLoading(true)
    const res = await fetch('http://localhost:5000/users/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: value[0],
        password: value[1]
      })
    })
    const data = await res.json()
    setMessage(data.message)
    if (res.status === 200) {
      setUserRole(data.role)
      setUserName(data.name)
      setSuccess(true);
      setTimeout(() => {
        setLoading(false)
        setLogin(true)
        navigate('/')
      }, 500)
    }
    else {
      setLoading(false)
    }
    handleMessage();
  }



  return (
    <>
      {
        loading ?
          <Loading />
          :
          <div className='max-w-7xl m-auto h-screen flex items-center justify-center' >
            <RegistrationForm
              heading='Login'
              inputFeilds={inputFeilds}
              paragraph="Don't have an account?"
              link='Sign Up'
              linkTo='/auth/sign-up'
              value={value}
              setValue={setValue}
              registrationFunction={loginUser}
            />
          </div >
      }
      <Message showMessage={showMessage} success={success} message={message} />
    </>

  )
}

export default Login
