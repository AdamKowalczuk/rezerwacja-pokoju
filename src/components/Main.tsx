import React, { useState } from "react";
import Bed from "../icons/bed.svg";
// import Room from "../icons/room.png";
import Plus from "../icons/plus.svg";
import Minus from "../icons/minus.svg";
import Star from "../icons/star.svg";
import EmptyStar from "../icons/empty-star.svg";
import Marker from "../icons/marker.svg";
import User from "../icons/user.svg";
// import { Checkbox } from "@mui/material";
import { addRoom } from "../actions/actions";
// import Check from "../icons/check.svg";
import Cross from "../icons/cross.svg";
import "../styles/modal.scss";
// import { Link, useHistory } from "react-router-dom";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import "../styles/main.scss";
// import DatePicker from "react-date-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
Modal.setAppElement("#root");
const Main = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state: RootStateOrAny) => {
    return state.rooms;
  });
  const [inputs, setInputs] = useState({
    destination: "",
    numberOfPeople: "",
    minimalPrice: "",
    maximumPrice: "",
    numberOfStars: "",
  });
  const [modalInputs, setModalInputs] = useState({
    name: "",
    location: "",
    description: "",
    numberOfStars: 0,
    numberOfPeople: 0,
    price: 0,
    image: "",
  });
  const [arrival, changeArrival] = useState(new Date());
  const [departure, changeDeparture] = useState(new Date());
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleChangeModal = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setModalInputs((values) => ({ ...values, [name]: value }));
  };
  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  // };
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
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal convex">
          <img src={Cross} alt="cross" className="cross" onClick={closeModal} />
          <h2>Dodaj pokój</h2>
          <form>
            <input type="text" value={modalInputs.name} name="name" onChange={handleChangeModal} placeholder="Nazwa pokoju" className="concave" />
            <input
              type="text"
              value={modalInputs.location}
              name="location"
              onChange={handleChangeModal}
              placeholder="Lokalizacja"
              className="concave"
            />
            <textarea
              name="description"
              value={modalInputs.description}
              onChange={handleChangeModal}
              id=""
              placeholder="Opis"
              className="concave"
            ></textarea>
            <label htmlFor="price">Cena:</label>
            <input type="number" value={modalInputs.price} onChange={handleChangeModal} name="price" className="concave" />
            <label htmlFor="numberOfStars">Liczba gwiazdek:</label>
            <input
              type="number"
              value={modalInputs.numberOfStars}
              min="0"
              max="5"
              onChange={handleChangeModal}
              name="numberOfStars"
              className="concave"
            />
            <label htmlFor="numberOfPeople">Liczba osób:</label>
            <input type="number" value={modalInputs.numberOfPeople} onChange={handleChangeModal} name="numberOfPeople" className="concave" />
            <input
              type="text"
              value={modalInputs.image}
              onChange={handleChangeModal}
              name="image"
              placeholder="Podaj adres URL do zdjęcia"
              className="concave"
            />
            <button
              onClick={() => {
                console.log(modalInputs);

                dispatch(addRoom(modalInputs));
              }}
            >
              Dodaj
            </button>
          </form>
        </Modal>
        <div className="logo">
          <img src={Bed} alt="bed" />
          <h1>Noclegi</h1>
        </div>

        <div className="user-panel">
          <h3 onClick={() => openModal()}>Dodaj obiekt</h3>
          <h3>Zaloguj się</h3>
        </div>
      </nav>
      {window.innerWidth > 1000 ? (
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
            <DatePicker className="concave" selected={arrival} onChange={(date:Date)=>changeArrival(date)} />
            <DatePicker className="concave" selected={departure} onChange={(date:Date)=>changeDeparture(date)} />
            {/* <DatePicker onChange={changeDeparture} value={departure} /> */}
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
      ) : (
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
            <div className="data">
              <label htmlFor="arrival">Przyjazd</label>
              <DatePicker className="concave" selected={arrival} onChange={(date:Date)=>changeArrival(date)} />
            </div>

            <div className="data">
              <label htmlFor="deperture">Odjazd</label>
            <DatePicker className="concave" selected={departure} onChange={(date:Date)=>changeDeparture(date)} />
            </div>

            <div className="number-of-peoples convex">
              <div className="left"><img src={User} alt="user" />
              <h3>Liczba osób</h3></div>
              <div className="right"> <img src={Plus} className="convex" alt="plus" />
              {/* <div className="convex">+</div> */}
              <h3>3</h3>
              <img src={Minus} className="convex" alt="minus" />
              </div>


              {/* <div className="convex">-</div> */}
            </div>
            <button id="search">Szukaj</button>
          </div>

          <div className="rooms">
            {rooms.map((room: any) => {
              return (
                <div className="room convex">
                  <div className="room-top">
                    <img src={room.image} className="room-image" alt="room" />
                    <div className="room-right">
                      <h3>{room.name}</h3>
                      {displayStars(room.numberOfStars)}
<div className="location"><img src={Marker} alt="marker" />
                      <h4>{room.location}</h4></div>


                    </div>
                  </div>

                  {/* <img src={Star} alt="" />
            <img src={Star} alt="" /> */}
                  <p>{room.description}</p>
                  <div className="room-down">
                    <h3>{room.price}zł</h3>

                    <button>Zobacz ofertę</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <footer>© 2022 aplikacja-do-rezerwacji.pl</footer>
    </>
  );
};

export default Main;
