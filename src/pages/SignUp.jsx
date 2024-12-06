import React, { useEffect, useState } from 'react'
import { RegistrationForm, Loading, Message } from '../components/components'
import { useNavigate } from 'react-router-dom'

function SignUp({ setNavbar, setLogin }) {
  const navigate = useNavigate();

  const inputFeilds = [
    {
      id: 1,
      type: 'text',
      label: 'Full Name'
    },
    {
      id: 2,
      type: 'email',
      label: 'Email'
    },
    {
      id: 3,
      type: 'password',
      label: 'Password'
    }
  ]

  const [value, setValue] = useState(inputFeilds.map((input) => input.defaultValue))
  const [loading, setLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("null");

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

  const signUser = async () => {
    setLoading(true)
    const res = await fetch('http://localhost:5000/users/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: value[0],
        email: value[1],
        password: value[2]
      })
    })
    const data = await res.json()
    setMessage(data.message)
    if (res.status === 201) {
      setSuccess(true);
      setTimeout(() => {
        setLoading(false)
        setLogin(true)
        navigate('/')
      }, 1000)
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
          <div className='max-w-7xl m-auto h-screen flex items-center justify-center'>
            <RegistrationForm
              heading='Sign Up'
              inputFeilds={inputFeilds}
              paragraph="Already have an account."
              link='Login'
              linkTo='/auth/login'
              value={value}
              setValue={setValue}
              registrationFunction={signUser}
            />
          </div>
      }
      <Message showMessage={showMessage} success={success} message={message} />
    </>
  )
}

export default SignUp
