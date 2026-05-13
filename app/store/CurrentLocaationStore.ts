import { create } from "zustand";
import { CurrentLocationInterface } from "./interfaces/CurrentLocationStore.Interface";
import CurrentLocationConstants from "../constants/CurrentLocationConstants";


const _currentLocationStore = create<CurrentLocationInterface>(() => ({
    latitude: CurrentLocationConstants.current.DEFAULT_LATITUDE,
    longitude: CurrentLocationConstants.current.DEFAULT_LONGITUDE,
    setLocation: (latitude: number, longitude: number) => {
        _currentLocationStore.setState({ latitude, longitude });
    }
}));

export default class CurrentLocationStore {
    public static current = new CurrentLocationStore();

    public get latitude(): number {
        return _currentLocationStore.getState().latitude;
    }

    public get longitude(): number {
        return _currentLocationStore.getState().longitude;
    }

    public setLocation(latitude: number, longitude: number): void {
        _currentLocationStore.getState().setLocation(latitude, longitude);
    }
}