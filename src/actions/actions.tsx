export const addUser = (newUser:any) => {
    return {
      type: "ADD_USER",
      newUser: newUser,
    };
  };