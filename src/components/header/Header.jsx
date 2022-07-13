import React from "react";
import Briefcase from '../../assets/images/briefcase.svg';
import User from '../../assets/images/user.svg';
import '../../assets/css/style.css';
import { userSelector } from "../../features/UserSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearState } from "../../features/UserSlice";
import { logout } from "../../features/UserSlice";
function Header () {
  // const {userInfo, userToken, isSuccess, isError, errorMessage } = useSelector(userSelector);
  const dispatch = useDispatch();
  const { userName} = useSelector(userSelector);
  return(
  <header className="header">
    <div className="header__inner">
      <a href="/main" className="header__logo">
        Travel App
      </a>
      <nav className="header__nav">
        <ul className="nav-header__list">
          <li className="nav-header__item" title="Bookings">
            <a href="/bookings" className="nav-header__inner">
              <span className="visually-hidden">Bookings</span>
              <img src={Briefcase} alt=" icon" />
            </a>
          </li>
          <li className="nav-header__item" title="Profile">
            <div className="nav-header__inner profile-nav">
              <span className="visually-hidden">Profile</span>
              <img src={User} alt="profile icon" />
              <ul className="profile-nav__list">
                <li className="profile-nav__item profile-nav__username">{userName}
                </li>
                <li className="profile-nav__item">
                  <button className="profile-nav__sign-out button" onClick={()=> dispatch(logout())}>
                    Sign Out
                  </button>
              
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
};

export default Header;
