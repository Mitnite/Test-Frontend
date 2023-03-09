import React from "react";
import './ElectronicCard.css'

const ElectronicCard = props => {
  return (
      <div className={'ElectronicCard'}>
        <div className={'card_img'}>
          <img src={props.url} alt=""/>
        </div>
        <div className={'content'}>
          <h2 className={'title'}>{props.title}</h2>
          {props.children}
        </div>
      </div>
  )
}
export default ElectronicCard
