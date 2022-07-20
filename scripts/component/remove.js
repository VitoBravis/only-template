const fs = require('fs');
const path = require('path');
const colors = require('colors');
const rimraf = require('rimraf');

const args = process.argv;
const componentName = args[2];
const componentType = args[3];

const availableComponentTypes = fs.readdirSync(path.join('src', 'components'));

try {
    if (!componentName) throw new Error('Введите название компонента');

    if (!componentType || !availableComponentTypes.includes(componentType)) {
        throw new Error(`Введите один из существующих типов компонентов: [${availableComponentTypes.join(', ')}]`);
    }

    const components = fs.readdirSync(path.join('src', 'components', componentType));
    if (components.findIndex((component) => component === componentName) === -1)
        throw new Error('Компонент не существует');

    const folderPath = path.join('src', 'components', componentType, componentName);

    const componentsPathScss = path.join('src', 'app', 'scss', 'components.scss');
    const importViewScss = `@import '../../components/${componentType}/${componentName}/${componentName}';\n`;

    const componentsPathPug = path.join('src', 'app', 'pug', 'components.pug');
    const importComponentPug = `include ../../components/${componentType}/${componentName}/${componentName}\n`;

    const componentsScss = fs.readFileSync(componentsPathScss, 'utf-8');
    const componentsPug = fs.readFileSync(componentsPathPug, 'utf-8');

    fs.writeFileSync(componentsPathScss, componentsScss.replace(importViewScss, ''));
    fs.writeFileSync(componentsPathPug, componentsPug.replace(importComponentPug, ''));

    rimraf(folderPath, (err) => {
        if (err) throw new Error(err.message);
        console.log(`[ ${colors.green.bold('SUCCESS')} ] Компонент ${componentType}/${componentName} удален`);
    });
} catch (e) {
    console.log(`[ ${colors.red.bold('ERROR')} ] ${e.message}`);
} finally {
}
