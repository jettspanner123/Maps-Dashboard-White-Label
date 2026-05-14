import CurrentLocationConstants from "@/app/constants/CurrentLocationConstants";
import { HomeScreenViewState } from "@/app/store/interfaces/HomeScreenStoreInterface";
import { IoMdGlobe } from "react-icons/io";
import { TbMapSearch } from "react-icons/tb";

export default class HomeScreenConstants {
  public static current = new HomeScreenConstants();

  public readonly VIEW_STATE_LIST: Array<ViewStateDataInterface> = [
    {
      viewState: HomeScreenViewState.MAPS,
      icon: <TbMapSearch size={25} />,
      name: HomeScreenViewState.MAPS.toString(),
    },
    {
      viewState: HomeScreenViewState.AIRFLOW,
      icon: <IoMdGlobe size={25} />,
      name: HomeScreenViewState.AIRFLOW.toString(),
    },
  ];

  public readonly HUB = {
    name: CurrentLocationConstants.current.DEFAULT_LOCATION_NAME,
    lng: CurrentLocationConstants.current.DEFAULT_LONGITUDE,
    lat: CurrentLocationConstants.current.DEFAULT_LATITUDE,
  };

  public readonly GLOBE_DESTINATIONS = [
    { name: "New York", lng: -74.006, lat: 40.7128 },
    { name: "São Paulo", lng: -46.6333, lat: -23.5505 },
    { name: "Cape Town", lng: 18.4241, lat: -33.9249 },
    { name: "Dubai", lng: 55.2708, lat: 25.2048 },
    { name: "Mumbai", lng: 72.8777, lat: 19.076 },
    { name: "Singapore", lng: 103.8198, lat: 1.3521 },
    { name: "Berlin", lng: 13.405, lat: 52.52 },
    { name: "Bangkok", lng: 100.5018, lat: 13.7563 },
    { name: "Istanbul", lng: 28.9784, lat: 41.0082 },
    { name: "Moscow", lng: 37.6173, lat: 55.7558 },
    { name: "Madrid", lng: -3.7038, lat: 40.4168 },
    { name: "Rome", lng: 12.4964, lat: 41.9028 },
    { name: "Hong Kong", lng: 114.1095, lat: 22.3193 },
  ];

  public get GLOBE_ARCS(): Array<{
    id: string;
    from: [number, number];
    to: [number, number];
  }> {
    const arcs: Array<{
      id: string;
      from: [number, number];
      to: [number, number];
    }> = [];

    // Add arcs from hub to all destinations
    this.GLOBE_DESTINATIONS.forEach((dest) => {
      arcs.push({
        id: `hub-to-${dest.name}`,
        from: [this.HUB.lng, this.HUB.lat] as [number, number],
        to: [dest.lng, dest.lat] as [number, number],
      });
    });

    // Add arcs between random destinations
    for (let i = 0; i < this.GLOBE_DESTINATIONS.length; i++) {
      const randomIndices = this.getRandomIndices(
        this.GLOBE_DESTINATIONS.length,
        i,
        2,
      );
      randomIndices.forEach((randomIndex) => {
        arcs.push({
          id: `${this.GLOBE_DESTINATIONS[i].name}-to-${this.GLOBE_DESTINATIONS[randomIndex].name}`,
          from: [
            this.GLOBE_DESTINATIONS[i].lng,
            this.GLOBE_DESTINATIONS[i].lat,
          ] as [number, number],
          to: [
            this.GLOBE_DESTINATIONS[randomIndex].lng,
            this.GLOBE_DESTINATIONS[randomIndex].lat,
          ] as [number, number],
        });
      });
    }

    return arcs;
  }

  private getRandomIndices(
    maxIndex: number,
    excludeIndex: number,
    count: number,
  ): number[] {
    const indices = [];
    const available = Array.from({ length: maxIndex }, (_, i) => i).filter(
      (i) => i !== excludeIndex,
    );

    for (let i = 0; i < Math.min(count, available.length); i++) {
      const randomPos = Math.floor(Math.random() * available.length);
      indices.push(available[randomPos]);
      available.splice(randomPos, 1);
    }

    return indices;
  }
}

export interface ViewStateDataInterface {
  viewState: HomeScreenViewState;
  icon: React.ReactNode;
  name: string;
}
