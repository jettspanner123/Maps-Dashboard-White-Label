import React from "react";
import SideBarControlsLocationListItem from "../fragments/SideBarControlsLocationListItem";
import ColorFactoryConstants from "@/app/constants/ColorFactoryConstants";
import SideBarControlsLocationList from "@/app/components/static/SideBarControlsLocationList";
import CurrentLocationConstants from "@/app/constants/CurrentLocationConstants";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useHomeScreenStore } from "@/app/store/HomeScreenStore";
import { HomeScreenSideBarState } from "@/app/store/interfaces/HomeScreenStoreInterface";

export interface MapPlaceItem {
  name: string;
  latitude: number;
  longitude: number;
}

export default function HomeScreenSideBarControlsView(): React.JSX.Element {
  const { setSideBarOpenState, sideBarOpenState } = useHomeScreenStore();

  function handleSidebarStateButton() {
    if (sideBarOpenState == HomeScreenSideBarState.OPEN)
      setSideBarOpenState(HomeScreenSideBarState.CLOSED);
    else setSideBarOpenState(HomeScreenSideBarState.OPEN);
  }

  return (
    <React.Fragment>
      <div className="w-full h-full absolute top-0 left-0 flex p-6 z-20 pointer-events-none">
        <section className={`h-full flex-1 relative`}>
          <AnimatePresence mode="wait">
            {sideBarOpenState == HomeScreenSideBarState.CLOSED && (
              <motion.button
                initial={{
                  scale: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  scale: 0,
                  filter: "blur(10px)",
                }}
                onClick={handleSidebarStateButton}
                className="p-3 hover:bg-white/40 background-blur-100 bg-[#1A1A1A] rounded-xl cursor-pointer pointer-events-auto absolute top-[0.75rem] left-[0.5rem]"
              >
                <BsReverseLayoutSidebarInsetReverse color="white" size={35} />
              </motion.button>
            )}
          </AnimatePresence>
          <motion.div
            animate={{
              x:
                sideBarOpenState == HomeScreenSideBarState.OPEN
                  ? 0
                  : -window.innerWidth / 2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              backgroundColor: ColorFactoryConstants.current.PRIMARY_DARK,
            }}
            className={
              "h-full w-[30vw] rounded-[3rem] py-6 px-8  pointer-events-auto overflow-y-auto border-[0.5px] border-white/20 homescreen-sidebar-shadow "
            }
          >
            <div className="w-full flex justify-between items-center">
              <h2 className="text-white font-semibold mt-3 mb-2 text-[2rem] font-roboto">
                Places
              </h2>
              <button
                onClick={handleSidebarStateButton}
                className="hover:bg-white/10 p-3 rounded-xl cursor-pointer"
              >
                <BsReverseLayoutSidebarInsetReverse color="white" size={25} />
              </button>
            </div>
            <div className="w-full h-1 bg-white/10 mb-6" />
            <SideBarControlsLocationList>
              {CurrentLocationConstants.current.PLACES.map((place) => (
                <SideBarControlsLocationListItem
                  key={`${place.name}-${place.longitude}-${place.latitude}`}
                  place={place}
                />
              ))}
            </SideBarControlsLocationList>
          </motion.div>
        </section>

        <section className={`h-full flex-1`}></section>
      </div>
    </React.Fragment>
  );
}
