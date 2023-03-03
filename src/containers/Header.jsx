import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change'
import ThemeContext from '../context/ThemeContext';

const Header = () => {
const { setAppTheme, colorTheme } = useContext(ThemeContext);

let samsunglogowhite = require('../images/samsung-logo-white.png');
let samsunglogodark = require('../images/samsung-logo-dark.png');

useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])

  return (
    <>
    <header className="lg:py-2.5 shadow-lg">
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="#">Saved Designs</Link></li>
        <li><Link to="#">Templates</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">
    {colorTheme === "fantasy" ?
           <img src={samsunglogowhite} />
            :
            <img src={samsunglogodark} />
        }
      </a>
  </div>
  <div className="navbar-end">

    <span onClick={setAppTheme} data-toggle-theme="fantasy,synthwave" className="w-10 h-10  rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center dark:primary" >
        {colorTheme === "fantasy" ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#6e0b75">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#6e0b75">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        }
    </span>
  </div>
</div>
</header>

    </>
  )
}

export default Header