const fs = require('fs');
const path = require('path');
const colors = require('colors');

const args = process.argv;
const pageName = args[2];
const pageTitle = args[3];

const scssFlag = !!process.env.npm_config_scss;

const progressLog = (text) => console.log(`[ ${colors.blue.bold('PROGRESS')} ] ${text}`);
const pathFileExt = (path, ext) => `${path}.${ext}`;

try {
    if (!pageName) throw new Error('Введите название страницы');
    if (!pageTitle) throw new Error('Введите заголовок страницы');

    const pages = fs.readdirSync(path.join('src', 'pages'));
    if (pages.findIndex((component) => component === pageName) !== -1)
        throw new Error('Страница уже существует');

    const folderPath = path.join('src', 'pages', pageName);
    const filePath = path.join(folderPath, pageName);

    const viewsPathJs = path.join('src', 'app', 'js', 'views.ts');
    const viewsPathScss = path.join('src', 'app', 'scss', 'views.scss');

    // const importViewJs = `import ${pageName} from '../../pages/${pageName}/${pageName}';\nexport { ${pageName} };\n`;
    const importViewScss = `@import '../../pages/${pageName}/${pageName}';\n`;

    // let viewsJs = fs.readFileSync(viewsPathJs, { encoding: 'utf-8' });
    // viewsJs += importViewJs;

    // fs.writeFile(viewsPathJs, viewsJs, err => {
    //     if (err) throw new Error(err.message);
    //     progressLog('Создание импортов JS');

    if (scssFlag) {
        let viewsScss = fs.readFileSync(viewsPathScss, { encoding: 'utf-8' });
        viewsScss += importViewScss;

        fs.writeFileSync(viewsPathScss, viewsScss);
        progressLog('Создание импортов SCSS');
    }

    fs.mkdir(folderPath, {}, (err) => {
        if (err) throw new Error(err.message);
        progressLog('Директория успешно создана');

        if (scssFlag) {
            const scssPath = pathFileExt(filePath, 'scss');
            fs.writeFileSync(scssPath, `.${pageName} {\n    $root: &;\n}`);
            progressLog(`Генерация ${pageName}.scss`);
        }

        // const componentTemplate = fs.readFileSync(path.join('scripts', 'page', 'page.tstpl')).toString();

        // const tsPath = pathFileExt(filePath, 'ts');
        // fs.writeFile(tsPath, eval('`' + componentTemplate + '`'), err => {
        //     if (err) throw new Error(err.message);
        //     progressLog(`Генерация ${pageName}.ts`);

        const pugPath = pathFileExt(filePath, 'pug');
        fs.writeFile(
            pugPath,
            `extends ../../app/pug/layout\n\nblock title\n    | ${pageTitle}\n\nblock content\n    div(data-barba="container" data-barba-namespace="common" data-page-namespace="${pageName}").content-wrapper\n        h1 ${pageName}\n\n        +footer`,
            (err) => {
                if (err) throw new Error(err.message);
                progressLog(`Генерация ${pageName}.pug`);

                console.log(`[ ${colors.green.bold('SUCCESS')} ] Страница ${pageName} создана`);
            }
        );
        // });
    });
    // });
} catch (e) {
    console.log(`[ ${colors.red.bold('ERROR')} ] ${e.message}`);
} finally {
}
