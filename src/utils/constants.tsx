import { IoPricetagOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { LiaTableTennisSolid } from "react-icons/lia";
import { MdListAlt } from "react-icons/md";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export const options = [
  {
    name: "Live Now",
    icon: IoPricetagOutline,
  },
  {
    name: "Promos",
    icon: IoPricetagOutline,
  },
  {
    name: "NFL",
    icon: IoPricetagOutline,
  },
  {
    name: "NCAAF",
    icon: IoPricetagOutline,
  },
  {
    name: "NBA",
    icon: IoPricetagOutline,
  },
  {
    name: "NHL",
    icon: IoPricetagOutline,
  },
  {
    name: "NCAAB",
    icon: IoPricetagOutline,
  },
  {
    name: "Promos",
    icon: IoPricetagOutline,
  },
];

export const tabs = [
  {
    name: "Home",
    icon: IoHomeOutline,
    path: "/",
  },
  {
    name: "All Sports",
    icon: LiaTableTennisSolid,
    path: "/allSports",
  },
  {
    name: "My Bets",
    icon: MdListAlt,
    path: "/myBets",
  },
  {
    name: "Live Now",
    icon: MdOutlineOnlinePrediction,
    path: "/liveNow",
  },
  {
    name: "Account",
    icon: FaRegUser,
    path: "/account",
  },
];

export interface gameProps {
  name: string;
  isActive: boolean;
}

export const gameTabs:gameProps[] = [
  {
    name: "TNF",
    isActive: false,
  },
  {
    name: "NBA",
    isActive: false,
  },
  {
    name: "NCAAB",
    isActive: false,
  },
  {
    name: "NHL",
    isActive: false,
  },
  {
    name: "NCAAF",
    isActive: false,
  },
  {
    name: "NFL",
    isActive: false,
  },
  {
    name: "Upcoming",
    isActive: false,
  },
];
