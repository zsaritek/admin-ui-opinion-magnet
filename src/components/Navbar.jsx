import logo from '../assets/landing-assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultAvatar from "../assets/avatar.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <nav className='w-full flex justify-between text-white navbar px-10 py-4 border'>
            <img src={logo} alt="logo" className="w-[120px] h-[40px]" onClick={() => (navigate("/"))} />
            <div className="justify-end items-center flex flex-1 relative">
                <button id="dropdownUserAvatarButton" onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src={DefaultAvatar} alt="user photo" />
                </button>

                {isProfileOpen && (
                    <div id="dropdownAvatar" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-11">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>Bonnie Green</div>
                            <div className="font-medium truncate">name@flowbite.com</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>)}
            </div>

        </nav>
    )
}

export default Navbar
