const myAge = () => {
  const birthday = new Date(1991, 1, 26);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

module.exports = {
  links: {
    home: 'Home',
    services: 'Diensten',
    work: 'Portfolio',
    about: 'Over mij',
    contact: 'Contact'
  },
  social: {
    title: 'Vind me online of ',
    cta: 'stuur een mailtje'
  },
  home: {
    title: 'Home',
    introduction: `<strong>Interaction designer</strong> en <strong>front-end developer</strong>, droomt in HTML, CSS en Javascript, woont in Gent. Helpt ondernemers bij het bouwen van digitale oplossingen.`
  },
  services: {
    title: 'Diensten',
    introduction: `Als freelancer met een combinatie van grafische en technische kennis kan ik de ontwikkeling van een project opvolgen van wireframes, over interactieve prototypes tot samenwerking met developers. Samen stippelen we het meest tijds- en kostenefficiënte designproces uit.`,
    web: {
      title: 'Web App Design',
      description: `Goed design is erg bepalend voor de kwaliteit van een webapp. Of het nu om het ontwerpen van een nieuw product gaat of om het opfrissen van een bestaande applicatie, ik help graag om uw project te laten uitblinken in gebruiksgemak.`
    },
    mobile: {
      title: 'Mobile Design',
      description: `De kleine en vaak snelle interacties op mobiele apparaten brengen een heel aantal specifieke uitdagingen met zich mee op designvlak. Ik help u bij het ontwikkelen van een ontwerp op maat en lever op basis van de technische set-up (iOS, Android, React Native, webtechnologie) gebruiksklare resultaten op.`
    },
    prototyping: {
      title: 'Prototyping',
      description: `De details in een ontwerp zijn vaak niet helemaal te vatten in een statische afbeelding. Daarom lever ik ook interactieve prototypes die zowel gebruikt kunnen worden bij gebruikerstesten als bij de vertaling van ontwerp naar implementatie.`
    },
    frontend: {
      title: 'Front-end Development',
      description: `Browsertechnologie evolueert steeds sneller. Dat biedt meer mogelijkheden, maar vraagt ook een gespecialiseerde aanpak. Ik vertaal de ontwerpen die ik maak naar HTML, CSS en Javascript van productieniveau. Het resultaat is een responsief, modern en schaalbaar designsysteem dat compatibel is met alle moderne browsers.`
    },
    animation: {
      title: 'Animatie',
      description: `Goed getimede en functionele animaties kunnen uw applicaties niet enkel opvrolijken, maar komen vaak ook de gebruiksvriendelijkheid en gepercipieerde snelheid ten goede. Samen met u bekijk ik hoe animaties een bestaand of nieuw product kunnen verbeteren.`
    },
    consultancy: {
      title: 'Consultancy',
      description: `Ik stel mijn expertise graag ter beschikking aan uw team. Een audit van uw designarchitectuur of een workshop over moderne webtechnologieën zijn maar enkele van de mogelijkheden. U kan me vrijblijvend contacteren voor meer info.`
    }
  },
  work: {
    title: 'Portfolio',
    introduction: `Om een idee te krijgen van mijn werk vindt u hier een overzicht van enkele van mijn publieke projecten. Jammer genoeg kan ik hier niet alles tonen, maar ik licht mijn werk graag uitgebreider toe in een persoonlijk gesprek.`,
    projects: 'Projecten'
  },
  cases: {
    archive: {
      title: 'Archiefwebsite Gazet van Antwerpen',
      introduction: `Voor <a href="http://www.gva.be/" target="_blank">Gazet van Antwerpen</a> maakte ik een nieuw ontwerp voor hun archiefwebsite. Deze digitale schatkist, met gedigitaliseerde kranten vanaf 1891, verdient een ontwerp dat inhoud op de eerste plaats zet.`,
      copyright: `Logo's en merken zijn eigendom van Mediahuis`
    },
    cycling: {
      title: 'Mobiele fietsroutes-webapp',
      introduction: `Om haar prachtige fietsroutes te promoten besloot regio <a href="https://www.kempen.be/" target="_blank">De Kempen</a> de lezers van Gazet van Antwerpen een gratis mobiele webapp aan te bieden met fietsroutes en lokale tips.`,
      description: `<p>De ontwikkeling van deze website stelde me voor een aantal uitdagingen: de oplevertijd was beperkt het eindresultaat moest offline werken én compatibel zijn met oudere smartphones. Daarom koos ik voor een statische website in combinatie met een Application Cache. Die technologie is iets ouder en omslachtiger dan het nieuwere Service Workers, maar was de perfecte keuze om tegelijk offline-opties en een zo hoog mogelijke compatibiliteit te garanderen.</p>`,
      copyright: `Logo's en merken zijn eigendom van Mediahuis en Regio Kempen`
    },
    bedrock: {
      title: 'Bedrock Mobile Demo',
      introduction: `Bij <a href="https://mono.company/" target="_blank">Mono</a> ontwikkelden we onze eigen open-source prototyping tool <a href="https://bedrock.mono.company/" target="_blank">Bedrock</a>. Om de uitgebreide opties daarvan te tonen aan geïnteresseerde developers ontwikkelde ik een mobiele demo-webapp.`,
      description: `<p>Deze fictieve kleurenpalet-applicatie is volledig gebouwd met webtechnologie (HTML, CSS en Javascript) n maakt gebruik van <a href="https://pugjs.org/" target="_blank">PugJS</a> om makkelijk verschillende componenten te herbruiken.</p><p>De broncode is te bekijken op <a href="https://github.com/monocompany2/bedrock-mobile-demo" target="_blank">Github</a>.</p>`
    },
    portfolio: {
      title: 'Simonwuyts.com',
      introduction: `Geen betere manier om je front-endskills te tonen, dan de broncode van je eigen website open-source te maken. Ik leerde zelf heel veel bij van open-sourceprojecten en inspireer dan ook graag anderen met mijn code.`,
      description: `<p>Werken aan een nieuwe portfoliowebsite betekent voor mij ook experimenteren met nieuwe technologieën. Na al een tijdje verkocht te zijn aan <a href="https://vuejs.org/" target="_blank">Vue JS</a> besloot ik voor dit project gebruik te maken van <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>. Dat framework liet me toe deze website op Vue te baseren en biedt een aantal extra's zoals server-side rendering en routing.</p><p>Wie geïnteresseerd is, kan een kijkje nemen in <a href="https://github.com/simonwuyts/portfolio-website" target="_blank">de broncode op Github</a>.</p>`

    }
  },
  about: {
    title: 'Over mij',
    introduction: `Hey, ik ben Simon, ${myAge()} jaar en Antwerpenaar in Gent.`,
    description: `<h2>Professioneel</h2><p>Nadat ik afstudeerde als master in de communicatiewetenschappen besloot ik mij voltijds toe te leggen op digital design. Eind 2013 startte ik als Interaction Designer bij <a href="http://www.yesplan.be/" target="_blank">Yesplan</a>, een Gentse softwarestart-up.</p><p>In 2016 werkte ik als freelancer voor <a href="http://www.mediahuis.be/" target="_blank">Mediahuis</a>, één van België's grootste mediabedrijven. Later dat jaar ging ik aan de slag bij <a href="http://mono.company" target="_blank">Mono Company</a>, een groep digital designers met een gedeelde liefde voor technologie en goed design. Sinds 2018 focus ik me weer op verschillende kleinere freelanceprojecten.</p><h2>Persoonlijk</h2><p>Naast ontwerpen hou ik van piano spelen, de longen uit mijn lijf lopen of een filmpje meepikken in één van de prachtige bioscopen van Gent. Ik hou enorm van koffie, dus waarom drinken we er niet eens een samen?</p>`
  },
  contact: {
    title: 'Contact',
    introduction: `Zin om samen iets fantastisch te maken?`,
    cta: `Laat het me weten!`
  }
};
