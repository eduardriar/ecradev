import { cookies } from "next/headers";
import { defaultLocale, locales, type Locale } from "./content";

export function getLocale(): Locale {
  const raw = cookies().get("lang")?.value;
  return locales.includes(raw as Locale) ? (raw as Locale) : defaultLocale;
}
