import React, { useState } from "react";
import Bed from "../icons/bed.svg";
import "../styles/details.scss";
import Marker from "../icons/marker.svg";
import User from "../icons/user.svg";
// import Room from "../icons/room.png";
import { RootStateOrAny, useSelector} from "react-redux";
// import { changeActualRoom } from "../actions/actions";

const Details = () => {
  const [actualPhoto, setActualPhoto] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);

  const rooms = useSelector((state: RootStateOrAny) => {
    return state.rooms;
  });
  const actualRoom = useSelector((state: RootStateOrAny) => {
    return state.actualRoom;
  });
  const room = rooms[actualRoom];
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Bed} alt="bed" />
          <h1>Noclegi</h1>
        </div>
      </nav>
      <div className="details-container">
        <div className="image-container">
          <img src={room.images[actualPhoto]} alt="room" />
          {room.images.map((image: any, id: any) => {
            if (id === actualPhoto) {
              return (
                <img
                  src={image}
                  onClick={() => {
                    setActualPhoto(id);
                  }}
                  className="small-image"
                  style={{border:'2px solid #58cbe0'}}
                  alt="room"
                />
              );
            } else {
              return (
                <img
                  src={image}
                  onClick={() => {
                    setActualPhoto(id);
                  }}
                  className="small-image"
                  alt="room"
                />
              );
            }

          })}
        </div>
        <div className="details">
          <h2>{room.name}</h2>
          <div className="marker">
            <img src={Marker} alt="marker" />
            <h4>{room.location}</h4>
          </div>

          <p>{room.description}</p>
          <div className="grid">
            <div className="convex arrival">Przyjazd</div>
            <div className="convex departure">Wyjazd</div>
            <div className="convex number-of-people">
              <img src={User} alt="user" /> Liczba osób
            </div>
            <div className="counter">
              <div
                className="convex plus"
                onClick={() => {
                  setPeopleNumber(peopleNumber + 1);
                }}
              >
                +
              </div>
              <div className="convex">{peopleNumber}</div>
              <div
                className="convex minus"
                onClick={() => {
                  setPeopleNumber(peopleNumber - 1);
                }}
              >
                -
              </div>
            </div>
          </div>
          <p className="right">
            Cena za osobę: <b>{room.price}zł</b>
          </p>
          <h3 className="right">
            Cena całkowita: <b>{room.price * peopleNumber}zł</b>
          </h3>
          <button className="reserve">Zarezerwuj</button>
        </div>
      </div>
    </>
  );
};

export default Details;
