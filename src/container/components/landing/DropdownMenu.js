// import { Menu, Transition } from '@headlessui/react'
// import { Fragment } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/solid'
// import { Link } from 'react-router-dom'
// import endpoints from '../../utils/API/endpoints'

// export default function DropDownMenu({ signOut }) {
// 	return (
// 		<div className="ml-1 mr-5 z-10">
// 			<Menu as="div" className="relative inline-block text-left">
// 				<div>
// 					<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-pink-300 text-pink-600 ease-in-out duration-300 rounded shadow-lg shadow-pink-500/20 hover:shadow-pink-600/40 hover:bg-pink-400 hover:text-pink-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
// 						Profile
// 						<ChevronDownIcon
// 							className="w-5 h-5 ml-2 -mr-1 text-pink-200 hover:text-pink-100"
// 							aria-hidden="true"
// 						/>
// 					</Menu.Button>
// 				</div>
// 				<Transition
// 					as={Fragment}
// 					enter="transition ease-out duration-100"
// 					enterFrom="transform opacity-0 scale-95"
// 					enterTo="transform opacity-100 scale-100"
// 					leave="transition ease-in duration-75"
// 					leaveFrom="transform opacity-100 scale-100"
// 					leaveTo="transform opacity-0 scale-95"
// 				>
// 					<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// 						<div className="px-1 py-1 ">
// 							<Menu.Item>
// 								{({ active }) => (
// 									<Link
// 										to={endpoints.slash + endpoints.profile}
// 										className={`${active ? 'bg-pink-400 text-white' : 'text-gray-900'
// 											} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
// 									>
// 										{active ? (
// 											<ProfileActiveIcon
// 												className="w-5 h-5 mr-2"
// 												aria-hidden="true"
// 											/>
// 										) : (
// 											<ProfileInactiveIcon
// 												className="w-5 h-5 mr-2"
// 												aria-hidden="true"
// 											/>
// 										)}
// 										Profile
// 									</Link>
// 								)}
// 							</Menu.Item>
// 							<Menu.Item>
// 								{({ active }) => (
// 									<Link
// 										to={endpoints.slash + endpoints.profile}
// 										className={`${active ? 'bg-pink-400 text-white' : 'text-gray-900'
// 											} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
// 									>
// 										{active ? (
// 											<EditActiveIcon
// 												className="w-5 h-5 mr-2"
// 												aria-hidden="true"
// 											/>
// 										) : (
// 											<EditInactiveIcon
// 												className="w-5 h-5 mr-2"
// 												aria-hidden="true"
// 											/>
// 										)}
// 										Edit
// 									</Link>
// 								)}
// 							</Menu.Item>

// 						</div>
// 						<div className="px-1 py-1">
// 							<Menu.Item>
// 								{({ active }) => (
// 									<button
// 										onClick={signOut}
// 										className={`${active ? 'bg-pink-400 text-white' : 'text-gray-900'
// 											} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
// 									>
// 										{active ? (
// 											<SignOutActiveIcon
// 												className="w-5 h-5 mr-2"
// 												aria-hidden="true"
// 											/>
// 										) : (
// 											<SignOutInactiveIcon
// 												className="w-5 h-5 mr-2"
// 												aria-hidden="true"
// 											/>
// 										)}
// 										SignOut
// 									</button>
// 								)}
// 							</Menu.Item>
// 						</div>
// 					</Menu.Items>
// 				</Transition>
// 			</Menu>
// 		</div>
// 	)
// }

// function EditInactiveIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			viewBox="0 0 20 20"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 		>
// 			<path
// 				d="M4 13V16H7L16 7L13 4L4 13Z"
// 				fill="#FFF3F9"
// 				stroke="#F471B5"
// 				strokeWidth="2"
// 			/>
// 		</svg>
// 	)
// }

// function EditActiveIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			viewBox="0 0 20 20"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 		>
// 			<path
// 				d="M4 13V16H7L16 7L13 4L4 13Z"
// 				fill="#F471B5"
// 				stroke="#FFF3F9"
// 				strokeWidth="2"
// 			/>
// 		</svg>
// 	)
// }

// function ProfileInactiveIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			viewBox="0 0 20 20"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 		>
// 			<path
// 				d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
// 				fill="#FFF3F9"
// 				stroke="#F471B5"
// 				strokeWidth="2"
// 			/>
// 		</svg>
// 	)
// }

// function ProfileActiveIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			viewBox="0 0 20 20"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 		>
// 			<path
// 				d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
// 				fill="#F471B5"
// 				stroke="#FFF3F9"
// 				strokeWidth="2"
// 			/>
// 		</svg>
// 	)
// }

// function SignOutInactiveIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			xmlns="http://www.w3.org/2000/svg"
// 			fill="none"
// 			viewBox="0 0 24 24"
// 		>
// 			<path
// 				fill="#FFF3F9"
// 				stroke="#F471B5"
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				strokeWidth="2"
// 				d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
// 			/>
// 		</svg>
// 	)
// }

// function SignOutActiveIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			viewBox="0 0 24 24"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 		>
// 			<path
// 				d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
// 				fill="#F471B5"
// 				stroke="#FFF3F9"
// 				strokeWidth="2"
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 			/>
// 		</svg>
// 	)
// }