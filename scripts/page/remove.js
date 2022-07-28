const fs = require('fs');
const path = require('path');
const colors = require('colors');
const rimraf = require('rimraf');

const args = process.argv;
const pageName = args[2];

const progressLog = (text) => console.log(`[ ${colors.blue.bold('PROGRESS')} ] ${text}`);

try {
    if (!pageName) throw new Error('Введите название страницы');

    const pages = fs.readdirSync(path.join('src', 'pages'));
    if (pages.findIndex((component) => component === pageName) === -1)
        throw new Error('Страница уже существует');

    const folderPath = path.join('src', 'pages', pageName);

    // const viewsPathJs = path.join('src', 'app', 'js', 'views.ts');
    const viewsPathScss = path.join('src', 'app', 'scss', 'views.scss');

    // const importViewJs = `import ${pageName} from '../../pages/${pageName}/${pageName}';\nexport { ${pageName} };\n`;
    const importViewScss = `@import '../../pages/${pageName}/${pageName}';\n`;

    // const viewsJs = fs.readFileSync(viewsPathJs, { encoding: 'utf-8' });

    // fs.writeFile(viewsPathJs, viewsJs.replace(importViewJs, ''), err => {
    //     if (err) throw new Error(err.message);
    //     progressLog('Удаление импортов JS');

    const viewsScss = fs.readFileSync(viewsPathScss, { encoding: 'utf-8' });

    if (viewsScss.indexOf(importViewScss) !== -1) {
        fs.writeFileSync(viewsPathScss, viewsScss.replace(importViewScss, ''));
        progressLog('Удаление импортов SCSS');
    }

    rimraf(folderPath, (err) => {
        if (err) throw new Error(err.message);
        console.log(`[ ${colors.green.bold('SUCCESS')} ] Страница ${pageName} удалена`);
    });
    // });
} catch (e) {
    console.log(`[ ${colors.red.bold('ERROR')} ] ${e.message}`);
} finally {
}
