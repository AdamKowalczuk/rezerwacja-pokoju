import React, { useState } from "react";
import Bed from "../icons/bed.svg";
import Plus from "../icons/plus.svg";
import Minus from "../icons/minus.svg";
import Star from "../icons/star.svg";
import EmptyStar from "../icons/empty-star.svg";
import Marker from "../icons/marker.svg";
import User from "../icons/user.svg";
import { addRoom ,setModalMode,editRoom} from "../actions/actions";
import Cross from "../icons/cross.svg";
import "../styles/modal.scss";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import "../styles/main.scss";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import FilteredRooms from "./filteredRooms";
Modal.setAppElement("#root");

const Main = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state: RootStateOrAny) => {
    return state.rooms;
  });
  const actualRoom = useSelector((state: RootStateOrAny) => {
    return state.actualRoom;
  });

  const modalMode = useSelector((state: RootStateOrAny) => {
    return state.modalMode;
  });
  const [inputs, setInputs] = useState({
    destination: "",
    numberOfPeople: 0,
    minimalPrice: 0,
    maximumPrice: 500,
    numberOfStars: 0,
  });
  let [filteredRooms, setFilteredRooms] = useState(rooms);
  const [modalInputs, setModalInputs] = useState({
    name: "",
    location: "",
    description: "",
    numberOfStars: 0,
    numberOfPeople: 0,
    price: 0,
    image: "",
  });
  const [modalInputs2, setModalInputs2] = useState({
    name: rooms[actualRoom].name,
    location: rooms[actualRoom].location,
    description: rooms[actualRoom].description,
    numberOfStars: rooms[actualRoom].numberOfStars,
    numberOfPeople: rooms[actualRoom].numberOfPeople,
    price: rooms[actualRoom].price,
    image: rooms[actualRoom].image,
  });
  let history = useHistory();
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
  const handleChangeModal2 = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setModalInputs2((values) => ({ ...values, [name]: value }));
  };

  function logout() {
    history.push("/");
  }
  function setNumberOfStars(number: any) {
    setInputs({ ...inputs, numberOfStars: number });
  }
  function setNumberOfPeople(number: any) {
    if (number < 0 || number > 10) {
    } else {
      setInputs({ ...inputs, numberOfPeople: number });
    }
  }

  function filter() {
    let newFilteredRooms = rooms;
    if (inputs.numberOfStars > 0) {
      newFilteredRooms = newFilteredRooms.filter(filterByStars);
    }
    if (inputs.maximumPrice > 0) {
      newFilteredRooms = newFilteredRooms.filter(filterByPrice);
    }
    console.log(inputs.destination.length);

    if (inputs.destination.length > 0) {
      newFilteredRooms = newFilteredRooms.filter(filterByName);
    }
    if (inputs.numberOfPeople > 0) {
      newFilteredRooms = newFilteredRooms.filter(filterByNumberOfPerson);
    }
    setFilteredRooms(newFilteredRooms);
  }

  function filterByName(room: any) {
    return room.location.includes(inputs.destination);
  }
  function filterByNumberOfPerson(room: any) {
    return room.numberOfPeople === inputs.numberOfPeople;
  }
  function filterByStars(room: any) {
    return room.numberOfStars >= inputs.numberOfStars;
  }
  function filterByPrice(room: any) {
    return room.price >= inputs.minimalPrice && room.price <= inputs.maximumPrice;
  }
  function resetStars() {
    document.getElementsByClassName("star-button")[0].setAttribute("class", "star-button");
    document.getElementsByClassName("star-button")[1].setAttribute("class", "star-button");
    document.getElementsByClassName("star-button")[2].setAttribute("class", "star-button");
    document.getElementsByClassName("star-button")[3].setAttribute("class", "star-button");
    document.getElementsByClassName("star-button")[4].setAttribute("class", "star-button");
    document.getElementsByClassName("star-button")[5].setAttribute("class", "star-button");
  }

  function selectStarsNumber(id: any) {
    resetStars();
    document.getElementsByClassName("star-button")[id].setAttribute("class", "star-button star-button-selected");
  }
  function reset() {
    let newFilteredRooms = rooms;
    setInputs({ ...inputs, minimalPrice: 0 });
    setInputs({ ...inputs, maximumPrice: 500 });
    setFilteredRooms(newFilteredRooms);
    resetStars();
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    closeModal();
  };
  return (
    <>
      <nav>
        {modalMode==="add" ? <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal convex">
          <img src={Cross} alt="cross" className="cross" onClick={closeModal} />
          <h2>Dodaj pokój</h2>
          <form onSubmit={handleSubmit}>
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
                dispatch(addRoom(modalInputs));
              }}
            >
              Dodaj
            </button>
          </form>
        </Modal> : <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal convex">
          <img src={Cross} alt="cross" className="cross" onClick={closeModal} />
          <h2>Edytuj pokój pokój</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={modalInputs2.name} name="name" onChange={handleChangeModal2} placeholder="Nazwa pokoju" className="concave" />
            <input
              type="text"
              value={modalInputs2.location}
              name="location"
              onChange={handleChangeModal2}
              placeholder="Lokalizacja"
              className="concave"
            />
            <textarea
              name="description"
              value={modalInputs2.description}
              onChange={handleChangeModal2}
              id=""
              placeholder="Opis"
              className="concave"
            ></textarea>
            <label htmlFor="price">Cena:</label>
            <input type="number" value={modalInputs2.price} onChange={handleChangeModal2} name="price" className="concave" />
            <label htmlFor="numberOfStars">Liczba gwiazdek:</label>
            <input
              type="number"
              value={modalInputs2.numberOfStars}
              min="0"
              max="5"
              onChange={handleChangeModal2}
              name="numberOfStars"
              className="concave"
            />
            <label htmlFor="numberOfPeople">Liczba osób:</label>
            <input type="number" value={modalInputs2.numberOfPeople} onChange={handleChangeModal2} name="numberOfPeople" className="concave" />
            <input
              type="text"
              value={modalInputs2.image}
              onChange={handleChangeModal2}
              name="image"
              placeholder="Podaj adres URL do zdjęcia"
              className="concave"
            />
            <button
              onClick={() => {
                dispatch(editRoom(modalInputs2,actualRoom));
              }}
            >
              Edytuj
            </button>
          </form>
        </Modal>}

        <div className="logo">
          <img src={Bed} alt="bed" />
          <h1>Noclegi</h1>
        </div>

        <div className="user-panel">
          <button onClick={() => {dispatch(setModalMode('add'));openModal()}}><h3>Dodaj obiekt</h3></button>
          <button onClick={() =>  logout()}><h3>Wyloguj się</h3></button>
        </div>
      </nav>
      {window.innerWidth > 1000 ? (
        <div className="main-container">
          <div className="filters">
            <input
              className="searchbar convex"
              name="destination"
              value={inputs.destination}
              onChange={handleChange}
              placeholder="Cel podróży"
              type="text"
            />
            <div className="convex">
              <h3 style={{ textAlign: "center",paddingTop:"20px"}}>Zakres cen</h3>
              <div className="price-container">
                <div className="left">
                  <p>min.(zł)</p>
                  <input name="minimalPrice" value={inputs.minimalPrice} onChange={handleChange} className="convex" type="text" />

                </div>
                <div className="middle">
                  <img src={Minus} alt="minus" />
                </div>
                <div className="right">
                  <p>max.(zł)</p>
                  <input name="maximumPrice" value={inputs.maximumPrice} onChange={handleChange} className="convex" type="text" />

                </div>
              </div>
              <hr />
              <div className="number-of-peoples">
              <h3>Liczba osób</h3>

                <div className="counter">
                  <div className="convex plus" onClick={() => setNumberOfPeople(inputs.numberOfPeople + 1)}>
                    <img src={Plus} alt="plus" />
                  </div>
                  <h4>{inputs.numberOfPeople}</h4>

                  <div className="convex minus" onClick={() => setNumberOfPeople(inputs.numberOfPeople - 1)}>
                    <img src={Minus} alt="minus" />
                  </div>
                </div>
              </div>
              <hr />
              <h3 style={{textAlign:'center'}}>Liczba gwiazdek</h3>
              <div className="stars-row">
                <button
                  className="star-button star-button-selected"
                  onClick={() => {
                    setNumberOfStars(0);
                    selectStarsNumber(0);
                  }}
                ></button>
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(1);
                    selectStarsNumber(1);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(2);
                    selectStarsNumber(2);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(3);
                    selectStarsNumber(3);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(4);
                    selectStarsNumber(4);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(5);
                    selectStarsNumber(5);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </div>
              <div className="filter-buttons center">
                <button
                  className="reset-button"
                  onClick={() => {
                    reset();
                  }}
                >
                  Wyczyść filtry
                </button>
                <button
                  className="filter-button"
                  onClick={() => {
                    filter();
                  }}
                >
                  Filtruj
                </button>
              </div>
            </div>
          </div>

          <div className="rooms">
            <FilteredRooms  filteredRooms={filteredRooms} dispatch={dispatch} openModal={openModal} />
          </div>
        </div>
      ) : (
        <div className="main-container">

<div className="filters">
            <input
              className="searchbar convex"
              name="destination"
              value={inputs.destination}
              onChange={handleChange}
              placeholder="Cel podróży"
              type="text"
            />
            <div className="convex">
              <h3 style={{ textAlign: "center",paddingTop:"20px"}}>Zakres cen</h3>
              <div className="price-container">
                <div className="left">
                  <p>min.(zł)</p>
                  <input name="minimalPrice" value={inputs.minimalPrice} onChange={handleChange} className="convex" type="text" />

                </div>
                <div className="middle">
                  <img src={Minus} alt="minus" />
                </div>
                <div className="right">
                  <p>max.(zł)</p>
                  <input name="maximumPrice" value={inputs.maximumPrice} onChange={handleChange} className="convex" type="text" />

                </div>
              </div>
              <hr />
              <div className="number-of-peoples">
              <h3>Liczba osób</h3>

                <div className="counter">
                  <div className="convex plus" onClick={() => setNumberOfPeople(inputs.numberOfPeople + 1)}>
                    <img src={Plus} alt="plus" />
                  </div>
                  <h4>{inputs.numberOfPeople}</h4>

                  <div className="convex minus" onClick={() => setNumberOfPeople(inputs.numberOfPeople - 1)}>
                    <img src={Minus} alt="minus" />
                  </div>
                </div>
              </div>
              <hr />
              <h3 style={{textAlign:'center'}}>Liczba gwiazdek</h3>
              <div className="stars-row">
                <button
                  className="star-button star-button-selected"
                  onClick={() => {
                    setNumberOfStars(0);
                    selectStarsNumber(0);
                  }}
                ></button>
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(1);
                    selectStarsNumber(1);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(2);
                    selectStarsNumber(2);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(3);
                    selectStarsNumber(3);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(4);
                    selectStarsNumber(4);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <div className="stars-row">
                <button
                  className="star-button"
                  onClick={() => {
                    setNumberOfStars(5);
                    selectStarsNumber(5);
                  }}
                ></button>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </div>
              <div className="filter-buttons center">
                <button
                  className="reset-button"
                  onClick={() => {
                    reset();
                  }}
                >
                  Wyczyść filtry
                </button>
                <button
                  className="filter-button"
                  onClick={() => {
                    filter();
                  }}
                >
                  Filtruj
                </button>
              </div>
            </div>
          </div>
          <div className="rooms">
          <FilteredRooms  filteredRooms={filteredRooms} dispatch={dispatch} openModal={openModal} />
            {/* {rooms.map((room: any) => {
              return (
                <div className="room convex">
                  <div className="room-top">
                    <img src={room.image} className="room-image" alt="room" />
                    <div className="room-right">
                      <h3>{room.name}</h3>
                      <div className="location">
                        <img src={Marker} alt="marker" />
                        <h4>{room.location}</h4>
                      </div>
                    </div>
                  </div>
                  <p>{room.description}</p>
                  <div className="room-down">
                    <h3>{room.price}zł</h3>
                    <button>Zobacz ofertę</button>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      )}

      <footer>© 2022 aplikacja-do-rezerwacji.pl</footer>
    </>
  );
};

export default Main;
