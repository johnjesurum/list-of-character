export enum LoadingTypes {
  IDLE="IDLE",
  PENDING="PENDING",
  RESOLVED="RESOLVED",
  REJECTED="REJECTED",
}

class LoadingType {

  e: LoadingTypes = LoadingTypes.IDLE;

  constructor(e: LoadingTypes) {
    this.e = e;
  }

  public isLoading(): boolean {
    // return this.e === LoadingTypes.IDLE ||
    return this.e === LoadingTypes.PENDING;
  }

  public isResolved(): boolean {
    return this.e === LoadingTypes.RESOLVED;
  }

  public isRejected(): boolean {
    return this.e === LoadingTypes.REJECTED;
  }
}

const IDLE = new LoadingType(LoadingTypes.IDLE);
const PENDING = new LoadingType(LoadingTypes.PENDING);
const RESOLVED = new LoadingType(LoadingTypes.RESOLVED);
const REJECTED = new LoadingType(LoadingTypes.REJECTED);

export const Loading = {
  LoadingIdle: IDLE,
  LoadingPending: PENDING,
  LoadingResolved: RESOLVED,
  LoadingRejected: REJECTED,
}

export default LoadingType;
