import { SET_MODAL_MODE} from "../constants/actionTypes";



const modalMode= (modalMode:String = '', action:any) => {

  switch (action.type) {
    case SET_MODAL_MODE:
      return action.modalMode;
    default:
      return modalMode;
  }
};

export default modalMode;