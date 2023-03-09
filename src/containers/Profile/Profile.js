import React, {Component} from "react";
import './Profile.css'
import ElectronicCard from "../../components/ElectronicCard/ElectronicCard";
import lab from '../../img/electronic_card_img/lab.svg'
import clock from '../../img/electronic_card_img/clock.svg'
import add from '../../img/electronic_card_img/add.svg'
import report from '../../img/electronic_card_img/report.svg'
export default class Profile extends Component {
  render() {
    return (
        <div className={'Profile'}>
          <div style={{marginBottom: 35}}>
            <p className={'title'}>Запись на прием</p>
          </div>
          <div>
            <p className={'title'}>Электронная карта</p>
            <div className={'cards'}>
              <ElectronicCard
                  url={report}
                  title={'Информация о пациенте'}
              >
                <ul >
                  <li><span>Ваши личные данные</span></li>
                  <li><span>Рекомендации врачей</span></li>
                  <li><span>История болезней</span></li>
                </ul>
              </ElectronicCard>

              <ElectronicCard
                  url={lab}
                  title={'Результаты анализов'}
              >
                <p style={{width: 324}}>Вы можете узнать здесь результаты своих анализов</p>
              </ElectronicCard>
            </div>

            <div className={'cards'}>
              <ElectronicCard
                  url={add}
                  title={'Добавить  информацию'}
              >
                <p style={{width: 324}}>Добавляйте в свою электронную медицинскую карту новые данные</p>
              </ElectronicCard>

              <ElectronicCard
                  url={clock}
                  title={'История приемов'}
              >
                <p style={{width: 324}}>Вся информация о полученных услугах за все время хранится здесь</p>
              </ElectronicCard>
            </div>
          </div>
        </div>


    )
  }
}