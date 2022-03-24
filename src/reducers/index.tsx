import { combineReducers } from "redux";

import users from "./users";
import rooms from "./rooms";
import actualRoom from "./actualRoom";

export const reducers = combineReducers({
  users,
  rooms,
  actualRoom
});


