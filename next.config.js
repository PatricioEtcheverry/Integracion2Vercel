/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  i18n:{
    locales:[ "en-US", "pt-BR", "es-ES"],
    defaultLocale: "es-ES"
  }
};

module.exports = nextConfig;
