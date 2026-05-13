"use client";

import React from "react";
import HomeScreenBackgroundMapsView from "./Views/HomeScreenBackgroundMapsView";

export default function HomeScreenControllerView(): React.JSX.Element {
    return (
        <section className="w-full h-full relative">
            <HomeScreenBackgroundMapsView />
        </section>
    );
}