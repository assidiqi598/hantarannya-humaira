/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/gallery",
                permanent: false
            }
        ]
    }
};

export default nextConfig;
