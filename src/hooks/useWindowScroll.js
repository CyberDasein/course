import { useState, useCallback } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useWindowScroll() {
  const [scroll, setScroll] = useState(() => ({
    x: typeof window !== "undefined" ? window.scrollX : 0,
    y: typeof window !== "undefined" ? window.scrollY : 0,
  }));

  const handleScroll = useCallback(() => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, []);

  useWindowEvent("scroll", handleScroll);

  const scrollTo = useCallback(({ x = window.scrollX, y = window.scrollY }) => {
    if (typeof window !== "undefined") {
      window.scrollTo(x, y);
    }
  }, []);

  return [scroll, scrollTo];
}
