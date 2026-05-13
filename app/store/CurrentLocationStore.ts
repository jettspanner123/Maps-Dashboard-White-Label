import { create } from "zustand";
import { CurrentLocationInterface } from "./interfaces/CurrentLocationStore.Interface";
import CurrentLocationConstants from "../constants/CurrentLocationConstants";


export const useCurrentLocationInterface = create<CurrentLocationInterface>(() => ({
    latitude: CurrentLocationConstants.current.DEFAULT_LATITUDE,
    longitude: CurrentLocationConstants.current.DEFAULT_LONGITUDE,
    setLocation: (latitude: number, longitude: number) => {
        useCurrentLocationInterface.setState({ latitude, longitude });
    }
}));