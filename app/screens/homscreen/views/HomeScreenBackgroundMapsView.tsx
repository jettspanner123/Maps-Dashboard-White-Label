import React, { useRef, useEffect } from "react";
import { Map, MapControls, MapMarker, MarkerContent } from "@/components/ui/map";
import { useCurrentLocation } from "@/app/store/CurrentLocationStore";

export default function HomeScreenBackgroundMapsView(): React.JSX.Element {
    const { latitude, longitude } = useCurrentLocation();
    const mapRef = useRef<any>(null);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.flyTo({
                center: [longitude, latitude],
                zoom: 15,
                duration: 2000,
                essential: true
            });
        }
    }, [latitude, longitude]);

    return (
        <React.Fragment>
            <div className="w-full h-full absolute top-0 left-0">
                <Map
                    ref={mapRef}
                    center={[76.65973488064857, 30.516271329486433]}
                    zoom={15}
                >
                    <MapMarker longitude={longitude} latitude={latitude}>
                        <MarkerContent />
                    </MapMarker>
                </Map>
            </div>
        </React.Fragment>
    );
}