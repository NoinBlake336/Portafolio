import React from "react";
import {
  AboutMeContentStyled,
  AboutMeFigureStyled,
  ContainerAboutMeStyled,
  ContainerSectionStyled,
  ContianerImgStyled,
  StatusPillStyled,
  StatsGridStyled,
  StatCardStyled,
  SectionHeaderStyled,
  ServicesGridStyled,
  ServiceCardStyled,
  ServiceTopRow,
  ServiceIconBox,
  ServiceBadgeStyled,
  ServiceBody,
  ServiceDeliverables,
  ServiceTechTags,
  TimelineWrapper,
  TimelineCardStyled,
  CTABannerStyled,
  CTAButtonStyled,
} from "./AboutMeContainerStyled";
import { ContainerTitleSkillStyled } from "../SkillContainer/SkillContainerStyled";
import Profile from "../../assets/profile.webp";
import { useTranslate } from "../../context/Translate";
import { BsWhatsapp } from "react-icons/bs";
import { whatsappUrl, defaultWhatsappText } from "../../utils/whatsapp";
import { MdOutlineBusinessCenter, MdOutlineWeb } from "react-icons/md";
import { TbDeviceMobileCode, TbRobot, TbTimelineEvent } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";

const AboutMeContainer = () => {
  const { isTranslate } = useTranslate();

  return (
    <ContainerSectionStyled id="trayectoria">
      <ContainerTitleSkillStyled>
        <span>{isTranslate ? "Trayectoria & Servicios" : "Career & Services"}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
          aria-hidden="true"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
          <path d="M15 19l2 2l4 -4"></path>
        </svg>
      </ContainerTitleSkillStyled>

      {/* Main Profile & Background Section */}
      <ContainerAboutMeStyled>
        <AboutMeContentStyled>
          <StatusPillStyled>
            <span className="status-dot"></span>
            {isTranslate ? "Disponible para nuevos proyectos & consultoría" : "Available for new projects & consulting"}
          </StatusPillStyled>

          <p>
            {isTranslate ? (
              <>
                Con <span>más de 6 años de experiencia</span> en ingeniería de software, arquitectura cloud y desarrollo de soluciones digitales a medida, me especializo en el diseño e implementación de <span>sistemas integrales de gestión ERP</span>, plataformas administrativas escalables y <span>aplicaciones móviles para empresas, comercios y pymes</span>.
              </>
            ) : (
              <>
                With <span>over 6 years of experience</span> in software engineering, cloud architecture, and custom digital solutions, I specialize in architecting and delivering <span>enterprise ERP management systems</span>, scalable business platforms, and <span>mobile applications for enterprise operations</span>.
              </>
            )}
          </p>

          <p>
            {isTranslate ? (
              <>
                Desarrollo herramientas que resuelven cuellos de botella operativos y potencian la rentabilidad del negocio: desde la integración oficial con <span>ARCA (AFIP) para facturación electrónica</span> y control de stock avanzado (paquetes, unidades y sucursales), hasta <span>bots con Inteligencia Artificial</span> para monitoreo, auditoría de usuarios y trazabilidad en vivo con WebSockets.
              </>
            ) : (
              <>
                I engineer software that eliminates operational friction and drives profitability: from official integration with <span>ARCA (AFIP) for electronic invoicing</span> and advanced multi-warehouse inventory control to <span>AI-powered automation bots</span> for server monitoring, user audit logging, and live WebSockets tracking.
              </>
            )}
          </p>
        </AboutMeContentStyled>

        <AboutMeFigureStyled>
          <ContianerImgStyled>
            <img loading="lazy" decoding="async" src={Profile} alt="José Chocobar - Software Engineer" />
          </ContianerImgStyled>
        </AboutMeFigureStyled>
      </ContainerAboutMeStyled>

      {/* Impact Numbers / Stats */}
      <StatsGridStyled>
        <StatCardStyled>
          <span className="stat-number">{isTranslate ? "+6 Años" : "+6 Years"}</span>
          <span className="stat-label">
            {isTranslate ? "Experiencia en Ingeniería de Software" : "Years in Software Engineering"}
          </span>
        </StatCardStyled>

        <StatCardStyled>
          <span className="stat-number">{isTranslate ? "+15 Sistemas" : "+15 Systems"}</span>
          <span className="stat-label">
            {isTranslate ? "Plataformas y Proyectos Implementados" : "Platforms & Systems Deployed"}
          </span>
        </StatCardStyled>

        <StatCardStyled>
          <span className="stat-number">ARCA (AFIP)</span>
          <span className="stat-label">
            {isTranslate ? "Facturación Electrónica Homologada" : "Certified Invoicing Integration"}
          </span>
        </StatCardStyled>

        <StatCardStyled>
          <span className="stat-number">IA & Bots</span>
          <span className="stat-label">
            {isTranslate ? "Monitoreo, Auditoría & Asistentes" : "Monitoring, Auditing & AI Bots"}
          </span>
        </StatCardStyled>
      </StatsGridStyled>

      {/* Section 2: Specialized Professional Services */}
      <SectionHeaderStyled>
        <h3>
          {isTranslate ? "Servicios Profesionales Especializados" : "Specialized Engineering Services"}
        </h3>
        <p>
          {isTranslate
            ? "Soluciones de software de punta a punta, construidas con arquitecturas robustas y código limpio para garantizar alta disponibilidad y escalabilidad."
            : "End-to-end software solutions crafted with robust architectures, high security, and clean code for maximum uptime."}
        </p>
      </SectionHeaderStyled>

      <ServicesGridStyled>
        {/* Service 1 */}
        <ServiceCardStyled>
          <ServiceTopRow>
            <ServiceIconBox
              $color="rgba(59, 130, 246, 0.15)"
              $borderColor="rgba(59, 130, 246, 0.3)"
              $iconColor="#60a5fa"
            >
              <MdOutlineBusinessCenter />
            </ServiceIconBox>
            <ServiceBadgeStyled>
              {isTranslate ? "ERP & Finanzas" : "ERP & Finance"}
            </ServiceBadgeStyled>
          </ServiceTopRow>

          <ServiceBody>
            <h4>{isTranslate ? "Sistemas ERP & Gestión Administrativa" : "ERP & Business Management Systems"}</h4>
            <p>
              {isTranslate
                ? "Plataformas integrales diseñadas para centralizar la facturación, compras, ventas y finanzas de empresas y comercios con altos volúmenes de transacciones."
                : "Full-scale enterprise management platforms designed to unify invoicing, purchases, sales, and financials for high-volume businesses."}
            </p>
            <ServiceDeliverables>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Facturación electrónica oficial conectada con ARCA (AFIP)"
                  : "Certified electronic invoicing connected to ARCA (AFIP)"}
              </li>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Control avanzado de stock por paquetes, unidades y depósitos"
                  : "Advanced inventory management with package and unit tracking"}
              </li>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Cuentas corrientes de clientes/proveedores y reportes contables"
                  : "Accounts receivable/payable, ledgers, and financial reporting"}
              </li>
            </ServiceDeliverables>
          </ServiceBody>

          <ServiceTechTags>
            <span>NestJS</span>
            <span>PostgreSQL</span>
            <span>TypeScript</span>
            <span>ARCA (AFIP)</span>
            <span>React</span>
          </ServiceTechTags>
        </ServiceCardStyled>

        {/* Service 2 */}
        <ServiceCardStyled>
          <ServiceTopRow>
            <ServiceIconBox
              $color="rgba(16, 185, 129, 0.15)"
              $borderColor="rgba(16, 185, 129, 0.3)"
              $iconColor="#34d399"
            >
              <TbDeviceMobileCode />
            </ServiceIconBox>
            <ServiceBadgeStyled>
              Mobile & POS
            </ServiceBadgeStyled>
          </ServiceTopRow>

          <ServiceBody>
            <h4>{isTranslate ? "Aplicaciones Móviles & Puntos de Venta" : "Mobile Apps & Point of Sale (POS)"}</h4>
            <p>
              {isTranslate
                ? "Apps móviles ágiles y responsivas para venta rápida en mostrador, control de inventario en depósito y operaciones de logística en campo."
                : "High-performance mobile applications for rapid checkout, warehouse inventory scanning, and field logistics operations."}
            </p>
            <ServiceDeliverables>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Escáner de códigos de barras para altas, bajas y ventas ágiles"
                  : "Barcode scanning engine for fast stock updates and mobile checkout"}
              </li>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Gestión de remitos y pedidos con verificación por código QR"
                  : "Dispatch notes and invoice verification via QR code scanner"}
              </li>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Sincronización instantánea con el servidor central mediante WebSockets"
                  : "Real-time bi-directional synchronization powered by WebSockets"}
              </li>
            </ServiceDeliverables>
          </ServiceBody>

          <ServiceTechTags>
            <span>React Native</span>
            <span>WebSockets</span>
            <span>Barcode / QR</span>
            <span>Offline-ready</span>
          </ServiceTechTags>
        </ServiceCardStyled>

        {/* Service 3 */}
        <ServiceCardStyled>
          <ServiceTopRow>
            <ServiceIconBox
              $color="rgba(168, 85, 247, 0.15)"
              $borderColor="rgba(168, 85, 247, 0.3)"
              $iconColor="#c084fc"
            >
              <TbRobot />
            </ServiceIconBox>
            <ServiceBadgeStyled>
              {isTranslate ? "IA & Automatización" : "AI & Automation"}
            </ServiceBadgeStyled>
          </ServiceTopRow>

          <ServiceBody>
            <h4>{isTranslate ? "Bots con IA, Monitoreo & Auditoría" : "AI Bots, Server Monitoring & Auditing"}</h4>
            <p>
              {isTranslate
                ? "Herramientas inteligentes de soporte y DevOps para monitoreo 24/7, diagnóstico de incidencias y registro exhaustivo de actividad."
                : "Intelligent DevOps and support tools for continuous monitoring, proactive error diagnostics, and deep audit logging."}
            </p>
            <ServiceDeliverables>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Bots de Telegram conectados a servidores para análisis de errores con IA"
                  : "Telegram bots linked to remote servers with AI error root-cause diagnostics"}
              </li>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Asistentes virtuales integrados que guían al usuario en el uso del ERP"
                  : "Integrated AI assistants guiding users step-by-step through business tools"}
              </li>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Trazabilidad completa: auditoría de acciones, accesos y sesiones de usuarios"
                  : "Granular user audit logs, permission enforcement, and emergency alerts"}
              </li>
            </ServiceDeliverables>
          </ServiceBody>

          <ServiceTechTags>
            <span>Telegram Bot API</span>
            <span>Inteligencia Artificial</span>
            <span>Audit Logs</span>
            <span>NodeJS / NestJS</span>
          </ServiceTechTags>
        </ServiceCardStyled>

        {/* Service 4 */}
        <ServiceCardStyled>
          <ServiceTopRow>
            <ServiceIconBox
              $color="rgba(245, 158, 11, 0.15)"
              $borderColor="rgba(245, 158, 11, 0.3)"
              $iconColor="#fbbf24"
            >
              <MdOutlineWeb />
            </ServiceIconBox>
            <ServiceBadgeStyled>
              {isTranslate ? "Web & Portales" : "Web & Portals"}
            </ServiceBadgeStyled>
          </ServiceTopRow>

          <ServiceBody>
            <h4>{isTranslate ? "Portales Corporativos & Plataformas Web" : "Corporate Web Platforms & Portals"}</h4>
            <p>
              {isTranslate
                ? "Sitios web institucionales y portales de autogestión de socios con arquitecturas modernas, catálogos editables y diseño de alta conversión."
                : "Corporate websites and secure member portals engineered for business chambers, interior design catalogs, and organizations."}
            </p>
            <ServiceDeliverables>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Portales privados con autenticación segura y roles diferenciados"
                  : "Secure self-service member portals with role-based access control"}
              </li>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Catálogos de productos 100% autoadministrables para las empresas"
                  : "Self-managed interactive product showcases with instant WhatsApp inquiry"}
              </li>
              <li>
                <FiCheckCircle />
                {isTranslate
                  ? "Optimización de velocidad, SEO técnico y diseño responsive de vanguardia"
                  : "Top-tier performance scores, technical SEO, and fluid responsive design"}
              </li>
            </ServiceDeliverables>
          </ServiceBody>

          <ServiceTechTags>
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Auth JWT</span>
            <span>SEO & Responsive</span>
          </ServiceTechTags>
        </ServiceCardStyled>
      </ServicesGridStyled>

      {/* Section 3: Timeline / Milestones */}
      <SectionHeaderStyled>
        <h3>
          <TbTimelineEvent /> {isTranslate ? "Evolución & Hitos de Trayectoria" : "Career Evolution & Key Milestones"}
        </h3>
        <p>
          {isTranslate
            ? "Un recorrido constante de evolución técnica resolviendo desafíos de ingeniería para empresas, pymes e instituciones."
            : "A continuous track record of technical evolution solving engineering challenges for enterprises and businesses."}
        </p>
      </SectionHeaderStyled>

      <TimelineWrapper>
        <TimelineCardStyled>
          <div className="timeline-header">
            <h4>{isTranslate ? "Sistemas ERP con IA, Monitoreo & Trazabilidad en Vivo" : "AI-Powered ERPs, Live Tracking & Monitoring"}</h4>
            <span className="period-badge">2024 - {isTranslate ? "Actualidad" : "Present"}</span>
          </div>
          <p>
            {isTranslate
              ? "Arquitectura y desarrollo de Ventryx (sistema ERP con facturación ARCA, app móvil con escáner y asistente de IA), Bot de Telegram para auditoría y diagnóstico remoto de servidores, y plataforma de logística y seguimiento en tiempo real con WebSockets para Transporte Chiarottin."
              : "Architecting Ventryx (complete ERP system with ARCA invoicing, companion barcode scanning app, and integrated AI assistant), DevOps Telegram Bot for real-time server auditing and emergency alerts, and live WebSockets tracking for Transporte Chiarottin."}
          </p>
        </TimelineCardStyled>

        <TimelineCardStyled>
          <div className="timeline-header">
            <h4>{isTranslate ? "Integraciones Fiscales ARCA & Portales Institucionales" : "ARCA Fiscal Integrations & Corporate Portals"}</h4>
            <span className="period-badge">2022 - 2024</span>
          </div>
          <p>
            {isTranslate
              ? "Desarrollo de módulos de facturación electrónica con AFIP/ARCA para comercios y ferreterías, sistemas de gestión multidepósito (Bosque SRL), y la plataforma web con portal de socios para la Cámara Empresarial de Jesús María y Sinsacate."
              : "Implemented electronic invoicing with AFIP/ARCA for retail and hardware stores, multi-warehouse systems (Bosque SRL), and the corporate web platform and member portal for the Chamber of Commerce of Jesús María."}
          </p>
        </TimelineCardStyled>

        <TimelineCardStyled>
          <div className="timeline-header">
            <h4>{isTranslate ? "Ingeniería Full Stack, APIs Escalables & Soluciones Cloud" : "Full Stack Engineering & Scalable APIs"}</h4>
            <span className="period-badge">2019 - 2022</span>
          </div>
          <p>
            {isTranslate
              ? "Diseño e implementación de APIs de alta disponibilidad en NestJS / NodeJS, modelado y optimización de bases de datos relacionales (PostgreSQL, MySQL) y desarrollo frontend en React orientado a rendimiento y experiencia de usuario."
              : "Engineered scalable REST/WebSocket APIs with NestJS/NodeJS, optimized relational databases (PostgreSQL, MySQL), and built dynamic frontend applications in React focused on speed and intuitive user experience."}
          </p>
        </TimelineCardStyled>
      </TimelineWrapper>

      {/* CTA Box */}
      <CTABannerStyled>
        <div className="cta-text">
          <h3>
            {isTranslate ? (
              <>¿Tenés un proyecto o querés <span>optimizar la gestión</span> de tu empresa?</>
            ) : (
              <>Have a project or want to <span>streamline operations</span> for your company?</>
            )}
          </h3>
          <p>
            {isTranslate
              ? "Hablemos de tus requerimientos técnicos. Te asesoro desde la arquitectura inicial hasta la puesta en producción con soporte continuo."
              : "Let's discuss your technical requirements. I provide end-to-end guidance from initial architecture to production with ongoing support."}
          </p>
        </div>

        <div className="cta-actions">
          <CTAButtonStyled
            $primary
            href={whatsappUrl(defaultWhatsappText(isTranslate))}
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={18} />
            {isTranslate ? "Cotizar por WhatsApp" : "Contact on WhatsApp"}
          </CTAButtonStyled>
          <CTAButtonStyled href="#proyectos">
            {isTranslate ? "Explorar Sistemas" : "Explore Systems"}
          </CTAButtonStyled>
        </div>
      </CTABannerStyled>
    </ContainerSectionStyled>
  );
};

export default AboutMeContainer;
