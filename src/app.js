export class App {
    
  configureRouter(config, router) {
      config.title = "Bingo Card Generator";
      config.map([
          { route: ['', 'home'], name: 'home', moduleId: './pages/home', nav: true, title: 'Home'},
          { route: 'themes', name: 'themes', moduleId: './pages/themes', nav: false, title: 'Themes' },
          { route: 'about', name: 'about', moduleId: './pages/about', nav: true, title: 'About' },
          { route: 'contact', name: 'contact', moduleId: './pages/contact', nav: true, title: 'Contact' },
          { route: 'card-generator/:id', name: 'card-generator', moduleId: './pages/card-generator', nav: false },
          { route: 'random-drawing/:id', name: 'random-drawing', moduleId: './pages/random-drawing', nav: false },
          { route: 'custom-theme', name: 'custom-theme', moduleId: './pages/custom-theme', nav: false, title: 'Custom Theme' }
      ]);
      
      this.router = router;
  }
}
