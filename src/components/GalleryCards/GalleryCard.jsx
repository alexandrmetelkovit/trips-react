import React from "react";
import "./GalleryCard.css";
import amountPassengersImg from "../../assets/Vector.svg";

function GalleryCard(props) {
  console.log(props);
  if (props.isPassengers === false) {
    return (
      <div className="card__wrapper">
        <img className="gallery-card_img" src={props.image} />

        <div className="card-label">
          <div className="card-label_transport">{props.transport}</div>
        </div>

        <p className="text__tour">
          {props.country}, {props.month} — {props.value}
        </p>
      </div>
    );
  }
  return (
    <div className="card__wrapper">
      <img className="gallery-card_img" src={props.image} />

      <div className="card-label">
        <div className="card-label_transport">{props.transport}</div>

        <div className="card-label-passengers">
          <div>{props.passengers}</div>
          <img className="card-label_img" src={amountPassengersImg} />
        </div>
      </div>

      <p className="text__tour">
        {props.country}, {props.month} — {props.value}
      </p>
    </div>
  );
}

export default GalleryCard;
