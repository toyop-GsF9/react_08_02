/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  /* ここにオプションが必要な場合は指定します */
});
module.exports = nextConfig
