import React from "react";
import SideBarControlsLocationListItem from "../fragments/SideBarControlsLocationListItem";
import ColorFactoryConstants from "@/app/constants/ColorFactoryConstants";
import SideBarControlsLocationList from "@/app/components/static/SideBarControlsLocationList";
import CurrentLocationConstants from "@/app/constants/CurrentLocationConstants";
import {
  BsFullscreenExit,
  BsReverseLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useHomeScreenStore } from "@/app/store/HomeScreenStore";
import {
  HomeScreenBackgroundMapState,
  HomeScreenSideBarState,
} from "@/app/store/interfaces/HomeScreenStoreInterface";
import HomeScreenFloatingActionButton from "@/app/components/static/HomeScreenFloatingActionButton";
import { MdKeyboardCommandKey, MdOutlineRefresh } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { ImCompass } from "react-icons/im";

export interface MapPlaceItem {
  name: string;
  latitude: number;
  longitude: number;
}

export default function HomeScreenSideBarControlsView(): React.JSX.Element {
  const {
    setSideBarOpenState,
    sideBarOpenState,
    setBackgroundMapState,
    backgroundMapState,
    toggleBackgroundMapControls,
    showBackgroundMapControls,
  } = useHomeScreenStore();

  function handleSidebarStateButton() {
    if (sideBarOpenState == HomeScreenSideBarState.OPEN)
      setSideBarOpenState(HomeScreenSideBarState.CLOSED);
    else setSideBarOpenState(HomeScreenSideBarState.OPEN);
  }

  function handleRefreshButton() {
    setBackgroundMapState(HomeScreenBackgroundMapState.LOADING);
    setTimeout(() => {
      setBackgroundMapState(HomeScreenBackgroundMapState.LOADED);
    }, 4000);
  }

  function handleToggleMapControls() {
    toggleBackgroundMapControls();
  }

  return (
    <React.Fragment>
      <div className="w-full h-full absolute top-0 left-0 flex p-6 z-20 pointer-events-none">
        <section className={`h-full flex-1 relative`}>
          {/* MARK: Show Sidebar Button */}
          <AnimatePresence mode="wait">
            {sideBarOpenState == HomeScreenSideBarState.CLOSED && (
              <motion.div
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
                style={{ backdropFilter: "blur(10px) " }}
                className="hover:bg-white/10 h-20 w-20 flex justify-between items-center rounded-full border border-white/20 bg-[#1A1A1A] cursor-pointer pointer-events-auto absolute top-[0.75rem] left-[0.5rem]"
              >
                <BsReverseLayoutSidebarInsetReverse
                  color="white"
                  size={30}
                  className="mx-auto"
                />
              </motion.div>
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
                className="hover:bg-white/15 bg-white/10 p-3 rounded-xl cursor-pointer transition-colors"
              >
                <BsReverseLayoutSidebarInsetReverse color="white" size={23} />
              </button>
            </div>
            <div className="w-full h-1 bg-white/10 mb-6" />

            <input
              placeholder="Enter Location."
              className="w-full outline-none rounded-full bg-white/10 placeholder:text-white/80 font-roboto py-3 px-6 border border-white/15 text-white text-[1.25rem]"
            />

            <h3 className="font-bold font-roboto text-[1rem] text-white/40 mt-[1.5rem] mb-[0.5rem]">
              Preset Locations
            </h3>
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

        <section className={`h-full flex-1 relative`}>
          <HomeScreenFloatingActionButton
            onClick={handleRefreshButton}
            className="top-[0.75rem] right-[0.5rem]"
          >
            <MdOutlineRefresh size={30} color="white" />
          </HomeScreenFloatingActionButton>

          <HomeScreenFloatingActionButton
            onClick={handleToggleMapControls}
            className={`top-[6.5rem] right-[0.5rem] ${showBackgroundMapControls ? `bg-white text-black` : `text-white`}`}
          >
            <MdKeyboardCommandKey size={26} />
          </HomeScreenFloatingActionButton>

          <AnimatePresence>
            {showBackgroundMapControls && (
              <motion.div
                animate={{
                  x: 0,
                }}
                exit={{
                  x: 400,
                }}
                initial={{ x: 400 }}
                transition={{
                  duration: 0.7,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute right-[0.5rem] bottom-[0.75rem] bg-[#1a1a1a] rounded-full border border-white/20 w-[5rem] flex flex-col gap-1 p-1.5 pointer-events-auto"
              >
                <button className="w-full aspect-square bg-white/10 hover:bg-white/20 rounded-t-full cursor-pointer flex justify-center items-center text-white">
                  <FaPlus size={25} />
                </button>
                <button className="w-full aspect-square bg-white/10 hover:bg-white/20 cursor-pointer flex justify-center items-center text-white">
                  <ImCompass size={23} />
                </button>
                <button className="w-full aspect-square bg-white/10 hover:bg-white/20 rounded-b-full cursor-pointer flex justify-center items-center text-white">
                  <FaMinus size={25} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </React.Fragment>
  );
}
