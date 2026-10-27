import styled, { keyframes } from "styled-components";

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
`;

export const ContainerSectionStyled = styled.section`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 0 1.5rem;
  margin-bottom: 5rem;
  max-width: 76rem;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerAboutMeStyled = styled.div`
  margin-top: 1.5rem;
  flex-direction: row;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  @media screen and (max-width: 860px) {
    flex-direction: column-reverse;
    gap: 2.5rem;
  }
`;

export const AboutMeContentStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.2rem;
  flex: 1;
  line-height: 1.6;

  p {
    font-size: 1.05rem;
    color: #cbd5e1;
    line-height: 1.7;
    margin: 0;

    span {
      color: var(--text-accent);
      font-weight: 600;
    }
  }
`;

export const AboutMeFigureStyled = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
`;

export const ContianerImgStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;
  padding: 0.5rem;
  background: linear-gradient(135deg, rgba(254, 236, 182, 0.25), rgba(215, 168, 89, 0.08));
  border: 1px solid rgba(254, 236, 182, 0.35);
  box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.6), 0 0 25px rgba(254, 236, 182, 0.1);
  border-radius: 1.5rem;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px) rotate(1deg);
    box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.8), 0 0 35px rgba(254, 236, 182, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 13rem;
    height: 13rem;
  }
`;

export const StatusPillStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  color: #86efac;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.2rem;

  .status-dot {
    width: 8px;
    height: 8px;
    background-color: #22c55e;
    border-radius: 50%;
    animation: ${pulseGlow} 2s infinite ease-in-out;
  }
`;

export const StatsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCardStyled = styled.div`
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.75), rgba(11, 15, 23, 0.9));
  border: 1px solid rgba(254, 236, 182, 0.15);
  border-radius: 1rem;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(254, 236, 182, 0.4);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  .stat-number {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--text-accent);
    margin-bottom: 0.25rem;
    letter-spacing: -0.5px;
  }

  .stat-label {
    font-size: 0.82rem;
    color: #94a3b8;
    line-height: 1.3;
    font-weight: 500;
  }
`;

export const SectionHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  width: 100%;

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;

    span.resalted {
      color: var(--text-accent);
    }
  }

  p {
    font-size: 0.95rem;
    color: #94a3b8;
    max-width: 42rem;
    margin: 0;
  }
`;

export const ServicesGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCardStyled = styled.div`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(11, 17, 32, 0.95));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--text-accent), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(254, 236, 182, 0.35);
    box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.6), 0 0 20px rgba(254, 236, 182, 0.08);

    &::before {
      opacity: 1;
    }
  }
`;

export const ServiceTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ServiceIconBox = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.9rem;
  background: ${({ $color }) => $color || "rgba(254, 236, 182, 0.1)"};
  border: 1px solid ${({ $borderColor }) => $borderColor || "rgba(254, 236, 182, 0.2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: ${({ $iconColor }) => $iconColor || "var(--text-accent)"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const ServiceBadgeStyled = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  background: rgba(254, 236, 182, 0.1);
  color: var(--text-accent);
  border: 1px solid rgba(254, 236, 182, 0.25);
`;

export const ServiceBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
    line-height: 1.3;
  }

  p {
    font-size: 0.92rem;
    color: #94a3b8;
    line-height: 1.6;
    margin: 0;
  }
`;

export const ServiceDeliverables = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.86rem;
    color: #cbd5e1;
    line-height: 1.4;

    svg {
      color: #38bdf8;
      flex-shrink: 0;
      margin-top: 0.15rem;
    }
  }
`;

export const ServiceTechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  span {
    font-size: 0.75rem;
    font-weight: 500;
    color: #94a3b8;
    background: rgba(255, 255, 255, 0.04);
    padding: 0.25rem 0.55rem;
    border-radius: 0.4rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

export const TimelineWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
  position: relative;
`;

export const TimelineCardStyled = styled.div`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.75), rgba(11, 15, 25, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 3px solid var(--text-accent);
  border-radius: 0.85rem;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;

  &:hover {
    transform: translateX(4px);
    border-color: rgba(254, 236, 182, 0.35);
    background: linear-gradient(135deg, rgba(20, 30, 55, 0.85), rgba(15, 23, 42, 0.95));
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    .period-badge {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--text-accent);
      background: rgba(254, 236, 182, 0.12);
      padding: 0.2rem 0.65rem;
      border-radius: 0.4rem;
      border: 1px solid rgba(254, 236, 182, 0.2);
    }

    h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #fff;
      margin: 0;
    }
  }

  p {
    font-size: 0.9rem;
    color: #94a3b8;
    line-height: 1.6;
    margin: 0;
  }
`;

export const CTABannerStyled = styled.div`
  background: linear-gradient(135deg, rgba(126, 100, 54, 0.35), rgba(15, 23, 42, 0.95));
  border: 1px solid rgba(254, 236, 182, 0.3);
  border-radius: 1.5rem;
  padding: 2.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
  box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.6), 0 0 30px rgba(254, 236, 182, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.8rem;
  }

  .cta-text {
    h3 {
      font-size: 1.45rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 0.4rem;

      span {
        color: var(--text-accent);
      }
    }

    p {
      font-size: 0.92rem;
      color: #cbd5e1;
      margin: 0;
      max-width: 34rem;
      line-height: 1.5;
    }
  }

  .cta-actions {
    display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;
    justify-content: center;
    flex-shrink: 0;
  }
`;

export const CTAButtonStyled = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 1.4rem;
  border-radius: 0.85rem;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  ${({ $primary }) =>
    $primary
      ? `
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(34, 197, 94, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: linear-gradient(135deg, #16a34a, #15803d);
      box-shadow: 0 6px 20px rgba(34, 197, 94, 0.5);
      transform: translateY(-2px);
    }
  `
      : `
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(254, 236, 182, 0.4);
      transform: translateY(-2px);
    }
  `}
`;
