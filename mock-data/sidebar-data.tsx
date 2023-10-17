import {
  discover,
  stars,
  categories,
  yourPlaylist,
  recentlyPlayed,
  subscriptionAndHost,
  circleMicrophone,
  chartSimple,
  bookOpenCover,
  addPodcast,
} from "@/public/svgs";
import { v4 as uuidv4 } from "uuid";

export const sidebarData1 = [
  {
    id: uuidv4(),
    name: "Discover",
    icon: discover,
    link: "/dashboard",
  },
  {
    id: uuidv4(),
    name: "Top 50 Podcasts",
    icon: stars,
    link: "/dashboard/top-50-podcasts",
  },
  {
    id: uuidv4(),
    name: "Categories",
    icon: categories,
    link: "/dashboard/categories",
  },
  {
    id: uuidv4(),
    name: "Add your podcast",
    icon: addPodcast,
    link: "/dashboard/top-50-podcasts",
  },
];

export const sidebarData2 = [
  {
    id: uuidv4(),
    name: "Your playlist",
    icon: yourPlaylist,
    link: "/dashboard/your-playlist",
  },
  {
    id: uuidv4(),
    name: "Recently played",
    icon: recentlyPlayed,
    link: "/dashboard/recently-played",
  },
  {
    id: uuidv4(),
    name: "Subscription & Hosts",
    icon: subscriptionAndHost,
    link: "/dashboard/subscription-and-host",
  },
];

export const sidebarData3 = [
  {
    id: uuidv4(),
    name: "Wokpa for podcasters",
    icon: circleMicrophone,
    link: "/dashboard/wokpa-for-podcasters",
  },
  {
    id: uuidv4(),
    name: "Wokpa for advertisers",
    icon: chartSimple,
    link: "/dashboard/wokpa-for-advertisers",
  },
  {
    id: uuidv4(),
    name: "Read our blog",
    icon: bookOpenCover,
    link: "/dashboard/read-our-blog",
  },
];
