import { Market, WilmaColor } from './types';

// Use a string path relative to the root.
// The build process (vite.config.ts) ensures this file is copied to the output directory.
const PLACEHOLDER_IMAGE = 'imageplaceholder.jpg';

export const WILMA_COLORS = {
  yellow: WilmaColor.Yellow,
  darkNavy: WilmaColor.DarkNavy,
  lightBlue: WilmaColor.LightBlue,
  mediumBlue: WilmaColor.MediumBlue,
  grey: WilmaColor.Grey,
  pink: WilmaColor.Pink,
};

export const MARKETS: Market[] = [
  // Nordrhein-Westfalen
  {
    id: 'essen',
    city: 'Essen',
    name: 'Internationaler Weihnachtsmarkt',
    region: 'Nordrhein-Westfalen',
    description: 'Sowohl kulinarische als auch künstlerische Vielfalt ist in Essen im Stadtzentrum geboten, da an über 170 Hütten Artikel aus vielen Ländern der ganzen Welt und dem gesamten Bundesgebiet angeboten werden. Von Leckereien aus Griechenland und Frankreich über Kunsthandwerk aus Tibet bis holländische Poffertjes ist alles dabei! Ein Highlight ist außerdem der Mittelaltermarkt am Flachsmarkt.',
    dates: '14.11. – 23.12.2025',
    lat: 51.4556,
    lng: 7.0116,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'muenster',
    city: 'Münster',
    name: 'Weihnachtsmarkt in Münster',
    region: 'Nordrhein-Westfalen',
    description: 'Münster hat sechs verschiedene Weihnachtsmärkte, die sich prima durch einen weihnachtlichen Spaziergang miteinander verbinden lassen, da sie so nah beieinanderliegen. Berühmt ist der romantische Lichterhimmel auf dem Platz des Westfälischen Friedens.',
    dates: '24.11. – 23.12.2025',
    lat: 51.9607,
    lng: 7.6261,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'dortmund',
    city: 'Dortmund',
    name: 'Dortmunder Weihnachtsstadt',
    region: 'Nordrhein-Westfalen',
    description: 'Seit 1996 hält die Weihnachtsstadt am Hansaplatz in Dortmund den Rekord für den höchsten Weihnachtsbaum mit einer Höhe von 45 Metern, der mit rund 48.000 kleinen Lichtern dekoriert wird. Der einmonatige Aufbau lohnt sich!',
    dates: '20.11. – 30.12.2025',
    lat: 51.5136,
    lng: 7.4653,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'koeln',
    city: 'Köln',
    name: 'Weihnachtsmarkt am Kölner Dom',
    region: 'Nordrhein-Westfalen',
    description: 'Das Besondere dieses Weihnachtsmarktes ist die Lage auf der Kölner Domplatte. Die Pavillons sind rund um den Dom aufgebaut und bieten Leckereien, Geschenke-Läden und Kunst.',
    dates: '17.11. – 23.12.2025',
    lat: 50.9413,
    lng: 6.9583,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'duesseldorf',
    city: 'Düsseldorf',
    name: 'Weihnachtsmarkt in Düsseldorf',
    region: 'Nordrhein-Westfalen',
    description: 'Am Düsseldorfer Rathaus und zu Füßen des Jan-Wellem-Standbilds, nur wenige Schritte vom Rheinufer entfernt, erstrahlt Düsseldorfs beliebtester Weihnachtsmarkt. Das Besondere ist ein fast 100 Jahre altes Karussell, was in Kombination mit den roten Holzbüdchen eine weihnachtliche Stimmung verbreitet.',
    dates: '20.11. – 30.12.2025',
    lat: 51.2277,
    lng: 6.7735,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'satzvey',
    city: 'Mechernich-Satzvey',
    name: 'Advent auf Burg Satzvey',
    region: 'Nordrhein-Westfalen',
    description: 'Der historische Weihnachtsmarkt auf der Wasserburg am Rand der Eifel kann nicht nur mit handgearbeiteten Geschenken und Räucherwerk aufwarten. Seit 15 Jahren präsentiert Burg Satzvey im Park auch ein Krippenspiel nach Vorlagen aus der Staufferzeit.',
    dates: '29. Nov – 21. Dez 2025 (Sa & So)',
    lat: 50.6225,
    lng: 6.7077,
    imageUrl: PLACEHOLDER_IMAGE
  },

  // Baden-Württemberg
  {
    id: 'esslingen',
    city: 'Esslingen',
    name: 'Esslinger Mittelaltermarkt',
    region: 'Baden-Württemberg',
    description: 'Auf dem Esslinger Mittelalter- und Weihnachtsmarkt erwacht jedes Jahr das sogenannte „dunkle Zeitalter“. Die Händler bieten in historischen Gewändern ihre mittelalterliche Handwerkskunst an.',
    dates: '25.11. – 22.12.2025',
    lat: 48.7428,
    lng: 9.3072,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'stuttgart',
    city: 'Stuttgart',
    name: 'Weihnachtsmarkt in Stuttgart',
    region: 'Baden-Württemberg',
    description: 'Das Besondere an diesem Christkindlmarkt in Stuttgart ist die traumhafte Kulisse, da der Markt in das Alte Schloss, die Stiftskirche, und in der barocken Schlossanlage des neuen Schlosses eingebettet ist.',
    dates: '26.11. – 23.12.2025',
    lat: 48.7758,
    lng: 9.1829,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'schwetzingen',
    city: 'Schwetzingen',
    name: 'Weihnachtsmarkt Schwetzingen',
    region: 'Baden-Württemberg',
    description: 'Das Schloss Schwetzingen und der Schlossgarten bilden den prächtigen Rahmen für den Kurfürstlichen Weihnachtsmarkt. Handwerk aus der Region gehört ebenso zur Angebotspalette in den weißen Zelten wie vielfältige kulinarische Spezialitäten.',
    dates: '27. Nov – 21. Dez 2025 (Do–So)',
    lat: 49.3857,
    lng: 8.5707,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'gengenbach',
    city: 'Gengenbach',
    name: 'Gengenbacher Adventskalender',
    region: 'Baden-Württemberg',
    description: 'Das Rathaus von Gengenbach verwandelt sich mit seinen 24 Fenstern in ein großes Adventskalenderhaus. Bereits seit über zwanzig Jahren werden an den beleuchteten Fenstern Werke bekannter Künstler präsentiert.',
    dates: '28.11. – 23.12.2025',
    lat: 48.4042,
    lng: 8.0150,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'ravennaschlucht',
    city: 'Breitnau',
    name: 'Weihnachtsmarkt Ravennaschlucht',
    region: 'Baden-Württemberg',
    description: 'Dieser Adventsmarkt wird eingerahmt vom Eisenbahn-Viadukt der Höllentalbahn, das 40 Meter über der Talenge thront, und der sattgrünen Landschaft des Schwarzwaldes. Die Ravennaschlucht liegt bei Breitnau und bietet insbesondere bei Schnee ein zauberhaftes Ambiente.',
    dates: '28. Nov – 21. Dez 2025 (Fr–So)',
    lat: 47.9250,
    lng: 8.0480,
    imageUrl: PLACEHOLDER_IMAGE
  },

  // Bayern
  {
    id: 'nuernberg',
    city: 'Nürnberg',
    name: 'Christkindlesmarkt',
    region: 'Bayern',
    description: 'Der wohl bekannteste und zugleich größte Weihnachtsmarkt Deutschlands befindet sich in der Nürnberger Altstadt und wird traditionell mit dem Prolog des Christkinds eröffnet.',
    dates: '28.11. – 30.12.2025',
    lat: 49.4520,
    lng: 11.0767,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'fraueninsel',
    city: 'Fraueninsel',
    name: 'Christkindlmarkt',
    region: 'Bayern',
    description: 'Dieser Weihnachtsmarkt liegt auf einer kleinen Insel im Chiemsee. Er ist somit der einzige Christkindlmarkt, der nur per Schiff zu erreichen ist und vor allem für Touristen ein beliebtes Ausflugsziel in der Adventszeit.',
    dates: '27.11–30.11 & 04.12–07.12.2025',
    lat: 47.8718,
    lng: 12.4253,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'rothenburg',
    city: 'Rothenburg ob der Tauber',
    name: 'Rothenburger Reiterlesmarkt',
    region: 'Bayern',
    description: 'Der Reiterlesmarkt in Rothenburg ob der Tauber gehört mit zu den ältesten Weihnachtsmärkten des Landes. Besondere Angebote sind altdeutsches Weihnachtsgebäck und weißer Glühwein.',
    dates: '21.11. – 23.12.2025',
    lat: 49.3768,
    lng: 10.1772,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'muenchen_main',
    city: 'München',
    name: 'Christkindlmarkt',
    region: 'Bayern',
    description: 'Münchens wohl schönster Weihnachtsmarkt erstreckt sich vom Marienplatz bis zur Neuhauser Straße quer durch die Innenstadt, wobei tägliche Livemusik vom Rathausbalkon ein weihnachtliches Ambiente bietet.',
    dates: '24.11. – 24.12.2025',
    lat: 48.1372,
    lng: 11.5761,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'muenchen_schwabing',
    city: 'München',
    name: 'Schwabinger Weihnachtsmarkt',
    region: 'Bayern',
    description: 'Wer es familiär und kreativ mag, sollte den Künstlermarkt an der Münchner Freiheit in München besuchen. Hier erwartet dich skurriles Kunsthandwerk aus Fotografie, Skulpturen oder auch Keramik.',
    dates: '28.11. – 24.12.2025',
    lat: 48.1616,
    lng: 11.5866,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'tegernsee',
    city: 'Tegernsee',
    name: 'Tegernseer Adventszauber',
    region: 'Bayern',
    description: 'Vor reizvoller Bergkulisse leuchtet der Tegernseer Adventszauber: Die Märkte in Bad Wiessee, Rottach-Egern und am Schloss in Tegernsee liegen direkt am Seeufer und sind durch Pendelschiffe und Busse miteinander verbunden.',
    dates: '29. Nov – 21. Dez 2025 (Sa & So)',
    lat: 47.7087,
    lng: 11.7563,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'wuerzburg',
    city: 'Würzburg',
    name: 'Weihnachtsmarkt Würzburg',
    region: 'Bayern',
    description: 'Insgesamt 125 Stände bieten vorweihnachtlichen Glanz. Der Würzburger Weihnachtsmarkt bietet neben Glühwein und Heißgetränken weihnachtliche Artikel und zahlreiche kulinarische Angebote.',
    dates: '28.11. – 23.12.2025',
    lat: 49.7939,
    lng: 9.9512,
    imageUrl: PLACEHOLDER_IMAGE
  },

  // Rhein-Main
  {
    id: 'frankfurt',
    city: 'Frankfurt am Main',
    name: 'Weihnachtsmarkt',
    region: 'Rhein-Main',
    description: 'Zwischen Römerberg und der geschichtsträchtigen Paulskirche findet in Frankfurt einer der schönsten und meistbesuchten Weihnachtsmärkte in Deutschlands statt. Bekannt u.a. für Bembel.',
    dates: '24.11. – 22.12.2025',
    lat: 50.1109,
    lng: 8.6821,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'kronberg',
    city: 'Kronberg',
    name: 'Weihnachtsmarkt Kronberg',
    region: 'Rhein-Main',
    description: 'Ein Kunsthandwerkermarkt vor der märchenhaften Kulisse der Burg bietet Inspiration für das ein oder andere Weihnachtsgeschenk.',
    dates: '06.12. – 07.12.2025',
    lat: 50.1793,
    lng: 8.5085,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'seligenstadt',
    city: 'Seligenstadt',
    name: 'Adventsmarkt Seligenstadt',
    region: 'Rhein-Main',
    description: 'Zum Rahmenprogramm gehören Kutschfahrten, Adventskonzerte im Rathaus-Innenhof und in der Einhard Basilika, der Hobby-Künstler-Markt Advent im Kloster und die Waldweihnacht.',
    dates: '27.11. – 14.12.2025',
    lat: 50.0433,
    lng: 8.9757,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'darmstadt',
    city: 'Darmstadt',
    name: 'Weihnachtsmarkt Darmstadt',
    region: 'Rhein-Main',
    description: 'Die adventlich geschmückte Innenstadt und die Weihnachtsbäume auf dem Marktplatz sorgen für Weihnachtsstimmung. Der Lange Ludwig funkelt mit 30.000 LEDs.',
    dates: '17.11. – 23.12.2025',
    lat: 49.8728,
    lng: 8.6512,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'wiesbaden',
    city: 'Wiesbaden',
    name: 'Sternschnuppenmarkt',
    region: 'Rhein-Main',
    description: 'Zauberhaftes Licht von rund 20 leuchtenden Lilien, vier illuminierten Toren, Schneeflocken, Sternen und Lichterketten lässt die Innenstadt in festlichem Glanz erstrahlen.',
    dates: '25.11. – 23.12.2025',
    lat: 50.0820,
    lng: 8.2414,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'mainz',
    city: 'Mainz',
    name: 'Weihnachtsstadt Mainz',
    region: 'Rhein-Main',
    description: 'Vom Historischen Weihnachtsmarkt auf den Domplätzen, den kleineren „Mainzer WinterZeit“-Märkten oder dem Neuwintermarkt auf dem Neubrunnenplatz – hier ist für alle etwas dabei!',
    dates: '27.11. – 23.12.2025',
    lat: 49.9994,
    lng: 8.2739,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'bad_vilbel',
    city: 'Bad Vilbel',
    name: 'Wasserburg Weihnachtsmarkt',
    region: 'Rhein-Main',
    description: 'Zauberhafter Bummel durch alte Gemäuer in der Stadt der Quellen. Kunsthandwerk erfreut das Auge, überall duftet es nach Glühwein.',
    dates: '13.12. – 14.12.2025',
    lat: 50.1852,
    lng: 8.7366,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'oberursel',
    city: 'Oberursel',
    name: 'Weihnachtsdorf',
    region: 'Rhein-Main',
    description: 'Das Oberurseler Weihnachtsdorf präsentiert sich mit weihnachtlichen Buden, Schankhütten sowie dem gemütlichen Weihnachtsstadl.',
    dates: '04.12. – 27.12.2025',
    lat: 50.2036,
    lng: 8.5770,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'hanau',
    city: 'Hanau',
    name: 'Weihnachtszauber Hanau',
    region: 'Rhein-Main',
    description: 'Zu Füßen des Nationaldenkmals der berühmten Märchensammler laden mehr als 75 Verkaufs- und Gastronomiestände zum Schlendern, Schlemmen und Genießen ein.',
    dates: '24.11. – 22.12.2025',
    lat: 50.1328,
    lng: 8.9169,
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'dreieich',
    city: 'Dreieich',
    name: 'Hayner Weihnachtsmarkt',
    region: 'Rhein-Main',
    description: 'Stände in bezaubernder Fachwerkkulisse und auf dem historischen Areal der Burg Hayn überraschen mit kreativem, hochwertigem Angebot.',
    dates: '06.12–08.12 & 13.12–15.12.2025',
    lat: 50.0076,
    lng: 8.7042,
    imageUrl: PLACEHOLDER_IMAGE
  }
];