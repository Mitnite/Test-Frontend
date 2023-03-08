import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

class App extends Component {
  render() {

    let activeStyle = {
      textDecoration: "underline",
      fontWeight: 'bold',
      color: 'red'
    };

    let activeClassName = "underline";

    return (
        <BrowserRouter>
          <div>
            <nav className={'nav'}>
              <ul>
                <li>
                  <NavLink
                      to="/"
                      style={({isActive}) =>
                          isActive ? activeStyle : undefined
                      }
                  >
                    Мой профиль
                  </NavLink>
                </li>
                <li>
                  <NavLink
                      to="/about"
                      className={({isActive}) =>
                          isActive ? activeClassName : undefined
                      }
                  >
                    Врачи и клиники
                  </NavLink>
                </li>
                <li>
                  <NavLink to={{pathname: '/cars'}}>
                    Сообщения
                  </NavLink>
                </li>
              </ul>
            </nav>

            <hr/>

            <Routes>
              <Route path="/about" element={<h1>Мой профиль</h1>}/>
              <Route path="/" element={<h1>Врачи и клиники</h1>}/>
              <Route path="/cars" element={<h1>Сообщения</h1>}/>
            </Routes>
          </div>

{/*          <div className="App">

          </div>*/}

        </BrowserRouter>

    );
  }
}

export default App;
