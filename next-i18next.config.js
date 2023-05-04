/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: "default",
    locales: ["default", "en", "de", "fr", "it"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
};
