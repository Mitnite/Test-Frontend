import React from "react";
import './Header.css'
import Search from '../../img/header_img/search.svg'
import Eye from '../../img/header_img/eye.svg'
import Bell from '../../img/header_img/bell.svg'
import Profile from '../../img/header_img/profile.svg'


const Header = props => {
  return (
      <div className={'Header'}>
        <h2 className={'title'}>{props.title}</h2>
        <div className={'header_tools'}>
          <button><img src={Search} alt="" /></button>
          <button><img src={Eye} alt="" /></button>
          <button><img src={Bell} alt="" /></button>
          <button><img src={Profile} alt="" /></button>
        </div>
      </div>
  )
}
export default Header
