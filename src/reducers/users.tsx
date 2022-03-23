import { ADD_USER} from "../constants/actionTypes";



interface IUsers {
  name: string,
  subname:string,
  email:string,
  password:string,
  repeatPassword:string
}
const users = (users:Array<IUsers> = [], action:any) => {
  let newUser:any=users;
  switch (action.type) {
    case ADD_USER:
      newUser.push(action.newUser)
      return newUser;
    default:
      return users;
  }
};

export default users;