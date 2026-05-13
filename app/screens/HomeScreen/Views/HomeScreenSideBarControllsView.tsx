import React from "react";
import { useCurrentLocationInterface } from "@/app/store/CurrentLocationStore";

const PLACES = [
    { name: "Chitkara University (Default)", lat: 30.516271329486433, lng: 76.65973488064857 },
    { name: "Rajpura", lat: 30.485, lng: 76.598 },
    { name: "Chandigarh", lat: 30.7333, lng: 76.7794 },
    { name: "Mohali", lat: 30.7046, lng: 76.7179 }
];

export default function HomeScreenSideBarControlsView(): React.JSX.Element {
    const setLocation = useCurrentLocationInterface((state) => state.setLocation);

    return (
        <React.Fragment>
            <div className="w-full h-full absolute top-0 left-0 flex p-6 z-[20] pointer-events-none">
                <section className={`h-full flex-1 relative`}>
                    <div className={"h-full w-[30vw] bg-[#212121] rounded-[3rem] shadow-2xl p-6 pointer-events-auto overflow-y-auto"}>
                        <h2 className="text-white font-semibold mb-3">Places</h2>
                        <ul className="flex flex-col gap-2">
                            {PLACES.map((place) => (
                                <li key={place.name}>
                                    <button
                                        onClick={() => setLocation(place.lat, place.lng)}
                                        className="text-sm text-left w-full text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded transition-colors"
                                    >
                                        {place.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className={`h-full flex-1`}>

                </section>
            </div>
        </React.Fragment>
    );
}