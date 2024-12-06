import React from "react";
import { useWindowScroll } from "../hooks/useWindowScroll";


const stylesScrollBlock = {
  height: "10000px",
  width: "10000px",
  backgroundColor: "black"
}

const styleTop = {
  position: "fixed",
  top: "20px",
  color: "white"
}

function ComponentWindowScroll() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <div style={styleTop}>
        <p>
          Scroll position x: {scroll.x}, y: {scroll.y}
        </p>
        <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      </div>


      <div style={stylesScrollBlock}></div>
    </div>

  );
}

export default ComponentWindowScroll;
