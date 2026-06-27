const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/routes/index.tsx');
let content = fs.readFileSync(file, 'utf-8');

// 1. Get BeforeAfterSection from 6878415
const oldContent = execSync('git show 6878415:src/routes/index.tsx').toString();

function extractFunction(source, funcName) {
  const regex = new RegExp(`function ${funcName}\\s*\\([^)]*\\)\\s*\\{`);
  const match = source.match(regex);
  if (!match) return null;
  
  let braceCount = 0;
  let inString = false;
  let stringChar = '';
  let startIndex = match.index;
  let i = startIndex + match[0].length - 1;
  
  braceCount = 1;
  i++;
  
  while (i < source.length && braceCount > 0) {
      const char = source[i];
      if (inString) {
          if (char === stringChar && source[i-1] !== '\\') inString = false;
      } else {
          if (char === '"' || char === "'" || char === '\`') {
              inString = true;
              stringChar = char;
          } else if (char === '{') {
              braceCount++;
          } else if (char === '}') {
              braceCount--;
          }
      }
      i++;
  }
  
  if (braceCount === 0) {
      return source.substring(startIndex, i);
  }
  return null;
}

const oldBeforeAfter = extractFunction(oldContent, 'BeforeAfterSection');
const currentBeforeAfter = extractFunction(content, 'BeforeAfterSection');

if (oldBeforeAfter && currentBeforeAfter) {
    // Add translation hook and keys
    let newBeforeAfter = oldBeforeAfter.replace('function BeforeAfterSection() {', 'function BeforeAfterSection() {\n  const { t } = useTranslation();');
    
    // Replace texts
    newBeforeAfter = newBeforeAfter.replace(
        '<span className="text-xs font-bold tracking-[0.2em] uppercase text-electric">Antes / Después</span>',
        '<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60">{t(\'beforeAfter.badge\')}</span>'
    );
    newBeforeAfter = newBeforeAfter.replace(
        'Resultados que se<br />ven, a primera vista.',
        '{t(\'beforeAfter.title.1\')} <br/><span className="font-bold">{t(\'beforeAfter.title.2\')}</span>'
    );
    newBeforeAfter = newBeforeAfter.replace(
        'Deslice el control para comparar el estado de cada superficie antes y después de nuestra intervención.',
        '{t(\'beforeAfter.desc\')}'
    );

    // Map labels and descs
    newBeforeAfter = newBeforeAfter.replace(/\{c\.label\}/g, '{t(`beforeAfter.${i + 1}.label` as TranslationKey) || c.label}');
    newBeforeAfter = newBeforeAfter.replace(/\{c\.desc\}/g, '{t(`beforeAfter.${i + 1}.desc` as TranslationKey) || c.desc}');

    // Inject into content
    content = content.replace(currentBeforeAfter, newBeforeAfter);
    console.log('Replaced BeforeAfterSection');
}

// 2. Fix the Index structure
const indexFunction = `function Index() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Sectors />
        <Services />
        <BeforeAfterSection />
        <SuccessCases />
        <Benefits />
        <CinematicShowcase />
        <VibrantCTA />
        <VideoSection />
        <Process />
        <Testimonials />
        <Coverage />
        <Certifications />
        <CTA />
      </main>
      {/* Footer */}
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}`;

const currentIndexStr = extractFunction(content, 'Index');
if (currentIndexStr) {
    content = content.replace(currentIndexStr, indexFunction);
    console.log('Replaced Index');
}

fs.writeFileSync(file, content);
console.log('Done!');
