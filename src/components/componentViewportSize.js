import React from "react";
import { useViewportSize } from "../hooks/useViewportSize";

const ComponentViewportSize = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
export default ComponentViewportSize
