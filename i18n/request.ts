import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

function detectLocaleFromHeader(acceptLanguage: string) {
  return acceptLanguage.includes("de-DE") ||
    acceptLanguage.includes("de-AT") ||
    acceptLanguage.includes("de-CH") ||
    acceptLanguage.startsWith("de")
    ? "de"
    : "en";
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const headerStore = await headers();

  const cookieLocale = store.get("locale")?.value;

  const locale =
    cookieLocale === "de" || cookieLocale === "en"
      ? cookieLocale
      : detectLocaleFromHeader(headerStore.get("accept-language") || "");
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
