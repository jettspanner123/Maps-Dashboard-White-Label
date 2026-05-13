import React from "react";
import { Map, MapControls, MapMarker, MarkerContent } from "@/components/ui/map";

export default function HomeScreenBackgroundMapsView(): React.JSX.Element {
    return (
        <React.Fragment>
            <div className="w-full h-full absolute top-0 left-0">
                <Map center={[76.65973488064857, 30.516271329486433]} zoom={15}>
                    {/* <MapControls showZoom showCompass showLocate showFullscreen /> */}
                    <MapMarker longitude={76.65973488064857} latitude={30.516271329486433}>
                        <MarkerContent />
                    </MapMarker>
                </Map>
            </div>
        </React.Fragment>
    );
}