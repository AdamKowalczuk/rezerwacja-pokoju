import React, { useState } from "react";
import Bed from "../icons/bed.svg";
import "../styles/details.scss";
import Marker from "../icons/marker.svg";
import Star from "../icons/star.svg";
import { useHistory } from "react-router-dom";
import { RootStateOrAny, useSelector,useDispatch } from "react-redux";
import { addReservation } from "../actions/actions";
import DatePicker from "react-datepicker";
const Details = () => {
  const dispatch = useDispatch();
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [arrival, setArrival] = useState(new Date());
  const [departure, setDeparture] = useState(new Date());
  const rooms = useSelector((state: RootStateOrAny) => {
    return state.rooms;
  });
  const actualRoom = useSelector((state: RootStateOrAny) => {
    return state.actualRoom;
  });
  const actualUser = useSelector((state: RootStateOrAny) => {
    return state.actualUser;
  });
  const room = rooms[actualRoom];
  let history = useHistory();
  const displayStars = (number: Number) => {
    let displayArray = [];
    for (let i = 0; i < number; i++) {
      displayArray.push(1);
    }
    return displayArray.map((item) => {
      return <img src={Star} alt="" />;
    });
  };
  function logout() {
    history.push("/");
  }
  function booking(){
    alert("Udało Ci się zarezerwować pokój!")
    dispatch(addReservation(actualUser,{name:rooms[actualRoom].name,peopleNumber:peopleNumber,price:rooms[actualRoom].price*peopleNumber,arrival:arrival,departure:departure}));
    history.push("/main");
  }
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Bed} alt="bed" />
          <h1>Noclegi</h1>
        </div>
        <div className="user-panel">
          <button onClick={() =>  logout()}><h3>Wyloguj się</h3></button>
        </div>
      </nav>
      <div className="details-container">
        <img src={room.image} className="details-image" alt="room" />

        <div className="details">
          <div className="row">
            <h2>{room.name}</h2>
            <div className="stars">{displayStars(room.numberOfStars)}</div>
          </div>

          <div className="marker">
            <img src={Marker} alt="marker" />
            <h4>{room.location}</h4>
          </div>

          <p>{room.description}</p>
          <div className="counter">
            <h3>Liczba osób</h3>
            <div
              className="convex plus"
              onClick={() => {
                setPeopleNumber(peopleNumber + 1);
              }}
            >
              +
            </div>
            <h4>{peopleNumber}</h4>
            <div
              className="convex minus"
              onClick={peopleNumber===0 ? ()=>setPeopleNumber(peopleNumber) :()=>setPeopleNumber(peopleNumber - 1)}
            >
              -
            </div>
          </div>
          <div className="date">
            <h3>Przyjazd</h3>
            <DatePicker className="convex arrival" selected={arrival} onChange={(date: any) => setArrival(date)} />
          </div>
          <div className="date">
            <h3>Odjazd</h3>
            <DatePicker className="convex departure" selected={departure} onChange={(date: any) => setDeparture(date)} />
          </div>

          <p className="right">
            Cena za osobę: <b>{room.price}zł</b>
          </p>
          <h3 className="right">
            Cena całkowita: <b>{room.price * peopleNumber}zł</b>
          </h3>
          <button className="reserve" onClick={()=>booking()}>Zarezerwuj</button>
        </div>
      </div>
    </>
  );
};

export default Details;
