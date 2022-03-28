import Star from "../icons/star.svg";
import Marker from "../icons/marker.svg";
import { changeActualRoom, setModalMode } from "../actions/actions";
import { Link } from "react-router-dom";

const displayStars = (number: number) => {
  let displayArray = [];
  for (let i = 0; i < number; i++) {
    displayArray.push(1);
  }
  return displayArray.map(() => {
    return <img src={Star} alt="" />;
  });
};
const filteredRooms = (props: any) => {
  return props.filteredRooms.map((room: any, id: number) => {
    return (
      <div className="room convex" key={id}>
        {window.innerWidth > 1000 ? (
          <div className="room-top">
            <img src={room.image} className="room-image" alt="room" />
            <div className="room-right">
              <div className="row">
                <div className="left">
                  <h3>{room.name}</h3>
                  {displayStars(room.numberOfStars)}
                </div>
                <div className="right">
                  <h3>{room.price}zł</h3>
                </div>
              </div>

              <div className="location">
                <img src={Marker} alt="marker" />
                <h4>{room.location}</h4>
              </div>
              <p>{room.description}</p>
              <div className="room-button">
                <button
                  className="edit-button"
                  onClick={() => {
                    props.dispatch(setModalMode("edit"));
                    props.setModalInputs2({
                      name: room.name,
                      location: room.location,
                      description: room.description,
                      numberOfStars: room.numberOfStars,
                      numberOfPeople: room.numberOfPeople,
                      price: room.price,
                      image: room.image,
                    });
                    props.dispatch(changeActualRoom(id));
                    props.openModal();
                  }}
                >
                  Edytuj pokój
                </button>
                <Link to="/details" style={{ textDecoration: "none" }}>
                  <button onClick={() => props.dispatch(changeActualRoom(id))}>Zobacz ofertę</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <img src={room.image} className="room-image" alt="room" />

            <h3>{room.name}</h3>
            <div className="stars"> {displayStars(room.numberOfStars)}</div>
            <div className="row">
              <div className="location">
                <img src={Marker} alt="marker" />
                <h4>{room.location}</h4>
              </div>
              <h3>{room.price}zł</h3>
            </div>

            <p>{room.description}</p>
            <div className="room-button">
              <button
                className="edit-button"
                onClick={() => {
                  props.dispatch(setModalMode("edit"));
                  props.dispatch(changeActualRoom(id));
                  props.openModal();
                }}
              >
                Edytuj pokój
              </button>
              <Link to="/details" style={{ textDecoration: "none" }}>
                <button onClick={() => props.dispatch(changeActualRoom(id))}>Zobacz ofertę</button>
              </Link>
            </div>
          </>
        )}
      </div>
    );
  });
};

export default filteredRooms;
