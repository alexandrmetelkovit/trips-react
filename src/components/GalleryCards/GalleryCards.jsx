import React from "react";
import Heading from "../Heading/Heading";
import GalleryCard from "./GalleryCard";
import project1Img from "../../assets/project1.png";
import project2Img from "../../assets/project2.png";
import project3Img from "../../assets/project3.png";
import project4Img from "../../assets/project4.png";

// создаем массив из карточек в виде объектов
const cards = [
  {
    image: project1Img,
    country: "Тбилиси",
    month: "апрель",
    value: "83.000",
    transport: "на автобусе",
    passengers: 10,
    isPassengers: true,
  },
  {
    image: project2Img,
    country: "Стамбул",
    month: "март",
    value: "110.000",
    transport: "на самолете",
    passengers: 10,
    isPassengers: false,
  },
  {
    image: project3Img,
    country: "Дубай",
    month: "март",
    value: "220.000",
    transport: "на автобусе",
    passengers: 15,
    isPassengers: true,
  },
  {
    image: project4Img,
    country: "Пхукет",
    month: "сентябрь",
    value: "135.000",
    transport: "самолет + паром",
    passengers: 11,
    isPassengers: true,
  },
];

function GalleryCards() {
  return (
    <>
      <Heading class="heading__h1" level="h1" title="Галерея путешествий" />
      {cards.map((cards) => (
        <GalleryCard
          image={cards.image}
          isPassengers={cards.isPassengers}
          transport={cards.transport}
          passengers={cards.passengers}
          country={cards.country}
          month={cards.month}
          value={cards.value}
        />
      ))}
    </>
  );
}

export default GalleryCards;
