import React from "react";
import './Profile.css'
import ElectronicCard from "../../components/ElectronicCard/ElectronicCard";
import lab from '../../img/electronic_card_img/lab.svg'
import clock from '../../img/electronic_card_img/clock.svg'
import add from '../../img/electronic_card_img/add.svg'
import report from '../../img/electronic_card_img/report.svg'
import Appointment from "../../components/Appointment/Appointment";
import {useNavigate} from "react-router-dom";

 const Profile = props => {

    const navigate = useNavigate();
    let appointment
    if (props.appointment.length > 0) {
      appointment = props.appointment.map((name, index) => {
        if (index < 2 && index > -1) {
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
          }else{
          return null
        }
      })
    } else {
      appointment = <div style={{fontSize: 25, margin: 25}}>Записей нет</div>
    }

    return (
        <div className={'Profile'}>
          <div style={{marginBottom: 35}}>
            <p className={'title'}>Запись на прием</p>
            <div className={'card_list'}>
              {appointment}
              <div className={'card_list_more'}>
                <p style={{margin: 0, padding: 0}}>Ещё &nbsp;

                  {(props.appointment.length - 2) > 0 ? props.appointment.length - 2 : 0} &nbsp;
                  {(props.appointment.length - 2 === 1) ? 'запись'
                      : props.appointment.length - 2 < 1 ? 'записей' : 'записи'
                  }

                </p>
                <span onClick={() => navigate('/test-frontend/detail')} className={'navigation'}> Подробнее </span>
              </div>
            </div>
          </div>
          <div>
            <p className={'title'}>Электронная карта</p>
            <div className={'cards'}>
              <ElectronicCard
                  url={report}
                  title={'Информация о пациенте'}
                  children={
                    <ul>
                      <li><span>Ваши личные данные</span></li>
                      <li><span>Рекомендации врачей</span></li>
                      <li><span>История болезней</span></li>
                    </ul>
                  }
              />


              <ElectronicCard
                  url={lab}
                  title={'Результаты анализов'}
                  children={<p style={{width: 324}}>Вы можете узнать здесь результаты своих анализов</p>}
              />
            </div>

            <div className={'cards'}>
              <ElectronicCard
                  url={add}
                  title={'Добавить  информацию'}
                  children={<p style={{width: 324}}>Добавляйте в свою электронную медицинскую карту новые данные</p>}
              />

              <ElectronicCard
                  url={clock}
                  title={'История приемов'}
                  children={<p style={{width: 324}}>Вся информация о полученных услугах за все время хранится здесь</p>}
              />
            </div>
          </div>
        </div>


    )
}
export default Profile