import React, { useState } from "react";
import Bed from "../icons/bed.svg";
import Room from "../icons/room.png";
import Minus from "../icons/minus.svg";
import Star from "../icons/star.svg";
import EmptyStar from "../icons/empty-star.svg";
import Marker from "../icons/marker.svg";
import User from "../icons/user.svg";
import { Checkbox } from "@mui/material";
import Check from "../icons/check.svg";
import { Link, useHistory } from "react-router-dom";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import "../styles/main.scss";
import DatePicker from "react-date-picker";

const Main = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state: RootStateOrAny) => {
    return state.rooms;
  });
  const [inputs, setInputs] = useState({
    destination: "",
    // arrival: new Date(),
    // departure: new Date(),
    numberOfPeople: "",
    minimalPrice: "",
    maximumPrice: "",
    numberOfStars: "",
  });
  const [arrival, changeArrival] = useState(new Date());
  const [departure, changeDeparture] = useState(new Date());

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const displayStars = (number: Number) => {
    let displayArray = [];
    for (let i = 0; i < number; i++) {
      displayArray.push(1);
    }
    return displayArray.map((item) => {
      return <img src={Star} alt="" />;
    });
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Bed} alt="bed" />
          <h1>Noclegi</h1>
        </div>

        <div className="user-panel">
          <h3>Dodaj obiekt</h3>
          <h3>Zaloguj się</h3>
        </div>
      </nav>
      <div className="main-container">
        <input
          className="searchbar convex"
          name="destination"
          value={inputs.destination}
          onChange={handleChange}
          placeholder="Cel podróży"
          type="text"
        />
        <div className="options">
          {/* <input type="date" name="arrival" placeholder="Przyjazd" />
          <input type="date" name="departure" placeholder="Wyjazd" /> */}
          <DatePicker onChange={changeArrival} value={arrival} />
          <DatePicker onChange={changeDeparture} value={departure} />
          <div className="number-of-peoples convex">
            <img src={User} alt="user" />
            <h3>Liczba osób</h3>
            <div className="convex">+</div>
            <h3>3</h3>
            <div className="convex">-</div>
          </div>
          <button id="search">Szukaj</button>
        </div>
        <div className="filters convex">
          <h3 style={{ textAlign: "center" }}>Zakres cen</h3>

          <div className="price-container">
            <div className="left">
              <p>min.(zł)</p>
              <input name="minimalPrice" value={inputs.minimalPrice} onChange={handleChange} className="convex" type="text" />

              {/* <div className="convex">120</div> */}
            </div>
            <div className="middle">
              <img src={Minus} alt="minus" />
            </div>
            <div className="right">
              <p>max.(zł)</p>
              {/* <input className="convex" type="text" /> */}
              <input name="maximumPrice" value={inputs.maximumPrice} onChange={handleChange} className="convex" type="text" />
              {/* <div className="convex">340</div> */}
            </div>
          </div>
          <hr />
          <h2>Liczba gwiazdek</h2>
          <div className="stars-row">
            <input type="checkbox" name="" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={EmptyStar} alt="star" />
            <img src={EmptyStar} alt="star" />
            <img src={EmptyStar} alt="star" />
          </div>
          <div className="stars-row">
            <input type="checkbox" name="" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="stars-row">
            <input type="checkbox" name="" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="stars-row">
            <input type="checkbox" name="" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="stars-row">
            <input type="checkbox" name="" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="stars-row">
            <input type="checkbox" name="" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="filter-buttons center">
            <button className="reset-button">Wyczyść filtry</button>
            <button className="filter-button">Filtruj</button>
          </div>
        </div>
        <div className="rooms">
          {rooms.map((room: any) => {
            return (
              <div className="room convex">
                <img src={room.image} alt="room" />
                <h2>{room.name}</h2>
                {displayStars(room.numberOfStars)}
                {/* <img src={Star} alt="" />
            <img src={Star} alt="" /> */}

                <h3>{room.price}zł</h3>
                <img src={Marker} alt="marker" />
                <h4>{room.location}</h4>
                <p>{room.description}</p>
                <button>Zobacz ofertę</button>
              </div>
            );
          })}
        </div>
      </div>
      <footer>© 2022 aplikacja-do-rezerwacji.pl</footer>
    </>
  );
};

export default Main;
