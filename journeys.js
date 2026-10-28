'use strict';
window.GK.journeys=[
  {
    "id": "waldteich",
    "topic": "oekosystem",
    "image": "pond",
    "title": "Ein Waldteich im Wandel",
    "desc": "Vom Lebensraum zum Wirkungsgefüge: Untersuche, was sich bei stärkerer Beschattung verändert.",
    "time": "15–25",
    "intro": "Ein Waldteich liegt zwischen einem lichten Ufer und einem dichten Gehölz. Du ordnest Beobachtungen, untersuchst Wirkungen und erklärst Veränderungen des Sauerstoffgehalts. Das Bild illustriert den Lebensraum; Messwerte und Beobachtungen stehen im jeweiligen Material. Im Protokoll: Blaugrüne Mosaikjungfer (Aeshna cyanea), Spitzschlammschnecke (Lymnaea stagnalis), Grünalge (Chlorella vulgaris), Wasserbakterium (Pseudomonas fluorescens), Schwarz-Erle (Alnus glutinosa) und Kanadische Wasserpest (Elodea canadensis). Die Arten konkretisieren das Unterrichtsbeispiel; sie sind nicht anhand des Bildes bestimmt.",
    "steps": [
      {
        "title": "Lebensraum oder Lebensgemeinschaft?",
        "type": "assign",
        "prompt": "Ordne jede der zehn Angaben dem Biotop oder der Biozönose zu. Entscheide dabei, ob eine unbelebte Bedingung oder ein Lebewesen beschrieben wird.",
        "options": [
          "Biotop",
          "Biozönose"
        ],
        "items": [
          [
            "Wasser mit gelösten Mineralstoffen",
            "Biotop",
            "Wasser und darin gelöste Mineralstoffe sind unbelebte Bestandteile des Lebensraums."
          ],
          [
            "Larven der Blaugrünen Mosaikjungfer zwischen Wasserpest",
            "Biozönose",
            "Libellenlarven sind Tiere und gehören zur Lebensgemeinschaft."
          ],
          [
            "Schlammiger Untergrund",
            "Biotop",
            "Der schlammige Untergrund ist ein unbelebter Teil des Lebensraums."
          ],
          [
            "Grünalgen (Chlorella vulgaris) im Wasser",
            "Biozönose",
            "Grünalgen sind lebende Organismen und gehören zur Lebensgemeinschaft."
          ],
          [
            "Wassertemperatur von 18 °C",
            "Biotop",
            "Die Temperatur beschreibt eine Bedingung der unbelebten Umwelt."
          ],
          [
            "Spitzschlammschnecken auf Pflanzenstängeln",
            "Biozönose",
            "Schnecken sind Tiere und gehören zur Lebensgemeinschaft."
          ],
          [
            "Lichteinfall an der Wasseroberfläche",
            "Biotop",
            "Licht ist eine unbelebte Umweltbedingung."
          ],
          [
            "Wasserbakterien (Pseudomonas fluorescens) im Bodenschlamm",
            "Biozönose",
            "Bakterien sind Lebewesen, auch wenn man sie nicht mit bloßem Auge sieht."
          ],
          [
            "Sauerstoffgehalt des Wassers",
            "Biotop",
            "Der Sauerstoffgehalt beschreibt die Menge eines Stoffes im Wasser, nicht einen Organismus."
          ],
          [
            "Schwarz-Erlen am Ufer",
            "Biozönose",
            "Erlen sind lebende Pflanzen und gehören zur Lebensgemeinschaft."
          ]
        ],
        "hint": "Auch kleine und unsichtbare Organismen sind Lebewesen. Ein Stoff bleibt ein unbelebter Bestandteil, auch wenn Lebewesen ihn herstellen.",
        "explanation": "Wasser, Untergrund, Licht, Temperatur und Sauerstoffgehalt gehören zum Biotop. Die verschiedenen lebenden Organismen bilden die Biozönose.",
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Wirkungen verknüpfen",
        "type": "match",
        "prompt": "Wähle zu jeder beschriebenen Veränderung die passende Folge aus. Betrachte jeweils nur diesen Zusammenhang; alle anderen Bedingungen sollen gleich bleiben.",
        "material": "<p>Für diese Aufgabe gilt: Bei ausreichender Versorgung können Wasserpflanzen im untersuchten Lichtbereich mehr Fotosynthese betreiben, wenn mehr Licht verfügbar ist. Dabei entsteht Sauerstoff. Tiere, Pflanzen und Mikroorganismen verbrauchen Sauerstoff bei der Zellatmung. Dichte Ufergehölze können Wasserpflanzen beschatten.</p>",
        "items": [
          [
            "Mehr Schatten durch Ufergehölze",
            "Weniger Licht erreicht Wasserpflanzen",
            "Dichtes Laub hält einen Teil des einfallenden Lichts zurück. Dadurch gelangt weniger Licht zu den Wasserpflanzen."
          ],
          [
            "Höhere Fotosyntheseleistung",
            "Mehr Sauerstoff wird produziert",
            "Bei der Fotosynthese entsteht Sauerstoff. Eine höhere Fotosyntheseleistung bedeutet unter den beschriebenen Bedingungen eine stärkere Sauerstoffproduktion."
          ],
          [
            "Mehr sauerstoffverbrauchende Zellatmung",
            "Mehr Sauerstoff wird verbraucht",
            "Bei der Zellatmung wird Sauerstoff verbraucht. Nimmt diese Aktivität zu, steigt auch der Verbrauch."
          ],
          [
            "Weniger Fotosynthese bei gleichem Verbrauch",
            "Die Sauerstoffbilanz verschiebt sich nach unten",
            "Es wird weniger Sauerstoff produziert, während genauso viel verbraucht wird wie zuvor. Deshalb bleibt ein kleinerer Überschuss übrig; übersteigt der Verbrauch die Produktion, nimmt der Sauerstoffvorrat ab. Das ist mit einer Verschiebung der Bilanz nach unten gemeint."
          ]
        ],
        "hint": "Unterscheide Produktion, Verbrauch und gemessenen Vorrat. Eine Wirkungskette erklärt immer nur bestimmte Einflüsse.",
        "explanation": "Sauerstoffproduktion und Sauerstoffverbrauch wirken gleichzeitig. Ein steigender Verbrauch oder sinkende Produktion kann die Bilanz verändern; weitere Einflüsse bleiben möglich.",
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Messdaten auswerten",
        "type": "numeric",
        "prompt": "Berechne für die beiden Gefäße die unten gefragten Veränderungen. Bei einer Abnahme gibst du an, um wie viel der Wert gesunken ist, also eine positive Zahl. Trage nur Zahlen ein; die Einheit mg/L steht am Feld. Entscheide anschließend bei den Deutungsfragen, welche Aussagen durch die Daten gestützt werden.",
        "material": "<p><b>Didaktisches Modell:</b> Zwei vergleichbare, mit Kanadischer Wasserpest besetzte Gefäße mit Teichwasser werden bei gleicher Temperatur beobachtet. Anfangswert in beiden: 6,0 mg/L. Nach vier Stunden: beleuchtet 8,5 mg/L, abgedunkelt 4,5 mg/L. Alle Werte sind Modellwerte, keine Messung am abgebildeten Teich.</p><p>mg/L bedeutet Milligramm Sauerstoff pro Liter Wasser. Beide Gefäße starten mit demselben Sauerstoffgehalt. Der einzige gezielt veränderte Faktor ist die Beleuchtung.</p>",
        "items": [
          [
            "Zunahme im beleuchteten Gefäß (mg/L)",
            2.5,
            "8,5 − 6,0 = 2,5 mg/L. Der gemessene Sauerstoffgehalt nimmt insgesamt um 2,5 mg/L zu. Das ist nicht die gesamte produzierte Menge, denn gleichzeitig wird Sauerstoff verbraucht."
          ],
          [
            "Abnahme im abgedunkelten Gefäß (mg/L)",
            1.5,
            "6,0 − 4,5 = 1,5 mg/L. Im Dunkeln fehlt die lichtabhängige Sauerstoffproduktion; der Verbrauch senkt den Vorrat."
          ],
          [
            "Unterschied der Endwerte (mg/L)",
            4,
            "8,5 − 4,5 = 4,0 mg/L. Weil beide Ansätze gleich starten, entspricht die Endwertdifferenz auch der Differenz ihrer Veränderungen."
          ]
        ],
        "hint": "Berechne Endwert minus Anfangswert für eine Zunahme. Für den gefragten Abnahmebetrag rechnest du Anfangswert minus Endwert.",
        "explanation": "8,5 − 6,0 = 2,5 mg/L; 6,0 − 4,5 = 1,5 mg/L; 8,5 − 4,5 = 4,0 mg/L. Das Modell stützt einen Einfluss der Beleuchtung, isoliert aber nicht jede einzelne Aktivität im Teichwasser.",
        "interpretation": [
          [
            "Im Licht überwiegt die Sauerstoffproduktion den Sauerstoffverbrauch.",
            "Richtig",
            "Der Vorrat steigt netto um 2,5 mg/L. Fotosynthese und Zellatmung laufen gleichzeitig; produziert wird in der Bilanz mehr, als verbraucht wird."
          ],
          [
            "Die Wasserpest betreibt im beleuchteten Gefäß keine Zellatmung.",
            "Falsch",
            "Auch im Licht findet Zellatmung statt. Der Anstieg zeigt einen Überschuss der Produktion, keinen Ausfall des Verbrauchs."
          ],
          [
            "Der Vergleich beider Gefäße ist aussagekräftiger für den Lichteinfluss als der beleuchtete Endwert allein.",
            "Richtig",
            "Beide beginnen bei 6,0 mg/L. Nach vier Stunden liegen sie 4,0 mg/L auseinander. Die entgegengesetzten Veränderungen stützen bei sonst vergleichbaren Bedingungen einen Einfluss der Beleuchtung."
          ],
          [
            "Auch wenn Wasserpflanzen im Licht Sauerstoff bilden, kann der Sauerstoffgehalt bei starkem Verbrauch sinken.",
            "Richtig",
            "Entscheidend ist das Verhältnis von Produktion und Verbrauch. Verbrauchen die Organismen mehr Sauerstoff als nachgeliefert wird, nimmt der Vorrat trotz Fotosynthese ab."
          ],
          [
            "Die Gefäßdaten beweisen, dass vollständiges Entfernen der Uferbäume im Teich immer den Sauerstoffgehalt erhöht.",
            "Falsch",
            "Der Teich hat zusätzlich Temperaturänderungen, Gasaustausch und eine vielfältige Lebensgemeinschaft. Ein vierstündiger Gefäßversuch belegt keine dauerhafte Wirkung eines großen Eingriffs."
          ]
        ],
        "revision": "fachtransfer-2026-10-28"
      },
      {
        "title": "Tag und Nacht am Teich erklären",
        "type": "response",
        "prompt": "An einem sonnigen Tag steigt der Sauerstoffgehalt im pflanzenreichen Teich; in der folgenden Nacht sinkt er. Erkläre den Wechsel in 5–7 Sätzen mithilfe von Fotosynthese und Zellatmung. Beziehe die Gefäßdaten ein und erläutere, wie starke Beschattung am Tag die Sauerstoffversorgung beeinflussen kann.",
        "material": "<p>Im Gefäßversuch steigt der Sauerstoffgehalt bei Beleuchtung von 6,0 auf 8,5 mg/L, bei Abdunklung sinkt er auf 4,5 mg/L. Für die Erklärung am Teich gilt: Wasserpflanzen bilden bei ausreichendem Licht Sauerstoff durch Fotosynthese. Pflanzen, Tiere und viele Mikroorganismen verbrauchen Sauerstoff bei der Zellatmung – auch nachts. Betrachte das Zusammenspiel dieser Vorgänge.</p>",
        "criteria": [
          "Ich verknüpfe Licht und Fotosynthese mit der Sauerstoffproduktion.",
          "Ich erkläre, dass Zellatmung am Tag und in der Nacht stattfindet.",
          "Ich nutze einen passenden Zahlenvergleich aus dem Material.",
          "Ich erkläre die mögliche Wirkung stärkerer Beschattung auf das Verhältnis von Produktion und Verbrauch."
        ],
        "model": "Am Tag kann die Kanadische Wasserpest bei ausreichendem Licht Fotosynthese betreiben und Sauerstoff bilden. Gleichzeitig verbrauchen Pflanzen, Tiere und viele Mikroorganismen Sauerstoff durch Zellatmung. Übersteigt die Produktion den Verbrauch, steigt der Sauerstoffgehalt; im beleuchteten Gefäß von 6,0 auf 8,5 mg/L. In der Dunkelheit fällt die lichtabhängige Sauerstoffproduktion aus, während die Zellatmung weiterläuft. Dazu passt der Rückgang auf 4,5 mg/L im abgedunkelten Gefäß. Starke Beschattung kann die Fotosynthese am Tag vermindern und damit den Sauerstoffüberschuss verkleinern. Ob der Vorrat tatsächlich sinkt, hängt davon ab, wie viel Sauerstoff zugleich verbraucht und auf anderen Wegen ausgetauscht wird.",
        "revision": "fachtransfer-2026-10-28"
      }
    ]
  },
  {
    "id": "salzgradient",
    "topic": "toleranz",
    "image": "meadow",
    "title": "Wie viel Salz verträgt eine Pflanze?",
    "desc": "Beschrifte eine Toleranzkurve und erkläre, welche Standorte Überleben und Fortpflanzung ermöglichen.",
    "time": "20–30",
    "intro": "Du untersuchst, wie der Salzgehalt das Wachstum einer Pflanze beeinflusst. Als Anschauungsart dient der Europäische Queller (Salicornia europaea), eine Salzpflanze. Die Werte sind für diese Übung erfunden und beschreiben keine gemessenen Artgrenzen des Quellers. Licht, Temperatur und Nährstoffversorgung bleiben gleich. g/L bedeutet Gramm Salz pro Liter.",
    "steps": [
      {
        "title": "Die Toleranzkurve zusammensetzen",
        "type": "curve",
        "prompt": "Ordne die acht Fachbegriffe den passenden Stellen im Diagramm zu. Tippe zuerst einen Begriff und dann ein Zielfeld im Diagramm oder in der Liste darunter an. Mit der Maus kannst du die Begriffe auch ziehen. Das Diagramm lässt sich bei Bedarf seitlich verschieben. Die Farben grenzen Bereiche ab; die Ziffern bezeichnen Zuordnungsstellen.",
        "material": "<p><b>Modellbedingungen:</b> Dauerhaftes Überleben ist bei 2–18 g/L möglich, außerhalb nicht. Bei 2–4 und 16–18 g/L werden keine keimfähigen Samen gebildet; bei mehr als 4 und weniger als 16 g/L ist Fortpflanzung möglich. Als besonders günstig gilt in diesem Lehrmodell eine Wuchsleistung von mindestens 80 % des Höchstwerts. Lies die zugehörigen Salzkonzentrationen im Diagramm ab. Dieses Kriterium ist eine Übungsannahme, keine allgemeingültige biologische Grenze.</p><p>Die relative Wuchsleistung vergleicht das Wachstum mit dem höchsten Wert im Versuch: Dieser ist auf 100 % gesetzt. Ein Wert von 50 % bedeutet halb so viel Wachstum wie am höchsten Punkt.</p>",
        "items": [
          [
            "1 · Untere Überlebensgrenze bei 2 g/L",
            "Minimum",
            "Untere Überlebensgrenze bei 2 g/L bezeichnet hier Minimum. Die Zuordnung gilt für die ausdrücklich gesetzten Modellgrenzen."
          ],
          [
            "2 · Obere Überlebensgrenze bei 18 g/L",
            "Maximum",
            "Obere Überlebensgrenze bei 18 g/L bezeichnet hier Maximum. Die Zuordnung gilt für die ausdrücklich gesetzten Modellgrenzen."
          ],
          [
            "3 · Höchste Wuchsleistung bei 10 g/L",
            "Optimum",
            "Höchste Wuchsleistung bei 10 g/L bezeichnet hier Optimum. Die Zuordnung gilt für die ausdrücklich gesetzten Modellgrenzen."
          ],
          [
            "4 · Besonders günstiger Bereich 8–12 g/L",
            "Präferendum",
            "Besonders günstiger Bereich 8–12 g/L bezeichnet hier Präferendum. Die Zuordnung gilt für die ausdrücklich gesetzten Modellgrenzen."
          ],
          [
            "5 · Linker Randbereich 2–4 g/L",
            "Unteres Pessimum",
            "Linker Randbereich 2–4 g/L bezeichnet hier Unteres Pessimum. Überleben allein bedeutet noch keine Fortpflanzung."
          ],
          [
            "6 · Rechter Randbereich 16–18 g/L",
            "Oberes Pessimum",
            "Rechter Randbereich 16–18 g/L bezeichnet hier Oberes Pessimum. Überleben allein bedeutet noch keine Fortpflanzung."
          ],
          [
            "7 · Mehr als 4 und weniger als 16 g/L",
            "Fortpflanzungsbereich",
            "Mehr als 4 und weniger als 16 g/L bezeichnet hier Fortpflanzungsbereich. Die Zuordnung gilt für die ausdrücklich gesetzten Modellgrenzen."
          ],
          [
            "8 · Gesamter Bereich 2–18 g/L",
            "Toleranzbereich",
            "Gesamter Bereich 2–18 g/L bezeichnet hier Toleranzbereich. Die Zuordnung gilt für die ausdrücklich gesetzten Modellgrenzen."
          ]
        ],
        "hint": "Minimum, Maximum und Optimum sind einzelne Faktorwerte. Präferendum, Pessima und Toleranzbereich sind Bereiche. Die Angaben zur Samenbildung stammen aus zusätzlicher Beobachtung.",
        "explanation": "2 und 18 g/L begrenzen das Überleben, 10 g/L ist das Wachstumsoptimum. Die Pessima erlauben Überleben ohne Fortpflanzung. Das hier ausdrücklich definierte Präferendum 8–12 g/L liegt innerhalb des Fortpflanzungsbereichs.",
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Neue Standorte einordnen",
        "type": "match",
        "prompt": "Wähle für jeden Standort die passende Aussage zu Überleben und Fortpflanzung. Nutze die beschriftete Kurve und die Angaben zur Samenbildung. Kategorien dürfen mehrfach verwendet werden.",
        "material": "<p>Überleben: 2–18 g/L. Ohne keimfähige Samen: 2–4 und 16–18 g/L. Fortpflanzung möglich: mehr als 4 und weniger als 16 g/L. Präferendum nach dem Modellkriterium: 8–12 g/L.</p>",
        "items": [
          [
            "Standort A: 1 g/L",
            "Kein dauerhaftes Überleben",
            "1 g/L liegt unter dem Minimum von 2 g/L der Lehrkurve. Die Aussage betrifft nur das Modell."
          ],
          [
            "Standort B: 3 g/L",
            "Überleben ohne Fortpflanzung",
            "3 g/L liegt im unteren Pessimum (2–4 g/L): Überleben, aber keine keimfähigen Samen."
          ],
          [
            "Standort C: 6 g/L",
            "Fortpflanzung möglich, außerhalb des Präferendums",
            "6 g/L liegt zwischen 4 und 16, aber außerhalb von 8–12 g/L: Fortpflanzung ist möglich, das Präferendum nicht erreicht."
          ],
          [
            "Standort D: 10 g/L",
            "Im Präferendum",
            "10 g/L ist das Optimum und gehört zum Präferendum von 8–12 g/L."
          ],
          [
            "Standort E: 17 g/L",
            "Überleben ohne Fortpflanzung",
            "17 g/L liegt im oberen Pessimum (16–18 g/L). Hier fehlt laut Zusatzbeobachtung die erfolgreiche Fortpflanzung."
          ],
          [
            "Standort F: 19 g/L",
            "Kein dauerhaftes Überleben",
            "19 g/L überschreitet das Modellmaximum von 18 g/L."
          ]
        ],
        "hint": "Prüfe zuerst den Überlebensbereich, dann die Fortpflanzung und zuletzt den besonders günstigen Bereich.",
        "explanation": "A und F liegen außerhalb der Überlebensgrenzen; B und E in den Pessima. C liegt im Fortpflanzungsbereich, aber außerhalb des Präferendums. D liegt am Optimum.",
        "showCurve": true,
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Grenzfälle prüfen",
        "type": "choice",
        "prompt": "Prüfe jede Aussage anhand der Kurve und der Zusatzangaben. Wähle „Durch das Modell gestützt“, wenn die Aussage daraus folgt. Wähle die andere Antwort, wenn sie den Angaben widerspricht oder wenn die nötigen Informationen fehlen.",
        "options": [
          "Durch das Modell gestützt",
          "Nicht belegt / widersprochen"
        ],
        "items": [
          [
            "Bei genau 4 g/L entstehen nach den Zusatzbeobachtungen keine keimfähigen Samen.",
            "Durch das Modell gestützt",
            "Die Zusatzbeobachtung schließt 4 g/L ausdrücklich in das untere Pessimum ein. Fortpflanzung beginnt erst bei mehr als 4 g/L."
          ],
          [
            "Jede Pflanze mit messbarem Wachstum kann sich auch fortpflanzen.",
            "Nicht belegt / widersprochen",
            "In den Pessima ist Wachstum möglich, obwohl keine keimfähigen Samen entstehen. Wachstum und Fortpflanzung sind verschiedene Leistungen."
          ],
          [
            "Das Präferendum muss bei jeder Art genau 8–12 g/L betragen.",
            "Nicht belegt / widersprochen",
            "8–12 g/L ist nur die hier festgelegte Modellspanne. Andere Arten und andere Versuchsbedingungen können andere Bereiche ergeben."
          ],
          [
            "Bei 10 g/L liegt die höchste untersuchte Wuchsleistung.",
            "Durch das Modell gestützt",
            "Der höchste Kurvenpunkt beträgt 100 % bei 10 g/L. Damit liegt dort das untersuchte Wachstumsoptimum."
          ],
          [
            "Aus dem Modell allein folgt, dass die Art in der Natur an jedem passenden Salzstandort vorkommt.",
            "Nicht belegt / widersprochen",
            "Auch Konkurrenz, Wasser, Licht oder fehlende Samenanlieferung können ein Vorkommen verhindern. Ein passender Wert eines Faktors reicht nicht."
          ]
        ],
        "hint": "Lies bei Grenzwerten „mehr als“, „weniger als“ und „bis“ genau. Natürliche Standorte unterscheiden sich nicht allein im Salzgehalt.",
        "explanation": "Bei 4 g/L gilt im Modell noch das untere Pessimum. Wachstum allein belegt keine Fortpflanzung. Das Präferendum wurde für dieses Modell operational definiert. Konkurrenz, weitere Umweltfaktoren und Ausbreitung können das natürliche Vorkommen beeinflussen.",
        "showCurve": true,
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Überleben oder dauerhafte Besiedlung?",
        "type": "response",
        "prompt": "Vergleiche die drei Salzstandorte im Material in 6–8 Sätzen. Ordne sie mit passenden Fachbegriffen in die Lehrkurve ein. Erkläre, an welchen Standorten sich ein Bestand durch eigene Samenbildung erneuern kann und warum einzelne lebende Pflanzen noch keinen dauerhaft bestehenden Bestand belegen.",
        "criteria": [
          "Ich ordne alle drei Salzwerte anhand der beschrifteten Lehrkurve ein.",
          "Ich unterscheide Überleben einzelner Pflanzen von erfolgreicher Fortpflanzung.",
          "Ich erkläre die Bedeutung keimfähiger Samen für die Erneuerung des Bestands unter den Modellannahmen.",
          "Ich verwende Minimum/Maximum, Pessimum oder Optimum/Präferendum passend, ohne die Begriffe gleichzusetzen."
        ],
        "model": "Der Standort mit 3 g/L liegt im unteren Pessimum, der mit 17 g/L im oberen Pessimum der Lehrkurve. Erwachsene Pflanzen können dort überleben, bilden nach den Modellangaben aber keine keimfähigen Samen. Beide Standorte liegen somit innerhalb des Toleranzbereichs, jedoch außerhalb des Fortpflanzungsbereichs. Bei 10 g/L liegt das Wachstumsoptimum innerhalb des Präferendums; dort ist auch erfolgreiche Samenbildung möglich. Dieser Bestand kann sich unter den angegebenen Bedingungen durch Nachkommen erneuern. In den Pessima fehlt dieser Ersatz, wenn ältere Pflanzen sterben. Ohne Zuwanderung und ohne vegetative Vermehrung ist dort deshalb keine dauerhafte Erneuerung des Bestands möglich. Das bloße Vorhandensein lebender Einzelpflanzen zeigt also noch nicht, dass der Standort auch Fortpflanzung und langfristige Besiedlung ermöglicht.",
        "material": "<p><b>Neue Standorte im Lehrmodell:</b> Auf einer offenen Fläche beträgt der Salzgehalt 3 g/L, auf einer zweiten 10 g/L und auf einer dritten 17 g/L. Anfangs werden auf jeder Fläche gleich viele erwachsene Modellpflanzen betrachtet. Die Salzgehalte bleiben konstant; die übrigen Umweltbedingungen sind geeignet. Es werden keine Samen oder Pflanzen von außen eingetragen. Für diese Aufgabe erfolgt die Erneuerung des Bestands ausschließlich durch keimfähige Samen; Vermehrung durch Pflanzenteile, etwa Ausläufer, wird nicht betrachtet. Es gelten die gesetzten Grenzen der Lehrkurve, keine realen Artgrenzen des Quellers.</p>",
        "revision": "fachtransfer-2026-10-28",
        "showCurve": true
      }
    ]
  },
  {
    "id": "waldrand",
    "topic": "potenz",
    "image": "forest",
    "title": "Wer wächst am Waldrand?",
    "desc": "Vergleiche Waldmeister und Brennnessel, deute Konkurrenzwirkungen und prüfe einen konkreten Versuchsplan.",
    "time": "15–25",
    "intro": "Waldmeister (Galium odoratum) und Große Brennnessel (Urtica dioica) machen den Konkurrenzvergleich anschaulich. Die Tabelle ist ein konstruierter Versuch mit diesen Anschauungsarten, keine reale Messreihe und keine allgemeingültige Rangfolge ihrer Konkurrenzstärke.",
    "material": "<p><b>Didaktische Modelldaten:</b> Relative Wuchsleistung nach sechs Wochen (0–10). Die Prozentwerte beziehen sich auf die Lichtstärke einer festgelegten Referenz. Temperatur, Boden, Feuchte und Dauer sind gleich; je Art wird mit gleicher Ausgangszahl gearbeitet.</p><p>„Allein“ bedeutet: Im Ansatz wächst nur eine der beiden Arten. „Mit“ bedeutet: Beide Arten wachsen zusammen. Verglichen wird jeweils die Wuchsleistung derselben Art. 100 % Licht ist die festgelegte volle Beleuchtung; 20 % ist ein Fünftel davon. Die Skala 0–10 beschreibt hier vergleichbare Wachstumswerte, keine Grammangaben.</p>",
    "table": {
      "heads": [
        "Licht (%)",
        "Waldmeister allein",
        "Waldmeister mit Brennnessel",
        "Brennnessel allein",
        "Brennnessel mit Waldmeister"
      ],
      "rows": [
        [
          20,
          3,
          3,
          1,
          1
        ],
        [
          40,
          6,
          5,
          3,
          3
        ],
        [
          60,
          9,
          4,
          7,
          6
        ],
        [
          80,
          8,
          2,
          9,
          8
        ],
        [
          100,
          6,
          1,
          10,
          9
        ]
      ]
    },
    "steps": [
      {
        "title": "Konkurrenzeffekte berechnen",
        "type": "numeric",
        "prompt": "Vergleiche für jede gefragte Lichtstufe dieselbe Pflanzenart ohne und mit der anderen Art. Berechne die Abnahme als „Wert allein minus Wert mit der anderen Art“. Trage nur die Zahl ein; die Differenz wird in Einheiten der Skala 0–10 angegeben. Prüfe anschließend die Deutungsfragen.",
        "items": [
          [
            "Abnahme von Waldmeister bei 60 % Licht",
            5,
            "Waldmeister: 9 − 4 = 5 Einheiten. Verglichen wird dieselbe Art bei 60 % Licht."
          ],
          [
            "Abnahme von Waldmeister bei 80 % Licht",
            6,
            "Waldmeister: 8 − 2 = 6 Einheiten. Bei 80 % Licht ist sein Rückgang im Modell besonders stark."
          ],
          [
            "Abnahme von Brennnessel bei 80 % Licht",
            1,
            "Brennnessel: 9 − 8 = 1 Einheit. Bei gleicher Lichtstufe verliert sie deutlich weniger Wuchsleistung als Waldmeister."
          ],
          [
            "Abnahme von Waldmeister bei 20 % Licht",
            0,
            "Waldmeister: 3 − 3 = 0. Bei 20 % Licht ist kein Unterschied dieser Messgröße festgestellt."
          ]
        ],
        "hint": "Vergleiche dieselbe Art und dieselbe Lichtstufe. Ziehe nicht die Wuchsleistungen verschiedener Arten voneinander ab.",
        "explanation": "Für Waldmeister ergeben sich 9−4=5 bei 60 %, 8−2=6 bei 80 % und 3−3=0 bei 20 %. Für Brennnessel bei 80 % gilt 9−8=1. Die Wirkung ist im Modell ungleich.",
        "interpretation": [
          [
            "Bei 80 % Licht wird Waldmeister durch die gemeinsame Kultur stärker beeinträchtigt als Brennnessel.",
            "Richtig",
            "Waldmeister sinkt von 8 auf 2, also um 6 Einheiten. Brennnessel sinkt von 9 auf 8, also um 1. Auch relativ ist die Abnahme beim Waldmeister größer (75 % gegenüber rund 11 %)."
          ],
          [
            "Bei 80 % Licht sprechen die Modelldaten für eine höhere Konkurrenzfähigkeit der Brennnessel gegenüber Waldmeister.",
            "Richtig",
            "Mit Brennnesseln wächst Waldmeister bei 80 % Licht deutlich weniger als allein. Die Brennnessel wächst mit Waldmeister dagegen fast so stark wie allein. Die Wirkung ist also ungleich: Unter diesen Bedingungen wird Waldmeister stärker beeinträchtigt."
          ],
          [
            "Brennnessel ist Waldmeister unter allen denkbaren Umweltbedingungen überlegen.",
            "Falsch",
            "Untersucht wurden nur fünf Lichtstufen bei festgelegten weiteren Bedingungen. Eine Aussage über jede Umwelt geht weit über diese Daten hinaus."
          ],
          [
            "Bei 20 % Licht wurde bei Waldmeister kein Wachstumsnachteil durch die gemeinsame Kultur gemessen.",
            "Richtig",
            "Beide Werte sind 3; die Differenz beträgt 0. Das belegt keinen generellen Ausschluss von Konkurrenz, etwa zu anderen Zeiten oder um andere Ressourcen."
          ],
          [
            "Waldmeister kann bei 80 % Licht keine keimfähigen Samen bilden.",
            "Falsch",
            "Die Tabelle misst Wuchsleistung nach sechs Wochen. Aus dem Wert 2 kann nicht auf fehlende Fortpflanzung geschlossen werden."
          ]
        ],
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Aussagen nach ihrer Reichweite sortieren",
        "type": "assign",
        "prompt": "Ordne jede Aussage zu: Wird sie durch die Wachstumstabelle gestützt, oder fehlen dafür Informationen? Beachte, welche Lebensleistung untersucht wurde und für welche Bedingungen die Werte gelten.",
        "options": [
          "Mit den Daten begründbar",
          "Nicht aus diesen Daten ableitbar"
        ],
        "items": [
          [
            "Waldmeister erreicht allein die höchste gemessene Leistung bei 60 % Licht.",
            "Mit den Daten begründbar",
            "Der größte Alleinwert des Waldmeisters ist 9 bei 60 % Licht. Dies gilt für die fünf untersuchten Stufen."
          ],
          [
            "Bei 80 % ist die gemessene Abnahme für Waldmeister größer als für Brennnessel.",
            "Mit den Daten begründbar",
            "Bei 80 % sinkt Waldmeister um 6, Brennnessel um 1 Einheit. Die Abnahme des Waldmeisters ist somit größer."
          ],
          [
            "Waldmeister kann sich unter Konkurrenz bei keiner Lichtstufe fortpflanzen.",
            "Nicht aus diesen Daten ableitbar",
            "Es wurden keine keimfähigen Samen erfasst. Geringere Wuchsleistung bedeutet nicht zwangsläufig fehlende Fortpflanzung."
          ],
          [
            "Brennnessel ist in jeder denkbaren Umwelt der stärkere Konkurrent.",
            "Nicht aus diesen Daten ableitbar",
            "Andere Lichtwerte, Böden, Feuchten und längere Zeiträume wurden nicht untersucht. Die Verallgemeinerung ist nicht abgesichert."
          ],
          [
            "Bei 20 % wurde für Waldmeister kein Wachstumsunterschied festgestellt.",
            "Mit den Daten begründbar",
            "Bei 20 % stehen für Waldmeister in beiden Kulturen 3 Einheiten. Nur für diese Messgröße und Bedingung wurde kein Unterschied gefunden."
          ],
          [
            "Der Versuch bestimmt die vollständige ökologische Potenz von Waldmeister.",
            "Nicht aus diesen Daten ableitbar",
            "Ökologische Potenz betrifft dauerhafte Lebens- und Fortpflanzungsmöglichkeiten unter Konkurrenz. Fünf kurzfristige Wachstumswerte reichen dafür nicht."
          ]
        ],
        "hint": "Die Daten betreffen Wuchsleistung, fünf Lichtstufen und sechs Wochen. Übertrage den Befund nicht automatisch auf alle Umweltbedingungen.",
        "explanation": "Die Tabelle belegt konkrete Wachstumsunterschiede. Sie enthält weder Fortpflanzungsdaten noch sämtliche Lichtstufen oder andere Umweltbedingungen.",
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Einmal gezielt einen Vergleich planen",
        "type": "response",
        "prompt": "Plane einen einfachen Vergleich zur Frage: Beeinträchtigt die Anwesenheit der Brennnessel das Wachstum des Waldmeisters bei 80 % Licht? Beschreibe in 4–6 Sätzen die beiden Gruppen, wichtige gleich gehaltene Bedingungen und eine passende Messgröße. Erkläre, welches Ergebnis für eine Konkurrenzwirkung sprechen würde.",
        "material": "<p>Verfügbar sind gleich große Waldmeister- und Brennnesselpflanzen, identische Töpfe und dasselbe Substrat. Der Vergleich soll sechs Wochen dauern. Verwende in beiden Gruppen dieselbe Anzahl Waldmeisterpflanzen und mehrere Töpfe je Gruppe. Es geht um die Wirkung zusätzlich anwesender Brennnesseln auf Waldmeister.</p>",
        "criteria": [
          "Ich vergleiche Waldmeister allein mit Waldmeister zusammen mit Brennnessel.",
          "Ich halte die Lichtstufe und weitere wichtige Wachstumsbedingungen gleich.",
          "Ich benenne eine geeignete Messgröße und einen gemeinsamen Messzeitpunkt.",
          "Ich erkläre, welcher Unterschied eine Konkurrenzwirkung stützen würde."
        ],
        "model": "Eine Gruppe enthält Waldmeister allein, die zweite gleich viele Waldmeisterpflanzen und zusätzlich eine festgelegte Zahl Brennnesseln. Beide Gruppen erhalten 80 % Licht sowie gleiche Topfgröße, Substrat, Wasserversorgung und Temperatur. Ich verwende vergleichbar große Ausgangspflanzen und mehrere Töpfe pro Gruppe. Nach sechs Wochen vergleiche ich den mittleren Trockenmassezuwachs des Waldmeisters. Ein geringerer Zuwachs in der Gruppe mit Brennnesseln würde eine Beeinträchtigung durch die zusätzlichen Konkurrenten unter diesen Bedingungen stützen.",
        "revision": "fachtransfer-2026-10-28"
      },
      {
        "title": "Ein Vorkommensmuster erklären",
        "type": "response",
        "prompt": "Bei einer Modellkartierung wird erfasst, wo die Pflanzen vorkommen. Waldmeister wird dabei vor allem an dunkleren Rändern gefunden, obwohl er allein bei 60 % Licht am besten wächst. Erkläre mit der Tabelle, wie Konkurrenz zu diesem Muster beitragen könnte. Vergleiche dafür an mindestens zwei Lichtstufen jeweils Waldmeister allein mit Waldmeister zusammen mit Brennnessel. Schreibe etwa 5–7 Sätze.",
        "criteria": [
          "Ich unterscheide Wachstum allein von Wachstum unter Konkurrenz.",
          "Ich verwende mindestens zwei passende Zahlenpaare.",
          "Ich erkläre das Randvorkommen als mögliche Folge verringerter Konkurrenz.",
          "Ich erkläre, weshalb häufiges Vorkommen nicht automatisch das Wachstumsoptimum ohne Konkurrenz anzeigt."
        ],
        "model": "Bei 60 % Licht erreicht Waldmeister allein eine Wuchsleistung von 9, gemeinsam mit Brennnessel nur 4. Bei 20 % beträgt die Leistung dagegen in beiden Ansätzen 3. Der dunklere Standort ist ohne Konkurrenz für das Wachstum also weniger günstig, doch dort fällt im Modell der Wachstumsnachteil durch Brennnesseln weg. Unter Konkurrenz kann ein solcher Standort deshalb eine Ausweichmöglichkeit bieten. Das kann zum häufigeren Vorkommen am dunkleren Rand beitragen, obwohl das Wachstumsoptimum der Alleinkultur bei 60 % liegt. Für das tatsächliche Vorkommen ist somit das Zusammenspiel abiotischer Bedingungen und biotischer Beziehungen entscheidend.",
        "revision": "fachtransfer-2026-10-28"
      }
    ]
  },
  {
    "id": "nachtaktive",
    "topic": "nische",
    "image": "forest",
    "title": "Zwei Käferarten teilen den Waldboden",
    "desc": "Rekonstruiere Nischenprofile und prognostiziere, wie sich ein veränderter Lebensraum auswirken könnte.",
    "time": "15–25",
    "intro": "Hainlaufkäfer (Carabus nemoralis) und Breiter Schulterläufer (Abax parallelepipedus) sind die Anschauungsarten. Die folgenden Beobachtungsprofile sind für den Vergleich konstruiert: Besonders die zeitlichen Schwerpunkte sind keine allgemeingültigen Artmerkmale. Das Bild ist eine Illustration, kein Bestimmungsfoto.",
    "table": {
      "heads": [
        "Merkmal",
        "Hainlaufkäfer",
        "Breiter Schulterläufer"
      ],
      "rows": [
        [
          "Aktivität",
          "vorwiegend frühe Nacht",
          "vorwiegend späte Nacht"
        ],
        [
          "Nahrungssuche",
          "häufig oberste Laubschicht",
          "häufig feuchte Hohlräume unter Holz"
        ],
        [
          "Nahrung",
          "kleine Bodentiere",
          "kleine Bodentiere"
        ],
        [
          "Feuchte",
          "frisch bis feucht",
          "überwiegend feucht"
        ],
        [
          "Rückzug tagsüber",
          "Laub und Holzspalten",
          "Holzspalten"
        ]
      ]
    },
    "steps": [
      {
        "title": "Nischenmerkmale zuordnen",
        "type": "assign",
        "prompt": "Ordne jede Beobachtung einem Aspekt der ökologischen Nische zu: Wann ist der Käfer aktiv, wo hält er sich auf, was frisst er oder welche unbelebten Umweltbedingungen benötigt er? Verwende die Kategorien bei Bedarf mehrfach.",
        "options": [
          "Zeitliche Nutzung",
          "Räumliche Nutzung",
          "Nahrung",
          "Abiotische Ansprüche"
        ],
        "items": [
          [
            "Hainlaufkäfer ist vorwiegend in der frühen Nacht aktiv.",
            "Zeitliche Nutzung",
            "„Frühe Nacht“ beschreibt, wann der Käfer aktiv ist. Es geht um die zeitliche Nutzung."
          ],
          [
            "Breiter Schulterläufer sucht häufig unter Totholz.",
            "Räumliche Nutzung",
            "„Unter Totholz“ beschreibt den Teilraum, in dem der Käfer sucht. Es geht um die räumliche Nutzung."
          ],
          [
            "Beide Arten nutzen kleine Bodentiere.",
            "Nahrung",
            "Die kleinen Bodentiere werden gefressen. Diese Angabe beschreibt die Nahrung."
          ],
          [
            "Breiter Schulterläufer wird vor allem in feuchten Bereichen gefunden.",
            "Abiotische Ansprüche",
            "Feuchte ist eine Bedingung der unbelebten Umwelt. Die Beobachtung gibt einen Hinweis auf den Feuchteanspruch."
          ],
          [
            "Hainlaufkäfer sucht häufig in der obersten Laubschicht.",
            "Räumliche Nutzung",
            "Die oberste Laubschicht ist ein räumlicher Bereich der Nahrungssuche."
          ],
          [
            "Breiter Schulterläufer ist vorwiegend in der späten Nacht aktiv.",
            "Zeitliche Nutzung",
            "„Späte Nacht“ beschreibt den Zeitpunkt der Aktivität, nicht den Aufenthaltsort."
          ]
        ],
        "hint": "Eine Nische umfasst mehrere Dimensionen. Der gemeinsame Lebensraum ist noch kein vollständiges Nischenprofil.",
        "explanation": "Zeit, Raum, Nahrung und abiotische Bedingungen sind verschiedene Aspekte der Nische. Die Nahrung überlappt, während sich Aktivitäts- und Suchschwerpunkte unterscheiden.",
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Überlappung und Differenzierung erkennen",
        "type": "assign",
        "prompt": "Ordne die Merkmalsvergleiche direkt zu: Nischenüberlappung bedeutet gemeinsame Nutzung oder gemeinsame Ansprüche; Nischendifferenzierung bedeutet unterschiedliche Nutzungsschwerpunkte. Beides kann bei denselben Arten gleichzeitig auftreten.",
        "options": [
          "Nischenüberlappung",
          "Nischendifferenzierung"
        ],
        "items": [
          [
            "Beide Arten erbeuten im Modell kleine Bodentiere.",
            "Nischenüberlappung",
            "Dasselbe Nahrungsangebot wird von beiden genutzt. Ist es knapp, ist Konkurrenz möglich."
          ],
          [
            "Hainlaufkäfer ist vorwiegend früh, Breiter Schulterläufer vorwiegend spät in der Nacht aktiv.",
            "Nischendifferenzierung",
            "Die Aktivitätsschwerpunkte unterscheiden sich zeitlich. Das kann direkte Begegnungen verringern, beseitigt aber nicht jede Konkurrenz um vorher verbrauchte Nahrung."
          ],
          [
            "Hainlaufkäfer sucht häufiger oben im Laub, Breiter Schulterläufer häufiger unter Holz.",
            "Nischendifferenzierung",
            "Die Schwerpunkte der Nahrungssuche liegen in unterschiedlichen Teilräumen. Das ist räumliche Differenzierung trotz gemeinsamen Waldbodens."
          ],
          [
            "Beide Arten nutzen Holzspalten als Rückzugsort.",
            "Nischenüberlappung",
            "Der Rückzugsraum wird gemeinsam genutzt. Bei wenigen geeigneten Spalten kann er zur begrenzenden Ressource werden."
          ],
          [
            "Feuchte Bereiche gehören zum Profil beider Arten.",
            "Nischenüberlappung",
            "Die Feuchteansprüche überschneiden sich teilweise. Die Spannen müssen dafür nicht völlig identisch sein."
          ],
          [
            "Hainlaufkäfer nutzt als Tagesversteck auch Laub; für Breiten Schulterläufer sind im Profil nur Holzspalten angegeben.",
            "Nischendifferenzierung",
            "Der angegebene Schwerpunkt beziehungsweise die Breite der Verstecknutzung unterscheidet sich. Gleichzeitig bleibt die Überlappung bei Holzspalten bestehen."
          ]
        ],
        "hint": "Eine verbrauchte Ressource kann später fehlen. Unterschiedliche Aktivitätszeiten beseitigen daher nicht zwingend indirekte Konkurrenz.",
        "explanation": "Die Profile zeigen Überlappung bei Nahrung, Holzspalten und Feuchte sowie Differenzierung bei Aktivitätszeit, Suchraum und Verstecknutzung. Differenzierung kann Konkurrenz verringern; sie garantiert weder Konkurrenzfreiheit noch dauerhafte Koexistenz.",
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Veränderte Lebensbedingungen verknüpfen",
        "type": "match",
        "prompt": "Am Waldrand werden Holzstücke entfernt; die zuvor geschützten Stellen werden trockener. Ordne jeder Veränderung die passende ökologische Folge zu. Nutze die Nischenprofile beider Käferarten.",
        "items": [
          [
            "Viele Holzspalten fallen weg.",
            "Beide Arten verlieren einen Teil ihrer Rückzugsorte.",
            "Beide Profile nennen Holzspalten als Tagesversteck. Der Eingriff betrifft daher nicht nur den Breiten Schulterläufer."
          ],
          [
            "Feuchte Hohlräume unter Holz verschwinden.",
            "Ein Schwerpunkt der Nahrungssuche des Breiten Schulterläufers geht verloren.",
            "Der Breite Schulterläufer sucht im Modell besonders häufig in solchen Hohlräumen. Für den Hainlaufkäfer ist dagegen die obere Laubschicht der häufigere Suchraum."
          ],
          [
            "Beide Arten suchen nun häufiger in derselben verbleibenden Laubschicht.",
            "Die räumliche Nischenüberlappung nimmt zu.",
            "Wenn sich die Suchräume angleichen, nutzen beide Arten stärker dieselben Teilräume. Bei begrenzter gemeinsamer Nahrung kann dadurch Konkurrenz zunehmen."
          ],
          [
            "Die unterschiedlichen Aktivitätsschwerpunkte bleiben bestehen.",
            "Ein Teil der zeitlichen Nischendifferenzierung bleibt erhalten.",
            "Frühe und späte Aktivitätsschwerpunkte unterscheiden sich weiterhin. Räumliche Überlappung bedeutet deshalb nicht, dass alle Nischenmerkmale identisch werden."
          ]
        ],
        "hint": "Prüfe jeweils, ob Rückzugsraum, Nahrungssuche, Feuchte oder Aktivitätszeit betroffen ist.",
        "explanation": "Ein Eingriff kann verschiedene Nischenmerkmale gleichzeitig verändern. Gemeinsam genutzte Verstecke betreffen beide Arten, besondere Suchräume eine Art stärker. Mehr räumliche Überlappung kann bei knappen Ressourcen die Konkurrenz verstärken, obwohl zeitliche Unterschiede fortbestehen.",
        "revision": "fachtransfer-2026-10-28"
      },
      {
        "title": "Eine Maßnahme entwickeln",
        "type": "response",
        "prompt": "Entwickle in 5–7 Sätzen einen Vorschlag zur Pflege des Waldwegs: Der Weg soll begehbar bleiben und zugleich sollen geeignete Lebensbedingungen für beide Käferarten erhalten werden. Begründe deine Entscheidung mit mindestens drei Angaben zu Rückzugsräumen, Nahrungssuche, Feuchte oder Aktivitätszeit. Erläutere, weshalb verschiedene Teilräume das Zusammenleben begünstigen können.",
        "criteria": [
          "Ich nenne eine konkrete Pflegeentscheidung, die den Weg begehbar hält.",
          "Ich begründe sie mit mindestens drei Angaben aus den Käferprofilen.",
          "Ich berücksichtige gemeinsame und unterschiedliche Ansprüche beider Arten.",
          "Ich erkläre, wie verschiedene Teilräume zur Nischendifferenzierung beitragen können."
        ],
        "model": "Ich würde den Weg freihalten, aber daneben Bereiche mit Laub und liegendem Holz erhalten. Holzspalten dienen beiden Käferarten als Rückzugsorte. Der Breite Schulterläufer nutzt zusätzlich feuchte Hohlräume unter Holz häufig zur Nahrungssuche. Für den Hainlaufkäfer ist die obere Laubschicht ein wichtiger Suchraum. Werden beide Teilräume erhalten, können die Arten weiterhin unterschiedliche räumliche Schwerpunkte nutzen. Das kann die Konkurrenz um ihre gemeinsame Nahrung verringern. Vollständig aufgehoben wird sie dadurch nicht, weil sich etwa Nahrung und Rückzugsorte weiterhin teilweise überschneiden.",
        "revision": "fachtransfer-2026-10-28"
      }
    ]
  },
  {
    "id": "bluehflaechen",
    "topic": "standort",
    "image": "meadow",
    "title": "Ein neuer Blühstreifen am Sportplatz",
    "desc": "Plane mit neuen Pflanzenprofilen, erkenne zeitliche Lücken und wäge Nutzung und Pflege ab.",
    "time": "20–30",
    "intro": "Du planst mit Wiesen-Salbei (Salvia pratensis), Wiesen-Flockenblume (Centaurea jacea) und Leberblümchen (Hepatica nobilis). Die Profile liefern das benötigte Wissen. Der Kalender ist eine vereinfachte Planungsannahme für diesen Standort; tatsächliche Blühzeiten hängen unter anderem von Witterung und Pflege ab.",
    "material": "<p><b>Standorte:</b> S ist sonnig, eher trocken, selten betreten; ein Randstreifen kann später gemäht werden. H liegt halbschattig, ist frisch bis feucht und bleibt ohne regelmäßige Mahd. Die Mitte der Sportfläche muss frei bleiben. Nährstoffgehalte sind nicht gemessen.</p><p>Für das Leberblümchen wird ein bereits vorhandener Bestand erhalten. Die Standortpassung ist vor Ort zu prüfen. Quellen der Artenprofile: <a href=\"https://www.rhs.org.uk/plants/16364/salvia-pratensis/details\" target=\"_blank\" rel=\"noopener\">RHS: Wiesen-Salbei</a>, <a href=\"https://www.rhs.org.uk/plants/42260/centaurea-jacea/details\" target=\"_blank\" rel=\"noopener\">RHS: Wiesen-Flockenblume</a>, <a href=\"https://www.rhs.org.uk/plants/8645/hepatica-nobilis/details\" target=\"_blank\" rel=\"noopener\">RHS: Leberblümchen</a>; zum Pollenangebot: <a href=\"https://www.botanik-bochum.de/jahrbuch/Pflanzenportraet_Hepatica_nobilis.pdf\" target=\"_blank\" rel=\"noopener\">Bochumer Botanischer Verein</a>.</p><p><b>Begriffe in den Profilen:</b> „Frischer Boden“ ist ausreichend mit Wasser versorgt, aber nicht dauerhaft nass. „Staunässe“ bedeutet, dass Wasser schlecht abfließt und sich im Boden staut. „Mahd“ bedeutet Mähen. „Zeitversetzt“ heißt: Teilflächen werden an unterschiedlichen Terminen gemäht. „Humusreich“ beschreibt einen hohen Anteil zersetzter organischer Substanz im Boden.</p>",
    "table": {
      "heads": [
        "Pflanzenart",
        "Standortansprüche",
        "Blütezeit",
        "Nahrung / Pflege"
      ],
      "rows": [
        [
          "Wiesen-Salbei",
          "sonnig, eher trocken; durchlässiger Boden",
          "Mai–Juli",
          "Nektar und Pollen; Blütentriebe erhalten"
        ],
        [
          "Wiesen-Flockenblume",
          "sonnig, frisch; Trockenheit am Standort prüfen",
          "Juni–September",
          "Nektar und Pollen; Teilflächen zeitversetzt mähen"
        ],
        [
          "Leberblümchen",
          "halbschattig, frisch, humusreich; keine Staunässe",
          "März–April",
          "Pollen, kein Nektar; keine regelmäßige Mahd"
        ]
      ]
    },
    "steps": [
      {
        "title": "Eignung und Unsicherheit trennen",
        "type": "match",
        "prompt": "Vergleiche bei jeder geplanten Pflanzung die Angaben zum Standort mit dem Pflanzenprofil. Wähle aus, ob die Bedingungen nach den genannten Kriterien passen oder welche Information noch geprüft werden muss. „Plausibel“ bedeutet hier: Die vorhandenen Angaben sprechen dafür, garantieren aber keinen Erfolg.",
        "items": [
          [
            "Wiesen-Salbei soll am Randstreifen S wachsen.",
            "Nach Licht und Feuchte plausibel",
            "Licht und eher trockener Boden passen zum vereinfachten Salbeiprofil. Das macht den Standort plausibel, garantiert aber ohne Prüfung etwa des Bodens keinen Pflanzerfolg."
          ],
          [
            "Wiesen-Flockenblume soll am eher trockenen Standort S wachsen.",
            "Feuchteversorgung zusätzlich prüfen",
            "Die Flockenblume ist hier für frischen Boden vorgesehen. Ob der eher trockene Rand genug Wasser bietet, muss vor einer Zusage geprüft werden."
          ],
          [
            "Leberblümchen soll auf H erhalten werden.",
            "Nach Standort und Pflege plausibel",
            "Halbschatten, frischer Boden und ausbleibende regelmäßige Mahd passen zum Profil des vorhandenen Leberblümchenbestands. Staunässe wäre gesondert auszuschließen."
          ],
          [
            "H ist humusreich; der Nährstoffgehalt wurde nicht gemessen.",
            "Nährstoffversorgung bleibt offen",
            "Humusgehalt und verfügbare Pflanzennährstoffe sind nicht identisch. Ohne Messung ist die konkrete Nährstoffversorgung nicht belegt."
          ]
        ],
        "hint": "Ein passender Faktor allein reicht nicht. Prüfe Licht, Feuchte und Pflege gemeinsam.",
        "explanation": "Wiesen-Salbei und Leberblümchen passen nach den genannten Kriterien. Für Wiesen-Flockenblume ist die Feuchte auf S unsicher. Eine fehlende Nährstoffmessung bleibt eine offene Frage.",
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Den Blühkalender auswerten",
        "type": "numeric",
        "prompt": "Nutze die Blütezeiten in der Tabelle. Zähle Anfangs- und Endmonat jeweils mit. Beim gemeinsamen Angebot zählt jeder Kalendermonat nur einmal, auch wenn beide Arten gleichzeitig blühen. Trage die gefragte Anzahl ein. Prüfe anschließend, was der Kalender über das mögliche Nahrungsangebot aussagt.",
        "items": [
          [
            "Zahl möglicher Blühmonate des Wiesen-Salbeis",
            3,
            "Mai, Juni und Juli sind drei Monate."
          ],
          [
            "Zahl der Monate mit Überschneidung von Wiesen-Salbei und Wiesen-Flockenblume",
            2,
            "Beide können im Juni und Juli blühen."
          ],
          [
            "Anzahl der Monate, in denen mindestens eine der beiden Arten Wiesen-Salbei oder Wiesen-Flockenblume Nektar anbieten kann",
            5,
            "Mai bis September sind fünf Monate. Im Juni und Juli blühen beide Arten; diese Monate zählen für die Dauer des gemeinsamen Angebots trotzdem jeweils nur einmal."
          ],
          [
            "Zahl der Monate ohne vorgesehenes Blütenangebot von Oktober bis Februar",
            5,
            "Oktober, November, Dezember, Januar und Februar sind fünf Monate."
          ]
        ],
        "hint": "Trage die drei Zeiträume in einen Monatskalender ein. Überschneidungen zählen beim gemeinsamen Angebot nur einmal. Leberblümchen liefert Pollen, aber keinen Nektar.",
        "explanation": "Salbei blüht im Planungskalender drei Monate; zwei davon überschneiden sich mit der Flockenblume. Gemeinsam können beide von Mai bis September Nektar liefern. Leberblümchen erweitert das Pollenangebot in den Frühling. Von Oktober bis Februar fehlt im Plan jedes Blütenangebot.",
        "interpretation": [
          [
            "Durch die Flockenblume wird das mögliche Nektarangebot gegenüber Wiesen-Salbei allein zeitlich verlängert.",
            "Richtig",
            "Salbei ist bis Juli vorgesehen, Flockenblume bis September. August und September ergänzen das Angebot; Juni und Juli überschneiden sich."
          ],
          [
            "Eine Überschneidung der Blühzeiten ist nutzlos und sollte vollständig vermieden werden.",
            "Falsch",
            "Zeitgleiche Blüten verschiedener Arten können das Angebot vielfältiger machen. Sie sind außerdem keine Garantie gleicher Nutzung durch alle Insekten. Eine Überschneidung ist nicht automatisch eine Versorgungslücke oder Verschwendung."
          ],
          [
            "Mit Leberblümchen ist im März und April auch Nektar gesichert.",
            "Falsch",
            "Leberblümchen bietet laut Profil Pollen, keinen Nektar. Frühjahrsblüte und frühes Nektarangebot sind deshalb nicht gleichzusetzen."
          ],
          [
            "Der Kalender liefert einen Anlass, ergänzende Frühjahrs- und Herbstangebote zu prüfen.",
            "Richtig",
            "Im März und April fehlt in diesem Plan Nektar; ab Oktober fehlt das vorgesehene Blütenangebot. Ob Ergänzungen nötig sind, hängt von den aktiven Insekten und weiteren Angeboten in der Umgebung ab."
          ],
          [
            "Die berechnete Dauer des möglichen Nektarangebots beweist, dass jederzeit genügend Nahrung für alle Insekten vorhanden ist.",
            "Falsch",
            "Der Kalender erfasst nur mögliche Zeiträume. Blütenzahl, Wetter, Mahd, Wasser und die Ansprüche der Besucher bestimmen Menge und Nutzbarkeit. Dafür braucht es Beobachtungen."
          ]
        ],
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Pflegevorschläge prüfen",
        "type": "choice",
        "prompt": "Entscheide, ob die Maßnahme anhand der gegebenen Profile fachlich sinnvoll begründet ist.",
        "options": [
          "Begründbar",
          "Nicht begründbar"
        ],
        "items": [
          [
            "Nur Randstreifen verändern und die zentrale Sportfläche frei halten.",
            "Begründbar",
            "Die Randlage erlaubt Blütenflächen, während die zentrale Fläche für Sport frei bleibt. Der Nutzungskonflikt wird räumlich berücksichtigt."
          ],
          [
            "Alle Pflanzen alle zwei Wochen kurz mähen, damit immer viele Blüten bleiben.",
            "Nicht begründbar",
            "Häufiges kurzes Mähen entfernt Blütentriebe. Es widerspricht den Profilen und verhindert statt sichert ein anhaltendes Angebot."
          ],
          [
            "Teilflächen zeitversetzt mähen, sodass ein Teil der Blüten stehen bleibt.",
            "Begründbar",
            "Zeitversetzte Mahd lässt auf anderen Teilflächen noch Blüten stehen. Entscheidend ist, die Zeitpunkte am tatsächlichen Blühverlauf auszurichten; für den Leberblümchenbestand gilt keine regelmäßige Mahd."
          ],
          [
            "Wiesen-Flockenblume ohne Feuchteprüfung als sicher geeignet behandeln.",
            "Nicht begründbar",
            "Die Feuchteversorgung am trockenen Rand ist ungeklärt. Ein passender Lichtwert allein sichert die Standorteignung nicht."
          ],
          [
            "Den vorhandenen Leberblümchenbestand von der regelmäßigen Wiesenmahd ausnehmen.",
            "Begründbar",
            "Das Profil nennt für Leberblümchen keine regelmäßige Mahd. Eine einheitliche Pflege aller Teilflächen würde die unterschiedlichen Standort- und Pflegeansprüche ignorieren."
          ],
          [
            "Aus dem Kalender ganzjährige Nektarversorgung folgern.",
            "Nicht begründbar",
            "Salbei und Flockenblume liefern im Plan Mai–September Nektar; Leberblümchen liefert nur Pollen. Ein ganzjähriges Nektarangebot folgt daraus nicht."
          ]
        ],
        "hint": "Die Blütezeit beschreibt eine Möglichkeit. Pflege, Wasser und tatsächliche Blütenbildung entscheiden mit.",
        "explanation": "Eine räumlich und zeitlich abgestimmte Pflege kann Blüten erhalten und die Sportnutzung sichern. Weder Pflanzenüberleben noch ein Kalender garantieren ein tatsächliches durchgehendes Nahrungsangebot.",
        "revision": "fachtransfer-2026-10-28"
      },
      {
        "title": "Eine begründete Empfehlung schreiben",
        "type": "response",
        "prompt": "Formuliere einen Pflegevorschlag für die Randflächen S und H in etwa 6–8 Sätzen. Nenne geeignete Pflanzen und beschreibe, wo und wann du mähen würdest. Die zentrale Sportfläche muss nutzbar bleiben. Zeige außerdem, in welchen Monaten der Plan noch kein Nektar- oder Pollenangebot vorsieht. Belege deinen Vorschlag mit mindestens drei Materialangaben und nenne einen möglichen Nachteil der vorgeschlagenen Pflege.",
        "criteria": [
          "Ich ordne Pflanzen mit passenden Standortbelegen zu.",
          "Ich berücksichtige Pollen und Nektar sowie die zeitliche Lücke.",
          "Ich plane Pflege und Erhalt der Sportnutzung konkret.",
          "Ich begründe eine verbleibende Versorgungslücke und nenne einen Nachteil meines Pflegevorschlags."
        ],
        "model": "Wiesen-Salbei passt nach dem Profil zum sonnigen, eher trockenen Rand S. Für Wiesen-Flockenblume würde ich zunächst die Feuchte prüfen und gegebenenfalls einen frischeren Teilbereich wählen. Der Leberblümchenbestand kann auf H erhalten werden, wenn der Boden frisch und nicht staunass ist. Leberblümchen liefert im März und April Pollen; Salbei und Flockenblume ergänzen sich von Mai bis September beim Nektarangebot. Im Frühjahr fehlt in diesem Plan Nektar, ab Oktober fehlt ein vorgesehenes Blütenangebot. Ergänzende Pflanzen wären nach Standort und Bedarf zu prüfen, ohne winterliches Blühen zu garantieren. Die Wiesenabschnitte werden zeitversetzt gemäht, der Leberblümchenbestand nicht regelmäßig; die zentrale Sportfläche bleibt frei. Mehr Abstimmung und ein höherer Pflegeaufwand sind mögliche Nachteile dieses Vorschlags.",
        "revision": "fachtransfer-2026-10-28"
      }
    ]
  },
  {
    "id": "partnerwechsel",
    "topic": "symbiose",
    "topics": [
      "symbiose",
      "parasitismus"
    ],
    "image": "meadow",
    "title": "Wer profitiert von wem?",
    "desc": "Untersuche neue Beziehungen zwischen Blüten, Insekten und Pflanzen – und prüfe, welche Daten wirklich einen Nutzen belegen.",
    "time": "20–30",
    "intro": "Drei beschriebene Beziehungen bilden den neuen Kontext. Die Versuchszahlen sind didaktisch konstruierte Modelldaten. Die Einordnung erfolgt anhand des angegebenen Nutzens oder Schadens, nicht allein anhand der räumlichen Nähe.",
    "material": "<p><b>Beziehung A:</b> Die Dunkle Erdhummel (<i>Bombus terrestris</i>) nimmt Nektar am Wiesen-Salbei (<i>Salvia pratensis</i>) auf und überträgt dabei wirksam Pollen zwischen Blüten dieser Pflanzenart. <b>Beziehung B:</b> Die Schwarze Bohnenlaus (<i>Aphis fabae</i>) saugt an der Ackerbohne (<i>Vicia faba</i>); die Pflanze verliert Ressourcen. <b>Beziehung C:</b> Waldmeister (<i>Galium odoratum</i>) und Große Brennnessel (<i>Urtica dioica</i>) konkurrieren im Modell um begrenztes Licht. Symbiose bezeichnet hier eine Beziehung mit Nutzen für beide Arten; dauerhaftes Zusammenwohnen wird nicht vorausgesetzt.</p>",
    "steps": [
      {
        "title": "Nutzen und Schaden zuordnen",
        "type": "assign",
        "prompt": "Ordne jedem Artenpaar die passenden Vorzeichen zu. „+“ bedeutet einen Vorteil, „−“ einen Nachteil gegenüber einer Situation ohne diese Beziehung. Das erste Zeichen gehört zur zuerst genannten Art, das zweite zur danach genannten Art.",
        "options": [
          "+/+",
          "+/−",
          "−/−",
          "−/+"
        ],
        "items": [
          [
            "Dunkle Erdhummel / Wiesen-Salbei: Nektaraufnahme und wirksame Pollenübertragung",
            "+/+",
            "Die Hummel erhält Nahrung; der Salbei profitiert durch wirksame Bestäubung. Beide Wirkungen sind positiv."
          ],
          [
            "Schwarze Bohnenlaus / Ackerbohne: Nahrungserwerb und Ressourcenverlust",
            "+/−",
            "Die Laus erhält Nahrung (+), während die Bohne Ressourcen verliert (−)."
          ],
          [
            "Waldmeister / Brennnessel: beide wachsen bei gemeinsamem Lichtmangel schlechter",
            "−/−",
            "Gegenüber einer Situation ohne den Konkurrenten sind beide beeinträchtigt. Konkurrenz muss dabei nicht auf beide gleich stark wirken."
          ],
          [
            "Wiesen-Salbei / Dunkle Erdhummel: Pollenübertragung und Nektaraufnahme",
            "+/+",
            "Auch in umgekehrter Reihenfolge profitieren beide; die Vorzeichen bleiben +/+."
          ],
          [
            "Ackerbohne / Schwarze Bohnenlaus: Ressourcenverlust und Nahrungserwerb",
            "−/+",
            "Nun steht die geschädigte Bohne zuerst, daher −/+. Die Beziehung ist dieselbe, nur die Partnerreihenfolge ist vertauscht."
          ]
        ],
        "optionsExtra": [
          "−/+"
        ],
        "hint": "Die Reihenfolge der Partner ist wichtig. Ein vertauschtes Paar vertauscht bei Parasitismus die Vorzeichen.",
        "explanation": "Nektaraufnahme und wirksame Bestäubung können beiden Partnern nutzen. Beim saugenden Insekt profitiert das Tier, die Pflanze wird geschädigt. Konkurrenz kann beide gegenüber einer Situation ohne Konkurrenten beeinträchtigen.",
        "revision": "deutung-2026-10-27-v2"
      },
      {
        "title": "Ein Modell zur Bestäubung auswerten",
        "type": "numeric",
        "prompt": "Vergleiche die Anteile der Blüten, aus denen Früchte entstehen. Berechne jeweils die Differenz der unten genannten Gruppen in Prozentpunkten: Ziehe den zweiten Prozentwert vom ersten ab. Trage nur die Zahl ein. Prüfe anschließend die Aussagen zur Bedeutung der Ergebnisse.",
        "material": "<p><b>Versuchsfrage:</b> Erhöht der Zugang von Blütenbesuchern die Fruchtbildung beim Wiesen-Salbei? Vier Gruppen umfassen je 100 vergleichbare Blüten an mehreren Pflanzen. Licht, Wasser und Beobachtungszeit werden möglichst gleich gehalten. Die Zahlen sind konstruierte Übungsdaten.</p><ol><li><b>Freier Zugang – 72 %:</b> Blüten bleiben für Besucher offen.</li><li><b>Besucher ausgeschlossen – 24 %:</b> Feinmaschige Beutel umhüllen die Blüten vor dem Aufblühen. Sie lassen Luft und Licht durch, verhindern aber den Zutritt von Insekten. Es werden also Blütenbesucher ausgeschlossen, nicht Licht oder Wasser.</li><li><b>Besucher ausgeschlossen + Handbestäubung – 68 %:</b> Gleiche Beutel; während der Blütezeit wird Pollen von anderen Salbeipflanzen derselben Art gezielt von Hand auf die Narben gebracht (die Stellen der Blüten, die Pollen aufnehmen). Danach werden die Beutel wieder geschlossen.</li><li><b>Scheinbehandlung – 70 %:</b> Ein vergleichbarer Beutelaufbau mit großen offenen Zugängen lässt Besucher weiterhin zu. Er prüft, ob der Aufbau selbst den Befund erklären könnte. Temperatur und Luftfeuchte direkt an den Blüten können sich bei offenen und geschlossenen Beuteln dennoch unterscheiden.</li></ol><p>Erfasst wird in jeder Gruppe der Anteil der Blüten, die später Früchte bilden. Wie stark die Ergebnisse zwischen einzelnen Pflanzen schwanken, ist nicht angegeben; ebenso fehlen Ergebnisse weiterer Wiederholungen des gesamten Versuchs.</p><p><b>Prozentpunkte:</b> Das ist die Differenz zweier Prozentwerte. Ein Beispiel mit anderen Zahlen: Steigt ein Anteil von 10 % auf 25 %, sind das 15 Prozentpunkte. Die Scheinbehandlung ist hier die Vergleichsgruppe mit Beutelaufbau, in die Insekten weiterhin gelangen können.</p>",
        "items": [
          [
            "Freier Zugang minus Besucher ausgeschlossen (Prozentpunkte)",
            48,
            "72 − 24 = 48 Prozentpunkte. Mit Besucherzugang liegt der Fruchtanteil deutlich höher; relativ ist er dreimal so hoch wie bei Ausschluss. Prozentpunkte und relative Prozentänderung sind verschiedene Angaben."
          ],
          [
            "Besucher ausgeschlossen + Handbestäubung minus Besucher ausgeschlossen (Prozentpunkte)",
            44,
            "68 − 24 = 44 Prozentpunkte. Gezielte Pollenzufuhr unter Ausschluss der Besucher hebt den Fruchtanteil stark an."
          ],
          [
            "Freier Zugang minus Scheinbehandlung mit offenen Beuteln (Prozentpunkte)",
            2,
            "72 − 70 = 2 Prozentpunkte. Bei beiden Gruppen bleiben Besucher zugelassen; beide erreichen einen ähnlichen Fruchtanteil. Das passt zum Zusammenhang zwischen wirksamer Pollenübertragung und Fruchtbildung."
          ]
        ],
        "hint": "Prozentpunkte sind die direkte Differenz zweier Prozentangaben; teile nicht durch den Ausgangswert.",
        "explanation": "72−24=48, 68−24=44 und 72−70=2 Prozentpunkte. Mit Besucherzugang beziehungsweise gezielter Handbestäubung entstehen mehr Früchte als ohne beides. Die Pollenzufuhr trägt damit im Modell zur Fortpflanzung des Salbeis bei.",
        "interpretation": [
          [
            "Der Vergleich zwischen freiem Zugang und ausgeschlossenem Besuch spricht im Versuch für einen Beitrag der Blütenbesucher zur Fruchtbildung.",
            "Richtig",
            "Bei Zugang bilden 72 %, bei ausgeschlossenem Besuch 24 % Früchte. Der Unterschied stützt einen Nutzen des Besuchs für die Pflanze; Handbestäubung und Scheinbehandlung helfen, alternative Ursachen zu prüfen."
          ],
          [
            "Der Vergleich „Besucher ausgeschlossen“ mit „Besucher ausgeschlossen + Handbestäubung“ spricht dafür, dass fehlende Pollenübertragung die Fruchtbildung verringert.",
            "Richtig",
            "Unter weiterhin weitgehend geschlossenem Beutel steigt die Fruchtbildung nach gezielter Pollenzufuhr um 44 Prozentpunkte. Das spricht für Pollenmangel statt ausschließlich für eine Beutelschädigung."
          ],
          [
            "Die Scheinbehandlung soll prüfen, ob allein der Versuchsaufbau den starken Rückgang erklärt.",
            "Richtig",
            "Mit offenem Beutelzugang liegt die Fruchtbildung bei 70 % und damit nahe an 72 % ohne Beutel. Das spricht gegen den Aufbau allein als Erklärung des großen Rückgangs, schließt aber Unterschiede im Mikroklima nicht sicher aus."
          ],
          [
            "Wenn Handbestäubung die Fruchtbildung fördert, ist der Blütenbesuch für die Pflanze grundsätzlich nutzlos.",
            "Falsch",
            "Handbestäubung übernimmt die Pollenübertragung, die sonst Besucher leisten können. Ein Ersatz der Funktion zeigt nicht, dass diese Funktion nutzlos ist; er unterstreicht ihre Bedeutung für die Fruchtbildung."
          ],
          [
            "Die 24 % Fruchtbildung ohne Besucher beweisen, dass jede Salbeiblüte zwingend auf Insekten angewiesen ist.",
            "Falsch",
            "Im Modell bilden auch ohne Besucher einige Blüten Früchte. Denkbar wären etwa Selbstbestäubung oder unvollständiger Ausschluss; welche Erklärung zutrifft, wurde nicht untersucht. Eine zwingende Abhängigkeit jeder Blüte folgt nicht."
          ]
        ],
        "revision": "fachtransfer-2026-10-28"
      },
      {
        "title": "Was wird tatsächlich belegt?",
        "type": "choice",
        "prompt": "Prüfe jede Aussage anhand der vier Versuchsgruppen und der beschriebenen Beziehung zwischen Hummel und Salbei. Entscheide, ob die Materialien die Aussage stützen oder ob sie mehr behauptet, als untersucht wurde.",
        "options": [
          "Mit dem Material begründbar",
          "Nicht ausreichend belegt"
        ],
        "items": [
          [
            "Die Fruchtbildung ist bei Zugang höher als bei Ausschluss.",
            "Mit dem Material begründbar",
            "72 % mit Zugang liegen über 24 % ohne Zugang. Dieser konkrete Vergleich beschreibt die Modelldaten."
          ],
          [
            "Handbestäubung erhöht im Modell die Fruchtbildung gegenüber bloßem Ausschluss.",
            "Mit dem Material begründbar",
            "68 % nach Handbestäubung liegen um 44 Prozentpunkte über 24 %. Gezielte Pollenzufuhr kann den Rückgang im Modell weitgehend ausgleichen."
          ],
          [
            "Die Zahl 72 % beweist allein einen Vorteil für den Blütenbesucher.",
            "Nicht ausreichend belegt",
            "Fruchtbildung misst den Erfolg der Pflanze, nicht den des Tieres. Für den Nutzen der Hummel ist hier die im Material beschriebene Nektaraufnahme relevant."
          ],
          [
            "Für die Einordnung als Symbiose muss auch der Nutzen des Nektars für den Besucher berücksichtigt werden.",
            "Mit dem Material begründbar",
            "Eine Beziehung mit beidseitigem Nutzen setzt einen Vorteil für beide Partner voraus. Der Bestäubungsversuch erfasst nur die Pflanzenseite; das Material ergänzt die Nahrung für die Hummel."
          ],
          [
            "Die Unterschiede beweisen für alle realen Pflanzenarten denselben Effekt.",
            "Nicht ausreichend belegt",
            "Die Daten sind ein einzelner konstruierter Versuch am Salbei. Andere Arten, Besucher und Bedingungen können andere Wirkungen ergeben."
          ]
        ],
        "hint": "Fruchtbildung ist eine Messgröße der Pflanze. Ein beidseitiger Nutzen braucht Angaben zu beiden Partnern.",
        "explanation": "Die Modellwerte stützen einen Vorteil wirksamer Bestäubung für die Pflanze. Der Nutzen für das Tier wird durch die beschriebene Nahrungsaufnahme begründet, nicht durch die Fruchtzahl. Eine Verallgemeinerung auf alle Arten wäre unzulässig.",
        "revision": "deutung-2026-10-27-v2",
        "material": "<p><b>Versuchsfrage:</b> Erhöht der Zugang von Blütenbesuchern die Fruchtbildung beim Wiesen-Salbei? Vier Gruppen umfassen je 100 vergleichbare Blüten an mehreren Pflanzen. Licht, Wasser und Beobachtungszeit werden möglichst gleich gehalten. Die Zahlen sind konstruierte Übungsdaten.</p><ol><li><b>Freier Zugang – 72 %:</b> Blüten bleiben für Besucher offen.</li><li><b>Besucher ausgeschlossen – 24 %:</b> Feinmaschige Beutel umhüllen die Blüten vor dem Aufblühen. Sie lassen Luft und Licht durch, verhindern aber den Zutritt von Insekten. Es werden also Blütenbesucher ausgeschlossen, nicht Licht oder Wasser.</li><li><b>Besucher ausgeschlossen + Handbestäubung – 68 %:</b> Gleiche Beutel; während der Blütezeit wird Pollen von anderen Salbeipflanzen derselben Art gezielt von Hand auf die Narben gebracht (die Stellen der Blüten, die Pollen aufnehmen). Danach werden die Beutel wieder geschlossen.</li><li><b>Scheinbehandlung – 70 %:</b> Ein vergleichbarer Beutelaufbau mit großen offenen Zugängen lässt Besucher weiterhin zu. Er prüft, ob der Aufbau selbst den Befund erklären könnte. Temperatur und Luftfeuchte direkt an den Blüten können sich bei offenen und geschlossenen Beuteln dennoch unterscheiden.</li></ol><p>Erfasst wird in jeder Gruppe der Anteil der Blüten, die später Früchte bilden. Wie stark die Ergebnisse zwischen einzelnen Pflanzen schwanken, ist nicht angegeben; ebenso fehlen Ergebnisse weiterer Wiederholungen des gesamten Versuchs.</p><p><b>Prozentpunkte:</b> Das ist die Differenz zweier Prozentwerte. Ein Beispiel mit anderen Zahlen: Steigt ein Anteil von 10 % auf 25 %, sind das 15 Prozentpunkte. Die Scheinbehandlung ist hier die Vergleichsgruppe mit Beutelaufbau, in die Insekten weiterhin gelangen können.</p>"
      },
      {
        "title": "Wachstum und Samenbildung vergleichen",
        "type": "numeric",
        "prompt": "Vergleiche Ackerbohnen mit und ohne Schwarze Bohnenläuse. Die Zahlen im Material sind Durchschnittswerte je Pflanze. Berechne jeweils, um wie viel der Wert mit Läusen geringer ist: Wert ohne Läuse minus Wert mit Läusen. Trage nur Zahlen ein. Deute anschließend die Unterschiede bei Wachstum und Samenbildung.",
        "material": "<p><b>Modelldaten zur Ackerbohne:</b> Ohne Schwarze Bohnenläuse: Trockenmassezuwachs 12 g und 80 keimfähige Samen je Pflanze im Mittel. Mit Schwarzen Bohnenläusen: Trockenmassezuwachs 7 g und 35 keimfähige Samen. Alle untersuchten Bohnenpflanzen überleben. Die Läuse saugen Pflanzensaft und erhalten Nahrung.</p><p>Trockenmassezuwachs ist die neu gebildete Pflanzenmasse nach dem Entfernen des Wassers. Für diese Modellaufgabe werden die Werte nach acht Wochen verglichen. „Je Pflanze im Mittel“ bedeutet: Die Werte der untersuchten Pflanzen wurden addiert und durch ihre Anzahl geteilt.</p>",
        "items": [
          [
            "Abnahme des Zuwachses (g)",
            5,
            "12 − 7 = 5 g. Die Bohnen mit Läusen zeigen einen geringeren Zuwachs, obwohl sie überleben."
          ],
          [
            "Abnahme der Zahl keimfähiger Samen",
            45,
            "80 − 35 = 45 keimfähige Samen. Das verbleibende Ergebnis liegt unter der Hälfte von 80 und weist auf eine geringere Fortpflanzungsleistung hin."
          ]
        ],
        "hint": "Der Wirt muss für einen Schaden nicht sterben. Berücksichtige neben Wachstum auch die Fortpflanzung.",
        "explanation": "Der Zuwachs sinkt um 5 g und die mittlere Samenzahl um 45. Überleben schließt eine Schädigung nicht aus. Die Daten passen zur beschriebenen parasitischen Beziehung.",
        "interpretation": [
          [
            "Dass alle Ackerbohnen überleben, widerlegt einen Schaden durch die Bohnenläuse.",
            "Falsch",
            "Schaden bedeutet nicht zwingend Tod. Geringerer Zuwachs und weniger keimfähige Samen zeigen Nachteile trotz Überleben."
          ],
          [
            "Die Samenzahl ist mit Läusen auf weniger als die Hälfte des Werts ohne Läuse gesunken.",
            "Richtig",
            "Die Hälfte von 80 sind 40 Samen. 35 liegen darunter. Die Differenz von 45 Samen ist damit auch im Verhältnis zum Ausgangswert erheblich."
          ],
          [
            "Der Rückgang betrifft sowohl Wachstum als auch Fortpflanzungsleistung.",
            "Richtig",
            "12 gegenüber 7 g beschreibt das Wachstum, 80 gegenüber 35 keimfähigen Samen die Fortpflanzung. Beide Messgrößen liefern unterschiedliche Belege für einen Nachteil."
          ],
          [
            "Die angegebene Nahrungsaufnahme der Laus und die Nachteile für die Bohne passen zur Einordnung als Parasitismus.",
            "Richtig",
            "Die Laus profitiert (+), die lebende Wirtspflanze wird beeinträchtigt (−). Genau diese Wirkungsrichtung kennzeichnet hier Parasitismus."
          ]
        ],
        "revision": "fachtransfer-2026-10-28"
      },
      {
        "title": "Zwei Beziehungen begründet vergleichen",
        "type": "response",
        "prompt": "Vergleiche die beiden Paare Dunkle Erdhummel/Wiesen-Salbei und Schwarze Bohnenlaus/Ackerbohne in etwa 7–9 Sätzen. Beschreibe für jede der vier Arten den Nutzen oder Schaden. Belege deine Erklärung mit je einem Zahlenvergleich aus dem Bestäubungsversuch und dem Bohnenlausversuch. Ordne die Beziehungen fachlich ein. Erkläre abschließend, weshalb die Nahrungsaufnahme eines Tieres für eine Pflanze vorteilhaft, für eine andere aber nachteilig sein kann.",
        "criteria": [
          "Ich begründe die Wirkung auf beide Partner in beiden Beziehungen.",
          "Ich verwende passende Zahlen aus beiden Versuchen.",
          "Ich erkläre, weshalb Überleben nicht automatisch Schadensfreiheit bedeutet.",
          "Ich ordne die Beziehungen als Symbiose beziehungsweise Parasitismus ein und erkläre den Unterschied für die Pflanzenseite."
        ],
        "model": "Die Dunkle Erdhummel erhält am Wiesen-Salbei Nektar als Nahrung und überträgt dabei wirksam Pollen. Der Salbei profitiert durch die Unterstützung seiner Fortpflanzung: Im Modell bilden 72 % der zugänglichen Blüten Früchte, gegenüber 24 % ohne Besucherzugang. Da beide Partner einen Nutzen haben, handelt es sich um Symbiose im hier verwendeten Sinn. Auch die Schwarze Bohnenlaus erhält Nahrung von einer Pflanze, der Ackerbohne. Für die Bohne ist diese Beziehung jedoch nachteilig: Ihr Zuwachs sinkt von 12 auf 7 g, ihre Zahl keimfähiger Samen von 80 auf 35. Die Laus profitiert, während die lebende Wirtspflanze beeinträchtigt wird; dies kennzeichnet Parasitismus. Dass alle Bohnen überleben, hebt die Nachteile für Wachstum und Fortpflanzung nicht auf. Entscheidend für die Einordnung ist somit die Wirkung auf beide Partner, nicht allein die Nahrungsaufnahme des Tieres.",
        "revision": "fachtransfer-2026-10-28",
        "material": "<p><b>Versuchsfrage:</b> Erhöht der Zugang von Blütenbesuchern die Fruchtbildung beim Wiesen-Salbei? Vier Gruppen umfassen je 100 vergleichbare Blüten an mehreren Pflanzen. Licht, Wasser und Beobachtungszeit werden möglichst gleich gehalten. Die Zahlen sind konstruierte Übungsdaten.</p><ol><li><b>Freier Zugang – 72 %:</b> Blüten bleiben für Besucher offen.</li><li><b>Besucher ausgeschlossen – 24 %:</b> Feinmaschige Beutel umhüllen die Blüten vor dem Aufblühen. Sie lassen Luft und Licht durch, verhindern aber den Zutritt von Insekten. Es werden also Blütenbesucher ausgeschlossen, nicht Licht oder Wasser.</li><li><b>Besucher ausgeschlossen + Handbestäubung – 68 %:</b> Gleiche Beutel; während der Blütezeit wird Pollen von anderen Salbeipflanzen derselben Art gezielt von Hand auf die Narben gebracht (die Stellen der Blüten, die Pollen aufnehmen). Danach werden die Beutel wieder geschlossen.</li><li><b>Scheinbehandlung – 70 %:</b> Ein vergleichbarer Beutelaufbau mit großen offenen Zugängen lässt Besucher weiterhin zu. Er prüft, ob der Aufbau selbst den Befund erklären könnte. Temperatur und Luftfeuchte direkt an den Blüten können sich bei offenen und geschlossenen Beuteln dennoch unterscheiden.</li></ol><p>Erfasst wird in jeder Gruppe der Anteil der Blüten, die später Früchte bilden. Wie stark die Ergebnisse zwischen einzelnen Pflanzen schwanken, ist nicht angegeben; ebenso fehlen Ergebnisse weiterer Wiederholungen des gesamten Versuchs.</p><p><b>Prozentpunkte:</b> Das ist die Differenz zweier Prozentwerte. Ein Beispiel mit anderen Zahlen: Steigt ein Anteil von 10 % auf 25 %, sind das 15 Prozentpunkte. Die Scheinbehandlung ist hier die Vergleichsgruppe mit Beutelaufbau, in die Insekten weiterhin gelangen können.</p><p><b>Modelldaten zur Ackerbohne:</b> Ohne Schwarze Bohnenläuse: Trockenmassezuwachs 12 g und 80 keimfähige Samen je Pflanze im Mittel. Mit Schwarzen Bohnenläusen: Trockenmassezuwachs 7 g und 35 keimfähige Samen. Alle untersuchten Bohnenpflanzen überleben. Die Läuse saugen Pflanzensaft und erhalten Nahrung.</p><p>Trockenmassezuwachs ist die neu gebildete Pflanzenmasse nach dem Entfernen des Wassers. Für diese Modellaufgabe werden die Werte nach acht Wochen verglichen. „Je Pflanze im Mittel“ bedeutet: Die Werte der untersuchten Pflanzen wurden addiert und durch ihre Anzahl geteilt.</p>"
      }
    ]
  }
];
