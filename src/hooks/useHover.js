import { useState, useEffect, useRef } from "react";

export default function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const handleMouseEnter = () => setHovered(true);
        const handleMouseLeave = () => setHovered(false);

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mouseenter", handleMouseEnter);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return { hovered, ref };
}