import { CHANGE_ACTUAL_ROOM } from "../constants/actionTypes";



const actualRoom = (actualRoom: Number = 0, action: any) => {

  switch (action.type) {
    case CHANGE_ACTUAL_ROOM:
      return action.actualRoom;
    default:
      return actualRoom;
  }
};

export default actualRoom;