const plugins = [
  "@babel/plugin-syntax-dynamic-import"
];

const presets = [
  "@babel/preset-typescript"
];

module.exports = {
  env: {
    legacy: {
      presets: [
        ...presets,
        [
          "@babel/preset-env", {
            exclude: ["@babel/plugin-transform-typeof-symbol"],
            modules: false,
            loose: true,
            corejs: 3,
            targets: {
              browsers: ["last 2 versions", "ie >= 11"]
            },
            useBuiltIns: 'entry',
          }
        ]
      ],
      plugins: [
        ...plugins,
        ["@babel/plugin-transform-runtime", { corejs: 3 }],
        ["@babel/plugin-transform-react-jsx", {
          "pragma": "h",
          "pragmaFrag": "Fragment",
        }]
      ],
    },
    modern: {
      presets: [
        ...presets,
        '@babel/preset-modules'
      ],
      plugins: [
        ...plugins,
        ["babel-plugin-transform-jsx-to-htm", {
          "import": {
            "module": "htm/preact",
            "export": "html"
          }
        }]
      ],
    }
  }
};