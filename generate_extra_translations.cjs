const fs = require('fs');

const es = `
    // Extra Content: Features & FAQ
    'service.features.title': 'Nuestro Método',
    'service.faq.title': 'Preguntas Frecuentes',

    // Cristales
    'services.cristales.faq1.q': '¿Cada cuánto limpiar cristales de empresa?',
    'services.cristales.faq1.a': 'Depende de la ubicación y la imagen deseada. En zonas urbanas o industriales recomendamos limpiezas trimestrales o semestrales para evitar acumulación de cal y contaminación.',
    'services.cristales.faq2.q': '¿Qué es el agua osmotizada?',
    'services.cristales.faq2.a': 'Es agua purificada y libre de minerales. Al secarse, no deja cercos, marcas ni manchas de cal, asegurando un acabado perfecto sin usar químicos agresivos.',
    'services.cristales.faq3.q': '¿Trabajáis en edificios en uso?',
    'services.cristales.faq3.a': 'Sí, nuestro sistema de cuerdas es silencioso y poco invasivo. Podemos realizar la limpieza sin interrumpir la actividad normal de sus trabajadores o clientes.',
    'services.cristales.faq4.q': '¿Tenéis seguro de responsabilidad civil?',
    'services.cristales.faq4.a': 'Por supuesto, contamos con un seguro de RC integral y todo nuestro personal dispone de las certificaciones IRATA correspondientes y revisiones médicas al día.',

    'services.cristales.feat1.title': 'Inspección',
    'services.cristales.feat1.desc': 'Evaluamos los anclajes y la superficie de cristal para planificar el descenso.',
    'services.cristales.feat2.title': 'Agua Osmotizada',
    'services.cristales.feat2.desc': 'Aplicamos agua pura mediante pértigas y sistemas de lavado avanzados.',
    'services.cristales.feat3.title': 'Revisión final',
    'services.cristales.feat3.desc': 'Comprobamos la ausencia total de gotas o cercos antes de dar el servicio por concluido.',

    // Fachadas
    'services.fachadas.faq1.q': '¿Qué tipos de fachada limpiáis?',
    'services.fachadas.faq1.a': 'Trabajamos sobre fachadas acristaladas, de piedra natural, ladrillo caravista, hormigón y paneles metálicos (Alucobond). Adaptamos la técnica al material.',
    'services.fachadas.faq2.q': '¿Eliminan grafitis?',
    'services.fachadas.faq2.a': 'Sí, disponemos de productos y maquinaria especializada para disolver la pintura del grafiti de forma segura y sin dañar la superficie porosa original.',
    'services.fachadas.faq3.q': '¿Afecta a los vecinos?',
    'services.fachadas.faq3.a': 'Nuestros métodos verticales minimizan las molestias. No ocupamos la acera con andamios y las zonas de paso quedan delimitadas por seguridad durante la jornada.',
    'services.fachadas.faq4.q': '¿Cuánto dura el tratamiento?',
    'services.fachadas.faq4.a': 'Dependiendo del tratamiento protector (como antigrafitis o hidrófugos), la fachada puede repeler agua y suciedad entre 3 y 5 años.',

    'services.fachadas.feat1.title': 'Limpieza a presión',
    'services.fachadas.feat1.desc': 'Desincrustación de contaminación y humos con agua a presión controlada.',
    'services.fachadas.feat2.title': 'Reparación de grietas',
    'services.fachadas.feat2.desc': 'Sellado de fisuras y reparación de desconchones para evitar filtraciones.',
    'services.fachadas.feat3.title': 'Protección hidrófuga',
    'services.fachadas.feat3.desc': 'Aplicación de productos repelentes al agua para prolongar el efecto de limpieza.',

    // Placas
    'services.placas.faq1.q': '¿Cada cuánto limpiar placas solares?',
    'services.placas.faq1.a': 'Generalmente una o dos veces al año. En zonas industriales o agrícolas (polvo, polen), puede ser necesaria una frecuencia mayor para no perder rendimiento.',
    'services.placas.faq2.q': '¿Qué productos usan?',
    'services.placas.faq2.a': 'Utilizamos agua osmotizada y cepillos ultrasuaves específicos para fotovoltaica. Evitamos jabones que dejen películas que reduzcan la absorción solar.',
    'services.placas.faq3.q': '¿Baja el rendimiento con suciedad?',
    'services.placas.faq3.a': 'Sí, la acumulación de polvo, arena o excrementos de ave puede reducir la eficiencia de los paneles hasta un 30% en casos extremos.',
    'services.placas.faq4.q': '¿Trabajáis en cubiertas industriales?',
    'services.placas.faq4.a': 'Especialmente. Nuestros operarios verticales instalan líneas de vida temporales si es necesario para asegurar la limpieza de naves completas sin riesgos.',

    'services.placas.feat1.title': 'Acceso seguro',
    'services.placas.feat1.desc': 'Establecemos puntos de anclaje antes de acceder a la cubierta inclinada.',
    'services.placas.feat2.title': 'Lavado suave',
    'services.placas.feat2.desc': 'Fricción con cepillos especiales que no arañan el cristal protector.',
    'services.placas.feat3.title': 'Aclarado sin cal',
    'services.placas.feat3.desc': 'El agua pura se evapora rápidamente dejando el cristal 100% traslúcido.',

    // Lineas
    'services.lineas.faq1.q': '¿Qué es una línea de vida?',
    'services.lineas.faq1.a': 'Es un sistema anticaídas certificado formado por un cable de acero o raíl anclado a la estructura, al que los operarios se enganchan con sus EPIs para trabajar seguros.',
    'services.lineas.faq2.q': '¿Cada cuánto revisar?',
    'services.lineas.faq2.a': 'Por normativa, todas las líneas de vida y puntos de anclaje (EN 795) deben someterse a una revisión técnica anual obligatoria.',
    'services.lineas.faq3.q': '¿Es obligatorio por ley?',
    'services.lineas.faq3.a': 'Sí, la Ley de Prevención de Riesgos Laborales obliga a la propiedad del edificio a garantizar el acceso seguro para tareas de mantenimiento en la cubierta.',
    'services.lineas.faq4.q': '¿Instaláis en cualquier cubierta?',
    'services.lineas.faq4.a': 'Sí, instalamos sobre chapa simple, panel sándwich, hormigón y cubiertas de teja, adaptando los postes y placas de fijación a la estructura existente.',

    'services.lineas.feat1.title': 'Estudio previo',
    'services.lineas.feat1.desc': 'Analizamos la cubierta y diseñamos el recorrido más seguro.',
    'services.lineas.feat2.title': 'Fijación estructural',
    'services.lineas.feat2.desc': 'Anclamos los postes a los elementos portantes garantizando la máxima carga.',
    'services.lineas.feat3.title': 'Certificación',
    'services.lineas.feat3.desc': 'Entregamos el dossier técnico completo con la homologación EN 795.',
`;

const ca = `
    // Extra Content: Features & FAQ
    'service.features.title': 'El nostre Mètode',
    'service.faq.title': 'Preguntes Freqüents',

    // Cristales
    'services.cristales.faq1.q': 'Cada quant netejar vidres d\\'empresa?',
    'services.cristales.faq1.a': 'Depèn de la ubicació i la imatge desitjada. En zones urbanes o industrials recomanem neteges trimestrals o semestrals per evitar acumulació de calç i contaminació.',
    'services.cristales.faq2.q': 'Què és l\\'aigua osmotitzada?',
    'services.cristales.faq2.a': 'És aigua purificada i lliure de minerals. En assecar-se, no deixa cèrcols, marques ni taques de calç, assegurant un acabat perfecte sense utilitzar químics agressius.',
    'services.cristales.faq3.q': 'Treballeu en edificis en ús?',
    'services.cristales.faq3.a': 'Sí, el nostre sistema de cordes és silenciós i poc invasiu. Podem fer la neteja sense interrompre l\\'activitat normal dels seus treballadors o clients.',
    'services.cristales.faq4.q': 'Teniu assegurança de responsabilitat civil?',
    'services.cristales.faq4.a': 'I tant, comptem amb una assegurança d\\'RC integral i tot el nostre personal disposa de les certificacions IRATA corresponents i revisions mèdiques al dia.',

    'services.cristales.feat1.title': 'Inspecció',
    'services.cristales.feat1.desc': 'Avaluem els ancoratges i la superfície de vidre per planificar el descens.',
    'services.cristales.feat2.title': 'Aigua Osmotitzada',
    'services.cristales.feat2.desc': 'Apliquem aigua pura mitjançant perxes i sistemes de rentat avançats.',
    'services.cristales.feat3.title': 'Revisió final',
    'services.cristales.feat3.desc': 'Comprovem l\\'absència total de gotes o cèrcols abans de donar el servei per conclòs.',

    // Fachadas
    'services.fachadas.faq1.q': 'Quins tipus de façana netegeu?',
    'services.fachadas.faq1.a': 'Treballem sobre façanes de vidre, de pedra natural, maó caravista, formigó i panells metàl·lics (Alucobond). Adaptem la tècnica al material.',
    'services.fachadas.faq2.q': 'Eliminen grafitis?',
    'services.fachadas.faq2.a': 'Sí, disposem de productes i maquinària especialitzada per dissoldre la pintura del grafiti de forma segura i sense danyar la superfície porosa original.',
    'services.fachadas.faq3.q': 'Afecta als veïns?',
    'services.fachadas.faq3.a': 'Els nostres mètodes verticals minimitzen les molèsties. No ocupem la vorera amb bastides i les zones de pas queden delimitades per seguretat durant la jornada.',
    'services.fachadas.faq4.q': 'Quant dura el tractament?',
    'services.fachadas.faq4.a': 'Depenent del tractament protector (com antigrafitis o hidròfugs), la façana pot repel·lir aigua i brutícia entre 3 i 5 anys.',

    'services.fachadas.feat1.title': 'Neteja a pressió',
    'services.fachadas.feat1.desc': 'Desincrustació de contaminació i fums amb aigua a pressió controlada.',
    'services.fachadas.feat2.title': 'Reparació d\\'esquerdes',
    'services.fachadas.feat2.desc': 'Segellat de fissures i reparació de descorxaments per evitar filtracions.',
    'services.fachadas.feat3.title': 'Protecció hidròfuga',
    'services.fachadas.feat3.desc': 'Aplicació de productes repel·lents a l\\'aigua per perllongar l\\'efecte de neteja.',

    // Placas
    'services.placas.faq1.q': 'Cada quant netejar plaques solars?',
    'services.placas.faq1.a': 'Generalment una o dues vegades a l\\'any. En zones industrials o agrícoles (pols, pol·len), pot ser necessària una freqüència més gran per no perdre rendiment.',
    'services.placas.faq2.q': 'Quins productes fan servir?',
    'services.placas.faq2.a': 'Utilitzem aigua osmotitzada i raspalls ultrasuaus específics per fotovoltaica. Evitem sabons que deixin pel·lícules que redueixin l\\'absorció solar.',
    'services.placas.faq3.q': 'Baixa el rendiment amb brutícia?',
    'services.placas.faq3.a': 'Sí, l\\'acumulació de pols, sorra o excrements d\\'au pot reduir l\\'eficiència dels panells fins a un 30% en casos extrems.',
    'services.placas.faq4.q': 'Treballeu en cobertes industrials?',
    'services.placas.faq4.a': 'Especialment. Els nostres operaris verticals instal·len línies de vida temporals si és necessari per assegurar la neteja de naus completes sense riscos.',

    'services.placas.feat1.title': 'Accés segur',
    'services.placas.feat1.desc': 'Establim punts d\\'ancoratge abans d\\'accedir a la coberta inclinada.',
    'services.placas.feat2.title': 'Rentat suau',
    'services.placas.feat2.desc': 'Fricció amb raspalls especials que no ratllen el vidre protector.',
    'services.placas.feat3.title': 'Esbandit sense calç',
    'services.placas.feat3.desc': 'L\\'aigua pura s\\'evapora ràpidament deixant el vidre 100% translúcid.',

    // Lineas
    'services.lineas.faq1.q': 'Què és una línia de vida?',
    'services.lineas.faq1.a': 'És un sistema anticaigudes certificat format per un cable d\\'acer o carril ancorat a l\\'estructura, al qual els operaris s\\'enganxen amb els seus EPIs per treballar segurs.',
    'services.lineas.faq2.q': 'Cada quant revisar?',
    'services.lineas.faq2.a': 'Per normativa, totes les línies de vida i punts d\\'ancoratge (EN 795) s\\'han de sotmetre a una revisió tècnica anual obligatòria.',
    'services.lineas.faq3.q': 'És obligatori per llei?',
    'services.lineas.faq3.a': 'Sí, la Llei de Prevenció de Riscos Laborals obliga a la propietat de l\\'edifici a garantir l\\'accés segur per a tasques de manteniment a la coberta.',
    'services.lineas.faq4.q': 'Instal·leu en qualsevol coberta?',
    'services.lineas.faq4.a': 'Sí, instal·lem sobre xapa simple, panell sandvitx, formigó i cobertes de teula, adaptant els pals i plaques de fixació a l\\'estructura existent.',

    'services.lineas.feat1.title': 'Estudi previ',
    'services.lineas.feat1.desc': 'Analitzem la coberta i dissenyem el recorregut més segur.',
    'services.lineas.feat2.title': 'Fixació estructural',
    'services.lineas.feat2.desc': 'Ancorem els pals als elements portants garantint la màxima càrrega.',
    'services.lineas.feat3.title': 'Certificació',
    'services.lineas.feat3.desc': 'Lliurem el dossier tècnic complet amb l\\'homologació EN 795.',
`;

const en = `
    // Extra Content: Features & FAQ
    'service.features.title': 'Our Method',
    'service.faq.title': 'Frequently Asked Questions',

    // Cristales
    'services.cristales.faq1.q': 'How often should company windows be cleaned?',
    'services.cristales.faq1.a': 'It depends on the location and desired image. In urban or industrial areas, we recommend quarterly or biannual cleaning to prevent limescale and pollution buildup.',
    'services.cristales.faq2.q': 'What is pure water?',
    'services.cristales.faq2.a': 'It is purified water free of minerals. When it dries, it leaves no streaks, marks or limescale spots, ensuring a perfect finish without using harsh chemicals.',
    'services.cristales.faq3.q': 'Do you work in occupied buildings?',
    'services.cristales.faq3.a': 'Yes, our rope access system is silent and non-invasive. We can perform the cleaning without interrupting the normal activity of your workers or clients.',
    'services.cristales.faq4.q': 'Do you have civil liability insurance?',
    'services.cristales.faq4.a': 'Of course, we have comprehensive liability insurance and all our staff have the corresponding IRATA certifications and up-to-date medical check-ups.',

    'services.cristales.feat1.title': 'Inspection',
    'services.cristales.feat1.desc': 'We evaluate the anchor points and the glass surface to plan the descent.',
    'services.cristales.feat2.title': 'Pure Water',
    'services.cristales.feat2.desc': 'We apply pure water using poles and advanced washing systems.',
    'services.cristales.feat3.title': 'Final Review',
    'services.cristales.feat3.desc': 'We check for the total absence of drops or streaks before considering the service concluded.',

    // Fachadas
    'services.fachadas.faq1.q': 'What types of facades do you clean?',
    'services.fachadas.faq1.a': 'We work on glass facades, natural stone, exposed brick, concrete, and metal panels (Alucobond). We adapt the technique to the material.',
    'services.fachadas.faq2.q': 'Do you remove graffiti?',
    'services.fachadas.faq2.a': 'Yes, we have specialized products and machinery to dissolve graffiti paint safely and without damaging the original porous surface.',
    'services.fachadas.faq3.q': 'Does it affect neighbors?',
    'services.fachadas.faq3.a': 'Our vertical methods minimize inconvenience. We do not occupy the sidewalk with scaffolding, and transit areas are delimited for safety during the day.',
    'services.fachadas.faq4.q': 'How long does the treatment last?',
    'services.fachadas.faq4.a': 'Depending on the protective treatment (such as anti-graffiti or water repellents), the facade can repel water and dirt for 3 to 5 years.',

    'services.fachadas.feat1.title': 'Pressure Washing',
    'services.fachadas.feat1.desc': 'Descaling of pollution and fumes with controlled high-pressure water.',
    'services.fachadas.feat2.title': 'Crack Repair',
    'services.fachadas.feat2.desc': 'Sealing of cracks and repair of spalling to prevent leaks.',
    'services.fachadas.feat3.title': 'Water Repellent Protection',
    'services.fachadas.feat3.desc': 'Application of water-repellent products to prolong the cleaning effect.',

    // Placas
    'services.placas.faq1.q': 'How often should solar panels be cleaned?',
    'services.placas.faq1.a': 'Generally once or twice a year. In industrial or agricultural areas (dust, pollen), a higher frequency may be necessary to not lose performance.',
    'services.placas.faq2.q': 'What products do you use?',
    'services.placas.faq2.a': 'We use pure water and ultra-soft brushes specifically for photovoltaics. We avoid soaps that leave films that reduce solar absorption.',
    'services.placas.faq3.q': 'Does performance drop with dirt?',
    'services.placas.faq3.a': 'Yes, the accumulation of dust, sand, or bird droppings can reduce panel efficiency by up to 30% in extreme cases.',
    'services.placas.faq4.q': 'Do you work on industrial roofs?',
    'services.placas.faq4.a': 'Especially. Our vertical operators install temporary lifelines if necessary to safely clean entire warehouses without risks.',

    'services.placas.feat1.title': 'Safe Access',
    'services.placas.feat1.desc': 'We establish anchor points before accessing the pitched roof.',
    'services.placas.feat2.title': 'Gentle Wash',
    'services.placas.feat2.desc': 'Friction with special brushes that do not scratch the protective glass.',
    'services.placas.feat3.title': 'Limescale-Free Rinse',
    'services.placas.feat3.desc': 'The pure water evaporates quickly, leaving the glass 100% translucent.',

    // Lineas
    'services.lineas.faq1.q': 'What is a lifeline?',
    'services.lineas.faq1.a': 'It is a certified fall arrest system consisting of a steel cable or rail anchored to the structure, to which operators attach themselves with their PPE to work safely.',
    'services.lineas.faq2.q': 'How often to inspect?',
    'services.lineas.faq2.a': 'By regulation, all lifelines and anchor points (EN 795) must undergo a mandatory annual technical inspection.',
    'services.lineas.faq3.q': 'Is it mandatory by law?',
    'services.lineas.faq3.a': 'Yes, the Occupational Risk Prevention Law obliges the building owner to guarantee safe access for maintenance tasks on the roof.',
    'services.lineas.faq4.q': 'Do you install on any roof?',
    'services.lineas.faq4.a': 'Yes, we install on simple sheet metal, sandwich panels, concrete, and tile roofs, adapting the posts and fixing plates to the existing structure.',

    'services.lineas.feat1.title': 'Preliminary Study',
    'services.lineas.feat1.desc': 'We analyze the roof and design the safest route.',
    'services.lineas.feat2.title': 'Structural Fixing',
    'services.lineas.feat2.desc': 'We anchor the posts to the load-bearing elements guaranteeing maximum load.',
    'services.lineas.feat3.title': 'Certification',
    'services.lineas.feat3.desc': 'We deliver the complete technical dossier with EN 795 homologation.',
`;

let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

content = content.replace(/  \},\n  ca: \{/, es + '  },\n  ca: {');
content = content.replace(/  \},\n  en: \{/, ca + '  },\n  en: {');
content = content.replace(/  \},\n\} as const;/, en + '  },\n} as const;');

fs.writeFileSync('src/i18n/translations.ts', content);
