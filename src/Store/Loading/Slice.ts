import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
  LoadingReducerType,
  LoadingState,
  LoadingData,
  LOADING_AUTH, LOADING_FORGOT_PASSWORD, LOADING_RECOVER_PASSWORD, LoadingChangeState,

} from './Types';
import {Loading} from "../../Models/LoadingType";

const defaultState: LoadingData = {
  status: Loading.LoadingIdle,
  message: "",
};

const initialState: LoadingReducerType = {
  [LOADING_AUTH]: defaultState,
  [LOADING_FORGOT_PASSWORD]: defaultState,
  [LOADING_RECOVER_PASSWORD]: defaultState,
};

const LoadingSlice = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    change(state: LoadingReducerType, { payload: { loading, newStatus }}: PayloadAction<LoadingState>) {
      state[loading].message = newStatus.message || "";
      state[loading].status = newStatus.status;
    },
    setPending(state: LoadingReducerType, { payload: { loading, message }}: PayloadAction<LoadingChangeState>) {
      state[loading].message = message || "";
      state[loading].status = Loading.LoadingPending;
    },
    setRejected(state: LoadingReducerType, { payload: { loading, message }}: PayloadAction<LoadingChangeState>) {
      state[loading].message = message || "";
      state[loading].status = Loading.LoadingRejected;
    },
    setResolve(state: LoadingReducerType, { payload: { loading, message }}: PayloadAction<LoadingChangeState>) {
      state[loading].message = message || "";
      state[loading].status = Loading.LoadingResolved;
    },
    setIdle(state: LoadingReducerType, { payload: { loading, message }}: PayloadAction<LoadingChangeState>) {
      state[loading].message = message || "";
      state[loading].status = Loading.LoadingIdle;
    }
  }
});

export const LoadingActions = LoadingSlice.actions;

export default LoadingSlice.reducer
