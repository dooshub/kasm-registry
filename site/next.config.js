/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'dOOs',
    description: 'The official store for dOOs supported Kasm workspaces.',
    icon: 'https://dooshub.github.io/kasm-registry/1.0/img/logo.png',
    listUrl: 'https://dooshub.github.io/kasm-registry/',
    contactUrl: 'https://github.com/dooshub/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
