const fs = require('fs');
let content = fs.readFileSync('src/styles.css');
let str = content.toString('utf8');
let badIndex = str.indexOf('\x00');
if (badIndex > -1) {
  str = str.substring(0, badIndex);
  str = str.replace(/`+$/, '').trim();
}
str += '\n\n.reveal {\n  opacity: 0;\n  transform: translateY(50px);\n  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.reveal.is-visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n';
fs.writeFileSync('src/styles.css', str, 'utf8');
