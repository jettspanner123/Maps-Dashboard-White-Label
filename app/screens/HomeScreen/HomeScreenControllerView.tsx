"use client";

import React from "react";
import HomeScreenBackgroundMapsView from "./views/HomeScreenBackgroundMapsView";
import HomeScreenSideBarControlsView from "@/app/screens/HomeScreen/views/HomeScreenSideBarControllsView";

export default function HomeScreenControllerView(): React.JSX.Element {
    return (
        <section className="w-full h-full relative">
            <HomeScreenBackgroundMapsView />
            <HomeScreenSideBarControlsView />
        </section>
    );
}