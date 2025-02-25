import drept from '../../public/images/font/drept.png';
import mkLogoThumbnail from '../../public/images/logo/logo-thumbnail.jpeg';
import logoGruen from '../../public/images/logo/logo-gruen.png';
import logoSchwarz from '../../public/images/logo/logo-schwarz.png';
import DKTrockenbau1 from '../../public/images/trockenbau-katalog/1.png';
import DKTrockenbau2 from '../../public/images/trockenbau-katalog/2.png';
import DKTrockenbau3 from '../../public/images/trockenbau-katalog/3.png';
import DKTrockenbau4 from '../../public/images/trockenbau-katalog/4.png';
import DKTrockenbau5 from '../../public/images/trockenbau-katalog/5.png';
import DKTrockenbau6 from '../../public/images/trockenbau-katalog/6.png';
import DKTrockenbau7 from '../../public/images/trockenbau-katalog/7.png';
import betaniaInstagramProfile1 from '../../public/images/instagram-posts/betania-instagram-profile1.jpeg';
import suiteInMe1 from '../../public/images/suite-in-me/suite-in-me.png';
import suiteInMe2 from '../../public/images/suite-in-me/suite-in-me-2.png';
import imageFilm1 from '../../public/images/imagefilm/image1.png';
import imageFilm2 from '../../public/images/imagefilm/image2.png';
import weihnachtsmusical from '../../public/images/weihnachtsmusical/weihnachtsmusical.jpeg';

import { Project } from '@/types/projects';

// TODO:
// - Add public properties to project
// - make images look better
export const projects: Project[] = [
  {
    title: 'Filmdreh - Suite in me',
    description: 'Zauberlehrling – Eine moderne Interpretation',
    thumbnail: suiteInMe1,
    images: [suiteInMe1, suiteInMe2],
    actionButtons: [
      {
        href: 'https://youtu.be/LEmNKN27XNo',
        text: 'Link zum YouTube video',
        primary: true,
      },
      {
        href: '/pdf/dialog-suite-me.pdf',
        text: 'Dialog',
      },
      {
        href: '/pdf/storyboard-suite-me.pdf',
        text: 'Storyboard',
      },
    ],
    slug: 'filmdreh-suite-in-me',
    content: (
      <div>
        <p>
          Im Rahmen eines Projekts in der Berufsschule haben meine drei Kollegen
          und ich die Aufgabe übernommen, die Geschichte des
          &quot;Zauberlehrlings&quot; in die heutige Zeit zu übertragen. Dabei
          entwickelten wir die Erzählung weiter, indem wir einen jungen Mann
          zeigten, der auf der Suche nach mehr Geld in ein pyramidales
          Geschäftssystem gerät. Der wachsende Druck führt dazu, dass er
          schließlich zu seinem früheren Leben zurückkehrt.
        </p>
        <p>
          Meine Rolle in diesem Projekt war besonders fokussiert auf die Regie,
          die Planung und das Drehbuch. Ich konnte viel Zeit in die
          Strukturierung und Organisation investieren, was mir die Möglichkeit
          gab, den gesamten kreativen Prozess mitzugestalten. Vom Storyboard
          über das Drehbuch bis hin zur Planung des Drehtags – ich war aktiv in
          allen wichtigen Phasen des Projekts beteiligt.
        </p>
        <p>
          Das Projekt war eine wertvolle Erfahrung, bei der ich nicht nur meine
          Fähigkeiten in der kreativen Arbeit und Teamkoordination verbessern
          konnte, sondern auch ein tieferes Verständnis für die komplexen
          Abläufe hinter der Filmproduktion gewann. Trotz der Herausforderungen,
          die wir während des Drehs hatten, war es ein spannender Prozess, der
          mir besonders viel Freude bereitet hat und mir zeigte, wie viel
          Planung und Arbeit in der Produktion eines Films steckt.
        </p>
      </div>
    ),
  },
  {
    title: 'Trockenbau-Katalog – Klarheit und Übersichtlichkeit',
    description:
      'Dieser Katalog wurde entwickelt, um die Dienstleistungen einer Trockenbaufirma auf einfache und übersichtliche Weise darzustellen.',
    thumbnail: DKTrockenbau1,
    images: [
      DKTrockenbau1,
      DKTrockenbau2,
      DKTrockenbau3,
      DKTrockenbau4,
      DKTrockenbau5,
      DKTrockenbau6,
      DKTrockenbau7,
    ],
    actionButtons: [
      { href: '/pdf/DK_Trockenbau.pdf', text: 'Live Vorschau', primary: true },
    ],
    slug: 'trockenbau-katalog',
    content: (
      <div>
        <p>
          Ziel war es, die verschiedenen Angebote klar zu gliedern und den
          Nutzern eine schnelle Orientierung zu bieten.
        </p>
        <p>
          Jedes Angebot wird durch prägnante Beschreibungen und unterstützende
          Bilder veranschaulicht, um den Lesern einen direkten Eindruck der
          Dienstleistungen zu vermitteln. Der Katalog ist sowohl in digitaler
          Form als auch in gedruckter Version erhältlich, um den Bedürfnissen
          unterschiedlicher Zielgruppen gerecht zu werden.
        </p>
        <p>
          Mit diesem Katalog bieten wir nicht nur eine Informationsquelle,
          sondern auch eine klare Struktur, die es ermöglicht, die verschiedenen
          Trockenbauleistungen schnell und effizient zu verstehen.
        </p>
      </div>
    ),
  },
  // {
  //   title: 'Umweltfreundlich erschaffen – Die natürliche Bindung des Stillens',
  //   description:
  //     'Für den Fotowettbewerb mit dem Thema „Umweltfreundlichkeit im Alltag“ habe ich mich mit einem besonders natürlichen und umweltfreundlichen Prozess beschäftigt: dem Stillen.',
  //   slug: 'umweltfreundlich-erschaffen-die-natuerliche-bindung-des-stillens',
  //   tags: ['Photoshop'],
  //   content: (
  //     <div>
  //       <p>
  //         Stillen ist nicht nur eine der nachhaltigsten Möglichkeiten, ein Kind
  //         zu ernähren, sondern auch ein Akt, der tief mit der natürlichen
  //         Ordnung und den Bedürfnissen des menschlichen Körpers verbunden ist.
  //         Es erfordert keine Verpackung, keinen Transport und keine
  //         Ressourcennutzung außer dem, was die Natur bereits zur Verfügung
  //         stellt.
  //       </p>
  //       <p>
  //         Stillen fördert zudem eine intensive Bindung zwischen Mutter und Kind
  //         – eine einzigartige Form der Intimität, die in ihrer Natürlichkeit
  //         nicht nur das Wohl des Kindes, sondern auch das der Umwelt im Blick
  //         hat. Diese intime Verbindung ist nicht nur ein Zeichen der Fürsorge,
  //         sondern auch ein Symbol für die enge Beziehung zwischen Mensch und
  //         Natur.
  //       </p>
  //       <p>
  //         Deshalb habe ich den Titel „Umweltfreundlich erschaffen“ gewählt. Denn
  //         Stillen zeigt uns, dass wir als Menschen von Natur aus
  //         umweltfreundlich geschaffen sind – wir müssen lediglich zurückkehren
  //         zu den natürlichen, nachhaltigen Wegen, die uns die Natur vorgibt.
  //       </p>
  //     </div>
  //   ),
  // },
  {
    title: 'Ehrenamtliche Arbeit als Content Creator in der Kirchengemeinde',
    description:
      'Meine Reise als Mediengestalterin begann 2018, als ich den Instagram-Account meiner Kirchengemeinde ins Leben rief.',
    thumbnail: betaniaInstagramProfile1,
    actionButtons: [
      {
        href: 'https://www.instagram.com/betaniaingolstadt/',
        text: 'Link zur Instagram Seite',
        primary: true,
      },
    ],
    slug: 'ehrenamtliche-arbeit-als-content-creator-in-der-kirchengemeinde',
    content: (
      <div>
        <p>
          Anfangs war ich allein für die Gestaltung und Pflege des Accounts
          verantwortlich. Diese Herausforderung ermöglichte es mir, schnell zu
          lernen – von der visuellen Kommunikation bis hin zur Anwendung
          digitaler Tools. Über die Jahre konnte ich auch meine fotografischen
          Fähigkeiten weiterentwickeln, da ich regelmäßig Bilder für den Account
          produzierte und die Ästhetik der Gemeinde auf visuelle Weise
          mitgestaltete.
        </p>
        <p>
          Heute bin ich Teil eines vierköpfigen Teams, das gemeinsam kreative
          Ideen umsetzt und die digitale Präsenz unserer Gemeinde kontinuierlich
          stärkt. Doch nicht nur das: Inzwischen habe ich auch die Rolle
          übernommen, meine Kenntnisse und Erfahrungen an neue Teammitglieder
          weiterzugeben und sie anzulernen. Das ständige Experimentieren, Lernen
          und Weiterentwickeln ist nach wie vor ein wichtiger Teil meiner Arbeit
          – und eine Reise, die ich täglich mit Freude fortsetze.
        </p>
      </div>
    ),
  },
  {
    title: 'Imagefilm',
    description:
      '3D-Modelling, Lighting, Shading & Animation – Eine Welt aus Vorstellungskraft',
    thumbnail: imageFilm1,
    images: [imageFilm1, imageFilm2],
    slug: 'imagefilm',
    content: (
      <div>
        <p>
          Diese Pre-Renderings sind Einblicke in ein laufendes Projekt – einen
          Imagefilm, den ich im 3D-Raum erschaffe. Zwei der aufgebauten Szenen
          sowie eine Test-Animation zeigen den kreativen Prozess hinter der
          Gestaltung einer digitalen Welt.
        </p>
        <p>
          Für dieses Projekt arbeite ich mit Blender, einem Tool, das mir
          erlaubt, meiner Imagination freien Lauf zu lassen. Hier entstehen
          nicht nur Formen, sondern ganze Atmosphären – durch gezieltes
          Modelling, Lichtsetzung und Materialgestaltung. Jeder Schatten, jede
          Oberfläche und jede Bewegung trägt dazu bei, eine lebendige, visuelle
          Erzählung zu erschaffen.
        </p>
        <p>
          Dieses Projekt ist für mich eine spielerische, aber auch technisch
          anspruchsvolle Reise, bei der ich stetig neue Wege finde, um Räume,
          Stimmungen und Emotionen digital zum Leben zu erwecken.
        </p>
      </div>
    ),
  },
  {
    title: 'Weihnachtsmusical – Eine neue Perspektive auf die alte Geschichte',
    description:
      'Gemeinsam mit meiner Kollegin und Schwester setzten wir uns das Ziel, ein Weihnachtsmusical zu schaffen, das mehr zeigt als die übliche, idealisierte Erzählung von Maria und Josef.',
    thumbnail: weihnachtsmusical,
    actionButtons: [
      {
        href: '/pdf/weihnachtsmusical-vorschau.pdf',
        text: 'Script',
        primary: true,
      },
    ],
    slug: 'drept',
    content: (
      <div>
        <p>
          Wir wollten die Geschichte nicht nur in ihrer Schönheit darstellen,
          sondern auch die Schattenseiten, die Herausforderungen und die tiefen
          menschlichen Emotionen, die oft übersehen werden.
        </p>
        <p>
          Da wir kein bestehendes Werk fanden, das unseren Vorstellungen gerecht
          wurde, beschlossen wir, es selbst in die Hand zu nehmen. Innerhalb
          weniger Wochen schrieben wir gemeinsam ein vollständiges Musical, das
          rund eine Stunde lang war und den Gottesdienst auf eine neue,
          authentische Weise bereicherte.
        </p>
        <p>
          Dieses Projekt war nicht nur eine kreative Herausforderung, sondern
          auch eine Gelegenheit, unsere Vision von Weihnachten neu zu
          interpretieren und eine Geschichte zu erzählen, die sowohl die dunklen
          als auch die leuchtenden Aspekte des Lebens aufgreift. Es war ein
          intensiver, aber unvergesslicher Prozess, der uns beide als
          Künstlerinnen und als Schwestern noch enger zusammenbrachte.
        </p>
      </div>
    ),
  },
  {
    title: 'Drept',
    description: 'Das ist meine eigene Schrift mit dem Namen Drept.',
    thumbnail: drept,
    slug: 'drept',
    content: (
      <div>
        <p>
          Auf Rumänsich bedeutet das Gerade oder Gerecht. Und Gerechtigkeit ohne
          Liebe ist hart daher ist jeder punkt ein Herz.
        </p>
      </div>
    ),
  },
  {
    title: 'MK Logo – Der Mauszeiger als Signatur meiner Kreativität',
    description:
      'In einer Welt, in der jeder Klick eine Entscheidung ist, jedes Symbol eine Sprache spricht und jedes Zeichen eine Geschichte erzählt, wollte ich ein Zeichen setzen – mein eigenes.',
    thumbnail: mkLogoThumbnail,
    images: [logoGruen, logoSchwarz],
    slug: 'logos',
    content: (
      <div>
        <p>
          Ich begann mit einer Suche. Nicht nach einem beliebigen Symbol,
          sondern nach einem, das mich repräsentiert. Einem, das überall
          existiert, doch oft übersehen wird. Der Mauszeiger – das universelle
          Werkzeug der digitalen Schöpfung. Er verbindet Ideen mit Umsetzung,
          Gedanken mit Form, Konzepte mit Realität.
        </p>
        <p>
          In dieses Symbol habe ich meine Initialen, MK, eingeflochten. Kein
          fremdes Zeichen, sondern eines, das mit mir wächst, sich in jedem
          kreativen Prozess wiederfindet und als stiller Begleiter meiner
          Designs fungiert. So ist mein Logo nicht nur ein Erkennungsmerkmal,
          sondern ein Bekenntnis zur digitalen Gestaltung – präzise, funktional
          und doch voller Persönlichkeit.
        </p>
      </div>
    ),
  },
];
