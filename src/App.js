import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Drawer from "./components/Navigation/Drawer/Drawer";
import Header from "./components/Header/Header";
import Profile from "./containers/Profile/Profile";

function App() {
  return (
      <BrowserRouter>
        <div className={"App"}>

          <Drawer/>

          <Routes>
            <Route path="/" element={
              <div>
                <Header title={'Мой профиль'}/>
                <Profile/>
              </div>

            }/>
            <Route path="/clinics" element={<Header title={'Врачи и клиники'}/>}/>
            <Route path="/message" element={<Header title={'Сообщения'}/>}/>
            <Route path="/tests" element={<Header title={'Тестирование'}/>}/>
            <Route path="/about" element={<Header title={'Полезно знать'}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  )

}

export default App;
