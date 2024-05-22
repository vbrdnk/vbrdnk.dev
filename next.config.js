/** @type {import('next').NextConfig} */
const config = {
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

export default config;