import { useState, useRef } from 'react'
import './App.css'
import { Navbar } from './components/components'
import { Dashboard, PageNotFound, Home, Login, SignUp, Profile } from './pages/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [navbar, setNavbar] = useState('hidden')
  const [login, setLogin] = useState(false)
  const [userRole, setUserRole] = useState("User");
  const [userName, setUserName] = useState(null);



  return (
    <>
      <BrowserRouter>
        <nav>
          <Navbar navbar={navbar} login={login} setLogin={setLogin} />
        </nav>
        <section className='w-full'>
          <Routes>
            <Route path='/' element={<Home setNavbar={setNavbar} />} />
            <Route path='/dashboard' element={<Dashboard setNavbar={setNavbar} login={login} userRole={userRole} />} />
            <Route path='/auth/login' element={<Login setNavbar={setNavbar} setLogin={setLogin} setUserRole={setUserRole} setUserName={setUserName} />} />
            <Route path='/auth/sign-up' element={<SignUp setNavbar={setNavbar} setLogin={setLogin} />} />
            {
              login && <Route path='/user/profile' element={<Profile setNavbar={setNavbar} userName={userName} />} />
            }
            <Route path='*' element={<PageNotFound setNavbar={setNavbar} />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
