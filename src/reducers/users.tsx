import { ADD_USER, ADD_RESERVATION } from "../constants/actionTypes";

interface IUsers {
  name: string;
  subname: string;
  email: string;
  password: string;
  repeatPassword: string;
  reservations: Array<Object>;
}
const users = (users: Array<IUsers> = [], action: any) => {
  let newUser: any = users;
  switch (action.type) {
    case ADD_USER:
      newUser.push(action.newUser);
      return newUser;
    case ADD_RESERVATION:
      newUser[action.actualUser].reservations.push(action.reservation);
      return newUser;
    default:
      return users;
  }
};

export default users;
