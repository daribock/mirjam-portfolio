import drept from '../../public/images/font/drept.png';
import mkLogo from '../../public/images/logo/logo-schwarz.png';
import fireAndLove from '../../public/images/logo/fal.png';
import visitenKarte from '../../public/images/visitenkarte/visitenkarte.png';
import DKTrockenbau1 from '../../public/images/trockenbau-katalog/1.png';
import DKTrockenbau2 from '../../public/images/trockenbau-katalog/2.png';
import DKTrockenbau3 from '../../public/images/trockenbau-katalog/3.png';
import DKTrockenbau4 from '../../public/images/trockenbau-katalog/4.png';
import DKTrockenbau5 from '../../public/images/trockenbau-katalog/5.png';
import DKTrockenbau6 from '../../public/images/trockenbau-katalog/6.png';
import DKTrockenbau7 from '../../public/images/trockenbau-katalog/7.png';
import instagramPostTaufe from '../../public/images/instagram-posts/taufe.png';
import instagramPostUnchained from '../../public/images/instagram-posts/unchained.png';
import instagramPostJugendtreff from '../../public/images/instagram-posts/jugendtreff.png';

import { Project } from '@/types/projects';

export const projects: Project[] = [
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
    href: 'https://www.canva.com/design/DAGbt5KuZvA/4tdvZv9xdnT9UIC92BQTdg/edit?utm_content=DAGbt5KuZvA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    slug: 'trockenbau-katalog',
    tags: ['Canva'],
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
  {
    title: 'Umweltfreundlich erschaffen – Die natürliche Bindung des Stillens',
    description:
      'Für den Fotowettbewerb mit dem Thema „Umweltfreundlichkeit im Alltag“ habe ich mich mit einem besonders natürlichen und umweltfreundlichen Prozess beschäftigt: dem Stillen.',
    slug: 'umweltfreundlich-erschaffen-die-natuerliche-bindung-des-stillens',
    tags: ['Photoshop'],
    content: (
      <div>
        <p>
          Stillen ist nicht nur eine der nachhaltigsten Möglichkeiten, ein Kind
          zu ernähren, sondern auch ein Akt, der tief mit der natürlichen
          Ordnung und den Bedürfnissen des menschlichen Körpers verbunden ist.
          Es erfordert keine Verpackung, keinen Transport und keine
          Ressourcennutzung außer dem, was die Natur bereits zur Verfügung
          stellt.
        </p>
        <p>
          Stillen fördert zudem eine intensive Bindung zwischen Mutter und Kind
          – eine einzigartige Form der Intimität, die in ihrer Natürlichkeit
          nicht nur das Wohl des Kindes, sondern auch das der Umwelt im Blick
          hat. Diese intime Verbindung ist nicht nur ein Zeichen der Fürsorge,
          sondern auch ein Symbol für die enge Beziehung zwischen Mensch und
          Natur.
        </p>
        <p>
          Deshalb habe ich den Titel „Umweltfreundlich erschaffen“ gewählt. Denn
          Stillen zeigt uns, dass wir als Menschen von Natur aus
          umweltfreundlich geschaffen sind – wir müssen lediglich zurückkehren
          zu den natürlichen, nachhaltigen Wegen, die uns die Natur vorgibt.
        </p>
      </div>
    ),
  },
  {
    title: 'Ehrenamtliche Arbeit als Content Creator in der Kirchengemeinde',
    description:
      'Meine Reise als Mediengestalterin begann 2018, als ich den Instagram-Account meiner Kirchengemeinde ins Leben rief.',
    thumbnail: instagramPostTaufe,
    images: [
      instagramPostTaufe,
      instagramPostJugendtreff,
      instagramPostUnchained,
    ],
    href: 'https://www.instagram.com/betaniaingolstadt/',
    slug: 'ehrenamtliche-arbeit-als-content-creator-in-der-kirchengemeinde',
    tags: ['Canva'],
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
    thumbnail: mkLogo,
    images: [mkLogo, fireAndLove],
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
  {
    title: 'Visitenkarte',
    description: 'Meine eigene Visitenkarte',
    thumbnail: visitenKarte,
    slug: 'visitenkarte',
  },
];
