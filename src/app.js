export class App {
    
  configureRouter(config, router) {
      config.title = "Bingo Card Generator";
      config.map([
          { route: ['', 'themes'], name: 'themes', moduleId: './themes', nav: true, title: 'Home' },
          { route: 'about', name: 'about', moduleId: './about', nav: true, title: 'About' },
          { route: 'contact', name: 'contact', moduleId: './contact', nav: true, title: 'Contact' },
          { route: 'card-generator/:id', name: 'card-generator', moduleId: './card-generator', nav: false }
      ]);
      
      this.router = router;
  }
}
