import { ANALYTICS_ID } from "@/constants";
import { GoogleAnalytics } from "@next/third-parties/google";

const Scripts = () => {
  return <GoogleAnalytics gaId={ANALYTICS_ID} />;
};

export default Scripts;
