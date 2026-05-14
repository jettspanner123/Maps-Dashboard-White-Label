import React from "react";
import { Map, MapArc } from "@/components/ui/map";
import HomeScreenConstants from "../constant/HomeScreenConstants";
import { motion } from "framer-motion";
import Galaxy from "@/components/Galaxy";

export default function HomeScreenBackgroundGlobeView(): React.JSX.Element {
  const [showGlobe, setShowGlobe] = React.useState<boolean>(false);

  React.useEffect(() => {
    (() => {
      setTimeout(() => setShowGlobe(true), 1500);
    })();
  }, []);
  return (
    <React.Fragment>
      <div className="bg-[#0E0E0E] w-full h-full relative">
        {/* MARK: Background Shader Effect */}
        <div className="w-screen h-screen top-0 left-0">
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </div>

        <motion.div
          animate={{
            opacity: showGlobe ? 1 : 0,
            filter: showGlobe ? "blur(0px)" : "blur(10px)",
          }}
          className="w-full h-full absolute top-0 left-0 translate-x-[15%] z-[11]"
        >
          <Map
            center={[
              HomeScreenConstants.current.HUB.lng - 50,
              HomeScreenConstants.current.HUB.lat - 10,
            ]}
            zoom={3}
            projection={{ type: "globe" }}
          >
            <MapArc
              data={HomeScreenConstants.current.GLOBE_ARCS}
              paint={{
                "line-color": "#3b82f6",
                "line-width": 2,
              }}
              interactive={false}
            />
          </Map>
        </motion.div>
      </div>
    </React.Fragment>
  );
}
