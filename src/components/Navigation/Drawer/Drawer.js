import React, {Component} from "react";
import './Drawer.css'
import {NavLink} from "react-router-dom";
import Profile from '../../../img/navigation_img/Profile.svg'
import Clinics from '../../../img/navigation_img/Clinics.svg'
import Message from '../../../img/navigation_img/Message.svg'
import Test from '../../../img/navigation_img/Test.svg'
import About from '../../../img/navigation_img/About.svg'


const links = [
  {to: '/profile', label: 'Профиль', url: Profile},
  {to: '/clinics', label: 'Врачи и клиники', url: Clinics},
  {to: '/message', label: 'Сообщения', url: Message},
  {to: '/tests', label: 'Тестирование', url: Test},
  {to: '/about', label: 'Полезно знать', url: About},

]

class Drawer extends Component {

  renderLinks() {
    let activeClassName = "active";
    return links.map((link, index) => {
      return (
          <NavLink
              key={index}
              to={link.to}
              className={({isActive}) =>
                  isActive ? activeClassName : undefined
              }
              style={{textDecoration: "none"}}
          >
            <li className={"link"}>

              <img src={link.url} alt=""/>

              <div style={{marginLeft: 15}}>
                {link.label}
              </div>

            </li>
          </NavLink>

      )
    })
  }

  render() {
    return (
        <React.Fragment>
          <nav className={"Drawer"}>
            <ul className={"Logo"}> Логотип</ul>
            <ul>
              {this.renderLinks()}
            </ul>
            <ul>
              <button className={"drawer_button"}> Подать заявку </button>
            </ul>
          </nav>
        </React.Fragment>
    )
  }

}

export default Drawer