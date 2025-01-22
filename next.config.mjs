/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Garante melhores práticas do React
  swcMinify: true, // Usa o SWC para minificação mais rápida
  compress: true, // Ativa compressão Gzip para melhorar performance

  // Headers para otimizar cache e melhorar carregamento de recursos
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },

  // Otimização Webpack para dividir código e reduzir carregamento
  webpack: (config, { isServer }) => {
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    };

    // Remove imports de moment.js que aumentam bundle
    config.resolve.alias = {
      ...config.resolve.alias,
      moment$: "moment/moment.js",
    };

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }

    return config;
  },

  // Evita carregamento de JS desnecessário para otimizar FCP
  experimental: {
    optimizeCss: true, // Reduz tamanho do CSS
    scrollRestoration: true, // Mantém posição do scroll ao navegar
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "cdn.example.com", // Adicione mais domínios se necessário
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
