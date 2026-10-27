import { styled } from 'styled-components';




export const SectionCardsStyled = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const ContainerCardsStyled = styled.section`
    display: grid;
    gap: 1.25rem;
    width: 100%;
    align-items: stretch;
    justify-items: center;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

export const CardProjectStyled = styled.div`
    text-decoration: none;
    color: inherit;
    padding: .7rem;
    max-width: 26rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #141313;
    border-radius: 0.75rem;
    cursor: pointer;
    box-shadow: 0px 0px 21px -9px var(--text-accent);
    border: 1px solid rgba(254, 236, 182, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 25px -6px var(--text-accent);
        border-color: rgba(254, 236, 182, 0.35);
    }
`;

export const CardTopBadges = styled.div`
    position: absolute;
    top: 0.45rem;
    left: 0.45rem;
    right: 0.45rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
    z-index: 15;
    pointer-events: none;

    span.recent-badge {
        flex-shrink: 0;
        background: linear-gradient(135deg, rgba(234, 179, 8, 0.95), rgba(202, 138, 4, 0.95));
        color: #0b0f17;
        padding: 0.2rem 0.5rem;
        border-radius: 0.45rem;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.2px;
        box-shadow: 0 2px 10px rgba(234, 179, 8, 0.4);
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        border: 1px solid rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(8px);
        white-space: nowrap;
    }

    span.dev-badge {
        flex-shrink: 0;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.95));
        color: #ffffff;
        padding: 0.2rem 0.5rem;
        border-radius: 0.45rem;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.2px;
        box-shadow: 0 2px 10px rgba(37, 99, 235, 0.4);
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(8px);
        white-space: nowrap;
    }

    span.category-badge {
        margin-left: auto;
        background: rgba(15, 23, 42, 0.9);
        padding: 0.2rem 0.55rem;
        border-radius: 0.45rem;
        font-size: 0.72rem;
        line-height: 1.2;
        font-weight: 600;
        color: #f8fafc;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(254, 236, 182, 0.3);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 62%;
    }
`;

export const CardPlaceholderBannerStyled = styled.div`
    position: relative;
    height: 12rem;
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    background: radial-gradient(circle at 50% 40%, #1e293b 0%, #0a0f1d 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(254, 236, 182, 0.12);

    .placeholder-watermark {
        font-size: 3rem;
        opacity: 0.3;
        user-select: none;
        filter: drop-shadow(0 0 15px rgba(254, 236, 182, 0.2));
    }
`;

export const CardImageStyled = styled.div`
    position: relative;
    aspect-ratio: 16 / 10;
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    background-color: ${({ bg }) => bg || '#0a0d14'};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: ${({ bg }) => (bg ? 'contain' : 'cover')};
        object-position: top;
        transition: transform 0.3s ease;
    }
`; 

export const DeviceToggleContainer = styled.div`
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    display: flex;
    gap: 0.25rem;
    z-index: 12;
    background: rgba(15, 15, 15, 0.9);
    backdrop-filter: blur(8px);
    padding: 0.2rem;
    border-radius: 20px;
    border: 1px solid rgba(254, 236, 182, 0.35);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
`;

export const DeviceButton = styled.button`
    background: ${({ $active }) => ($active ? 'var(--landing-action-background-color)' : 'transparent')};
    color: ${({ $active }) => ($active ? 'var(--text-accent)' : '#aaa')};
    border: none;
    cursor: pointer;
    padding: 0.2rem 0.45rem;
    border-radius: 12px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 600;
    transition: all 0.2s ease;
    
    &:hover {
        color: var(--text-accent);
        background: rgba(254, 236, 182, 0.2);
    }
`; 

export const GalleryToggleContainer = styled.div`
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    z-index: 12;
    background: rgba(15, 15, 15, 0.92);
    backdrop-filter: blur(8px);
    padding: 0.2rem 0.45rem;
    border-radius: 20px;
    border: 1px solid rgba(254, 236, 182, 0.35);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
`;

export const GalleryNavButton = styled.button`
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(254, 236, 182, 0.2);
    cursor: pointer;
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
    font-weight: bold;
    transition: all 0.2s ease;

    &:hover {
        background: var(--text-accent);
        color: #0b0f17;
        border-color: var(--text-accent);
    }
`;

export const GalleryIndicator = styled.span`
    font-size: 0.72rem;
    color: var(--text-accent);
    font-weight: 600;
    padding: 0 0.2rem;
    user-select: none;
`; 

export const CardInfromationStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    padding-top: 0.4rem;

    h5 {
        margin-top: .4rem;
        margin-bottom: 0.45rem;
        font-size: 1.05rem;
        line-height: 1.35rem;
        font-weight: 700;
        letter-spacing: -0.015em;
        color: var(--text-accent);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p {
        margin-bottom: 0.75rem;
        font-size: 0.83rem;
        line-height: 1.35rem;
        font-weight: 400;
        color: #e2e8f0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
`;

export const UlSkillContainerStyle = styled.ul`
    display: flex;
    gap: .9rem;
    flex-wrap: wrap;
    color: white;
    margin-bottom: 0.2rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    justify-content: center;
`;

export const SkillItemsStyle = styled.li`
    list-style: none;
    border-radius: 0.75rem;
    padding: 0 0.25rem;
    position: relative;
    img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: cover;
        position: relative;
        border-radius: 100%;
    }
`;