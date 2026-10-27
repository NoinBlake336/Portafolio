import LogoMongo from "../assets/mg.svg";
import LogoBotAi from "../assets/botAi.svg";
import LogoTelegram from "../assets/telegram.svg";
export const projectsDataEn = [
  {
    link: "", // en desarrollo activo
    img: require("../assets/chiarottinTransporte.png"),
    desktopImg: require("../assets/chiarottinTransporte.png"),
    span: "Logística & Tracking en Vivo",
    title: "TRANSPORTE CHIAROTTIN",
    description:
      "Plataforma integral de logística, gestión de comisiones y seguimiento en tiempo real para comisionistas y transporte de cargas. Permite a los clientes rastrear minuto a minuto el estado y la ubicación de sus pedidos a lo largo de las rutas (entre Córdoba Capital y Jesús María / Ruta 9 Norte), gestión de remitos, depósitos y cobros. Desarrollado con WebSockets para geolocalización y trazabilidad en vivo (actualmente en fase activa de desarrollo).",
    skills: [
      require("../assets/react.png"),
      require("../assets/njs.png"),
      require("../assets/postgresql.png"),
      require("../assets/ts.png"),
    ],
    skillsName: [
      "React",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "WebSocket",
      "TailwindCSS",
    ],
    isRecent: false,
    inDevelopment: true,
  },
  {
    link: "",
    img: require("../assets/botTelegram.jpeg"),
    desktopImg: require("../assets/botTelegram.jpeg"),
    span: "DevOps & Bot de Monitoreo con IA",
    title: "TELEGRAM MONITOR & AUDIT BOT",
    bg: "#0e1621",
    description:
      "Bot de automatización, diagnóstico y administración para Telegram con conexión remota directa a la PC y servidores. Cuenta con análisis inteligente de errores del sistema mediante IA, detección temprana de incidencias, canal de avisos de emergencias reportadas por usuarios en tiempo real, y un módulo integral de auditoría continua que registra accesos, operaciones y sesiones de usuarios para control y seguridad operativa.",
    skills: [
      LogoTelegram,
      LogoBotAi,
      require("../assets/njs.png"),
      require("../assets/ts.png"),
      require("../assets/postgresql.png"),
    ],
    skillsName: [
      "Telegram Bot API",
      "Inteligencia Artificial (IA)",
      "NodeJS / NestJS",
      "TypeScript",
      "Auditoría de Usuarios",
      "DevOps & Monitoreo",
      "PostgreSQL",
    ],
    isRecent: true,
  },
  {
    link: "",
    img: require("../assets/ventryx.png"),
    desktopImg: require("../assets/ventryx.png"),
    mobileImg: require("../assets/mobileventryx.jpeg"),
    span: "Sistema ERP & App Móvil",
    title: "VENTRYX",
    description:
      "Ventryx es un sistema integral de gestión administrativa y contable desarrollado para empresas, distribuidoras y comercios. Incluye facturación electrónica conectada con ARCA (AFIP), gestión completa de ventas y compras, control avanzado de inventario con soporte para paquetes y unidades, múltiples depósitos, cuentas corrientes, reportes financieros y una aplicación móvil complementaria con escáner de códigos de barras y sincronización en tiempo real mediante WebSockets. Además, incorpora un asistente interactivo inteligente integrado (bot con IA) que guía y asiste a los usuarios paso a paso sobre el funcionamiento y uso de cada módulo del sistema.",
    skills: [
      require("../assets/react.png"),
      require("../assets/njs.png"),
      require("../assets/postgresql.png"),
      require("../assets/ts.png"),
      LogoBotAi,
    ],
    skillsName: [
      "React",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "WebSocket",
      "ARCA (AFIP)",
      "React Native",
      "Bot Asistente con IA",
    ],
    isRecent: true,
  },
  {
    link: "https://camaraempresarialjmys.org.ar/",
    img: require("../assets/paginaCamara.png"),
    desktopImg: require("../assets/paginaCamara.png"),
    mobileImg: require("../assets/mobileCamara.png"),
    span: "Web Institucional & Socios",
    title: "CÁMARA EMPRESARIAL",
    description:
      "Plataforma web institucional y portal de socios para la Cámara Empresarial de Jesús María y Sinsacate. Permite a las empresas y socios asociados acceder a beneficios exclusivos, gestionar trámites y acceder al portal privado de autogestión de socios con autenticación segura y notificaciones en tiempo real vía WebSockets, disponible tanto en versión web de escritorio como en interfaz móvil optimizada.",
    skills: [
      require("../assets/react.png"),
      require("../assets/njs.png"),
      require("../assets/postgresql.png"),
      require("../assets/Td.png"),
    ],
    skillsName: ["React", "NestJS", "PostgreSQL", "TailwindCSS", "WebSocket"],
    isRecent: true,
  },
  {
    link: "", // si no tiene dominio aún, podés dejar "#"
    img: require("../assets/grupomarron.png"),
    desktopImg: require("../assets/grupomarron.png"),
    span: "Landing Page & Catálogo Editable",
    title: "GRUPO MARRÓN",
    description:
      "Sitio web institucional y catálogo digital autoadministrable desarrollado para Grupo Marrón (fábrica de muebles y diseño de interiores). Cuenta con una arquitectura donde la empresa puede actualizar y cargar toda su información corporativa, colecciones y catálogo completo de productos con imágenes y especificaciones, integrando canales de consulta directa por WhatsApp.",
    skills: [
      require("../assets/react.png"),
      require("../assets/njs.png"),
      require("../assets/postgresql.png"),
      require("../assets/Td.png"),
    ],
    skillsName: ["React", "NestJS", "PostgreSQL", "TailwindCSS"],
    isRecent: true,
  },
  {
    link: "", // si no tiene dominio aún, podés dejar "#"
    img: require("../assets/ketush.png"), // reemplazá con la captura del sistema
    desktopImg: require("../assets/ketush.png"),
    span: "Sistema de Gestión ERP",
    title: "FERRETERÍA SYSTEM",
    description:
      "Sistema desarrollado para la gestión integral de una ferretería. Permite registrar proveedores, cargar listas de precios personalizadas y definir porcentajes de ganancia por proveedor. A partir de esta información se pueden generar comprobantes de manera rápida y eficiente. Además, el sistema está integrado con ARCA (AFIP), facilitando la facturación electrónica y el cumplimiento fiscal.",
    skills: [
      require("../assets/njs.png"),
      require("../assets/react.png"),
      require("../assets/postgresql.png"),
    ],
    skillsName: ["NestJS", "React", "PostgreSQL", "ARCA (AFIP)"],
  },

  {
    link: "https://bosquesrl.com/", // si no tiene dominio, podés dejarlo vacío o poner "#"
    img: require("../assets/bosqueSrlSystem.png"), // reemplazá con la captura del sistema
    desktopImg: require("../assets/bosqueSrlSystem.png"),
    span: "Sistema de Gestión",
    title: "BOSQUE SRL",
    description:
      "BOSQUE SRL es un sistema integral diseñado para la gestión de una mueblería con múltiples sucursales. Permite administrar el stock de cada sucursal, registrar ventas y compras, y gestionar roles de empleados. Además, incluye una aplicación móvil que facilita la gestión de remitos con código QR, control de inventario y ventas en tiempo real.",
    skills: [
      require("../assets/njs.png"),
      require("../assets/react.png"),
      require("../assets/postgresql.png"),
    ],
    skillsName: ["NestJS", "React", "PostgreSQL"],
  },
  {
    link: "https://citaconlavida.vercel.app/",
    img: require("../assets/radioamistad.png"), // Imagen de ejemplo
    span: "Landing Page",
    title: "RADIO AMISTAD 88.5",
    description:
      "Radio Cita con la Vida es un sitio web diseñado para llevar la magia de la radio a cualquier dispositivo, desarrollado utilizando React, una de las tecnologías más avanzadas para la creación de interfaces web dinámicas y responsivas.",
    skills: [require("../assets/react.png"), require("../assets/js.png")], // Ejemplo de skills
    skillsName: ["react", "javascript"],
  },
  {
    link: "https://casa-plus-web.vercel.app/",
    img: require("../assets/casaPlus.png"),
    desktopImg: require("../assets/casaPlus.png"),
    mobileImg: require("../assets/mobileCasaPlus.png"),
    span: "E-Commerce & Mobile",
    title: "CASA PLUS | BAZAR",
    description:
      "Tienda online y catálogo interactivo desarrollado para Casa Plus, local comercial dedicado a artículos de bazar y el hogar. Diseñado con una experiencia de compra fluida y optimizada tanto para escritorio como para dispositivos móviles.",
    skills: [
      require("../assets/ts.png"),
      require("../assets/react.png"),
      require("../assets/njs.png"),
      LogoMongo,
    ],
    skillsName: ["React", "TypeScript", "NestJS", "MongoDB"],
  },
  {
    link: "https://www.ipetym69.edu.ar",
    img: require("../assets/projectOne.png"),
    span: "Full Stack",
    title: "I.P.E.TyM N°69",
    description:
      "Ipetym69 proporciona a los directivos un panel de control para gestionar noticias y recursos. Con inicio de sesión seguro y actualización en tiempo real, mantenemos a todos informados.",
    skills: [
      require("../assets/html.png"),
      require("../assets/js.png"),
      require("../assets/CSS.png"),
    ],
    skillsName: ["HTML", "JavaScript", "CSS"],
  },
  {
    link: "https://glam-haven.vercel.app/",
    img: require("../assets/projectsTwo.png"),
    span: "Landing Page",
    title: "GLAM HAVEN",
    description:
      "Glam Haven es un proyecto frontend que presenta una selección diversa de productos de belleza para entusiastas del maquillaje. Con una interfaz intuitiva, los usuarios pueden explorar, comparar y agregar productos al carrito de compras con facilidad, todo en un solo lugar.",
    skills: [
      require("../assets/html.png"),
      require("../assets/Td.png"),
      require("../assets/CSS.png"),
      require("../assets/js.png"),
    ],
    skillsName: ["HTML", "TailwindCSS", "JavaScript"],
  },
];
export const designsEn = [
  {
    link: "",
    img: require("../assets/design/chiarottin.png"),
    images: [
      require("../assets/design/chiarottin.png"),
      require("../assets/design/isologo_chiarottin.png"),
    ],
    imageLabels: ["Isotipo / Logo", "Isologo Completo"],
    span: "Identidad & Branding",
    title: "TRANSPORTE CHIAROTTIN",
    description:
      "Desarrollo de identidad visual corporativa, diseño de logotipo e isologo para la empresa Transporte Chiarottin. Se diseñó una estética moderna, ágil y sólida que transmite velocidad, profesionalismo y confianza en el rubro logístico.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Branding", "Identidad Visual"],
    bg: "#0b6b38",
    isRecent: true,
    isDesign: true,
  },
  {
    link: "",
    img: require("../assets/design/piel.jpg"),
    images: [
      require("../assets/design/piel.jpg"),
      require("../assets/design/portada-piel.jpg"),
    ],
    imageLabels: ["Logo Principal", "Portada / Cover"],
    span: "Identidad & Branding",
    title: "PIEL MORENA",
    description:
      "Identidad visual y diseño corporativo para Piel Morena. Transmite calidez y vitalidad con una composición equilibrada y elegante que incorpora elementos naturales, invitando a explorar la marca con una sensación acogedora y moderna.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Branding", "Identidad Visual"],
    isDesign: true,
  },
  {
    link: "",
    img: require("../assets/design/tabicas (1).jpg"),
    images: [
      require("../assets/design/tabicas (1).jpg"),
      require("../assets/design/tabicas (2).jpg"),
    ],
    imageLabels: ["Variante 1", "Variante 2"],
    span: "Identidad & Logo",
    title: "TABITAS DORCAS",
    description:
      "Tabitas Dorcas es una marca especializada en arreglos de prendas y bordados, donde la artesanía, precisión y la atención al detalle son fundamentales en su propuesta visual.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Diseño de Logo"],
    isDesign: true,
  },
  {
    link: "https://mateosapart.com/",
    img: require("../assets/design/mateosApart(1).png"),
    images: [
      require("../assets/design/mateosApart(1).png"),
      require("../assets/design/mateosApart(2).png"),
    ],
    imageLabels: ["Isotipo", "Isologo Completo"],
    span: "Identidad & Logo",
    title: "MATEOS APART",
    description:
      "El logo de Mateos Apart representa la comodidad y elegancia de los departamentos en alquiler por noche. Con un diseño moderno y minimalista, evoca una sensación de tranquilidad y exclusividad para los huéspedes.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Branding"],
    bg: "#c19e6a",
    isDesign: true,
  },
  {
    link: "",
    img: require("../assets/design/Pintureria.png"),
    images: [
      require("../assets/design/Pintureria.png"),
      require("../assets/design/presentationCardGP.png"),
    ],
    imageLabels: ["Logo Corporativo", "Tarjeta de Presentación"],
    span: "Identidad & Branding",
    title: "GONZALEZ PINTURA",
    description:
      "Identidad corporativa y piezas de presentación desarrolladas para Gonzalez Pintura. Incluye isotipo y diseño de papelería profesional, transmitiendo confianza y compromiso con el embellecimiento del hogar.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Branding", "Diseño Editorial"],
    bg: "white",
    isDesign: true,
  },
];
export const projectsDataEs = [
  {
    link: "", // in active development
    img: require("../assets/chiarottinTransporte.png"),
    desktopImg: require("../assets/chiarottinTransporte.png"),
    span: "Logistics & Live Tracking",
    title: "TRANSPORTE CHIAROTTIN",
    description:
      "Comprehensive logistics platform, commission management, and real-time package tracking system for freight and commission agents. Enables clients to track shipment status and route progress live between Córdoba Capital and Ruta 9 Norte, managing dispatch notes, warehouse handling, and collections. Engineered with WebSockets for real-time tracking (currently in active development).",
    skills: [
      require("../assets/react.png"),
      require("../assets/njs.png"),
      require("../assets/postgresql.png"),
      require("../assets/ts.png"),
    ],
    skillsName: [
      "React",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "WebSocket",
      "TailwindCSS",
    ],
    isRecent: false,
    inDevelopment: true,
  },
  {
    link: "",
    img: require("../assets/botTelegram.jpeg"),
    desktopImg: require("../assets/botTelegram.jpeg"),
    span: "DevOps & AI Monitoring Bot",
    title: "TELEGRAM MONITOR & AUDIT BOT",
    bg: "#0e1621",
    description:
      "Telegram automation and administration bot with direct remote connection to PC and server infrastructure. Features AI-powered system error analysis and proactive troubleshooting, real-time emergency alert dispatch from end-users, and a continuous audit logging engine tracking user sessions, commands, and operational events for enterprise-grade security and reliability.",
    skills: [
      LogoTelegram,
      LogoBotAi,
      require("../assets/njs.png"),
      require("../assets/ts.png"),
      require("../assets/postgresql.png"),
    ],
    skillsName: [
      "Telegram Bot API",
      "Artificial Intelligence (AI)",
      "NodeJS / NestJS",
      "TypeScript",
      "User Auditing",
      "DevOps & Remote Monitoring",
      "PostgreSQL",
    ],
    isRecent: true,
  },
  {
    link: "https://ventryx.app/",
    img: require("../assets/ventryx.png"),
    desktopImg: require("../assets/ventryx.png"),
    mobileImg: require("../assets/mobileventryx.jpeg"),
    span: "ERP System & Mobile App",
    title: "VENTRYX",
    description:
      "Ventryx is a comprehensive administrative and accounting ERP system developed for businesses, distributors, and retail stores. Features electronic invoicing integrated with ARCA (AFIP), complete sales and purchase management, advanced inventory tracking with support for packages and units, multi-warehouse handling, accounts receivable/payable, financial reports, and a companion mobile app with barcode scanning and real-time synchronization powered by WebSockets. Additionally, it integrates an intelligent interactive assistant (AI Bot) that guides users step-by-step on navigating and utilizing every feature of the ERP system.",
    skills: [
      require("../assets/react.png"),
      require("../assets/njs.png"),
      require("../assets/postgresql.png"),
      require("../assets/ts.png"),
      LogoBotAi,
    ],
    skillsName: [
      "React",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "WebSocket",
      "ARCA (AFIP)",
      "React Native",
      "AI Assistant (Bot)",
    ],
    isRecent: true,
  },
  {
    link: "https://camaraempresarialjmys.org.ar/",
    img: require("../assets/paginaCamara.png"),
    desktopImg: require("../assets/paginaCamara.png"),
    mobileImg: require("../assets/mobileCamara.png"),
    span: "Institutional Web & Member Portal",
    title: "CÁMARA EMPRESARIAL",
    description:
      "Institutional web platform and member portal for the Chamber of Commerce of Jesús María and Sinsacate. Allows associated businesses and members to access exclusive benefits, manage paperwork, and access the private self-management portal with secure authentication and real-time updates via WebSockets, available both in desktop web view and mobile-optimized interface.",
    skills: [
      require("../assets/react.png"),
      require("../assets/njs.png"),
      require("../assets/postgresql.png"),
      require("../assets/Td.png"),
    ],
    skillsName: ["React", "NestJS", "PostgreSQL", "TailwindCSS", "WebSocket"],
    isRecent: true,
  },
  {
    link: "",
    img: require("../assets/grupomarron.png"),
    desktopImg: require("../assets/grupomarron.png"),
    span: "Self-Managed Landing Page & Catalog",
    title: "GRUPO MARRÓN",
    description:
      "Corporate web platform and self-managed digital catalog developed for Grupo Marrón (custom furniture manufacturing and interior design). Engineered with a management back-office where the business can easily update company information, showcase collections, and publish products with rich visuals and specifications, driving direct customer inquiries via WhatsApp.",
    skills: [
      require("../assets/react.png"),
      require("../assets/njs.png"),
      require("../assets/postgresql.png"),
      require("../assets/Td.png"),
    ],
    skillsName: ["React", "NestJS", "PostgreSQL", "TailwindCSS"],
    isRecent: true,
  },
  {
    link: "", // if there's no domain yet, you can leave "#"
    img: require("../assets/ketush.png"), // replace with the system screenshot
    desktopImg: require("../assets/ketush.png"),
    span: "ERP Management System",
    title: "HARDWARE STORE SYSTEM",
    description:
      "System developed for the comprehensive management of a hardware store. It allows registering suppliers, uploading customized price lists, and defining profit margins per supplier. Based on this information, invoices can be generated quickly and efficiently. In addition, the system is integrated with ARCA (AFIP), enabling electronic invoicing and tax compliance.",
    skills: [
      require("../assets/njs.png"),
      require("../assets/react.png"),
      require("../assets/postgresql.png"),
    ],
    skillsName: ["NestJS", "React", "PostgreSQL", "ARCA (AFIP)"],
  },

  {
    link: "https://bosquesrl.com/", // if there's no domain, you can leave it empty or use "#"
    img: require("../assets/bosqueSrlSystem.png"), // replace with the system screenshot
    desktopImg: require("../assets/bosqueSrlSystem.png"),
    span: "Management System",
    title: "BOSQUE SRL",
    description:
      "BOSQUE SRL is an integrated system designed for managing a furniture company with multiple branches. It allows managing stock at each branch, registering sales and purchases, and handling employee roles. In addition, it includes a mobile application that simplifies the management of delivery notes with QR codes, inventory control, and real-time sales.",
    skills: [
      require("../assets/njs.png"),
      require("../assets/react.png"),
      require("../assets/postgresql.png"),
    ],
    skillsName: ["NestJS", "React", "PostgreSQL"],
  },
  {
    link: "https://citaconlavida.vercel.app/",
    img: require("../assets/radioamistad.png"), // Imagen de ejemplo
    span: "Landing Page",
    title: "RADIO AMISTAD 88.5",
    description:
      "Radio Cita con la Vida is a website designed to bring the magic of radio to any device, developed using React, one of the most advanced technologies for creating dynamic and responsive web interfaces.",
    skills: [require("../assets/react.png"), require("../assets/js.png")], // Ejemplo de skills
    skillsName: ["react", "javascript"],
  },
  {
    link: "https://casa-plus-web.vercel.app/",
    img: require("../assets/casaPlus.png"),
    desktopImg: require("../assets/casaPlus.png"),
    mobileImg: require("../assets/mobileCasaPlus.png"),
    span: "E-Commerce & Mobile",
    title: "CASA PLUS | BAZAR",
    description:
      "Online store and interactive digital catalog developed for Casa Plus, a retail business specializing in bazaar and household goods. Designed with a smooth checkout experience optimized for both desktop and mobile devices.",
    skills: [
      require("../assets/ts.png"),
      require("../assets/react.png"),
      require("../assets/njs.png"),
      LogoMongo,
    ],
    skillsName: ["React", "TypeScript", "NestJS", "MongoDB"],
  },
  {
    link: "https://www.ipetym69.edu.ar",
    img: require("../assets/projectOne.png"),
    span: "Full Stack",
    title: "I.P.E.TyM N°69",
    description:
      "Ipetym69 provides administrators with a control panel to manage news and resources. With secure login and real-time updates, we keep everyone informed.",
    skills: [
      require("../assets/html.png"),
      require("../assets/js.png"),
      require("../assets/CSS.png"),
    ],
    skillsName: ["HTML", "JavaScript", "CSS"],
  },
  {
    link: "https://glam-haven.vercel.app/",
    img: require("../assets/projectsTwo.png"),
    span: "Landing Page",
    title: "GLAM HAVEN",
    description:
      "Glam Haven is a frontend project that showcases a diverse selection of beauty products for makeup enthusiasts. With an intuitive interface, users can explore, compare, and add products to their shopping cart with ease, all in one place.",
    skills: [
      require("../assets/html.png"),
      require("../assets/Td.png"),
      require("../assets/CSS.png"),
      require("../assets/js.png"),
    ],
    skillsName: ["HTML", "TailwindCSS", "JavaScript"],
  },
];
export const designsEs = [
  {
    link: "",
    img: require("../assets/design/chiarottin.png"),
    images: [
      require("../assets/design/chiarottin.png"),
      require("../assets/design/isologo_chiarottin.png"),
    ],
    imageLabels: ["Logo", "Full Isologo"],
    span: "Brand Identity & Logo",
    title: "TRANSPORTE CHIAROTTIN",
    description:
      "Comprehensive visual identity, logo, and isologo design for Transporte Chiarottin. Crafted with a dynamic aesthetic to convey speed, trust, and solid professionalism in logistics and freight services.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Branding", "Graphic Design"],
    bg: "#0b6b38",
    isRecent: true,
    isDesign: true,
  },
  {
    link: "",
    img: require("../assets/design/piel.jpg"),
    images: [
      require("../assets/design/piel.jpg"),
      require("../assets/design/portada-piel.jpg"),
    ],
    imageLabels: ["Primary Logo", "Cover / Header"],
    span: "Brand Identity",
    title: "PIEL MORENA",
    description:
      "Visual brand identity for Piel Morena. Conveys warmth and vitality with an elegant design incorporating organic elements, inviting customers to discover the brand with a modern and welcoming feel.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Branding", "Visual Identity"],
    isDesign: true,
  },
  {
    link: "",
    img: require("../assets/design/tabicas (1).jpg"),
    images: [
      require("../assets/design/tabicas (1).jpg"),
      require("../assets/design/tabicas (2).jpg"),
    ],
    imageLabels: ["Variant 1", "Variant 2"],
    span: "Logo & Identity",
    title: "TABITAS DORCAS",
    description:
      "Tabitas Dorcas is a boutique brand specializing in tailored garment repairs and embroidery, where craftsmanship, precision, and detail are paramount.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Logo Design"],
    isDesign: true,
  },
  {
    link: "https://mateosapart.com/",
    img: require("../assets/design/mateosApart(1).png"),
    images: [
      require("../assets/design/mateosApart(1).png"),
      require("../assets/design/mateosApart(2).png"),
    ],
    imageLabels: ["Isotype", "Full Isologo"],
    span: "Brand & Logo",
    title: "MATEOS APART",
    description:
      "Logo and brand mark for Mateos Apart representing comfort and elegance for short-term rental apartments. A sleek, minimalist aesthetic evoking serenity and premium hospitality.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Branding"],
    bg: "#c19e6a",
    isDesign: true,
  },
  {
    link: "",
    img: require("../assets/design/Pintureria.png"),
    images: [
      require("../assets/design/Pintureria.png"),
      require("../assets/design/presentationCardGP.png"),
    ],
    imageLabels: ["Corporate Logo", "Business Card"],
    span: "Brand Identity",
    title: "GONZALEZ PAINTING",
    description:
      "Corporate visual identity for Gonzalez Painting, featuring brand mark and business card layout. Conveys trust, high quality, and reliability in residential painting and decorating services.",
    skills: [require("../assets/il.png")],
    skillsName: ["Illustrator", "Branding", "Stationery Design"],
    bg: "white",
    isDesign: true,
  },
];
