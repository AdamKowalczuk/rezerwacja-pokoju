import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { reducers } from "./reducers";
import { reducers } from "./reducers";
function saveToLocalStorage(state:any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("state", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const composeEnhancers =(window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("state");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
const store = createStore(
  reducers,
  loadFromLocalStorage(),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;