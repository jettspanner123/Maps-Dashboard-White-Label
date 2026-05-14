import { HomeScreenViewState } from "@/app/store/interfaces/HomeScreenStoreInterface";
import { IconType } from "react-icons";
import { IoMdGlobe } from "react-icons/io";
import { TbMapSearch } from "react-icons/tb";

export default class HomeScreenConstants {
  public static current = new HomeScreenConstants();

  public readonly VIEW_STATE_LIST: Array<ViewStateDataInterface> = [
    {
      viewState: HomeScreenViewState.MAPS,
      icon: <TbMapSearch size={25} />,
      name: HomeScreenViewState.MAPS.toString(),
    },
    {
      viewState: HomeScreenViewState.AIRFLOW,
      icon: <IoMdGlobe size={25} />,
      name: HomeScreenViewState.AIRFLOW.toString(),
    },
  ];
}

export interface ViewStateDataInterface {
  viewState: HomeScreenViewState;
  icon: React.ReactNode;
  name: string;
}
