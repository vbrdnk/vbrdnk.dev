module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
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
