const fs = require('fs');

function getFiles(dir, files_) {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else if (name.endsWith('.tsx') || name.endsWith('.ts')) {
      files_.push(name);
    }
  }
  return files_;
}

const allFiles = getFiles('src');

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const imgRegex = /<img(?![^>]*loading=)[^>]*>/g;
  
  const matches = content.match(imgRegex);
  if (matches) {
    matches.forEach(imgTag => {
        if (!imgTag.includes('loading=') && !imgTag.includes('fetchPriority=')) {
            const newImgTag = imgTag.replace('<img', '<img loading="lazy" decoding="async"');
            content = content.replace(imgTag, newImgTag);
            changed = true;
        }
    });
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated images in', file);
  }
});
console.log('Done image optimization');
