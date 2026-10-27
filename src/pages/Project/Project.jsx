import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslate } from "../../context/Translate";
import { whatsappUrl } from "../../utils/whatsapp";
import { findItem } from "../../data/projectLookup";
import {
  SectionContainerProjectStyled,
  BackLink,
  ProjectHeader,
  Badge,
  ShowcaseToolbar,
  ShowcaseTabs,
  ShowcaseTabButton,
  ShowcaseHint,
  BrowserFrame,
  BrowserTitleBar,
  BrowserDots,
  BrowserDot,
  BrowserUrlBar,
  BrowserImageContent,
  GalleryStage,
  PhoneWrapperCentered,
  PhoneFrame,
  PhoneNotch,
  PhoneScreen,
  PhoneHomeBar,
  DualShowcase,
  DualPhoneOverlay,
  InfoCard,
  ActionGroup,
  ActionLink,
  LightboxOverlay,
  LightboxImageWrapper,
  LightboxCloseButton,
} from "./PorjectStyled";
import NeonDots from "../../components/Animations/NeonDots/NeonDots";
import WatermarkOverlay from "../../components/AntiTheft/WatermarkOverlay";

const valid = (src) => Boolean(src) && !(typeof src === "string" && src.trim() === "");
const protect = (on) => ({
  className: on ? "protected-design-image" : "",
  onContextMenu: on ? (e) => e.preventDefault() : undefined,
  onDragStart: on ? (e) => e.preventDefault() : undefined,
});

const Project = () => {
  const { isTranslate } = useTranslate();
  const { kind, slug } = useParams();
  const t = (es, en) => (isTranslate ? es : en);

  const item = findItem(kind, slug, isTranslate);
  const { description, img, desktopImg, mobileImg, images, imageLabels, link, span, title, bg, isRecent, inDevelopment } = item || {};

  const isDesign = kind === "design";
  const desktop = valid(desktopImg) ? desktopImg : valid(img) ? img : null;
  const mobile = valid(mobileImg) ? mobileImg : null;
  const gallery = images && images.length > 1 ? images.filter(valid) : null;
  const hasBoth = Boolean(desktop && mobile);
  const hasLink = valid(link) && link !== "#";

  const [view, setView] = useState("dual");
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    setView(hasBoth ? "dual" : mobile ? "mobile" : "desktop");
    setGalleryIdx(0);
    window.scrollTo(0, 0);
  }, [hasBoth, mobile, kind, slug]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!item) {
    return (
      <SectionContainerProjectStyled>
        <ProjectHeader>
          <h1>{t("Proyecto no encontrado", "Project not found")}</h1>
        </ProjectHeader>
        <BackLink to="/#proyectos">← {t("Volver a proyectos", "Back to projects")}</BackLink>
      </SectionContainerProjectStyled>
    );
  }

  const displayUrl = hasLink ? link.replace(/^https?:\/\//, "").replace(/\/$/, "") : `${title.toLowerCase().replace(/\s+/g, "")}.app`;
  const whatsappText = (
    t(
      `Hola José, estuve viendo el proyecto ${title} en tu portafolio y me gustaría consultar por un desarrollo similar para mi negocio.`,
      `Hi José, I was looking at the ${title} project in your portfolio and would like to ask about a similar solution for my business.`
    )
  );

  const desktopFrame = (
    <BrowserFrame>
      <BrowserTitleBar>
        <BrowserDots>
          <BrowserDot color="#ff5f56" />
          <BrowserDot color="#ffbd2e" />
          <BrowserDot color="#27c93f" />
        </BrowserDots>
        <BrowserUrlBar>
          {displayUrl}
        </BrowserUrlBar>
      </BrowserTitleBar>
      <BrowserImageContent bg={bg} onClick={() => setZoom(desktop)}>
        <img loading="lazy" decoding="async" src={desktop} alt={`${title} - Desktop`} />
      </BrowserImageContent>
    </BrowserFrame>
  );

  const phoneFrame = (
    <PhoneFrame onClick={(e) => { e.stopPropagation(); setZoom(mobile); }}>
      <PhoneNotch />
      <PhoneScreen>
        <img loading="lazy" decoding="async" src={mobile} alt={`${title} - Mobile`} />
      </PhoneScreen>
      <PhoneHomeBar />
    </PhoneFrame>
  );

  const tabs = gallery
    ? gallery.map((_, i) => ({ key: i, label: `${imageLabels?.[i] || `${t("Imagen", "Image")} ${i + 1}`}`, active: galleryIdx === i, set: () => setGalleryIdx(i) }))
    : hasBoth
    ? [
        { key: "dual", label: `${t("Vista completa", "Dual view")}`, active: view === "dual", set: () => setView("dual") },
        { key: "desktop", label: `${t("Escritorio", "Desktop")}`, active: view === "desktop", set: () => setView("desktop") },
        { key: "mobile", label: `${t("Móvil", "Mobile")}`, active: view === "mobile", set: () => setView("mobile") },
      ]
    : [];

  return (
    <SectionContainerProjectStyled>
      <BackLink to="/#proyectos">← {t("Volver a proyectos", "Back to projects")}</BackLink>

      <ProjectHeader>
        <h1>{title}</h1>
        <div className="badges">
          <Badge>{span}</Badge>
          {isRecent && <Badge $tone="gold">{t("Entregado recientemente", "Recently delivered")}</Badge>}
          {inDevelopment && !isRecent && <Badge $tone="blue">{t("En desarrollo", "In development")}</Badge>}
        </div>
      </ProjectHeader>

      {(tabs.length > 0 || desktop || gallery) && (
        <ShowcaseToolbar>
          <ShowcaseTabs>
            {tabs.map((tab) => (
              <ShowcaseTabButton key={tab.key} type="button" $active={tab.active} onClick={tab.set}>
                {tab.label}
              </ShowcaseTabButton>
            ))}
          </ShowcaseTabs>
          <ShowcaseHint>{t("Click en la imagen para ampliar", "Click image to zoom")}</ShowcaseHint>
        </ShowcaseToolbar>
      )}

      {gallery ? (
        <GalleryStage
          bg={bg}
          className={isDesign ? "protected-design-modal" : ""}
          onClick={() => setZoom(gallery[galleryIdx])}
        >
          {isDesign && <WatermarkOverlay showBadge={true} />}
          <img src={gallery[galleryIdx]} alt={`${title} - ${galleryIdx + 1}`} {...protect(isDesign)} />
        </GalleryStage>
      ) : (
        <>
          {view === "dual" && hasBoth && (
            <DualShowcase>
              {desktopFrame}
              <DualPhoneOverlay>{phoneFrame}</DualPhoneOverlay>
            </DualShowcase>
          )}
          {view === "desktop" && desktop && desktopFrame}
          {view === "mobile" && mobile && <PhoneWrapperCentered>{phoneFrame}</PhoneWrapperCentered>}
        </>
      )}

      <InfoCard>
        <h2>{t("Descripción y alcance", "Description & scope")}</h2>
        <p>{description}</p>
        <ActionGroup>
          {hasLink && (
            <ActionLink href={link} target="_blank" rel="noreferrer" $primary>
              {t("Visitar sitio", "Visit site")}
            </ActionLink>
          )}
          <ActionLink href={whatsappUrl(whatsappText)} target="_blank" rel="noreferrer">
            <BsWhatsapp size={16} /> {t("Consultar solución similar", "Inquire similar solution")}
          </ActionLink>
        </ActionGroup>
      </InfoCard>

      {zoom && (
        <LightboxOverlay onClick={() => setZoom(null)}>
          <LightboxImageWrapper onClick={(e) => e.stopPropagation()} className={isDesign ? "protected-design-modal" : ""}>
            <LightboxCloseButton type="button" onClick={() => setZoom(null)} title={t("Cerrar", "Close")}>
              ✕
            </LightboxCloseButton>
            {isDesign && <WatermarkOverlay showBadge={true} />}
            <img src={zoom} alt={`${title} preview`} {...protect(isDesign)} />
          </LightboxImageWrapper>
        </LightboxOverlay>
      )}

      <NeonDots />
    </SectionContainerProjectStyled>
  );
};

export default Project;
