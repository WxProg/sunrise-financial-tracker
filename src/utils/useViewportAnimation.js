import { useEffect, useState } from "react";

export const useViewportAnimation = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateViewportSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateViewportSize);

    return () => {
      window.removeEventListener("resize", updateViewportSize);
    };
  }, []);

  return {
    width: size[0],
    height: size[1],
  };
};
