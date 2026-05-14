import { create } from "zustand";
import HomeScreenStoreInterface, {
  HomeScreenBackgroundMapState,
  HomeScreenSideBarState,
} from "./interfaces/HomeScreenStoreInterface";

export const useHomeScreenStore = create<HomeScreenStoreInterface>((set) => ({
  sideBarOpenState: HomeScreenSideBarState.OPEN,
  setSideBarOpenState: (state: HomeScreenSideBarState) =>
    set({ sideBarOpenState: state }),
  backgroundMapState: HomeScreenBackgroundMapState.LOADING,
  setBackgroundMapState: (state: HomeScreenBackgroundMapState) =>
    set({ backgroundMapState: state }),
  showBackgroundMapControls: false,
  toggleBackgroundMapControls: () =>
    set((state) => ({
      showBackgroundMapControls: !state.showBackgroundMapControls,
    })),
}));
