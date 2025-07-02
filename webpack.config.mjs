import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import WebpackBar from "webpackbar";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

const PATHS = {
  src: path.resolve(__dirname, "src"),
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public"),
  template: "./public/index.html",
  entry: "./src/index.tsx",
};

const ASSET_PATHS = {
  js: "static/js/[name].[contenthash:8].js",
  jsChunk: "static/js/[name].[contenthash:8].chunk.js",
  css: "static/css/[name].[contenthash:8].css",
  cssChunk: "static/css/[name].[contenthash:8].chunk.css",
  assets: "static/assets/[name].[hash][ext]",
};

const DEV_SERVER = {
  port: 3000,
  host: "localhost",
};

const BUILD_CONFIG = {
  isProduction,
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? false : "eval-source-map",
};

const RESOLVE_CONFIG = {
  extensions: [".tsx", ".ts", ".js", ".json"],
  alias: {
    "@": PATHS.src,
  },
};

const basePlugins = {
  html: new HtmlWebpackPlugin({
    template: PATHS.template,
  }),
  webpackBar: new WebpackBar(),
  friendlyErrors: new FriendlyErrorsWebpackPlugin(),
};

const developmentPlugins = {
  reactRefresh: new ReactRefreshWebpackPlugin({ overlay: true }),
};

const productionPlugins = {
  miniCssExtract: new MiniCssExtractPlugin({
    filename: ASSET_PATHS.css,
    chunkFilename: ASSET_PATHS.cssChunk,
  }),
};

const moduleRules = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        plugins: [!isProduction && "react-refresh/babel"].filter(Boolean),
      },
    },
  },
  {
    test: /\.css$/,
    use: [
      isProduction ? MiniCssExtractPlugin.loader : "style-loader",
      "css-loader",
      "postcss-loader",
    ],
  },
  {
    test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
    type: "asset/resource",
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
    type: "asset/resource",
  },
];

const devServerConfig = {
  static: {
    directory: PATHS.public,
  },
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
  },
  compress: true,
  port: DEV_SERVER.port,
  host: DEV_SERVER.host,
  hot: true,
  open: true,
};

const optimizationConfig = {
  minimize: isProduction,
  minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  splitChunks: {
    chunks: "all",
  },
};

const webpackConfig = {
  mode: BUILD_CONFIG.mode,
  entry: PATHS.entry,
  output: {
    path: PATHS.build,
    filename: ASSET_PATHS.js,
    chunkFilename: ASSET_PATHS.jsChunk,
    assetModuleFilename: ASSET_PATHS.assets,
    clean: true,
  },
  resolve: RESOLVE_CONFIG,
  module: {
    rules: moduleRules,
  },
  plugins: [
    ...Object.values(basePlugins),
    ...(BUILD_CONFIG.isProduction
      ? Object.values(productionPlugins)
      : Object.values(developmentPlugins)),
  ],
  optimization: optimizationConfig,
  devServer: devServerConfig,
  devtool: BUILD_CONFIG.devtool,
};

export default webpackConfig;
