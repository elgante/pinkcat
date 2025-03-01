module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],

        plugins: [

            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    blocklist: null,
                    allowlist: null,
                    safe: false,
                    allowUndefined: false,
                },
            ],
            "react-native-reanimated/plugin", // Added Reanimated plugin here
        ],
    };
};