'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var App;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('App', App = function () {
                function App() {
                    _classCallCheck(this, App);
                }

                App.prototype.configureRouter = function configureRouter(config, router) {
                    config.title = "Bingo Card Generator";
                    config.map([{ route: ['', 'home'], name: 'home', moduleId: './pages/home', nav: true, title: 'Home' }, { route: 'themes', name: 'themes', moduleId: './pages/themes', nav: false, title: 'Themes' }, { route: 'about', name: 'about', moduleId: './pages/about', nav: true, title: 'About' }, { route: 'contact', name: 'contact', moduleId: './pages/contact', nav: true, title: 'Contact' }, { route: 'card-generator/:id', name: 'card-generator', moduleId: './pages/card-generator', nav: false }, { route: 'random-drawing/:id', name: 'random-drawing', moduleId: './pages/random-drawing', nav: false }, { route: 'custom-theme', name: 'custom-theme', moduleId: './pages/custom-theme', nav: false, title: 'Custom Theme' }]);

                    this.router = router;
                };

                return App;
            }());

            _export('App', App);
        }
    };
});
//# sourceMappingURL=app.js.map
