const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/routes/index.tsx');
let content = fs.readFileSync(file, 'utf-8');

const replacements = [
  // Process
  ["{t('process.badge') || 'Metodologa'}", "{t('process.badge')}"],
  ["{t('process.badge') || 'Metodología'}", "{t('process.badge')}"],
  ['Nuestro proceso de <span className="font-bold">trabajo</span>', "{t('process.title')}"],

  // BeforeAfter
  ['<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">Antes / Después</span>', '<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">{t(\'beforeAfter.badge\')}</span>'],
  ['Resultados que se <span className="font-bold">ven</span>.', '{t(\'beforeAfter.title.1\')} <br/><span className="font-bold">{t(\'beforeAfter.title.2\')}</span>'],
  ['Deslice el control para comparar el estado de la superficie antes y después de nuestra intervención técnica en diferentes entornos corporativos.', "{t('beforeAfter.desc')}"],

  // SuccessCases
  ['<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60">Casos reales</span>', '<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60">{t(\'cases.badge\')}</span>'],
  ['Proyectos ejecutados con <br className="hidden md:block"/><span className="font-bold">precisión</span>.', "{t('cases.title.1')} <br className=\"hidden md:block\"/><span className=\"font-bold\">{t('cases.title.2')}</span>"],

  // Benefits
  ['<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60">Garantía Corporativa</span>', '<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60">{t(\'benefits.badge\')}</span>'],
  ['La referencia técnica en <br className="hidden md:block"/><span className="font-bold">trabajos verticales</span>.', "{t('benefits.title.1')} <br className=\"hidden md:block\"/><span className=\"font-bold\">{t('benefits.title.2')}</span>"],
  ['Los equipos y protocolos utilizados en nuestras intervenciones son de máxima seguridad, garantizando resultados impecables en todos nuestros proyectos, sin alterar la actividad de sus instalaciones.', "{t('benefits.desc')}"],

  ['<h3 className="text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors">Ahorro Económico</h3>', '<h3 className="text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors">{t(\'benefits.1.title\')}</h3>'],
  ['<p className="text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light">Evite el enorme coste de alquiler y montaje de andamios y grúas.</p>', '<p className="text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light">{t(\'benefits.1.desc\')}</p>'],

  ['<h3 className="text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors">Cero Molestias</h3>', '<h3 className="text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors">{t(\'benefits.2.title\')}</h3>'],
  ['<p className="text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light">Acceso directo sin bloquear las entradas ni interrumpir su negocio.</p>', '<p className="text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light">{t(\'benefits.2.desc\')}</p>'],

  ['<h3 className="text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors">Agilidad y Velocidad</h3>', '<h3 className="text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors">{t(\'benefits.3.title\')}</h3>'],
  ['<p className="text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light">Despliegue e inicio de los trabajos en horas, no en días.</p>', '<p className="text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light">{t(\'benefits.3.desc\')}</p>'],

  ['<h3 className="text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors">Máxima Seguridad</h3>', '<h3 className="text-[32px] md:text-[40px] font-bold text-navy tracking-tight leading-none mb-4 group-hover:text-electric transition-colors">{t(\'benefits.4.title\')}</h3>'],
  ['<p className="text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light">Técnicos homologados por IRATA con prevención de riesgos estricta.</p>', '<p className="text-ink/60 text-[16px] md:text-[18px] leading-relaxed font-light">{t(\'benefits.4.desc\')}</p>'],

  // Certifications
  ['<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60">{t(\'certs.badge\')}</span>', '<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink/60">{t(\'certs.badge\')}</span>'],
  ['Cumplimiento normativo y <span className="font-bold">seguridad integral</span>.', '{t(\'certs.title1\')} <span className="font-bold">{t(\'certs.title2\')}</span>'],

  // Sectors
  ['<h2 className="text-[28px] md:text-[36px] font-light leading-tight text-navy tracking-tight">Especialistas por sector corporativo</h2>', '<h2 className="text-[28px] md:text-[36px] font-light leading-tight text-navy tracking-tight">{t(\'nav.coverage\') /* reusing something close or need new key */}</h2>'],
  // Wait, sectors text wasn't mapped at all in index_old.tsx?
  // Let me replace with t('sectors...')
  ['Comunidades de propietarios', '{t(\'sectors.1.title\')}'],
  ['Mantenimiento y limpiezas en altura de patios de luces, medianeras y fachadas en edificios de comunidades de vecinos, evitando costosos andamiajes.', '{t(\'sectors.1.desc\')}'],
  ['Hoteles y Hostales', '{t(\'sectors.2.title\')}'],
  ['La imagen exterior es vital. Realizamos limpiezas integrales de muros cortina, cristales y fachadas en hoteles sin interrumpir su actividad diaria comercial.', '{t(\'sectors.2.desc\')}'],
  ['Naves y centros logísticos', '{t(\'sectors.3.title\')}'],
  ['Limpieza especializada de cubiertas, claraboyas y estructuras industriales complejas. Aplicamos tratamientos específicos y sistemas anticaídas certificados.', '{t(\'sectors.3.desc\')}'],
  ['Saber más<svg', '{t(\'sectors.btn\')}<svg'],

  // TrustBar
  ['Técnicos certificados IRATA', 'Técnicos certificados IRATA'], // Left hardcoded for now or use t if we have a key
];

replacements.forEach(([oldStr, newStr]) => {
  content = content.replace(oldStr, newStr);
});

fs.writeFileSync(file, content);
console.log('Fixed translations');
