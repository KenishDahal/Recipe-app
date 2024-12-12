import React from 'react';
import "../scss/card.scss"

const Card = ({ name,office, text, imgSrc }) => {
    return (
      <div className="layout">
        <img src={imgSrc} alt={name} className="layout__img" />
        <div className="layoutName">{name}</div>
        <div className="layout__office layoutText">{office}</div>
        <div className="layoutText">XYZ Pvt. Ltd.</div>
        <div className="layoutText">{text}</div>
      </div>
    );
  };
  
  
  export default Card;
  