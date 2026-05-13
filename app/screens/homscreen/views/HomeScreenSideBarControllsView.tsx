import React from "react";
import SideBarControlsLocationListItem from "../fragments/SideBarControlsLocationListItem";
import ColorFactoryConstants from "@/app/constants/ColorFactoryConstants";
import SideBarControlsLocationList from "@/app/components/static/SideBarControlsLocationList";
import CurrentLocationConstants from "@/app/constants/CurrentLocationConstants";


export interface MapPlaceItem {
    name: string;
    latitude: number;
    longitude: number;
}

export default function HomeScreenSideBarControlsView(): React.JSX.Element {

    return (
        <React.Fragment>
            <div className="w-full h-full absolute top-0 left-0 flex p-6 z-20 pointer-events-none">
                <section className={`h-full flex-1 relative`}>
                    <div
                        style={{
                            backgroundColor: ColorFactoryConstants.current.PRIMARY_DARK
                        }}
                        className={"h-full w-[30vw] rounded-[3rem] shadow-2xl p-6 pointer-events-auto overflow-y-auto border-[0.5px] border-white/20"}>
                        <h2 className="text-white font-semibold mt-3 mb-2 text-[2rem] font-roboto">Places</h2>
                        <div className="w-full h-1 bg-white/10 mb-6"/>
                        <SideBarControlsLocationList>
                            {CurrentLocationConstants.current.PLACES.map((place) => (
                                <SideBarControlsLocationListItem key={`${place.name}-${place.longitude}-${place.latitude}`} place={place} />
                            ))}
                        </SideBarControlsLocationList>
                    </div>
                </section>

                <section className={`h-full flex-1`}>

                </section>
            </div>
        </React.Fragment>
    );
}