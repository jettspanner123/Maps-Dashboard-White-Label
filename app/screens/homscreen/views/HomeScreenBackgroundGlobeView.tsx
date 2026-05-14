import React from "react";
import { Map, MapArc } from "@/components/ui/map";

// Using the user's default location as the hub
const hub = {
  name: "Chitkara University",
  lng: 76.65973488064857,
  lat: 30.516271329486433,
};

const destinations = [
  { name: "New York", lng: -74.006, lat: 40.7128 },
  { name: "São Paulo", lng: -46.6333, lat: -23.5505 },
  { name: "Cape Town", lng: 18.4241, lat: -33.9249 },
  { name: "Dubai", lng: 55.2708, lat: 25.2048 },
  { name: "Mumbai", lng: 72.8777, lat: 19.076 },
  { name: "Singapore", lng: 103.8198, lat: 1.3521 },
  { name: "Tokyo", lng: 139.6917, lat: 35.6895 },
  { name: "Sydney", lng: 151.2093, lat: -33.8688 },
  { name: "London", lng: -0.1276, lat: 51.5074 },
  { name: "Los Angeles", lng: -118.2437, lat: 34.0522 },
  { name: "Paris", lng: 2.3522, lat: 48.8566 },
];

const arcs = destinations.map((dest) => ({
  id: dest.name,
  from: [hub.lng, hub.lat] as [number, number],
  to: [dest.lng, dest.lat] as [number, number],
}));

export default function HomeScreenBackgroundGlobeView(): React.JSX.Element {
  return (
    <React.Fragment>
      <div className="bg-[#0E0E0E] w-full h-full">
        <div className="w-full h-full absolute top-0 left-0 bg-[#0E0E0E] translate-x-[15%]">
          <Map
            center={[hub.lng - 100, hub.lat]}
            zoom={3}
            projection={{ type: "globe" }}
          >
            <MapArc
              data={arcs}
              paint={{
                "line-color": "#3b82f6",
                "line-width": 2,
                "line-dasharray": [2, 2],
              }}
              interactive={false}
            />
          </Map>
        </div>
      </div>
    </React.Fragment>
  );
}
