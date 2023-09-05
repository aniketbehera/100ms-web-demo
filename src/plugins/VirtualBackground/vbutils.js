/* eslint-disable no-case-declarations */
import { HMSVirtualBackgroundTypes } from "@100mslive/hms-virtual-background";
export function getStaticVirtualBackground() {
  const virtualBackground = {
    background: "",
    backgroundType: HMSVirtualBackgroundTypes.IMAGE,
  };
  const img = document.createElement("img");
  img.alt = "VB";
  img.src = process.env.REACT_APP_STATIC_VIRTUAL_BACKGROUND;
  virtualBackground.background = img;
  return virtualBackground;
}
