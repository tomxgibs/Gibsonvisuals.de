import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    if (file.endsWith('.tsx')) {
        // Remove dark: classes
        content = content.replace(/\s?dark:[a-zA-Z0-9-\[\]#\/]+/g, '');
    } else if (file.endsWith('globals.css')) {
        // Remove dark entries
        content = content.replace(/\n\.dark\s*\{[^}]+\}/g, '');
        content = content.replace(/\s*--color-background-dark:[^;]+;/g, '');
    }

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Removed dark mode from all files.');
