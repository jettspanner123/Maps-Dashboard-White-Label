export enum HomeScreenSideBarState {
  OPEN,
  CLOSED,
}

export enum HomeScreenBackgroundMapState {
  LOADED,
  LOADING,
}
export default interface HomeScreenStoreInterface {
  sideBarOpenState: HomeScreenSideBarState;
  setSideBarOpenState: (state: HomeScreenSideBarState) => void;
  backgroundMapState: HomeScreenBackgroundMapState;
  setBackgroundMapState: (state: HomeScreenBackgroundMapState) => void;
  showBackgroundMapControls: boolean;
  toggleBackgroundMapControls: () => void;
}
