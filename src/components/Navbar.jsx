import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Loading } from './components';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Projects', href: '/other' },
  { name: 'Calendar', href: '/another' },
]

export default function Example({ navbar, login, setLogin }) {
  const [loading, setLoading] = useState(false)

  const signOut = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setLogin(false)
    }, 800)
  }

  return (
    <>
      {
        loading ? <Loading /> :
          <Disclosure as="nav" className={`bg-gray-800 ${navbar}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img
                      alt="HI Webdev"
                      src={Logo}
                      className="h-8 w-auto"
                    /> */}
                    <svg viewBox="0 0 248 31" class="text-slate-900 dark:text-white w-fit h-5">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path>
                    </svg>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return isActive ? "rounded-md px-3 py-2 text-sm font-medium no-underline bg-gray-900 text-white" : "rounded-md px-3 py-2 text-sm font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                {
                  login ?
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon aria-hidden="true" className="h-6 w-6" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              alt=""
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              className="h-8 w-8 rounded-full"
                            />
                          </MenuButton>
                        </div>
                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem>
                            <NavLink to="/user/profile" className="no-underline block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                              Your Profile
                            </NavLink>
                          </MenuItem>
                          <MenuItem>
                            <NavLink to="/settings" className="no-underline block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                              Settings
                            </NavLink>
                          </MenuItem>
                          <MenuItem>
                            <NavLink to="/" onClick={() => signOut()} className="no-underline block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                              Sign out
                            </NavLink>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                    :
                    <div className="absolute gap-4 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <NavLink
                        to='/auth/login'
                        className='text-xs sm:text-base no-underline text-white hover:underline'
                      >
                        Log In
                      </NavLink>
                      <NavLink
                        to='/auth/sign-up'
                        className='text-xs sm:text-base no-underline text-white hover:underline'
                      >
                        Sign Up
                      </NavLink>
                    </div>
                }

              </div>
            </div>
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return isActive ? "w-fit rounded-md text-sm font-medium no-underline bg-gray-900 text-white" : "w-fit rounded-md text-sm font-medium no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                    }}
                  >
                    <DisclosureButton className='px-3 py-2'>
                      {item.name}
                    </DisclosureButton>
                  </NavLink>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
      }
    </>
  )
}
