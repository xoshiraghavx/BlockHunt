import { useEffect, useRef } from "react";
import "@/app/styles/design.scss";


const InteractiveBubble = () => {
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interBubble = bubbleRef.current;
    if (!interBubble) return; // Ensure ref exists before proceeding

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      if (!interBubble) return; // Safety check inside animation loop
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={bubbleRef} className="interactive"></div>;
};

export default InteractiveBubble;
