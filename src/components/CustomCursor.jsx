import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Track mouse over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest(
        'a, button, input, textarea, [role="button"], .glass-card',
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth lag effect for outer ring follower
  useEffect(() => {
    let animationFrameId;

    const updateFollower = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(updateFollower);
    };

    animationFrameId = requestAnimationFrame(updateFollower);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring Follower */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-100 ease-out border border-indigo-400/60 shadow-[0_0_15px_rgba(99,102,241,0.5)] ${
          isHovered
            ? "scale-150 bg-indigo-500/15 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            : "scale-100 bg-transparent"
        } ${isClicking ? "scale-90" : ""}`}
        style={{
          width: "36px",
          height: "36px",
          transform: `translate3d(${followerPos.x - 18}px, ${followerPos.y - 18}px, 0)`,
        }}
      />

      {/* Inner Neon Core Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-[0_0_10px_#06b6d4] transition-transform duration-75 ${
          isHovered ? "scale-125" : "scale-100"
        } ${isClicking ? "scale-75" : ""}`}
        style={{
          width: "8px",
          height: "8px",
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
    </>
  );
}
