import {
  FETCH_THIRDPARTYAPI_REQUEST,
  FETCH_THIRDPARTYAPI_SUCCESS,
  FETCH_THIRDPARTYAPI_FAILURE,
} from "./ThirdPartyApiTypes";

const intialState = {
  loading: true,
  languages: [],
  error: "",
};

const languagesReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_THIRDPARTYAPI_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_THIRDPARTYAPI_SUCCESS:
      return {
        ...state,
        loading: false,
        languages: action.payload,
        error: "",
      };
    case FETCH_THIRDPARTYAPI_FAILURE:
      return {
        ...state,
        loading: false,
        languages: [],
        error: action.payload,
      };
    default:
      return { ...state, loading: false };
  }
};

export default languagesReducer;
