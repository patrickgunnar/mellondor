import GaladrielWebpackClient from "@galadrielcss/webpack";

const nextConfig = {
    /* config options here */
    webpack(config, { isServer }) {
        config.plugins.push(new GaladrielWebpackClient.default());

        if (!isServer) config.cache = false;

        return config;
    },
};

export default nextConfig;
