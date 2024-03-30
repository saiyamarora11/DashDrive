//dependicies
import { FC } from "react";
import Lottie from "lottie-react";

//imports
import { DashDrive } from "@/lotties/dash-drive";

const Component: FC = () => {
  return <Lottie animationData={DashDrive} loop={true} />;
};

export default Component;
