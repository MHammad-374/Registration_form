import React, { useEffect, useState } from 'react'
import { UserModal, Loading, Message } from '../components/components';
import { useNavigate } from 'react-router-dom';


function Dashboard({ setNavbar, login, userRole }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [showMessage, setShowMessage] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("null");



  // Function to show the message and auto-hide it after 3 seconds
  const handleMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide after 3 seconds
  };

  useEffect(() => {
    if (!login) {
      setTimeout(() => {
        navigate('/auth/login')
      }, 300)
    }
  }, [])

  useEffect(() => {
    setNavbar('')
    getUsers()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const getUsers = async () => {
    await fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }

  const deleteUser = (userId) => {
    fetch(`http://localhost:5000/users/${userId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 200) {
          getUsers();
        }
        setSuccess(false);
        handleMessage();
        return res.json()
      })
      .then(data => {
        setMessage(data.message)
      })
  }

  const updateUser = async (userId, name, email) => {
    await fetch(`http://localhost:5000/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })
      .then(res => {
        if (res.status === 200) {
          getUsers();
          setSuccess(true);
          handleMessage();
        }
        else {
          setSuccess(false);
          handleMessage();
        }
        return res.json()
      })
      .then(data => {
        setMessage(data.message)
      })
  }

  const addUser = (name, email, password) => {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(res => {
        if (res.status === 201) {
          getUsers();
          setSuccess(true);
          handleMessage();
        }
        else {
          setSuccess(false);
          handleMessage();
        }
        return res.json()
      })
      .then(data => {
        setMessage(data.message)
      })
  }

  return (
    <>{
      login ?
        loading ?
          <Loading />
          :
          <div>
            <div className='w-full mb-4 overflow-x-scroll'>
              <table>
                <thead className='bg-gray-800'>
                  <tr>
                    <th>Sr#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        {
                          userRole === "Admin" ?
                            <td>{user.email}</td>
                            :
                            <td>********</td>
                        }
                        {
                          userRole === "Admin" ?
                            <td>{user.password}</td> : <td>********</td>
                        }
                        {
                          userRole === "Admin" ?
                            <td>{user.role}</td> :
                            <td>********</td>
                        }
                        <td className={`w-16 ${userRole === "Admin" ? "" : "hidden"}`}>
                          <UserModal
                            btnName="Edit"
                            heading="Edit User"
                            submitBtn="Update"
                            name={user.name}
                            email={user.email}
                            userId={user._id}
                            editEmployee={updateUser}
                          />
                          <UserModal
                            btnName="Delete"
                            heading="Delete"
                            submitBtn="Delete"
                            userId={user._id}
                            deleteUser={deleteUser}
                          />
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            {
              userRole === "Admin" ?
                <div className='flex justify-center'>
                  <UserModal
                    btnName="+ Add User"
                    heading="Add User"
                    submitBtn="Add"
                    addEmplooyee={addUser}
                  />
                  <Message showMessage={showMessage} success={success} message={message} />
                </div>
                :
                <></>
            }
          </div>
        :
        <Loading />
    }
    </>
  )
}

export default Dashboard
