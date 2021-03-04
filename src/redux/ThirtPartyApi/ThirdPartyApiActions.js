import {
  FETCH_THIRDPARTYAPI_REQUEST,
  FETCH_THIRDPARTYAPI_SUCCESS,
  FETCH_THIRDPARTYAPI_FAILURE,
} from "./ThirdPartyApiTypes";

import axios from "axios";

export const fetchThirdPartyApiRequest = () => {
  return {
    type: FETCH_THIRDPARTYAPI_REQUEST,
  };
};

export const fetchThirdPartyApiSuccess = (languages) => {
  return {
    type: FETCH_THIRDPARTYAPI_SUCCESS,
    payload: languages,
  };
};

export const fetchThirdPartyApiFailure = (error) => {
  return {
    type: FETCH_THIRDPARTYAPI_FAILURE,
    payload: error,
  };
};

export const fetchlanguage = (str) => {
  return (dispatch) => {
    dispatch(fetchThirdPartyApiRequest);
    axios
      .get(
        "https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow"
      )
      .then((response) => {
        console.log("response", response);
        console.log("string", str);
        const languages = response.data;

        dispatch(fetchThirdPartyApiSuccess(languages));
      })
      .catch((err) => {
        const errorMessage = err.message;
        dispatch(fetchThirdPartyApiFailure(errorMessage));
      });
  };
};
