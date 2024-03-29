module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/cv',
        destination: 'https://read.cv/vbrdnk',
        permanent: true,
      },
    ];
  },
};
