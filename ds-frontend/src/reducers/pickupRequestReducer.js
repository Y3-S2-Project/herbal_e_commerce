import {
  PICKUP_REQUEST_UPDATE_REQUEST,
  PICKUP_REQUEST_UPDATE_SUCCESS,
  PICKUP_REQUEST_UPDATE_FAIL,
  PICKUP_REQUEST_CREATE_FAIL,
  PICKUP_REQUEST_CREATE_REQUEST,
  PICKUP_REQUEST_CREATE_SUCCESS,
  PICKUP_REQUEST_DELETE_FAIL,
  PICKUP_REQUEST_DELETE_REQUEST,
  PICKUP_REQUEST_DELETE_SUCCESS,
  PICKUP_REQUEST_LIST_FAIL,
  PICKUP_REQUEST_LIST_REQUEST,
  PICKUP_REQUEST_LIST_SUCCESS,
} from "../constants/pickupRequestsConstants";

export const pickupRequestListReducer = (state = { pickupRequests: [] }, action) => {
  switch (action.type) {
    case PICKUP_REQUEST_LIST_REQUEST:
      return { loading: true };
    case PICKUP_REQUEST_LIST_SUCCESS:
      return { loading: false, pickupRequests: action.payload };
    case PICKUP_REQUEST_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const pickupRequestCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PICKUP_REQUEST_CREATE_REQUEST:
      return { loading: true };
    case PICKUP_REQUEST_CREATE_SUCCESS:
      return { loading: false, success: true };
    case PICKUP_REQUEST_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const pickupRequestDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PICKUP_REQUEST_DELETE_REQUEST:
      return { loading: true };
    case PICKUP_REQUEST_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PICKUP_REQUEST_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const pickupRequestUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PICKUP_REQUEST_UPDATE_REQUEST:
      return { loading: true };
    case PICKUP_REQUEST_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PICKUP_REQUEST_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

