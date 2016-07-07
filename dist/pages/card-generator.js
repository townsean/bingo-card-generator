'use strict';

System.register(['aurelia-framework', 'aurelia-router', '../service/bingo-card-service'], function (_export, _context) {
    "use strict";

    var inject, BindingEngine, Router, BingoCardService, _dec, _class, CardGenerator;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            BindingEngine = _aureliaFramework.BindingEngine;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_serviceBingoCardService) {
            BingoCardService = _serviceBingoCardService.BingoCardService;
        }],
        execute: function () {
            _export('CardGenerator', CardGenerator = (_dec = inject(BingoCardService, BindingEngine, Router), _dec(_class = function () {
                function CardGenerator(bingoCardService, bindingEngine, router) {
                    _classCallCheck(this, CardGenerator);

                    this.cardCount = 15;

                    this.bingoCardService = bingoCardService;
                    this.bindingEngine = bindingEngine;
                    this.router = router;
                }

                CardGenerator.prototype.activate = function activate(params) {
                    var _this = this;

                    if (params.id === 'custom') {
                        var promise = new Promise(function (resolve, reject) {
                            _this.words = _this.bingoCardService.getCustomBingoThemeWords();
                            _this.cards = _this.getGeneratedCards(_this.cardCount, _this.words);
                            _this.subscription = _this.bindingEngine.propertyObserver(_this, 'cardCount').subscribe(function (newValue, oldValue) {
                                _this.cards = _this.getGeneratedCards(_this.cardCount, _this.words);
                            });
                            resolve();
                        });

                        return promise;
                    }

                    return this.bingoCardService.getBingoThemeById(Number(params.id)).then(function (theme) {
                        return _this.theme = theme;
                    }).then(function () {
                        _this.cards = _this.getGeneratedCards(_this.cardCount, _this.theme.words);
                        _this.subscription = _this.bindingEngine.propertyObserver(_this, 'cardCount').subscribe(function (newValue, oldValue) {
                            _this.cards = _this.getGeneratedCards(_this.cardCount, _this.theme.words);
                        });
                    });
                };

                CardGenerator.prototype.deactivate = function deactivate() {
                    this.subscription.dispose();
                };

                CardGenerator.prototype.getGeneratedCards = function getGeneratedCards(count, words) {
                    var cards = [];

                    for (var i = 0; i < count; i++) {
                        cards[i] = this.bingoCardService.getBingoCardData(words);
                    }

                    return cards;
                };

                CardGenerator.prototype.print = function print() {};

                CardGenerator.prototype.back = function back() {
                    this.router.navigateBack();
                };

                return CardGenerator;
            }()) || _class));

            _export('CardGenerator', CardGenerator);
        }
    };
});
//# sourceMappingURL=card-generator.js.map
