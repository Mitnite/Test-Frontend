import React from "react";
import './AppointmentDetail.css'
import back from '../../img/back.svg'
import {useNavigate} from "react-router-dom";
import Appointment from "../Appointment/Appointment";
import Calendar from "react-calendar";
import '../../Calendar.css';


const AppointmentDetail = props => {
  const navigate = useNavigate();
  let appointment
  if (props.show === 0) {
    appointment = props.appointment.map((name, index) => {
      return (
          <Appointment
              key={index}
              day={name.day}
              data={name.data}
              time={name.time}
              name={name.name}
              address={name.address}
              post={name.post}
              photo={name.photo}
              onDelete={props.onDelete}
          />
      )
    })
  } else {
    appointment = props.appointment.map((name, index) => {
      if (props.date === name.date) {
        return (
            <Appointment
                key={index}
                day={name.day}
                data={name.data}
                time={name.time}
                name={name.name}
                address={name.address}
                post={name.post}
                photo={name.photo}
                onDelete={props.onDelete}
            />
        )
      }
    })
  }


  return (
      <div className={'AppointmentDetail'}>
        <div className={'arrow_back'} onClick={() => navigate('/profile')}>
          <img src={back} alt="" style={{marginRight: 15}}/> Мои записи
        </div>

        <div className={'container'}>

          <div className={'appointment_container'}>
            {props.show > 0 ?
                <span onClick={props.showHandler} className={'navigation'}> Показать все записи </span>
                : null}
            {appointment}
          </div>

          <div className={'calendar'}>
            <div className='calendar-container'>
              <Calendar onChange={date => props.onChangeHandler(date)}/>
            </div>
          </div>
        </div>

      </div>
  )
}
export default AppointmentDetail
