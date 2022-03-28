import { combineReducers } from "redux";

import users from "./users";
import rooms from "./rooms";
import actualRoom from "./actualRoom";
import actualUser from "./actualUser";
import modalMode from "./modalMode";

export const reducers = combineReducers({
  users,
  rooms,
  actualRoom,
  actualUser,
  modalMode
});


