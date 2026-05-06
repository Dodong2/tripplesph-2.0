import React from "react";

interface RippleBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  rippleCount?: number;
  animationDuration?: number;
  /**
   * Vertical origin of the ripple center as a percentage of the wrapper height.
   * 50 = true center, 60 = slightly below center (default), 100 = very bottom.
   */
  rippleOriginY?: number;
}

export const RippleBackgroundWhite: React.FC<RippleBackgroundProps> = ({
  children,
  className = "",
  rippleCount = 5,
  animationDuration = 5,
  rippleOriginY = 62,
}) => {
  const ripples = Array.from({ length: rippleCount }, (_, i) => i);

  const styles = `
    .ripple-wrapper {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      min-height: 600px;
      align-items: center;
      justify-content: center;
      background: linear-gradient(160deg, #b8dce8 0%, #5fb3c8 45%, #2a7f99 100%);
      overflow: hidden;
    }

    .ripple-ring {
      position: absolute;
      top: ${rippleOriginY}%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: none;
      background-color: #c8e8f0;
      box-shadow:
        inset 10px 10px 20px rgba(255, 255, 255, 0.45),
        inset -10px -10px 20px rgba(60, 140, 160, 0.3);
      animation: ripple-expand ${animationDuration}s infinite;
      opacity: 0;
      pointer-events: none;
    }

    ${ripples
      .map(
        (i) => `
      .ripple-ring:nth-child(${i + 1}) {
        animation-delay: ${(i + 1) * 500}ms;
      }
    `
      )
      .join("")}

    @keyframes ripple-expand {
      0% {
        width: 20px;
        height: 20px;
        opacity: 1;
      }
      100% {
        /* Oval shape preserved (wider than tall), just much bigger */
        width: min(3000px, 280vw);
        height: min(1800px, 200vh);
        opacity: 0;
      }
    }

    @media (max-width: 768px) {
      @keyframes ripple-expand {
        0% {
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        100% {
          width: 260vw;
          height: 180vh;
          opacity: 0;
        }
      }
    }

    @media (max-width: 480px) {
      @keyframes ripple-expand {
        0% {
          width: 8px;
          height: 8px;
          opacity: 1;
        }
        100% {
          width: 240vw;
          height: 160vh;
          opacity: 0;
        }
      }
    }

    .ripple-content {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 2rem;
      box-sizing: border-box;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className={`ripple-wrapper ${className}`}>
        {ripples.map((i) => (
          <div key={i} className="ripple-ring" />
        ))}
        <div className="ripple-content">{children}</div>
      </div>
    </>
  );
};