const fs = require('fs');
const path = require('path');
const colors = require('colors');

const componentsPath = path.join('src', 'components');
const componentsType = process.argv[2];

const showComponentsByType = (type) => {
    const components = fs.readdirSync(path.join(componentsPath, type), 'utf-8');
    if (!components.length) return;
    console.log(`[ ${colors.blue.bold(type)} ]`);
    console.log(` - ${components.join('\n - ')}\n`)
}

const showAllComponents = () => {
    fs.readdirSync(componentsPath, 'utf-8').forEach(showComponentsByType);
}

if (componentsType) {
    showComponentsByType(componentsType);
} else {
    showAllComponents()
}
