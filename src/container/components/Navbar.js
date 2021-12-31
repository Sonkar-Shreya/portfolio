// import { Menu, Transition } from '@headlessui/react'
// import React, { Fragment, useEffect, useRef, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { ChevronDownIcon } from '@heroicons/react/solid'

// import endpoints from '../../utils/API/endpoints'
// import { images, messages } from '../../constants'
// import DropDownMenu from './DropdownMenu'
// import { getSessionStorage, SuccessToast } from '../../utils/Common'

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(null)
//   const navigate = useNavigate()

//   useEffect(() => {
//     const user = getSessionStorage()
//     setIsLoggedIn(user?.authToken ? 1 : 0)
//   }, [])

//   const Logo = () => {
//     return (
//       <Link to={endpoints.slash} className='px-5'>
//         <img className='w-24' src={images.kishoriText2} />
//       </Link>
//     )
//   }

//   const ProfileButton = () => {
//     const signOut = () => {
//       sessionStorage.removeItem('user')
//       setIsLoggedIn(false)
//       SuccessToast(messages.success.signOut)
//       navigate(endpoints.slash)
//     }

//     if (isLoggedIn)
//       return (
//         <DropDownMenu signOut = {signOut} />
//       )

//     return (
//       <Link to={endpoints.slash + endpoints.login}
//         className='bg-pink-300 text-pink-600 px-4 py-1 rounded ease-in-out duration-300 mx-1 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:bg-pink-400 hover:text-pink-100 mr-5'>
//         Login
//       </Link>
//     )
//   }

//   return (
//     <header className="px-5 text-gray-600 body-font shadow-lg shadow-gray-500/20">
//       <div className="flex items-center justify-between">
//         <Logo />
//         <nav className="flex">
//           <Link
//             to={endpoints.slash + endpoints.stats}
//             className='bg-blue-300 text-blue-600 px-4 flex items-center rounded ease-in-out duration-300 mx-1 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 '>
//             {/* <CustomButton text='Statistics' color='purple' /> */}
//             Statistics
//           </Link>

//           <Link
//             to={endpoints.slash + endpoints.notice}
//             className='bg-blue-300 text-blue-600 px-4 flex items-center rounded ease-in-out duration-300 mx-1 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 '>
//             Notice
//           </Link>

//           <ProfileButton />

//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar