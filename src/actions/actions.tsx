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

  export const addRoom = (newRoom:any) => {
    return {
      type: "ADD_ROOM",
      newRoom:newRoom
    };
  };

