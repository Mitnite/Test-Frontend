import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Drawer from "./components/Navigation/Drawer/Drawer";

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
          <div className={"App"}>

            <Drawer/>

            <Routes>
              <Route path="/" element={<h1>Мой профиль</h1>}/>
              <Route path="/clinics" element={<h1>Врачи и клиники</h1>}/>
              <Route path="/message" element={<h1>Сообщения</h1>}/>
            </Routes>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
