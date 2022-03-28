export const addUser = (newUser:any) => {
    return {
      type: "ADD_USER",
      newUser: newUser,
    };
  };

  export const changeActualRoom = (actualRoom:Number) => {
    return {
      type: "CHANGE_ACTUAL_ROOM",
      actualRoom:actualRoom
    };
  };
  export const changeActualUser = (actualUser:Number) => {
    return {
      type: "CHANGE_ACTUAL_USER",
      actualUser:actualUser
    };
  };

  export const addRoom = (newRoom:any) => {
    return {
      type: "ADD_ROOM",
      newRoom:newRoom
    };
  };

  export const addReservation = (actualUser:Number,reservation:any) => {
    return {
      type: "ADD_RESERVATION",
      actualUser:actualUser,
      reservation:reservation
    };
  };
  export const setModalMode = (mode:any) => {
    return {
      type: "SET_MODAL_MODE",
      modalMode:mode
    };
  };
  export const editRoom = (editedRoom:any,roomID:Number) => {
    return {
      type: "EDIT_ROOM",
      editedRoom:editedRoom,
      roomID:roomID
    };
  };






