'use strict';
// Scope labels are separate from the unchanged subject matter and answers.
window.GK.scope=(()=>{
 const extraSteps={waldrand:[2],partnerwechsel:[1,2]};
 const extraQuestions={'original-konkurrenz':[3,4,5]};
 const core={
  oekosystem:'Biotop, Biozönose und Population unterscheiden; abiotische und biotische Faktoren zuordnen; Wechselwirkungen erklären.',
  toleranz:'Toleranzkurven lesen und beschreiben; Minimum, Maximum, Optimum, Präferendum und Pessima unterscheiden; Überleben, Wachstum und Fortpflanzung auseinanderhalten.',
  potenz:'Inner- und zwischenartliche Konkurrenz erklären; physiologische und ökologische Potenz unterscheiden; Wachstumsdaten und Artvorkommen deuten.',
  nische:'Lebensraum und ökologische Nische unterscheiden; Nischenüberlappung und Nischendifferenzierung anhand von Merkmalen erklären.',
  standort:'Standortdaten und Pflanzenprofile vergleichen; Nektar, Pollen, Blütezeiten und Pflege berücksichtigen; eine Maßnahme fachlich begründen.',
  symbiose:'Den Nutzen für beide Partner erklären und eine Beziehung als Symbiose begründen; Beobachtung und behaupteten Nutzen unterscheiden.',
  parasitismus:'Nutzen für den Parasiten und Schaden für den Wirt erklären; Parasitismus von Symbiose und Konkurrenz abgrenzen.'
 };
 const isExtraStep=(j,n)=>(extraSteps[typeof j==='string'?j:j.id]||[]).includes(Number(n));
 const isExtraQuestion=(m,n)=>(extraQuestions[typeof m==='string'?m:m.id]||[]).includes(Number(n));
 const isCoreCompetency=i=>i.id!=='methoden-vergleich';
 const stepCount=j=>j.steps.filter((_,n)=>!isExtraStep(j,n)).length;
 const questionCount=m=>m.questions.filter((_,n)=>!isExtraQuestion(m,n)).length;
 const extraText='Zusatz · für diese Klausurvorbereitung nicht vorausgesetzt';
 function note(title,text,extra=false){const el=document.createElement('aside');el.className='note scope-note'+(extra?' scope-extra':'');el.innerHTML='<strong>'+title+'</strong><p>'+text+'</p>';return el;}
 function badge(anchor,text,extra=false){if(anchor.querySelector('.scope-badge'))return;const el=document.createElement('span');el.className='scope-badge'+(extra?' scope-extra':'');el.textContent=text;anchor.append(el);}
 function routeExtra(href){const [kind,id,part]=href.replace(/^#/,'').split('/');return kind==='lernweg'&&isExtraStep(id,part)||kind==='thema'&&id==='symbiose'&&part==='2';}
 function folded(nodes,title){if(!nodes.length)return;const d=document.createElement('details');d.className='scope-fold';const summary=document.createElement('summary');summary.textContent=title;d.append(summary);nodes[0].before(d);nodes.forEach(node=>d.append(node));return d;}
 function decorate(main,route){
  const [r,id,part]=route.split('/');
  const h1=main.querySelector('h1');if(!h1)return;
  if(!r||['start','wissen','ueben','selbstkontrolle'].includes(r)){
   (main.querySelector('.hero')||h1).after(note('Orientierung für die Klausurvorbereitung',
    '<b>Unterrichtsgrundlage:</b> Die sieben behandelten Themen und ihre Fachbegriffe bilden die Grundlage. Nutze die Selbstkontrolle für die erwarteten Kompetenzen.<br><b>Transfer mit Material:</b> Wende dieses Wissen auf neue Beispiele an. Die nötigen Artenmerkmale, Versuchsdaten und besonderen Bedingungen werden mitgegeben; sie sind kein zusätzlich auswendig zu lernender Stoff.<br><b>Zusatz:</b> So gekennzeichnete Inhalte sind für diese Klausurvorbereitung nicht vorausgesetzt. Du kannst sie überspringen; sie zählen nicht zum Vorbereitungsfortschritt.'));
  }
  if((r==='thema'||r==='uebungen')&&core[id]){
   h1.after(note('Unterrichtsgrundlage · Das solltest du können',core[id]));
   if(r==='thema'){
    const nav=main.querySelector('.lesson-nav');
    (nav||main.querySelector('.intro')||h1).after(note('Beispiele und ergänzende Erklärungen',
     'Die Erklärbeispiele helfen dir, die oben genannten Zusammenhänge zu verstehen. Zusätzliche Artenmerkmale und Einzelheiten biologischer Abläufe musst du daraus nicht als weiteren Klausurstoff auswendig lernen. Ausdrücklich markierte Zusätze kannst du überspringen.'));
    if(id==='symbiose'&&part==='2')folded([main.querySelector('article.panel')],extraText+' · Nutzen, Kosten und Abhängigkeiten');
    if(id==='symbiose'&&part==='1'){
     const next=main.querySelector('.actions a.primary');if(next){next.href='#uebungen/symbiose';next.textContent='Zum Thema üben →';}
    }
    if(id==='nische'&&part==='2'){
     const p=[...main.querySelectorAll('article.panel>p')].find(p=>p.textContent.startsWith('Das Konkurrenzausschlussprinzip'));
     if(p)folded([p],extraText+' · Konkurrenzausschlussprinzip');
    }
   }
  }
  if(r==='uebung'){
   h1.after(note('Wiederholung der Unterrichtsgrundlage','Hier trainierst du behandelte Fachbegriffe und Zusammenhänge. Konkrete Angaben zu einem Beispiel findest du im jeweiligen Material oder in den genannten Unterrichtsprofilen.'));
   if(id==='pflanzen'){
    const d=document.createElement('details');d.id='plant-profiles';d.className='exam-material';d.innerHTML='<summary>Pflanzenprofile aus dem Unterricht nachschlagen</summary>'+GK.exams.find(m=>m.id==='bienen').materials[1][1];
    const first=main.querySelector('[data-field]')?.closest('.item');if(first)first.before(d);
   }
  }
  if(r==='lernweg'){
   const j=GK.journeys.find(j=>j.id===id);const n=Math.max(0,Math.min(j.steps.length-1,Number(part)||0));const extra=isExtraStep(j,n);
   h1.after(note(extra?extraText:'Transfer mit Material · Unterrichtswissen anwenden',extra?
    (id==='waldrand'?'Diese Etappe übt eigenständige Versuchsplanung. Sie gehört nicht zum vorausgesetzten Können dieser Klausurvorbereitung.':'Diese Etappe vertieft die Auswertung von Handbestäubung, Ausschluss und Scheinbehandlung. Sie gehört nicht zum vorausgesetzten Können dieser Klausurvorbereitung.'):
    core[j.topic]+' Die besonderen Angaben zu den Arten und Modellversuchen werden mitgegeben. Nutze sie zum Lösen der Aufgabe; du musst sie nicht vorher kennen oder auswendig lernen.'));
   if(id==='waldteich')main.querySelector('.scope-note').append(note('Kontextwissen im Material','Die für diese Aufgabe nötigen Wirkungen von Fotosynthese und Zellatmung auf den Sauerstoffgehalt stehen im Material. Die biochemischen Abläufe dieser Prozesse werden hier nicht vorausgesetzt.'));
   if(id==='partnerwechsel'&&n===4)main.querySelector('.scope-note').append(note('Du kannst direkt hier weiterarbeiten','Alle benötigten Vergleichswerte und Informationen stehen auch in dieser Etappe. Die Zusatzetappen 2 und 3 musst du dafür nicht vorher bearbeiten.'));
   // The normal next/previous route visits only the preparation stages.
   const buttons=main.querySelector('.path-reading>div.actions:last-child');
   if(buttons){
    for(const a of [...buttons.querySelectorAll('a')]){
     const isNext=a.textContent.includes('Nächste Etappe'),isPrev=a.textContent.includes('Vorherige Etappe');if(!isNext&&!isPrev)continue;
     const indices=j.steps.map((_,i)=>i).filter(i=>!isExtraStep(j,i));const target=isNext?indices.find(i=>i>n):indices.filter(i=>i<n).at(-1);
     if(target===undefined){if(isPrev)a.remove();else{a.href='#ueben';a.textContent='Zu allen Übungen →';}}
     else{a.href='#lernweg/'+id+'/'+target;a.textContent=isNext?'Weiter zur Klausurvorbereitung →':'← Vorherige Vorbereitungs-Etappe';}
    }
   }
  }
  if(r==='aufgabe'){
   const m=GK.exams.find(m=>m.id===id);
   if(extraQuestions[id]){
    const articles=[...main.querySelectorAll('article.question')];
    const d=folded(articles.filter((_,n)=>isExtraQuestion(m,n)),extraText+' · Pantoffeltierchen (Aufgaben 4–6)');
    d.querySelector('summary').after(note('Erweiterung: Bestandsentwicklung','Die folgenden Aufgaben vertiefen die Erklärung von Populationsverläufen. Für diese Klausurvorbereitung genügt hier der Gräser-Vergleich in Aufgaben 1–3. Die Zusatzantworten werden separat gespeichert, zählen aber nicht zum Vorbereitungsfortschritt.',true));
   }
  }
  if(r==='selbstkontrolle'){
   const item=main.querySelector('#self-methoden-vergleich')?.closest('.self-item');
   if(item){const d=folded([item],extraText+' · Versuchsplanung');d.querySelector('summary').after(note('Separater Zusatz','Diese Selbsteinschätzung zählt nicht zu den 23 Kompetenzen der Klausurvorbereitung.',true));}
  }
  // Labels are visible before opening a card, link or optional stage.
  main.querySelectorAll('a[href^="#"]').forEach(a=>{
   const [kind,key,number]=a.hash.slice(1).split('/');
   if(routeExtra(a.hash))badge(a,'Zusatz · nicht vorausgesetzt',true);
   else if(kind==='lernweg'&&a.classList.contains('path-card'))badge(a,extraSteps[key]?'Transfer mit Material · mit gekennzeichneten Zusätzen':'Transfer mit Material');
   else if(kind==='aufgabe'&&a.classList.contains('card')&&extraQuestions[key])badge(a,'Aufgaben 1–3: Vorbereitung · 4–6: Zusatz');
   else if(kind==='thema'&&a.classList.contains('card'))badge(a,'Unterrichtsgrundlage');
  });
 }
 return {isExtraStep,isExtraQuestion,isCoreCompetency,stepCount,questionCount,decorate};
})();
