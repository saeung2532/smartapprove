import { httpClient } from "./../utils/HttpClient";
import {
  HTTP_FINALAPPROVE_SUCCESS,
  HTTP_FINALAPPROVE_FETCHING,
  HTTP_FINALAPPROVE_FAILED,
  HTTP_FINALAPPROVE_CLEAR,
  server,
} from "../constants";

export const setStateFinalApproveToSuccess = (payload) => ({
  type: HTTP_FINALAPPROVE_SUCCESS,
  payload,
});

const setStateFinalApproveToFetching = () => ({
  type: HTTP_FINALAPPROVE_FETCHING,
});

const setStateFinalApproveToFailed = () => ({
  type: HTTP_FINALAPPROVE_FAILED,
});

const setStateFinalApproveToClear = () => ({
  type: HTTP_FINALAPPROVE_CLEAR,
});

export const getMPRApproveFinal = (fromstatus, tostatus) => {
  return async (dispatch) => {
    dispatch(setStateFinalApproveToFetching());
    doGetMPRApproveFinal(dispatch, fromstatus, tostatus);
  };
};

const doGetMPRApproveFinal = async (dispatch, fromstatus, tostatus) => {
  try {
    let result = await httpClient.get(
      `${server.MPRAPPROVEFINAL_URL}/${fromstatus}/${tostatus}`
    );
    // alert(JSON.stringify(result.data));
    dispatch(setStateFinalApproveToSuccess(result.data));
  } catch (err) {
    alert(JSON.stringify(err));
    localStorage.removeItem(server.TOKEN_KEY);
    dispatch(setStateFinalApproveToFailed());
  }
};

export const getEPRApproveFinal = (fromstatus, tostatus) => {
  return async (dispatch) => {
    dispatch(setStateFinalApproveToFetching());
    doGetEPRApproveFinal(dispatch, fromstatus, tostatus);
  };
};

const doGetEPRApproveFinal = async (dispatch, fromstatus, tostatus) => {
  try {
    let result = await httpClient.get(
      `${server.EPRAPPROVEFINAL_URL}/${fromstatus}/${tostatus}`
    );
    // alert(JSON.stringify(result.data));
    dispatch(setStateFinalApproveToSuccess(result.data));
  } catch (err) {
    alert(JSON.stringify(err));
    localStorage.removeItem(server.TOKEN_KEY);
    dispatch(setStateFinalApproveToFailed());
  }
};
