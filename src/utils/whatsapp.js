export const whatsappUrl = (text) =>
  `https://api.whatsapp.com/send/?phone=5493525530437&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

export const defaultWhatsappText = (isTranslate) =>
  isTranslate
    ? "Hola José, estuve viendo tu portafolio y quisiera consultar por el desarrollo de una solución de software para mi negocio."
    : "Hi José, I was looking at your portfolio and would like to inquire about a software solution for my business.";
