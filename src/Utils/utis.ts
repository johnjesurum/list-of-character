import iziToast from "izitoast";
import {LoadingActions} from "../Store/Loading/Slice";
import {Loading} from "../Models/LoadingType";
import {LType} from "../Store/Loading/Types";

export function toast(message: string, type: string = 'success'): void {
  if (!message) {
    return;
  }
  const toast: any = {
    message: message,
    position: 'topRight',
    displayMode: 2,
    closeOnClick: true
  };
  switch (type) {
    case 'error':
      iziToast.error(toast);
      break;
    case 'info':
      iziToast.info(toast);
      break;
    case 'warning':
      iziToast.warning(toast);
      break;
    default:
      iziToast.success(toast);
      break;
  }
}


export function setLoadingIdle(loading: LType) {
  return LoadingActions.change({
    loading,
    newStatus: { status: Loading.LoadingIdle}
  });
}

export function setLoadingPending(loading: LType) {
  return LoadingActions.change({
    loading,
    newStatus: { status: Loading.LoadingPending }
  });
}

export function setLoadingRejected(loading: LType, message?: string) {
  return LoadingActions.change({
    loading,
    newStatus: { status: Loading.LoadingRejected, message}
  });
}

export function setLoadingResolve(loading: LType, message?: string) {
  return LoadingActions.change({
    loading,
    newStatus: { status: Loading.LoadingResolved, message}
  });
}

export const addSuccessFlag = (data:any) => {
  return {...data, success:true};
};
