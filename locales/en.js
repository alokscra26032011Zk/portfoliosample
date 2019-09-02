const myAge = () => {
  const birthday = new Date(1991, 1, 26);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

module.exports = {
  links: {
    home: 'Home',
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact'
  },
  social: {
    title: 'Find me online or ',
    cta: 'get in touch'
  },
  home: {
    title: 'Home',
    introduction: `<strong>Interaction designer</strong> and <strong>front-end developer</strong>. Dreams in HTML, CSS and Javascript, lives in Bangalore, India. Helps other people build digital products.`
  },
  services: {
    title: 'Services',
    introduction: `As a freelancer with both graphical and technical skills, I can work on a project from the early stages (wireframes, mockups, prototypes) to the actual implementation (writing production ready code). Together we map out the most cost and time efficient design process.`,
    web: {
      title: 'Web App Design',
      description: `Good design contributes a lot to the global quality of a web app. Whether it's designing a new product or refreshing the design of an existing application, I'm happy to help making your project beautiful and easy to use.`
    },
    mobile: {
      title: 'Mobile Design',
      description: `The small and often rapid interactions on mobile devices bring some very specific design challenges. I can provide you with a custom design and will deliver ready to use assets tailored for your tech stack (whether your app is iOS, Android, React Native or based on web technology).`
    },
    prototyping: {
      title: 'Prototyping',
      description: `The details of design are often hard to express through static images. That's why your project can benefit from interactive prototypes. They can be helpful for both user testing and design implementation.`
    },
    frontend: {
      title: 'Front-end Development',
      description: `Browser technology is evolving rapidly. It offers a lot of possibilities but also demands for a specialised approach. I translate my designs to production ready HTML, CSS and Javascript. The result is a responsive, modern and scalable design system that is compatible with all modern browsers.`
    },
    animation: {
      title: 'Animation',
      description: `Well-timed and functional animations can not only cheer up your applications, they also improve its ease of use and perceived speed. Together with you I explore how your brand new or existing product can benefit from animation.`
    },
    consultancy: {
      title: 'Consultancy',
      description: `I'm happy to provide my expertise to your team. An audit of your design architecture or a workshop on modern web technology are just a few of the options. Feel free to contact me for more information.`
    }
  },
  work: {
    title: 'Work',
    projects: 'Projects',
    introduction: `To get an idea of my work, here are some public projects I worked on. Since I can't show everything here, I'm happy to discuss more of my work in person.`
  },
  cases: {
    archive: {
      title: 'Newspaper Archive Website',
      introduction: `For <a href="http://www.gva.be/" target="_blank">Gazet van Antwerpen</a>, I designed a refreshed version of their newspaper archive website. With digitized newspapers dating back to 1891, this online treasure house deserves a design that puts its content up front.`,
      copyright: `All logo's and brand elements are property of Mediahuis`
    },
    cycling: {
      title: 'Cycling Routes Mobile Website',
      introduction: `To promote its scenic cycling routes, Flemish region <a href="https://www.kempen.be/" target="_blank">De Kempen</a> decided to offer readers of Gazet Van Antwerpen a free mobile website with maps and local tips.`,
      description: `<p>The making of this website posed some challenges: there was only limited time and the end result should work offline and preferably also on older phones. To achieve this, I set up a static website with smart asset compression and an Application Cache. The latest being a little cumbersome and not as modern as Service Workers, it was the perfect choice to offer an offline experience on a wide arrange of devices.</p>`,
      copyright: 'All logos and brand elements are property of Mediahuis and Regio Kempen'
    },
    bedrock: {
      title: 'Bedrock Mobile Demo',
      introduction: `At <a href="https://mono.company/" target="_blank">Mono</a>, we developed our own open-source prototyping tool <a href="https://bedrock.mono.company/" target="_blank">Bedrock</a>. To show off it's capacities, I designed and developed a mobile demo app.`,
      description: `<p>This fictional colour palette app is built entirely in HTML, CSS and Javascript. Under the hood it makes use of <a href="https://pugjs.org/" target="_blank">PugJS</a> to easily reuse different components.</p><p>You can check out the source on <a href="https://github.com/monocompany2/bedrock-mobile-demo" target="_blank">Github</a>.`
    },
    portfolio: {
      title: 'This very website',
      introduction: `What better way to show some of your front-end skills than making your own website open source? I learned a lot from open source projects myself, so I'm happy to inspire other people with my code.`,
      description: `<p>I consider a portfolio website the perfect project to explore some new technologies. After a long time love for <a href="https://vuejs.org/" target="_blank">Vue JS</a> and some research I decided to go with <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>. It's a lightweight framework that allowed me to write Vue code and easily add things like SSR and routing to it.</p><p>Feel free to take a look at <a href="https://github.com/simonwuyts/portfolio-website" target="_blank">the source code on Github</a>.</p>`
    }
  },
  about: {
    title: 'About',
    introduction: `Hi, I'm Alok, ${myAge()} years old, living in and in love with Bangalore.`,
    description: `<h2>Professional</h2><p>After getting my bachelor's degree in Computer Science I decided to become a full-time digital designer. Late 2018, I began working as an Interaction Designer at <a href="http://www.interiocafe.com/" target="_blank">InterioCafe</a>, a Bangalore-based software startup.</p><p>In 2016 I worked as a freelance digital designer for <a href="http://www.crumblyy.com/" target="_blank">Crumblyy</a>, one of Delhi's biggest media companies. Later that year I joined <a href="http://colourwalls.com/" target="_blank">Colourwalls</a>, a group of digital designers with a shared love of great design and technology. Since 2018 I'm again focused on various smaller freelance projects.</p><h2>Personal</h2><p>Apart from design and code, I love playing the piano, going for a run or watching a movie in one of Bangalore's beautiful cinema's. I also love coffee, so we should definitely grab one together.</p>`
  },
  contact: {
    title: 'Contact',
    introduction: `Think we can make great things together?`,
    cta: `Let's get in touch!`
  }
};
