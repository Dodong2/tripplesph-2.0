import React from "react";

interface RippleBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  rippleCount?: number;
  animationDuration?: number;
}

export const RippleBackgroundDark: React.FC<RippleBackgroundProps> = ({
  children,
  className = "",
  rippleCount = 5,
  animationDuration = 5,
}) => {
  const ripples = Array.from({ length: rippleCount }, (_, i) => i);

  const styles = `
    .ripple-wrapper {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      min-height: 300px;
      align-items: center;
      justify-content: center;
      background: linear-gradient(160deg, #b8dce8 0%, #5fb3c8 45%, #2a7f99 100%);
      overflow: hidden;
    }

    .ripple-ring {
      position: absolute;
      border-radius: 50%;
      border: none;
      background-color: #1e6f88;
      box-shadow:
        inset 10px 10px 20px rgba(0, 0, 0, 0.2),
        inset -10px -10px 20px rgba(100, 200, 220, 0.2);
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
        width: min(800px, 120vw);
        height: min(400px, 60vw);
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
          width: min(500px, 110vw);
          height: min(250px, 55vw);
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
          width: 100vw;
          height: 50vw;
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

