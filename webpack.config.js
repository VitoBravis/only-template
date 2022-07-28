const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');
const colors = require('colors');

console.log(`[ ${colors.green.bold('START')} ] Сборка проекта\n`);

const viewsPath = path.join('src', 'pages');
const views = fs.readdirSync(viewsPath);

console.log(`[ ${colors.blue.bold('PAGES')} ]`);

const pages = views.map((view) => {
    console.log(`• http://localhost:3000/${view}.html`);
    return new HtmlWebpackPlugin({
        filename: `${view}.html`,
        template: `./src/pages/${view}/${view}.pug`,
    });
});

console.log('');

const dataPath = path.join('src', 'assets', 'data');
let dataJson = '';
try {
    dataJson = JSON.parse(fs.readdirSync(dataPath).reduce((prev, current, index) => {
        if (!~current.indexOf('.json')) {
            throw new Error('Неверное расширение файла');
        }

        const fileName = current.slice(0, current.indexOf('.json'));

        try {
            prev += `${index === 0 ? '' : ','}"${fileName}": ${fs.readFileSync(path.join(dataPath, current))}`;
            return prev;
        } catch (e) {
            console.log(`[ ${colors.red.bold('ERROR')} ] ${colors.bold(current)}: ${e.message}`);
        }
    }, '{') + '}');
} catch (e) {
    console.log(`[ ${colors.red.bold('ERROR')} ] ${e.message}`);
}

console.log('');

module.exports = (env) => {
    const dev = env ? env.WEBPACK_SERVE : false;
    return {
        entry: {
            common: './src/app/js/common.ts',
        },
        output: {
            filename: !!dev ? 'js/[name].js' : 'js/[name].[chunkhash].js',
            path: path.resolve(__dirname, 'build'),
            publicPath: !!dev ? '/' : './',
        },
        module: {
            rules: [
                {
                    test: /\.m?[jt]s$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'swc-loader',
                    },
                },
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                attributes: {
                                    list: [
                                        {
                                            tag: 'img',
                                            attribute: 'src',
                                            type: 'src',
                                        },
                                        {
                                            tag: 'video',
                                            attribute: 'src',
                                            type: 'src',
                                        },
                                        {
                                            tag: 'video',
                                            attribute: 'data-src',
                                            type: 'src',
                                        },
                                        {
                                            tag: 'picture',
                                            attribute: 'src',
                                            type: 'src',
                                        },
                                        {
                                            tag: 'source',
                                            attribute: 'srcset',
                                            type: 'src',
                                        },
                                        {
                                            tag: 'source',
                                            attribute: 'src',
                                            type: 'src',
                                        },
                                        {
                                            tag: 'link',
                                            attribute: 'href',
                                            type: 'src',
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            loader: 'pug-html-loader',
                            options: {
                                data: { dataJson },
                            },
                        },
                    ],
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: dev,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    config: path.resolve(__dirname, 'postcss.config.js'),
                                    sourceMap: dev,
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: dev,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[hash:8].[ext]',
                        },
                    },
                    include: [path.join(__dirname, 'src', 'assets', 'images')],
                },
                {
                    test: /\.(cur)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]',
                        },
                    },
                    include: [path.join(__dirname, 'src', 'assets', 'icons')],
                },
                {
                    test: /\.(svg|png)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/favicons/[name].[ext]',
                        },
                    },
                    include: [path.join(__dirname, 'src', 'assets', 'favicons')],
                },
                {
                    test: /\.(mp4|avi)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: dev
                                ? 'assets/videos/[name].[ext]'
                                : 'assets/videos/[name].[hash:8].[ext]',
                        },
                    },
                },
                {
                    test: /\.(woff2|woff|ttf|otf)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts',
                            publicPath: './../assets/fonts',
                        },
                    },
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                outputPath: 'assets/sprites',
                            },
                        },
                        'svg-transform-loader',
                    ],
                    include: [path.join(__dirname, 'src', 'assets', 'icons')],
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.pug'],
            alias: {
                "@/helpers": path.resolve(__dirname, 'src', 'app', 'js', 'helpers'),
                "@/base": path.resolve(__dirname, 'src', 'app', 'js', 'base'),
                "@/variables": path.resolve(__dirname, 'src', 'app', 'js', 'variables'),
                "@/types": path.resolve(__dirname, 'src', 'app', 'js', 'types'),
                "@/components": path.resolve(__dirname, 'src', 'components'),
                "@/pages": path.resolve(__dirname, 'src', 'pages')
            }
        },
        target: ['web', 'es5'],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 3000,
        },
        devtool: dev && 'source-map',
        plugins: [
            ...pages,
            new MiniCssExtractPlugin({
                filename: !!dev ? 'css/[name].css' : 'css/[name].[chunkhash].css',
                chunkFilename: 'css/[id].css',
            }),
            new SpriteLoaderPlugin({ plainSprite: true }),
            new CleanWebpackPlugin(),
            new CopyPlugin({
                patterns: [
                    {
                        from: 'dev',
                        noErrorOnMissing: true,
                    },
                ],
            }),
            // new BundleAnalyzerPlugin()
        ],
    };
};
