import { designsEn, designsEs, projectsDataEn, projectsDataEs } from "./projects";

// Ambas listas comparten orden: el slug sale de la lista "Es" y sirve para los dos idiomas.
const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const lists = {
  project: { es: projectsDataEs, en: projectsDataEn },
  design: { es: designsEs, en: designsEn },
};

// isTranslate = true -> textos en español (lista "En")
const pick = (kind, isTranslate) => lists[kind][isTranslate ? "en" : "es"];

export const itemPath = (item, kind) => {
  const idx = lists[kind].en.indexOf(item) >= 0 ? lists[kind].en.indexOf(item) : lists[kind].es.indexOf(item);
  return `/${kind}/${slugify(lists[kind].es[idx].title)}`;
};

export const findItem = (kind, slug, isTranslate) => {
  if (!lists[kind]) return null;
  const idx = lists[kind].es.findIndex((i) => slugify(i.title) === slug);
  return idx < 0 ? null : pick(kind, isTranslate)[idx];
};

export const getList = (kind, isTranslate) => pick(kind, isTranslate);
