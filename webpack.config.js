require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackEsmodulesPlugin = require('webpack-module-nomodule-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const babelConfig = require('./.babelrc');
const PreactRefreshPlugin = require('@prefresh/webpack');

const env = babelConfig.env;
const modernTerser = new TerserPlugin({
  cache: true,
  parallel: true,
  sourceMap: true,
  terserOptions: {
    compress: {
      keep_infinity: true,
      pure_getters: true,
      passes: 10,
    },
    output: {
      // By default, Terser wraps function arguments in extra parens to trigger eager parsing.
      wrap_func_args: false,
    },
    ecma: 8,
    safari10: true,
    toplevel: true,
  }
});

const makeConfig = (mode) => {
  const { NODE_ENV } = process.env;
  const isProduction = NODE_ENV === 'production';
  const apiUrl = process.env.DEPLOY_PRIME_URL ?
    process.env.DEPLOY_PRIME_URL + '/.netlify/functions/graphql' :
    process.env.API_URL
  // Build plugins
  const plugins = [
    new HtmlWebpackPlugin({ inject: true, template: './index.html' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.API_URL': JSON.stringify(apiUrl),
    }),
  ];

  if (!isProduction) {
    plugins.push(new PreactRefreshPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    // plugins.push(new BundleAnalyzerPlugin());
  } else if (isProduction) {
    plugins.push(new HtmlWebpackEsmodulesPlugin(mode))
    // plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
  }

  // Return configuration
  return {
    mode: isProduction ? 'production' : 'development',
    entry: mode === 'legacy' ? {
      fetch: 'whatwg-fetch',
      main: './src/index.tsx',
    } : {
      main: './src/index.tsx'
    },
    context: path.resolve(__dirname, './'),
    stats: 'normal',
    devtool: isProduction ? '' : 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      host: 'localhost',
      port: 3000,
      historyApiFallback: true,
      hot: true,
      inline: true,
      publicPath: '/',
      clientLogLevel: 'none',
      open: true,
      overlay: true,
    },
    output: {
      chunkFilename: `[name]-[contenthash]${mode === 'modern' ? '.modern.js' : '.js'}`,
      filename: isProduction ? `[name]-[contenthash]${mode === 'modern' ? '.modern.js' : '.js'}` : `[name]${mode === 'modern' ? '.modern.js' : '.js'}`,
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    optimization: {
      minimize: false,
      //minimizer: mode === 'legacy' ? undefined : [modernTerser],
    },
    plugins,
    resolve: {
      mainFields: ['module', 'main', 'browser'],
      extensions: [".tsx", ".ts", ".mjs", ".js", ".jsx"],
      alias: {
        preact: path.resolve(__dirname, 'node_modules', 'preact'),
        ...(mode === 'modern' ? { 'url': 'native-url' } : {})
      },
    },
    module: {
      rules: [
        {
          // This is to support our `graphql` dependency, they expose a .mjs bundle instead of .js
          // Sneaky sneaky sir graphql.
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
        {
          // Pre-compile graphql strings.
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
        {
          // Makes our babel-loader the lord and savior over our TypeScript
          test: /\.ts$|\.tsx$/,
          include: [
            path.resolve(__dirname, "src"),
          ],
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            ...env[mode],
          }
        },
      ],
    },
  };
};

module.exports = process.env.NODE_ENV === 'production' ?
  [makeConfig('modern'), makeConfig('legacy')] :
  makeConfig('modern');
