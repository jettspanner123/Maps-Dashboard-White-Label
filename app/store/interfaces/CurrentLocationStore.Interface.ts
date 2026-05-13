export interface CurrentLocationInterface {
    longitude: number;
    latitude: number;
    setLocation: (longitude: number, latitude: number) => void;
}