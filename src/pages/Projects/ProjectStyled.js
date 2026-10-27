import styled from "styled-components";

export const ContainerMain = styled.main`
    padding-top: 2rem;
    padding-bottom: 3rem;
    header:nth-child(2) {
        margin-top: 2rem;
    }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin: 0 auto 2rem auto;
  max-width: 900px;
  padding: 0 1rem;
`;

export const FilterButton = styled.button`
  background: ${({ $active }) => ($active ? 'var(--landing-action-background-color)' : 'rgba(255, 255, 255, 0.04)')};
  color: ${({ $active }) => ($active ? 'var(--text-accent)' : 'rgba(255, 255, 255, 0.75)')};
  border: 1px solid ${({ $active }) => ($active ? 'var(--text-accent)' : 'rgba(255, 255, 255, 0.12)')};
  padding: 0.5rem 1.1rem;
  border-radius: 24px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.25s ease;
  backdrop-filter: blur(8px);
  box-shadow: ${({ $active }) => ($active ? '0 4px 15px rgba(254, 236, 182, 0.25)' : 'none')};

  &:hover {
    color: var(--text-accent);
    border-color: rgba(254, 236, 182, 0.5);
    background: rgba(254, 236, 182, 0.12);
    transform: translateY(-2px);
  }
`;
