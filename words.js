// Each entry: English base fields + etymology (language-neutral) + translations for es, fr, de, nl
const WORDS = [
  { word: "ephemeral", pos: "adjective", definition: "Lasting for a very short time.", example: "The cherry blossoms' ephemeral beauty draws crowds every spring.",
    etymology: "From Greek 'ephemeros' (ἐφήμερος), meaning 'lasting only a day', from 'epi-' (on) + 'hemera' (day).",
    translations: {
      es: { word: "efímero", pos: "adjetivo", definition: "Que dura muy poco tiempo.", example: "La belleza efímera de los cerezos en flor atrae multitudes cada primavera." },
      fr: { word: "éphémère", pos: "adjectif", definition: "Qui dure très peu de temps.", example: "La beauté éphémère des cerisiers en fleurs attire les foules chaque printemps." },
      de: { word: "vergänglich", pos: "Adjektiv", definition: "Nur sehr kurze Zeit andauernd.", example: "Die vergängliche Schönheit der Kirschblüten zieht jeden Frühling Menschenmengen an." },
      nl: { word: "vergankelijk", pos: "bijvoeglijk naamwoord", definition: "Slechts heel even durend.", example: "De vergankelijke schoonheid van de kersenbloesem trekt elk voorjaar bezoekers." }
    } },
  { word: "petrichor", pos: "noun", definition: "The pleasant, earthy smell after rain falls on dry soil.", example: "She opened the window to let in the petrichor after the storm.",
    etymology: "Coined in 1964 from Greek 'petra' (rock/stone) + 'ichor', the fluid said to flow in the veins of Greek gods.",
    translations: {
      es: { word: "petricor", pos: "sustantivo", definition: "El olor agradable a tierra tras la lluvia sobre suelo seco.", example: "Abrió la ventana para que entrara el petricor después de la tormenta." },
      fr: { word: "pétrichor", pos: "nom", definition: "L'odeur agréable de terre après la pluie sur un sol sec.", example: "Elle ouvrit la fenêtre pour laisser entrer le pétrichor après l'orage." },
      de: { word: "Petrichor", pos: "Substantiv", definition: "Der angenehme, erdige Geruch nach Regen auf trockenem Boden.", example: "Sie öffnete das Fenster, um den Petrichor nach dem Sturm hereinzulassen." },
      nl: { word: "petrichor", pos: "zelfstandig naamwoord", definition: "De aangename, aardse geur na regen op droge grond.", example: "Ze opende het raam om de petrichor na de storm binnen te laten." }
    } },
  { word: "ineffable", pos: "adjective", definition: "Too great or extreme to be expressed in words.", example: "He felt an ineffable sense of relief when the plane finally landed.",
    etymology: "From Latin 'ineffabilis': 'in-' (not) + 'effabilis' (utterable), from 'effari' (to speak out).",
    translations: {
      es: { word: "inefable", pos: "adjetivo", definition: "Demasiado intenso para expresarse con palabras.", example: "Sintió un alivio inefable cuando el avión finalmente aterrizó." },
      fr: { word: "ineffable", pos: "adjectif", definition: "Trop intense pour être exprimé par des mots.", example: "Il ressentit un soulagement ineffable lorsque l'avion atterrit enfin." },
      de: { word: "unaussprechlich", pos: "Adjektiv", definition: "Zu groß oder intensiv, um in Worte gefasst zu werden.", example: "Er verspürte eine unaussprechliche Erleichterung, als das Flugzeug endlich landete." },
      nl: { word: "onuitsprekelijk", pos: "bijvoeglijk naamwoord", definition: "Te groot of te intens om in woorden uit te drukken.", example: "Hij voelde een onuitsprekelijke opluchting toen het vliegtuig eindelijk landde." }
    } },
  { word: "serendipity", pos: "noun", definition: "The occurrence of events by chance in a happy or beneficial way.", example: "Meeting her old mentor at the airport was pure serendipity.",
    etymology: "Coined by Horace Walpole in 1754, based on 'The Three Princes of Serendip', an old name for Sri Lanka.",
    translations: {
      es: { word: "serendipia", pos: "sustantivo", definition: "Hallazgo afortunado e inesperado.", example: "Encontrarse con su antiguo mentor en el aeropuerto fue pura serendipia." },
      fr: { word: "sérendipité", pos: "nom", definition: "Une découverte heureuse faite par hasard.", example: "Retrouver son ancien mentor à l'aéroport fut une pure sérendipité." },
      de: { word: "Serendipität", pos: "Substantiv", definition: "Ein glücklicher Zufall oder eine zufällige, positive Entdeckung.", example: "Ihren alten Mentor am Flughafen zu treffen war reine Serendipität." },
      nl: { word: "serendipiteit", pos: "zelfstandig naamwoord", definition: "Het bij toeval iets goeds of waardevols ontdekken.", example: "Haar oude mentor op het vliegveld tegenkomen was puur serendipiteit." }
    } },
  { word: "mellifluous", pos: "adjective", definition: "Sweet or musical; pleasant to hear.", example: "The narrator's mellifluous voice made even the instructions sound poetic.",
    etymology: "From Latin 'mel' (honey) + 'fluere' (to flow) — literally 'flowing with honey'.",
    translations: {
      es: { word: "melifluo", pos: "adjetivo", definition: "Dulce y agradable al oído.", example: "La voz melifluo del narrador hacía que hasta las instrucciones sonaran poéticas." },
      fr: { word: "mélodieux", pos: "adjectif", definition: "Doux et agréable à entendre.", example: "La voix mélodieuse du narrateur rendait même les instructions poétiques." },
      de: { word: "wohlklingend", pos: "Adjektiv", definition: "Süß oder musikalisch; angenehm zu hören.", example: "Die wohlklingende Stimme des Erzählers ließ sogar Anweisungen poetisch klingen." },
      nl: { word: "honingzoet", pos: "bijvoeglijk naamwoord", definition: "Zoetvloeiend en aangenaam om te horen.", example: "De honingzoete stem van de verteller liet zelfs de instructies poëtisch klinken." }
    } },
  { word: "ubiquitous", pos: "adjective", definition: "Present, appearing, or found everywhere.", example: "Smartphones have become ubiquitous in modern life.",
    etymology: "From Latin 'ubique', meaning 'everywhere', from 'ubi' (where).",
    translations: {
      es: { word: "ubicuo", pos: "adjetivo", definition: "Presente o que se encuentra en todas partes.", example: "Los smartphones se han vuelto ubicuos en la vida moderna." },
      fr: { word: "omniprésent", pos: "adjectif", definition: "Présent ou trouvé partout.", example: "Les smartphones sont devenus omniprésents dans la vie moderne." },
      de: { word: "allgegenwärtig", pos: "Adjektiv", definition: "Überall vorhanden oder zu finden.", example: "Smartphones sind im modernen Leben allgegenwärtig geworden." },
      nl: { word: "alomtegenwoordig", pos: "bijvoeglijk naamwoord", definition: "Overal aanwezig of te vinden.", example: "Smartphones zijn alomtegenwoordig geworden in het moderne leven." }
    } },
  { word: "loquacious", pos: "adjective", definition: "Tending to talk a great deal; talkative.", example: "The loquacious cab driver shared his life story before we even reached the hotel.",
    etymology: "From Latin 'loquax', from 'loqui' (to speak).",
    translations: {
      es: { word: "locuaz", pos: "adjetivo", definition: "Que tiende a hablar mucho.", example: "El locuaz taxista contó su vida entera antes de llegar al hotel." },
      fr: { word: "loquace", pos: "adjectif", definition: "Qui a tendance à beaucoup parler.", example: "Le chauffeur de taxi loquace raconta sa vie avant même que nous arrivions à l'hôtel." },
      de: { word: "redselig", pos: "Adjektiv", definition: "Dazu geneigt, viel zu reden; gesprächig.", example: "Der redselige Taxifahrer erzählte sein Leben, bevor wir überhaupt das Hotel erreichten." },
      nl: { word: "praatgraag", pos: "bijvoeglijk naamwoord", definition: "Geneigd om veel te praten; spraakzaam.", example: "De praatgrage taxichauffeur deelde zijn levensverhaal nog voor we het hotel bereikten." }
    } },
  { word: "labyrinthine", pos: "adjective", definition: "Intricate and confusing in structure; maze-like.", example: "We got lost in the labyrinthine alleys of the old town.",
    etymology: "From Greek 'labyrinthos', the mythical maze built to hold the Minotaur on Crete.",
    translations: {
      es: { word: "laberíntico", pos: "adjetivo", definition: "Intrincado y confuso, como un laberinto.", example: "Nos perdimos en las callejuelas laberínticas del casco antiguo." },
      fr: { word: "labyrinthique", pos: "adjectif", definition: "Complexe et déroutant, comme un labyrinthe.", example: "Nous nous sommes perdus dans les ruelles labyrinthiques de la vieille ville." },
      de: { word: "labyrinthisch", pos: "Adjektiv", definition: "Verschlungen und verwirrend, wie ein Labyrinth.", example: "Wir verirrten uns in den labyrinthischen Gassen der Altstadt." },
      nl: { word: "labyrintisch", pos: "bijvoeglijk naamwoord", definition: "Ingewikkeld en verwarrend van structuur; als een doolhof.", example: "We verdwaalden in de labyrintische steegjes van de oude stad." }
    } },
  { word: "petulant", pos: "adjective", definition: "Childishly sulky or bad-tempered.", example: "The toddler gave a petulant huff when told it was bedtime.",
    etymology: "From Latin 'petulans', from 'petere' (to seek, attack).",
    translations: {
      es: { word: "petulante", pos: "adjetivo", definition: "Malhumorado de forma infantil.", example: "El niño soltó un bufido petulante cuando le dijeron que era hora de dormir." },
      fr: { word: "irritable", pos: "adjectif", definition: "Boudeur ou de mauvaise humeur de façon enfantine.", example: "Le tout-petit poussa un soupir irritable quand on lui dit que c'était l'heure de dormir." },
      de: { word: "trotzig", pos: "Adjektiv", definition: "Kindisch schmollend oder schlecht gelaunt.", example: "Das Kleinkind schnaufte trotzig, als ihm gesagt wurde, dass es Schlafenszeit sei." },
      nl: { word: "humeurig", pos: "bijvoeglijk naamwoord", definition: "Kinderachtig mokkend of kortaf.", example: "De peuter blies humeurig toen er gezegd werd dat het bedtijd was." }
    } },
  { word: "nebulous", pos: "adjective", definition: "Vague, unclear, or ill-defined.", example: "Their plans for the future remained nebulous at best.",
    etymology: "From Latin 'nebulosus', from 'nebula' (mist, cloud).",
    translations: {
      es: { word: "nebuloso", pos: "adjetivo", definition: "Vago, poco claro o mal definido.", example: "Sus planes para el futuro seguían siendo, en el mejor de los casos, nebulosos." },
      fr: { word: "nébuleux", pos: "adjectif", definition: "Vague, peu clair ou mal défini.", example: "Leurs projets d'avenir restaient au mieux nébuleux." },
      de: { word: "nebulös", pos: "Adjektiv", definition: "Vage, unklar oder schlecht definiert.", example: "Ihre Zukunftspläne blieben bestenfalls nebulös." },
      nl: { word: "nevelig", pos: "bijvoeglijk naamwoord", definition: "Vaag, onduidelijk of slecht omschreven.", example: "Hun plannen voor de toekomst bleven op zijn best nevelig." }
    } },
  { word: "quintessential", pos: "adjective", definition: "Representing the most perfect or typical example of something.", example: "With its rolling hills and stone cottages, the village felt quintessentially English.",
    etymology: "From medieval Latin 'quinta essentia' ('fifth essence'), the substance thought to make up the heavenly bodies.",
    translations: {
      es: { word: "quintaesencial", pos: "adjetivo", definition: "Que representa el ejemplo más perfecto o típico de algo.", example: "Con sus colinas y casas de piedra, el pueblo parecía la quintaesencia de Inglaterra." },
      fr: { word: "quintessentiel", pos: "adjectif", definition: "Représentant l'exemple le plus parfait ou typique de quelque chose.", example: "Avec ses collines et ses cottages en pierre, le village semblait l'essence même de l'Angleterre." },
      de: { word: "typisch", pos: "Adjektiv", definition: "Das vollkommenste oder typischste Beispiel für etwas.", example: "Mit seinen sanften Hügeln und Steinhäusern wirkte das Dorf wie die Quintessenz Englands." },
      nl: { word: "schoolvoorbeeld", pos: "bijvoeglijk naamwoord", definition: "Het meest typische of perfecte voorbeeld van iets.", example: "Met zijn glooiende heuvels en stenen huisjes voelde het dorp typisch Engels aan." }
    } },
  { word: "surreptitious", pos: "adjective", definition: "Kept secret, especially because it would not be approved of.", example: "He took a surreptitious glance at his phone during the meeting.",
    etymology: "From Latin 'surripere' (to snatch secretly), from 'sub-' (under) + 'rapere' (to seize).",
    translations: {
      es: { word: "subrepticio", pos: "adjetivo", definition: "Hecho en secreto, especialmente porque no sería aprobado.", example: "Echó un vistazo subrepticio a su teléfono durante la reunión." },
      fr: { word: "subreptice", pos: "adjectif", definition: "Fait secrètement, surtout parce que cela ne serait pas approuvé.", example: "Il jeta un coup d'œil subreptice à son téléphone pendant la réunion." },
      de: { word: "heimlich", pos: "Adjektiv", definition: "Geheim gehalten, besonders weil es nicht gutgeheißen würde.", example: "Er warf während der Besprechung einen heimlichen Blick auf sein Telefon." },
      nl: { word: "heimelijk", pos: "bijvoeglijk naamwoord", definition: "In het geheim gedaan, vooral omdat het niet zou worden goedgekeurd.", example: "Hij wierp tijdens de vergadering een heimelijke blik op zijn telefoon." }
    } },
  { word: "luminous", pos: "adjective", definition: "Full of or giving off light; bright or shining.", example: "The jellyfish glowed with a luminous blue light in the dark water.",
    etymology: "From Latin 'luminosus', from 'lumen' (light).",
    translations: {
      es: { word: "luminoso", pos: "adjetivo", definition: "Que emite o está lleno de luz; brillante.", example: "La medusa brillaba con una luz azul luminosa en el agua oscura." },
      fr: { word: "lumineux", pos: "adjectif", definition: "Plein de lumière ou qui en émet ; brillant.", example: "La méduse brillait d'une lumière bleue lumineuse dans l'eau sombre." },
      de: { word: "leuchtend", pos: "Adjektiv", definition: "Voller Licht oder Licht ausstrahlend; hell oder glänzend.", example: "Die Qualle leuchtete mit einem leuchtend blauen Licht im dunklen Wasser." },
      nl: { word: "lichtgevend", pos: "bijvoeglijk naamwoord", definition: "Vol licht of licht uitstralend; helder of glanzend.", example: "De kwal gaf een lichtgevend blauw schijnsel af in het donkere water." }
    } },
  { word: "cacophony", pos: "noun", definition: "A harsh, discordant mixture of sounds.", example: "The street outside was a cacophony of horns and shouting vendors.",
    etymology: "From Greek 'kakophonia': 'kakos' (bad) + 'phone' (sound, voice).",
    translations: {
      es: { word: "cacofonía", pos: "sustantivo", definition: "Una mezcla de sonidos discordante y áspera.", example: "La calle de afuera era una cacofonía de bocinas y vendedores gritando." },
      fr: { word: "cacophonie", pos: "nom", definition: "Un mélange de sons discordants et désagréables.", example: "La rue était une cacophonie de klaxons et de vendeurs criant." },
      de: { word: "Kakophonie", pos: "Substantiv", definition: "Eine schroffe, disharmonische Mischung von Geräuschen.", example: "Die Straße draußen war eine Kakophonie aus Hupen und schreienden Verkäufern." },
      nl: { word: "kakofonie", pos: "zelfstandig naamwoord", definition: "Een schril, onharmonieus mengsel van geluiden.", example: "De straat buiten was een kakofonie van claxons en schreeuwende verkopers." }
    } },
  { word: "wistful", pos: "adjective", definition: "Having or showing a feeling of vague or regretful longing.", example: "She gave a wistful smile as she flipped through the old photo album.",
    etymology: "Likely from Middle English 'wistly' (intently), blended with 'wishful'.",
    translations: {
      es: { word: "nostálgico", pos: "adjetivo", definition: "Que muestra un anhelo vago y melancólico.", example: "Sonrió con nostalgia mientras hojeaba el viejo álbum de fotos." },
      fr: { word: "mélancolique", pos: "adjectif", definition: "Qui exprime un désir vague et empreint de regret.", example: "Elle eut un sourire mélancolique en feuilletant le vieil album photo." },
      de: { word: "wehmütig", pos: "Adjektiv", definition: "Ein vages, sehnsuchtsvolles Gefühl zeigend.", example: "Sie lächelte wehmütig, während sie das alte Fotoalbum durchblätterte." },
      nl: { word: "weemoedig", pos: "bijvoeglijk naamwoord", definition: "Een vaag, melancholisch verlangen tonend.", example: "Ze glimlachte weemoedig terwijl ze door het oude fotoalbum bladerde." }
    } },
  { word: "perfunctory", pos: "adjective", definition: "Carried out with minimum effort or reflection.", example: "He gave the report a perfunctory glance before signing it.",
    etymology: "From Latin 'perfunctorius', from 'perfungi' (to get through with).",
    translations: {
      es: { word: "superficial", pos: "adjetivo", definition: "Hecho con el mínimo esfuerzo o reflexión.", example: "Le echó un vistazo superficial al informe antes de firmarlo." },
      fr: { word: "expéditif", pos: "adjectif", definition: "Fait avec un minimum d'effort ou de réflexion.", example: "Il jeta un coup d'œil expéditif au rapport avant de le signer." },
      de: { word: "lustlos", pos: "Adjektiv", definition: "Mit minimalem Aufwand oder Überlegung ausgeführt.", example: "Er warf einen lustlosen Blick auf den Bericht, bevor er ihn unterschrieb." },
      nl: { word: "oppervlakkig", pos: "bijvoeglijk naamwoord", definition: "Uitgevoerd met minimale inspanning of aandacht.", example: "Hij gaf het rapport een oppervlakkige blik voordat hij het ondertekende." }
    } },
  { word: "effervescent", pos: "adjective", definition: "Vivacious and enthusiastic; bubbly.", example: "Her effervescent personality made every gathering more fun.",
    etymology: "From Latin 'effervescere', 'ex-' (out) + 'fervere' (to boil).",
    translations: {
      es: { word: "efervescente", pos: "adjetivo", definition: "Vivaz y entusiasta; burbujeante.", example: "Su personalidad efervescente hacía que cada reunión fuera más divertida." },
      fr: { word: "pétillant", pos: "adjectif", definition: "Vif et enthousiaste ; plein de vivacité.", example: "Sa personnalité pétillante rendait chaque rassemblement plus amusant." },
      de: { word: "spritzig", pos: "Adjektiv", definition: "Lebhaft und enthusiastisch; sprudelnd.", example: "Ihre spritzige Persönlichkeit machte jedes Treffen lustiger." },
      nl: { word: "bruisend", pos: "bijvoeglijk naamwoord", definition: "Levendig en enthousiast; uitbundig.", example: "Haar bruisende persoonlijkheid maakte elke bijeenkomst leuker." }
    } },
  { word: "obfuscate", pos: "verb", definition: "To render something unclear, unintelligible, or obscure.", example: "The company's report seemed designed to obfuscate its declining profits.",
    etymology: "From Latin 'obfuscare': 'ob-' (over) + 'fuscare' (to darken), from 'fuscus' (dark).",
    translations: {
      es: { word: "ofuscar", pos: "verbo", definition: "Hacer que algo sea confuso o difícil de entender.", example: "El informe de la empresa parecía diseñado para ofuscar sus ganancias decrecientes." },
      fr: { word: "obscurcir", pos: "verbe", definition: "Rendre quelque chose confus ou difficile à comprendre.", example: "Le rapport de l'entreprise semblait conçu pour obscurcir la baisse de ses profits." },
      de: { word: "verschleiern", pos: "Verb", definition: "Etwas unklar, unverständlich oder undurchsichtig machen.", example: "Der Unternehmensbericht schien darauf ausgelegt, die sinkenden Gewinne zu verschleiern." },
      nl: { word: "verdoezelen", pos: "werkwoord", definition: "Iets onduidelijk, onbegrijpelijk of vaag maken.", example: "Het bedrijfsrapport leek bedoeld om de dalende winsten te verdoezelen." }
    } },
  { word: "pernicious", pos: "adjective", definition: "Having a harmful effect, especially in a gradual or subtle way.", example: "The rumor had a pernicious influence on the team's morale.",
    etymology: "From Latin 'perniciosus', from 'pernicies' (destruction, ruin).",
    translations: {
      es: { word: "pernicioso", pos: "adjetivo", definition: "Que tiene un efecto dañino, especialmente de forma gradual o sutil.", example: "El rumor tuvo una influencia perniciosa en la moral del equipo." },
      fr: { word: "pernicieux", pos: "adjectif", definition: "Ayant un effet nuisible, surtout de façon graduelle ou subtile.", example: "La rumeur eut une influence pernicieuse sur le moral de l'équipe." },
      de: { word: "schädlich", pos: "Adjektiv", definition: "Eine schädliche Wirkung habend, besonders auf allmähliche oder subtile Weise.", example: "Das Gerücht hatte einen schädlichen Einfluss auf die Moral des Teams." },
      nl: { word: "verraderlijk", pos: "bijvoeglijk naamwoord", definition: "Schadelijk, vooral op een geleidelijke of subtiele manier.", example: "Het gerucht had een verraderlijke invloed op het teammoreel." }
    } },
  { word: "sonder", pos: "noun", definition: "The realization that each passerby has a complex life entirely invisible to you.", example: "Watching the crowded train platform, he was struck by a quiet sense of sonder.",
    etymology: "Coined for 'The Dictionary of Obscure Sorrows'; from French 'sonder' (to probe, to sound out).",
    translations: {
      es: { word: "sonder", pos: "sustantivo", definition: "La constatación de que cada transeúnte tiene una vida compleja invisible para ti.", example: "Mirando el andén lleno de gente, lo invadió una sensación silenciosa de sonder." },
      fr: { word: "sonder", pos: "nom", definition: "La prise de conscience que chaque passant a une vie complexe invisible pour vous.", example: "En observant le quai bondé, il fut saisi d'un sentiment discret de sonder." },
      de: { word: "Sonder", pos: "Substantiv", definition: "Die Erkenntnis, dass jeder Passant ein komplexes, für dich unsichtbares Leben führt.", example: "Beim Anblick des überfüllten Bahnsteigs überkam ihn ein leises Gefühl von Sonder." },
      nl: { word: "sonder", pos: "zelfstandig naamwoord", definition: "Het besef dat elke voorbijganger een complex leven heeft dat voor jou onzichtbaar is.", example: "Bij het zien van het drukke perron werd hij getroffen door een stil gevoel van sonder." }
    } },
  { word: "verisimilitude", pos: "noun", definition: "The appearance of being true or real.", example: "The film's attention to detail gave it a remarkable sense of verisimilitude.",
    etymology: "From Latin 'verisimilitudo': 'verus' (true) + 'similis' (similar).",
    translations: {
      es: { word: "verosimilitud", pos: "sustantivo", definition: "La apariencia de ser verdadero o real.", example: "La atención al detalle de la película le daba una notable verosimilitud." },
      fr: { word: "vraisemblance", pos: "nom", definition: "L'apparence de vérité ou de réalité.", example: "L'attention aux détails du film lui donnait une remarquable vraisemblance." },
      de: { word: "Wahrscheinlichkeit", pos: "Substantiv", definition: "Der Anschein, wahr oder real zu sein.", example: "Die Detailgenauigkeit des Films verlieh ihm eine bemerkenswerte Glaubwürdigkeit." },
      nl: { word: "geloofwaardigheid", pos: "zelfstandig naamwoord", definition: "De schijn van waarheid of echtheid.", example: "De aandacht voor detail gaf de film een opvallende geloofwaardigheid." }
    } },
  { word: "tenacious", pos: "adjective", definition: "Holding firmly to something; persistent and determined.", example: "Despite the setbacks, she remained tenacious in pursuing her goal.",
    etymology: "From Latin 'tenax', from 'tenere' (to hold).",
    translations: {
      es: { word: "tenaz", pos: "adjetivo", definition: "Que se aferra firmemente a algo; persistente y decidido.", example: "A pesar de los contratiempos, se mantuvo tenaz en la consecución de su objetivo." },
      fr: { word: "tenace", pos: "adjectif", definition: "Qui s'attache fermement à quelque chose ; persévérant et déterminé.", example: "Malgré les revers, elle resta tenace dans la poursuite de son objectif." },
      de: { word: "hartnäckig", pos: "Adjektiv", definition: "Fest an etwas festhaltend; beharrlich und entschlossen.", example: "Trotz der Rückschläge blieb sie hartnäckig bei der Verfolgung ihres Ziels." },
      nl: { word: "vastberaden", pos: "bijvoeglijk naamwoord", definition: "Hardnekkig en doelgericht; iets niet snel loslatend.", example: "Ondanks de tegenslagen bleef ze vastberaden haar doel nastreven." }
    } },
  { word: "ebullient", pos: "adjective", definition: "Cheerful and full of energy.", example: "The coach was ebullient after the team's surprise victory.",
    etymology: "From Latin 'ebullire' (to boil up/over): 'e-' (out) + 'bullire' (to boil).",
    translations: {
      es: { word: "exultante", pos: "adjetivo", definition: "Alegre y lleno de energía.", example: "El entrenador estaba exultante tras la sorprendente victoria del equipo." },
      fr: { word: "exubérant", pos: "adjectif", definition: "Joyeux et plein d'énergie.", example: "L'entraîneur était exubérant après la victoire surprise de l'équipe." },
      de: { word: "überschwänglich", pos: "Adjektiv", definition: "Fröhlich und voller Energie.", example: "Der Trainer war überschwänglich nach dem überraschenden Sieg des Teams." },
      nl: { word: "uitgelaten", pos: "bijvoeglijk naamwoord", definition: "Vrolijk en vol energie.", example: "De coach was uitgelaten na de verrassende overwinning van het team." }
    } },
  { word: "pellucid", pos: "adjective", definition: "Translucently clear; easy to understand.", example: "The lake's pellucid water revealed every pebble on the bottom.",
    etymology: "From Latin 'pellucidus': 'per-' (through) + 'lucidus' (clear, bright).",
    translations: {
      es: { word: "diáfano", pos: "adjetivo", definition: "Translúcido y claro; fácil de entender.", example: "El agua diáfana del lago revelaba cada guijarro del fondo." },
      fr: { word: "limpide", pos: "adjectif", definition: "Translucide et clair ; facile à comprendre.", example: "L'eau limpide du lac révélait chaque caillou du fond." },
      de: { word: "glasklar", pos: "Adjektiv", definition: "Durchscheinend klar; leicht verständlich.", example: "Das glasklare Wasser des Sees zeigte jeden Kieselstein am Grund." },
      nl: { word: "kristalhelder", pos: "bijvoeglijk naamwoord", definition: "Doorzichtig helder; gemakkelijk te begrijpen.", example: "Het kristalheldere water van het meer toonde elk kiezelsteentje op de bodem." }
    } },
  { word: "vicarious", pos: "adjective", definition: "Experienced through another person rather than directly.", example: "He took vicarious pleasure in his daughter's success.",
    etymology: "From Latin 'vicarius' (substitute), from 'vicis' (change, turn).",
    translations: {
      es: { word: "vicario", pos: "adjetivo", definition: "Experimentado a través de otra persona en lugar de directamente.", example: "Disfrutó de forma vicaria el éxito de su hija." },
      fr: { word: "vicariant", pos: "adjectif", definition: "Vécu à travers une autre personne plutôt que directement.", example: "Il prenait un plaisir vicariant dans le succès de sa fille." },
      de: { word: "stellvertretend", pos: "Adjektiv", definition: "Durch eine andere Person erlebt, statt direkt.", example: "Er empfand stellvertretende Freude am Erfolg seiner Tochter." },
      nl: { word: "plaatsvervangend", pos: "bijvoeglijk naamwoord", definition: "Ervaren via een ander, niet rechtstreeks.", example: "Hij beleefde plaatsvervangend plezier aan het succes van zijn dochter." }
    } },
  { word: "halcyon", pos: "adjective", definition: "Denoting a period of past time that was idyllically happy and peaceful.", example: "She often thought back to the halcyon days of her childhood summers.",
    etymology: "From Greek 'halkyon', a mythical bird said to calm the wind and waves while nesting.",
    translations: {
      es: { word: "apacible", pos: "adjetivo", definition: "Que denota un período pasado idílicamente feliz y tranquilo.", example: "A menudo recordaba los apacibles veranos de su infancia." },
      fr: { word: "paisible", pos: "adjectif", definition: "Désignant une période passée idylliquement heureuse et paisible.", example: "Elle repensait souvent aux étés paisibles de son enfance." },
      de: { word: "idyllisch", pos: "Adjektiv", definition: "Eine vergangene, idyllisch glückliche und friedliche Zeit bezeichnend.", example: "Sie dachte oft an die idyllischen Sommer ihrer Kindheit zurück." },
      nl: { word: "idyllisch", pos: "bijvoeglijk naamwoord", definition: "Verwijzend naar een periode in het verleden die vredig en gelukkig was.", example: "Ze dacht vaak terug aan de idyllische dagen van haar jeugdzomers." }
    } },
  { word: "fastidious", pos: "adjective", definition: "Very attentive to and concerned about accuracy and detail.", example: "The chef was fastidious about the freshness of every ingredient.",
    etymology: "From Latin 'fastidiosus' (disdainful), from 'fastidium' (loathing, distaste).",
    translations: {
      es: { word: "meticuloso", pos: "adjetivo", definition: "Muy atento y preocupado por la precisión y el detalle.", example: "El chef era meticuloso con la frescura de cada ingrediente." },
      fr: { word: "méticuleux", pos: "adjectif", definition: "Très attentif à la précision et aux détails.", example: "Le chef était méticuleux quant à la fraîcheur de chaque ingrédient." },
      de: { word: "penibel", pos: "Adjektiv", definition: "Sehr aufmerksam und besorgt um Genauigkeit und Details.", example: "Der Küchenchef war penibel bei der Frische jeder Zutat." },
      nl: { word: "kieskeurig", pos: "bijvoeglijk naamwoord", definition: "Zeer nauwgezet en veeleisend op detail.", example: "De chef was kieskeurig over de versheid van elk ingrediënt." }
    } },
  { word: "garrulous", pos: "adjective", definition: "Excessively talkative, especially about trivial matters.", example: "Our garrulous neighbor kept us on the porch for over an hour.",
    etymology: "From Latin 'garrulus', from 'garrire' (to chatter).",
    translations: {
      es: { word: "parlanchín", pos: "adjetivo", definition: "Excesivamente hablador, sobre todo de cosas triviales.", example: "Nuestro vecino parlanchín nos retuvo en el porche más de una hora." },
      fr: { word: "bavard", pos: "adjectif", definition: "Excessivement loquace, surtout sur des sujets insignifiants.", example: "Notre voisin bavard nous a gardés sur le porche pendant plus d'une heure." },
      de: { word: "geschwätzig", pos: "Adjektiv", definition: "Übermäßig redselig, besonders über belanglose Dinge.", example: "Unser geschwätziger Nachbar hielt uns über eine Stunde auf der Veranda fest." },
      nl: { word: "babbelziek", pos: "bijvoeglijk naamwoord", definition: "Overdreven praatziek, vooral over onbenullige zaken.", example: "Onze babbelzieke buurman hield ons meer dan een uur op de veranda vast." }
    } },
  { word: "indelible", pos: "adjective", definition: "Making marks that cannot be removed; impossible to forget.", example: "The trip left an indelible impression on everyone who attended.",
    etymology: "From Latin 'indelebilis': 'in-' (not) + 'delebilis' (able to be destroyed).",
    translations: {
      es: { word: "indeleble", pos: "adjetivo", definition: "Que deja marcas que no se pueden borrar; inolvidable.", example: "El viaje dejó una impresión indeleble en todos los asistentes." },
      fr: { word: "indélébile", pos: "adjectif", definition: "Qui laisse des marques impossibles à effacer ; inoubliable.", example: "Le voyage a laissé une impression indélébile sur tous les participants." },
      de: { word: "unauslöschlich", pos: "Adjektiv", definition: "Spuren hinterlassend, die nicht entfernt werden können; unvergesslich.", example: "Die Reise hinterließ bei allen Teilnehmern einen unauslöschlichen Eindruck." },
      nl: { word: "onuitwisbaar", pos: "bijvoeglijk naamwoord", definition: "Sporen achterlatend die niet verwijderd kunnen worden; onvergetelijk.", example: "De reis liet bij iedereen een onuitwisbare indruk achter." }
    } },
  { word: "panacea", pos: "noun", definition: "A solution or remedy for all difficulties or diseases.", example: "Exercise is not a panacea, but it helps with many health issues.",
    etymology: "From Greek 'panakeia': 'pan-' (all) + 'akos' (remedy).",
    translations: {
      es: { word: "panacea", pos: "sustantivo", definition: "Una solución o remedio para todos los problemas o enfermedades.", example: "El ejercicio no es una panacea, pero ayuda con muchos problemas de salud." },
      fr: { word: "panacée", pos: "nom", definition: "Une solution ou un remède à tous les problèmes ou maladies.", example: "L'exercice n'est pas une panacée, mais il aide avec de nombreux problèmes de santé." },
      de: { word: "Allheilmittel", pos: "Substantiv", definition: "Eine Lösung oder ein Heilmittel für alle Probleme oder Krankheiten.", example: "Sport ist kein Allheilmittel, hilft aber bei vielen Gesundheitsproblemen." },
      nl: { word: "panacee", pos: "zelfstandig naamwoord", definition: "Een oplossing of remedie voor alle problemen of ziekten.", example: "Bewegen is geen panacee, maar het helpt bij veel gezondheidsklachten." }
    } },
  { word: "quixotic", pos: "adjective", definition: "Exceedingly idealistic; unrealistic and impractical.", example: "His quixotic plan to sail around the world with no experience worried his friends.",
    etymology: "From Don Quixote, the idealistic hero of Cervantes' 1605 novel.",
    translations: {
      es: { word: "quijotesco", pos: "adjetivo", definition: "Excesivamente idealista; poco realista e impráctico.", example: "Su plan quijotesco de navegar alrededor del mundo sin experiencia preocupó a sus amigos." },
      fr: { word: "quichottesque", pos: "adjectif", definition: "Extrêmement idéaliste ; irréaliste et peu pratique.", example: "Son plan quichottesque de faire le tour du monde sans expérience inquiétait ses amis." },
      de: { word: "donquichottisch", pos: "Adjektiv", definition: "Übermäßig idealistisch; unrealistisch und unpraktisch.", example: "Sein donquichottischer Plan, ohne Erfahrung um die Welt zu segeln, beunruhigte seine Freunde." },
      nl: { word: "donquichotterig", pos: "bijvoeglijk naamwoord", definition: "Buitensporig idealistisch; onrealistisch en onpraktisch.", example: "Zijn donquichotterige plan om zonder ervaring de wereld rond te zeilen verontrustte zijn vrienden." }
    } },
  { word: "ruminate", pos: "verb", definition: "To think deeply about something.", example: "She liked to ruminate on old letters while sipping her morning tea.",
    etymology: "From Latin 'ruminari' (to chew the cud), from 'rumen' (throat, gullet).",
    translations: {
      es: { word: "rumiar", pos: "verbo", definition: "Pensar profundamente sobre algo.", example: "Le gustaba rumiar sobre cartas antiguas mientras tomaba el té de la mañana." },
      fr: { word: "ruminer", pos: "verbe", definition: "Réfléchir profondément à quelque chose.", example: "Elle aimait ruminer sur de vieilles lettres en buvant son thé du matin." },
      de: { word: "nachdenken", pos: "Verb", definition: "Tief über etwas nachdenken.", example: "Sie grübelte gern über alte Briefe, während sie ihren Morgentee trank." },
      nl: { word: "piekeren", pos: "werkwoord", definition: "Diep nadenken over iets.", example: "Ze piekerde graag over oude brieven terwijl ze haar ochtendthee dronk." }
    } },
  { word: "sycophant", pos: "noun", definition: "A person who acts obsequiously toward someone to gain advantage.", example: "The new manager was surrounded by sycophants eager to flatter him.",
    etymology: "From Greek 'sykophantes', originally meaning 'informer', from 'sykon' (fig) + 'phainein' (to show).",
    translations: {
      es: { word: "adulador", pos: "sustantivo", definition: "Una persona que actúa servilmente hacia alguien para obtener ventajas.", example: "El nuevo gerente estaba rodeado de aduladores ansiosos por halagarlo." },
      fr: { word: "flatteur", pos: "nom", definition: "Une personne qui agit de manière servile envers quelqu'un pour en tirer profit.", example: "Le nouveau directeur était entouré de flatteurs impatients de le complimenter." },
      de: { word: "Schmeichler", pos: "Substantiv", definition: "Eine Person, die sich unterwürfig verhält, um sich Vorteile zu verschaffen.", example: "Der neue Manager war von Schmeichlern umgeben, die ihn loben wollten." },
      nl: { word: "vleier", pos: "zelfstandig naamwoord", definition: "Iemand die kruiperig doet om voordeel te behalen.", example: "De nieuwe manager werd omringd door vleiers die hem maar wilden behagen." }
    } },
  { word: "torpor", pos: "noun", definition: "A state of physical or mental inactivity; lethargy.", example: "A heavy lunch left him in a torpor for the rest of the afternoon.",
    etymology: "From Latin 'torpor', from 'torpere' (to be numb or sluggish).",
    translations: {
      es: { word: "letargo", pos: "sustantivo", definition: "Un estado de inactividad física o mental.", example: "Un almuerzo pesado lo dejó en un letargo durante el resto de la tarde." },
      fr: { word: "torpeur", pos: "nom", definition: "Un état d'inactivité physique ou mentale.", example: "Un déjeuner copieux le laissa dans une torpeur pour le reste de l'après-midi." },
      de: { word: "Trägheit", pos: "Substantiv", definition: "Ein Zustand körperlicher oder geistiger Inaktivität.", example: "Ein schweres Mittagessen ließ ihn den restlichen Nachmittag in Trägheit verfallen." },
      nl: { word: "loomheid", pos: "zelfstandig naamwoord", definition: "Een staat van lichamelijke of geestelijke inactiviteit; traagheid.", example: "Een zware lunch liet hem de rest van de middag in een loomheid achter." }
    } }
];
