const fs = require('fs');
const path = require('path');
const colors = require('colors');

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.fromKebabToCamel = function () {
    return this.replace(/-([a-z0-9])/g, function (g) {
        return g[1].toUpperCase();
    });
};

const args = process.argv;
const componentName = args[2];
const componentType = args[3];

const availableComponentTypes = fs.readdirSync(path.join('src', 'components'));

const pathFileExt = (path, ext) => `${path}.${ext}`;

try {
    if (!componentName) {
        throw new Error('Введите название компонента')
    }
    if (!componentType || !availableComponentTypes.includes(componentType)) {
        throw new Error(`Введите один из существующих типов компонентов: [${availableComponentTypes.join(', ')}]`);
    }

    const components = fs.readdirSync(path.join('src', 'components', componentType));
    if (components.findIndex((component) => component === componentName) !== -1)
        throw new Error('Компонент уже существует');

    const componentClassName = componentName.fromKebabToCamel().capitalize();
    const folderPath = path.join('src', 'components', componentType, componentName);
    const filePath = path.join(folderPath, componentName);

    const componentsPathScss = path.join('src', 'app', 'scss', 'components.scss');
    const importViewScss = `@import '../../components/${componentType}/${componentName}/${componentName}';\n`;

    let componentsScss = fs.readFileSync(componentsPathScss, 'utf-8');
    componentsScss += importViewScss;

    const componentsPathPug = path.join('src', 'app', 'pug', 'components.pug');
    const importComponentPug = `include ../../components/${componentType}/${componentName}/${componentName}\n`;

    let componentsPug = fs.readFileSync(componentsPathPug, 'utf-8');
    componentsPug += importComponentPug;

    fs.writeFileSync(componentsPathScss, componentsScss);
    fs.writeFileSync(componentsPathPug, componentsPug);
    fs.mkdirSync(folderPath);

    const componentTemplate = fs
        .readFileSync(path.join('scripts', 'component', 'component.tstpl'))
        .toString();

    const tsPath = pathFileExt(filePath, 'ts');
    fs.writeFileSync(tsPath, eval('`' + componentTemplate + '`'));

    const pugPath = pathFileExt(filePath, 'pug');
    fs.writeFileSync(
        pugPath,
        `mixin ${componentName}(props)\n    .${componentName}&attributes(attributes)\n`
    );

    const scssPath = pathFileExt(filePath, 'scss');
    fs.writeFileSync(scssPath, `.${componentName} {\n    $root: &;\n}`);

    console.log(`[ ${colors.green.bold('SUCCESS')} ] Компонент ${componentType}/${componentName} создан`);
} catch (e) {
    console.log(`[ ${colors.red.bold('ERROR')} ] ${e.message}`);
}
