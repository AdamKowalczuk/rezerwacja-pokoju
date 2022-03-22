export const changeForm = (form:Array<string>) => {
    return {
      type: "CHANGE_FORM",
      payload: form,
    };
  };