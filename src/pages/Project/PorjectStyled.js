import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionContainerProjectStyled = styled.section`
  position: relative;
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 6rem 1rem 4rem;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--text-accent);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectHeader = styled.header`
  margin-bottom: 1.25rem;

  h1 {
    color: var(--text-accent);
    font-weight: 700;
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const Badge = styled.span`
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ $tone }) => ($tone === "gold" ? "#facc15" : $tone === "blue" ? "#60a5fa" : "var(--text-accent)")};
  background: ${({ $tone }) => ($tone === "gold" ? "rgba(234,179,8,.18)" : $tone === "blue" ? "rgba(59,130,246,.18)" : "rgba(254,236,182,.08)")};
  border: 1px solid currentColor;
`;

export const ShowcaseToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0.5rem 0.75rem;
  background: rgba(18, 18, 18, 0.85);
  border: 1px solid rgba(254, 236, 182, 0.25);
  border-radius: 0.75rem;
  backdrop-filter: blur(10px);
`;

export const ShowcaseTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const ShowcaseTabButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: 1px solid ${({ $active }) => ($active ? 'var(--text-accent)' : 'rgba(255, 255, 255, 0.12)')};
  background: ${({ $active }) => ($active ? 'var(--landing-action-background-color)' : 'rgba(255, 255, 255, 0.05)')};
  color: ${({ $active }) => ($active ? 'var(--text-accent)' : 'rgba(255, 255, 255, 0.8)')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--text-accent);
    background: rgba(254, 236, 182, 0.2);
    border-color: rgba(254, 236, 182, 0.4);
  }
`;

export const ShowcaseHint = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const BrowserFrame = styled.div`
  background: #14171d;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 0.85rem;
  overflow: hidden;
  box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.7), 0 0 25px rgba(254, 236, 182, 0.08);
  transition: all 0.3s ease;
`;

export const BrowserTitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0.9rem;
  background: #0d0f13;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const BrowserDots = styled.div`
  display: flex;
  gap: 0.35rem;
`;

export const BrowserDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color || '#666'};
  display: inline-block;
`;

export const BrowserUrlBar = styled.div`
  flex: 1;
  max-width: 420px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 0.2rem 0.75rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
`;

export const BrowserImageContent = styled.div`
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
  background-color: ${({ bg }) => (bg ? bg : '#0a0c10')};

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
`;

export const PhoneWrapperCentered = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const PhoneFrame = styled.div`
  width: 100%;
  max-width: 320px;
  background: #0d0f13;
  border: 9px solid #1a1e24;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(254, 236, 182, 0.15);
  cursor: zoom-in;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const PhoneNotch = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 16px;
  background: #000;
  border-radius: 10px;
  z-index: 10;
`;

export const PhoneScreen = styled.div`
  border-radius: 30px;
  overflow: hidden;
  background: #000;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
`;

export const PhoneHomeBar = styled.div`
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 4px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  z-index: 10;
`;

export const DualShowcase = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 2rem;

  @media (min-width: 900px) {
    padding-bottom: 2.5rem;
  }
`;

export const DualPhoneOverlay = styled.div`
  @media (min-width: 800px) {
    position: absolute;
    right: 1.5rem;
    bottom: -1rem;
    width: 250px;
    z-index: 5;
    filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.85));
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-6px) scale(1.02);
    }
  }

  @media (max-width: 799px) {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(12px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  cursor: zoom-out;
`;

export const LightboxImageWrapper = styled.div`
  position: relative;
  max-width: 92vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 82vh;
    object-fit: contain;
    border-radius: 0.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  }
`;

export const LightboxCloseButton = styled.button`
  position: absolute;
  top: -2.75rem;
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.25rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    color: var(--text-accent);
  }
`;

export const GalleryStage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 1rem;
  border-radius: 0.85rem;
  overflow: hidden;
  cursor: zoom-in;
  background-color: ${({ bg }) => bg || "#0a0c10"};
  border: 1px solid rgba(255, 255, 255, 0.14);

  img {
    max-width: 100%;
    max-height: 52vh;
    object-fit: contain;
  }
`;

export const InfoCard = styled.div`
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: rgba(18, 18, 18, 0.85);
  border: 1px solid rgba(254, 236, 182, 0.18);
  border-radius: 0.75rem;

  h2 {
    margin-bottom: 0.75rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #aaa;
  }

  p {
    line-height: 1.7;
    color: #e2e8f0;
    text-wrap: pretty;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
`;

export const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ $primary }) => ($primary ? "#000" : "var(--text-primary)")};
  background: ${({ $primary }) => ($primary ? "var(--text-accent)" : "var(--landing-action-background-color)")};
  border: 1px solid var(--landing-action-color);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
