import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Drawer from "./components/Navigation/Drawer/Drawer";
import Header from "./components/Header/Header";
import Profile from "./containers/Profile/Profile";
import AppointmentDetail from "./components/AppointmentDetail/AppointmentDetail";
import doctor_1 from "./img/doctor_1.svg";
import doctor_2 from "./img/doctor_2.svg";



class App extends Component {

  state = {
    show: 0,
    date: '',
    appointment: [
      {
        date: 'Mon Jun 15 2020',
        day: 'Понедельник',
        data: '15.06.20',
        time: '15:30',
        address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        name: 'Малушко Т. Н.',
        post: 'Хирургия',
        photo: doctor_1
      },
      {
        date: 'Mon Jun 15 2020',
        day: 'Понедельник',
        data: '15.06.20',
        time: '18:30',
        address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        name: 'Харьков В. С.',
        post: 'Терапевтическое отделение',
        photo: doctor_2
      },
      {
        date: 'Tue Jun 30 2020',
        day: 'Вторник',
        data: '30.06.20',
        time: '12:10',
        address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        name: 'Малушко Т. Н.',
        post: 'Хирургия',
        photo: doctor_1
      },
      {
        date: 'Tue Jun 30 2020',
        day: 'Вторник',
        data: '30.06.20',
        time: '12:10',
        address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        name: 'Малушко Т. Н.',
        post: 'Хирургия',
        photo: doctor_1
      },
      {
        date: 'Tue Jun 30 2020',
        day: 'Вторник',
        data: '30.06.20',
        time: '12:10',
        address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        name: 'Малушко Т. Н.',
        post: 'Хирургия',
        photo: doctor_1
      },
    ]
  }

  DeleteHandler = (index) => {
    const appointment = [...this.state.appointment]
    appointment.splice(index, 1)
    this.setState({appointment})
  }

  onChangeHandler(index){
    let date = index.toDateString()
    this.setState({
      date: date,
      show: 1
    })
  }

  showHandler = () =>{
    this.setState({
      show: 0
    })
  }

  render() {
    return (
        <BrowserRouter>
          <div className={"App"}>

            <Drawer/>

            <Routes>
              <Route path="/test-frontend" element={
                <div>
                  <Header title={'Мой профиль'}/>
                  <Profile
                      appointment={this.state.appointment}
                      onDelete={index => this.DeleteHandler(index)}
                  />
                </div>
              }/>

              <Route path="/clinics" element={<Header title={'Врачи и клиники'}/>}/>
              <Route path="/message" element={<Header title={'Сообщения'}/>}/>
              <Route path="/tests" element={<Header title={'Тестирование'}/>}/>
              <Route path="/about" element={<Header title={'Полезно знать'}/>}/>
              <Route path="/test-frontend/detail" element={
                <div>
                  <Header title={'Мой профиль'}/>
                  <AppointmentDetail
                      appointment={this.state.appointment}
                      onDelete={index => this.DeleteHandler(index)}
                      onChangeHandler={data => this.onChangeHandler(data)}
                      show={this.state.show}
                      date={this.state.date}
                      showHandler={this.showHandler}
                  />
                </div>
              }/>
            </Routes>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
