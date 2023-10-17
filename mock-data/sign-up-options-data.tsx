import { appleIcon, googleIcon, facebookIcon, envelope } from "@/public/svgs";
import { v4 as uuidv4 } from "uuid";

export const signUpOptionsData = [
  {
    id: uuidv4(),
    name: "Continue with google",
    icon: googleIcon,
    link: "./",
  },
  {
    id: uuidv4(),
    name: "Continue with facebook",
    icon: facebookIcon,
    link: "./",
  },
  {
    id: uuidv4(),
    name: "Continue with apple ID",
    icon: appleIcon,
    link: "./",
  },
  {
    id: uuidv4(),
    name: "Create account with your email",
    icon: envelope,
    link: "./",
  },
];
