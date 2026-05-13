import React from "react";
import LiquidChrome from "@/components/LiquidChrome";

export default function LoaderScreenControllerView(): React.JSX.Element {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LiquidChrome
        baseColor={[0.047058823529411764,0.047058823529411764,0.047058823529411764]}
        speed={0.42}
        amplitude={0.37}
        interactive={false}
      />

      <h1 className="text-white bottom-0 left-0 font-bold font-roboto text-[3rem] m-[1rem] loadingscreen-text-shadow absolute z-[11]">
        Loading
      </h1>
      <div className="w-[40rem] h-[20rem] bg-black blur-[40px] translate-y-[10rem] translate-x-[-10rem] absolute bottom-0 left-0 z-[10]">

      </div>
    </div>
  );
}
