import languagesReducer from "./ThirtPartyApi/ThirdPartyApiReducer";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
  languages: languagesReducer,
});

export default rootReducers;
