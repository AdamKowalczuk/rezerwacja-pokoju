import React, { useState } from "react";
import Bed from "../icons/bed.svg";
import Room from '../icons/room.png'
import Minus from "../icons/minus.svg";
import Star from "../icons/star.svg";
import EmptyStar from "../icons/empty-star.svg";
import Marker from '../icons/marker.svg'
import User from "../icons/user.svg";
import { Checkbox } from '@mui/material';
import Check from "../icons/check.svg";
import { Link, useHistory } from "react-router-dom";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import "../styles/main.scss";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Main = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    destination: "",
    arrival: "",
    departure: "",
    numberOfPeople: "",
    minimalPrice: "",
    maximumPrice: "",
    numberOfStars: "",
  });
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
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
          <input type="date" name="arrival" placeholder="Przyjazd" />
          <input type="date" name="departure" placeholder="Wyjazd" />
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
          <h2>Zakres cen</h2>
          <hr />
          <div className="price-container">
            <div className="left">
              <p>min.(zł)</p>
              <div className="convex">120</div>
            </div>
            <div className="middle">
              <img src={Minus} alt="minus" />
            </div>
            <div className="right">
              <p>max.(zł)</p>
              <div className="convex">340</div>
            </div>
          </div>
          <hr />
          <h2>Liczba gwiazdek</h2>
          <div className="stars-row">
          <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: 'red',
          '&.Mui-checked': {
            color: 'red',
          },
        }}
      />
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

          <button>Wyczyść filtry</button>
          <button>Filtruj</button>
        </div>
        <div className="rooms">
          <div className="room convex"><img src={Room} alt="room" /><h2>Apartament EMILII PLATER - Centrum</h2> <img src={Star} alt="" /><img src={Star} alt="" /> <h3>200zł</h3>
          <img src={Marker} alt="marker" /><h4>Warszawa</h4>
          <p>Luksusowy, dwupokojowy apartament dla 4 osób, w pobliżu Dworca Centralnego, Złotych Tarasów i Ronda ONZ. W samym centrum Warszawy. </p>
          <button>Zobacz ofertę</button></div>

        </div>
      </div>
      <footer>© 2022 aplikacja-do-rezerwacji.pl</footer>
    </>
  );
};

export default Main;
