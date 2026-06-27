const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/routes/index.tsx');
let content = fs.readFileSync(file, 'utf-8');

const replacements = [
  // Inject useTranslation to Stats
  ['function Stats() {', 'function Stats() {\n  const { t } = useTranslation();'],
  ['Más de 300', '{t(\'stats.1\') || \'Más de 300\'}'],
  ['Más de 4.500', '{t(\'stats.2\') || \'Más de 4.500\'}'],
  ['Más de 25', '{t(\'stats.3\') || \'Más de 25\'}'],

  // Inject useTranslation to Sectors
  ['function Sectors() {', 'function Sectors() {\n  const { t } = useTranslation();'],
  ['Especialistas por sector corporativo', '{t(\'sectors.title\') || \'Especialistas por sector corporativo\'}'],
  ['Comunidades de propietarios', '{t(\'sectors.1.title\') || \'Comunidades de propietarios\'}'],
  ['Mantenimiento y limpiezas en altura de patios de luces, medianeras y fachadas en edificios de comunidades de vecinos, evitando costosos andamiajes.', '{t(\'sectors.1.desc\') || \'Mantenimiento y limpiezas en altura...\'}'],
  ['Hoteles y Hostales', '{t(\'sectors.2.title\') || \'Hoteles y Hostales\'}'],
  ['La imagen exterior es vital. Realizamos limpiezas integrales de muros cortina, cristales y fachadas en hoteles sin interrumpir su actividad diaria comercial.', '{t(\'sectors.2.desc\') || \'La imagen exterior es vital...\'}'],
  ['Naves y centros logísticos', '{t(\'sectors.3.title\') || \'Naves y centros logísticos\'}'],
  ['Limpieza especializada de cubiertas, claraboyas y estructuras industriales complejas. Aplicamos tratamientos específicos y sistemas anticaídas certificados.', '{t(\'sectors.3.desc\') || \'Limpieza especializada de cubiertas...\'}'],

  // Inject useTranslation to BeforeAfterSection
  ['function BeforeAfterSection() {', 'function BeforeAfterSection() {\n  const { t } = useTranslation();'],
  ['Antes / Después', '{t(\'beforeafter.badge\') || \'Antes / Después\'}'],
  ['Resultados que marcan la diferencia.', '{t(\'beforeafter.title\') || \'Resultados que marcan la diferencia.\'}'],
  ['Deslice el control para comparar el estado de la superficie antes y después de nuestra intervención técnica.', '{t(\'beforeafter.desc\') || \'Deslice el control para comparar...\'}'],

  // Inject useTranslation to SuccessCases
  ['function SuccessCases() {', 'function SuccessCases() {\n  const { t } = useTranslation();'],
  ['Casos reales', '{t(\'cases.badge\') || \'Casos reales\'}'],
  ['Proyectos ejecutados con precisión técnica.', '{t(\'cases.title\') || \'Proyectos ejecutados con precisión técnica.\'}'],

  // Inject useTranslation to CinematicShowcase
  ['function CinematicShowcase() {', 'function CinematicShowcase() {\n  const { t } = useTranslation();'],
  ['Cuidamos', '{t(\'cinematic.badge\')}'],
  ['Precisión sin límites.', '{t(\'cinematic.title\')}'],
  ['Nuestros técnicos especializados combinen técnica y seguridad para devolverle el brillo a su edificio. Sin andamios, sin complicaciones.', '{t(\'cinematic.desc\')}'],

  // Inject useTranslation to VibrantCTA
  ['function VibrantCTA() {', 'function VibrantCTA() {\n  const { t } = useTranslation();'],
  ['Tu seguridad en altura es nuestra prioridad. Soluciones sin límites.', '{t(\'vibrant.title\') || \'Tu seguridad en altura es nuestra prioridad. Soluciones sin límites.\'}'],
  ['Contamos con más de 25 años de experiencia en el sector del mantenimiento y la limpieza vertical de alta complejidad en Cataluña.', '{t(\'vibrant.desc\') || \'Contamos con más de 25 años de experiencia...\'}'],
  ['Pide tu propuesta técnica', '{t(\'vibrant.btn\') || \'Pide tu propuesta técnica\'}'],

  // Inject useTranslation to VideoSection
  ['function VideoSection() {', 'function VideoSection() {\n  const { t } = useTranslation();'],
  ['DISET en acción', '{t(\'video.badge\') || \'DISET en acción\'}'],
  ['Resolviendo trabajos donde otros no llegan.', '{t(\'video.title\') || \'Resolviendo trabajos donde otros no llegan.\'}'],

  // Inject useTranslation to Process
  ['function Process() {', 'function Process() {\n  const { t } = useTranslation();'],
  ['Metodología', '{t(\'process.badge\') || \'Metodología\'}'],
  ['Nuestro proceso de trabajo', '{t(\'process.title\') || \'Nuestro proceso de trabajo\'}'],

  // Inject useTranslation to Testimonials
  ['function Testimonials() {', 'function Testimonials() {\n  const { t } = useTranslation();'],
  ['Lo que dicen nuestros clientes', '{t(\'testimonials.title\') || \'Lo que dicen nuestros clientes\'}'],

  // Inject useTranslation to Coverage
  ['function Coverage() {', 'function Coverage() {\n  const { t } = useTranslation();'],
  ['Nuestra área de cobertura', '{t(\'coverage.title\') || \'Nuestra área de cobertura\'}'],
  ['Servicio integral en Barcelona y toda Cataluña.', '{t(\'coverage.desc\') || \'Servicio integral en Barcelona y toda Cataluña.\'}'],

  // Inject useTranslation to CTA
  ['function CTA() {', 'function CTA() {\n  const { t } = useTranslation();'],
  ['¿Listo para empezar?', '{t(\'cta.title\') || \'¿Listo para empezar?\'}'],
  ['Hablemos de tu proyecto.', '{t(\'cta.subtitle\') || \'Hablemos de tu proyecto.\'}'],
];

replacements.forEach(([oldStr, newStr]) => {
  content = content.replace(oldStr, newStr);
});

fs.writeFileSync(file, content);
console.log('Injected useTranslation to all sections');
