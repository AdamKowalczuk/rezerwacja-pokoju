import { CHANGE_ACTUAL_USER } from "../constants/actionTypes";



const actualUser = (actualUser: Number = -1, action: any) => {

  switch (action.type) {
    case CHANGE_ACTUAL_USER:
      return action.actualUser;
    default:
      return actualUser;
  }
};

export default actualUser;