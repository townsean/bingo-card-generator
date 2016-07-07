'use strict';

System.register(['aurelia-framework', 'aurelia-router', '../service/bingo-card-service'], function (_export, _context) {
    "use strict";

    var inject, Router, BingoCardService, _dec, _class, RandomDrawing;

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
        }, function (_serviceBingoCardService) {
            BingoCardService = _serviceBingoCardService.BingoCardService;
        }],
        execute: function () {
            _export('RandomDrawing', RandomDrawing = (_dec = inject(BingoCardService, Router), _dec(_class = function () {
                function RandomDrawing(bingoCardService, router) {
                    _classCallCheck(this, RandomDrawing);

                    this.remainingWords = [];
                    this.selectedWords = [];
                    this.drawnWord = '';

                    this.bingoCardService = bingoCardService;
                    this.router = router;
                }

                RandomDrawing.prototype.activate = function activate(params) {
                    var _this = this;

                    if (params.id === 'custom') {
                        var promise = new Promise(function (resolve, reject) {
                            _this.words = _this.bingoCardService.getCustomBingoThemeWords();
                            _this.remainingWords = JSON.parse(JSON.stringify(_this.words));
                            resolve();
                        });

                        return promise;
                    }

                    return this.bingoCardService.getBingoThemeById(Number(params.id)).then(function (theme) {
                        return _this.words = theme.words;
                    }).then(function () {
                        _this.remainingWords = JSON.parse(JSON.stringify(_this.words));
                    });
                };

                RandomDrawing.prototype.draw = function draw() {
                    if (this.remainingWords.length === 0) {
                        return;
                    }

                    var index = this.bingoCardService.getRandomInt(0, this.remainingWords.length);
                    this.drawnWord = this.remainingWords[index];

                    this.selectedWords.push(this.drawnWord);
                    this.remainingWords.splice(index, 1);
                };

                RandomDrawing.prototype.reset = function reset() {
                    this.selectedWords = [];
                    this.remainingWords = JSON.parse(JSON.stringify(this.words));
                    this.drawnWord = '';
                };

                RandomDrawing.prototype.back = function back() {
                    this.router.navigateBack();
                };

                return RandomDrawing;
            }()) || _class));

            _export('RandomDrawing', RandomDrawing);
        }
    };
});
//# sourceMappingURL=random-drawing.js.map
