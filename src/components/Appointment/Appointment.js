import React from "react";
import './Appointment.css'

const Appointment = props => {
  return (
      <div className={'Appointment'}>
        <div>
          <span className={'date'}>
          {props.day} {props.data} | {props.time}
        </span>
          <p className={'address'}>
            {props.address}
          </p>
          <div className={'doctor'}>
            <img src={props.photo} alt=""/>
            <div className={'doctor_name'}>
              <b>{props.name}</b>
              <p>{props.post}</p>
            </div>
          </div>
        </div>
        <button className={'delete_button'} onClick={props.onDelete}> Отменить </button>
      </div>
  )
}
export default Appointment
