const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**',
            },
            {
                protocol: 'https',
                hostname: 'authjs.dev',
                port: '',
                pathname: '/img/providers/google.svg',
            },
        ],
    },
}

module.exports = nextConfig
