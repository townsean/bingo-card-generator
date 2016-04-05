export class App {
    
  configureRouter(config, router) {
      config.title = "Bingo Card Generator";
      config.map([
          { route: ['', 'themes'], name: 'themes', moduleId: './pages/themes', nav: true, title: 'Home' },
          { route: 'about', name: 'about', moduleId: './pages/about', nav: true, title: 'About' },
          { route: 'contact', name: 'contact', moduleId: './pages/contact', nav: true, title: 'Contact' },
          { route: 'card-generator/:id', name: 'card-generator', moduleId: './pages/card-generator', nav: false },
          { route: 'random-drawing/:id', name: 'random-drawing', moduleId: './pages/random-drawing', nav: false }
      ]);
      
      this.router = router;
  }
}
