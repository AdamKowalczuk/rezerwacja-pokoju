import { CHANGE_FORM } from "../constants/actionTypes";

const form = (form = "", action:any) => {
  switch (action.type) {
    case CHANGE_FORM:
      return action.payload;
    default:
      return form;
  }
};

export default form;