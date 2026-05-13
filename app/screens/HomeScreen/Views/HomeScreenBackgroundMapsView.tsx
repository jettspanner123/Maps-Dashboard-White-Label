import React, { useState, useEffect } from "react";
import { Map, MapControls, MapMarker, MarkerContent } from "@/components/ui/map";
import { useCurrentLocationInterface } from "@/app/store/CurrentLocationStore";

export default function HomeScreenBackgroundMapsView(): React.JSX.Element {
    const { latitude, longitude } = useCurrentLocationInterface();

    // Controlled viewport state for the map
    const [viewport, setViewport] = useState({
        center: [longitude, latitude] as [number, number],
        zoom: 15,
        bearing: 0,
        pitch: 0
    });

    // Update map viewport when the store's location changes (from sidebar clicks)
    useEffect(() => {
        setViewport(prev => ({
            ...prev,
            center: [longitude, latitude]
        }));
    }, [latitude, longitude]);

    return (
        <React.Fragment>
            <div className="w-full h-full absolute top-0 left-0">
                <Map
                    viewport={viewport}
                    onViewportChange={setViewport}
                >
                    {/* <MapControls showZoom showCompass showLocate showFullscreen /> */}
                    <MapMarker longitude={longitude} latitude={latitude}>
                        <MarkerContent />
                    </MapMarker>
                </Map>
            </div>
        </React.Fragment>
    );
}