import LoadingType from "../../Models/LoadingType";

export const LOADING_AUTH = "loadingAuth";
export const LOADING_FORGOT_PASSWORD = "loadingForgotPassword";
export const LOADING_RECOVER_PASSWORD = "loadingRecoverPassword";


export type LType =
  typeof LOADING_AUTH | typeof LOADING_FORGOT_PASSWORD | typeof LOADING_RECOVER_PASSWORD;

export interface LoadingState {
  loading: LType,
  newStatus: LoadingData
}

export interface LoadingData {
  status: LoadingType,
  message?: string
}

export interface LoadingChangeState {
  loading: LType,
  message?: string
}

export interface LoadingReducerType {
  [LOADING_AUTH]: LoadingData,
  [LOADING_FORGOT_PASSWORD]: LoadingData,
  [LOADING_RECOVER_PASSWORD]: LoadingData,
}
