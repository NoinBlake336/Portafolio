import React from 'react';
import styled from 'styled-components';

// Repeating diagonal watermark pattern as SVG data URL
const watermarkSvg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="220" height="150" viewBox="0 0 220 150">
  <style>
    .wm-text {
      font-family: 'Poppins', -apple-system, sans-serif;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  </style>
  <g transform="rotate(-25 110 75)">
    <text x="110" y="55" class="wm-text" fill="rgba(255,255,255,0.22)" text-anchor="middle">
      © JOSÉ CHOCOBAR
    </text>
    <text x="110" y="75" class="wm-text" fill="rgba(254,236,182,0.28)" text-anchor="middle">
      PROPIEDAD REGISTRADA
    </text>
    <text x="110" y="95" class="wm-text" fill="rgba(255,255,255,0.18)" text-anchor="middle">
      NO COPIAR • NO REPRODUCIR
    </text>
  </g>
</svg>
`);

const WatermarkContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  pointer-events: none;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
`;

const WatermarkPattern = styled.div`
  position: absolute;
  inset: -50px;
  background-image: url("data:image/svg+xml,${watermarkSvg}");
  background-repeat: repeat;
  background-size: 200px 140px;
  pointer-events: none;
  opacity: 0.95;
`;

const CentralBadge = styled.div`
  position: absolute;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(254, 236, 182, 0.35);
  color: var(--text-accent);
  padding: 0.22rem 0.65rem;
  border-radius: 9999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  white-space: nowrap;
`;

// Invisible shield on top of the image to intercept right clicks, drags and touches
const AntiCopyShield = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 7;
  background: transparent;
  cursor: inherit;
  user-select: none;
  -webkit-touch-callout: none;
`;

export const WatermarkOverlay = ({ showBadge = true }) => {
  return (
    <WatermarkContainer className="watermark-container">
      <WatermarkPattern />
      {showBadge && (
        <CentralBadge>
          <span>🔒</span> © José Chocobar • Protegido
        </CentralBadge>
      )}
      <AntiCopyShield
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDragStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
    </WatermarkContainer>
  );
};

export default WatermarkOverlay;
