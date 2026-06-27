const fs = require('fs');
const content = fs.readFileSync('src/routes/index.tsx', 'utf8');

// We know Logo is from line 348, Nav ends at 513
const lines = content.split('\n');
const logoAndNav = lines.slice(347, 514).join('\n');
const footer = lines.slice(1936, 2110).join('\n');

const navCode = 'import { useState, useEffect } from "react";\nimport { useTranslation } from "../i18n/I18nContext";\nimport logoDiset from "@/assets/logo-diset.webp";\nconst PHONE_HREF = "tel:+34936556161";\n' + logoAndNav.replace(/href: "#/g, 'href: "/#').replace(/href="#/g, 'href="/#').replace('function Nav', 'export function Nav');

fs.writeFileSync('src/components/Nav.tsx', navCode);

const footerCode = 'import { useTranslation } from "../i18n/I18nContext";\nimport logoDiset from "@/assets/logo-diset.webp";\n' + footer.replace('function Footer', 'export function Footer');
fs.writeFileSync('src/components/Footer.tsx', footerCode);

// now remove them from index.tsx and fix the default export
const newIndexLines = [...lines.slice(0, 347), ...lines.slice(514, 1936), ...lines.slice(2110)];
// Also remove Nav and Footer from Index component
const newContent = newIndexLines.join('\n').replace('<Nav />', '').replace('{/* Footer */}', '').replace('<Footer />', '');
fs.writeFileSync('src/routes/index.tsx', newContent);
