'use strict';

System.register(['aurelia-framework', 'aurelia-router', '../service/bingo-card-service.js'], function (_export, _context) {
    "use strict";

    var inject, Router, BingoCardService, _dec, _class, CustomTheme;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_serviceBingoCardServiceJs) {
            BingoCardService = _serviceBingoCardServiceJs.BingoCardService;
        }],
        execute: function () {
            _export('CustomTheme', CustomTheme = (_dec = inject(BingoCardService, Router), _dec(_class = function () {
                function CustomTheme(bingoCardService, router) {
                    _classCallCheck(this, CustomTheme);

                    this.words = [];
                    this.newWord = "";

                    this.bingoCardService = bingoCardService;
                    this.router = router;
                }

                CustomTheme.prototype.activate = function activate() {
                    var _this = this;

                    var promise = new Promise(function (resolve, reject) {
                        _this.words = _this.bingoCardService.getCustomBingoThemeWords();
                        resolve();
                    });

                    return promise;
                };

                CustomTheme.prototype.onKeyDown = function onKeyDown(keycode) {
                    if (keycode === "Enter") {
                        addWord();
                    }
                };

                CustomTheme.prototype.addWord = function addWord() {
                    this.words.push(this.newWord);
                    this.newWord = "";
                };

                CustomTheme.prototype.draw = function draw() {
                    this.bingoCardService.setCustomBingoThemeWords(this.words);
                    this.router.navigateToRoute('random-drawing', { id: 'custom' });
                };

                CustomTheme.prototype.generate = function generate() {
                    this.bingoCardService.setCustomBingoThemeWords(this.words);
                    this.router.navigateToRoute('card-generator', { id: 'custom' });
                };

                return CustomTheme;
            }()) || _class));

            _export('CustomTheme', CustomTheme);
        }
    };
});
//# sourceMappingURL=custom-theme.js.map
