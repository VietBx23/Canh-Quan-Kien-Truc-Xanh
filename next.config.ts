
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // This is to allow the Next.js dev server to be accessed from the
    // cloud workstation's domain.
    allowedDevOrigins: [
      'https://6000-firebase-studio-1758355567505.cluster-nle52mxuvfhlkrzyrq6g2cwb52.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
