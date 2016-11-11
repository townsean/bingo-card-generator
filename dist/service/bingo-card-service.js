'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, _dec, _class, BingoCardService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }, function (_fetch) {}],
        execute: function () {
            _export('BingoCardService', BingoCardService = (_dec = inject(HttpClient), _dec(_class = function () {
                function BingoCardService(http) {
                    _classCallCheck(this, BingoCardService);

                    this.customThemeWords = [];

                    this.getRandomInt = function (min, max) {
                        return Math.floor(Math.random() * (max - min)) + min;
                    };

                    http.configure(function (config) {
                        config.withBaseUrl('./src/service');
                    });

                    this.http = http;
                }

                BingoCardService.prototype.getAllBingoThemes = function getAllBingoThemes() {
                    var _this = this;

                    return this.http.fetch('/bingo-themes.json').then(function (response) {
                        return response.json();
                    }).then(function (themes) {
                        return _this.themes = themes;
                    });
                };

                BingoCardService.prototype.getBingoThemeById = function getBingoThemeById(id) {
                    var _this2 = this;

                    var promise = new Promise(function (resolve, reject) {
                        _this2.getAllBingoThemes().then(function (themes) {
                            for (var _iterator = themes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                                var _ref;

                                if (_isArray) {
                                    if (_i >= _iterator.length) break;
                                    _ref = _iterator[_i++];
                                } else {
                                    _i = _iterator.next();
                                    if (_i.done) break;
                                    _ref = _i.value;
                                }

                                var theme = _ref;

                                if (theme.id === id) {
                                    resolve(theme);
                                }
                            }
                        });
                    });

                    return promise;
                };

                BingoCardService.prototype.setCustomBingoThemeWords = function setCustomBingoThemeWords(words) {
                    this.customThemeWords = words;
                };

                BingoCardService.prototype.getCustomBingoThemeWords = function getCustomBingoThemeWords() {
                    return this.customThemeWords;
                };

                BingoCardService.prototype.getBingoCardData = function getBingoCardData(words) {
                    var cardData = [];
                    var usedWords = [];
                    var BINGO_CARD_LENGTH = 25;
                    var BINGO_CARD_MIDDLE_INDEX = 12;

                    for (var i = 0; i < BINGO_CARD_LENGTH; i++) {
                        if (i === BINGO_CARD_MIDDLE_INDEX) {
                            cardData[i] = "FREE SPACE";
                        } else {
                            var index = this.getRandomInt(0, words.length - 1);

                            while (usedWords[index]) {
                                index = this.getRandomInt(0, words.length - 1);
                            }

                            usedWords[index] = true;
                            cardData[i] = words[index];
                        }
                    }

                    return cardData;
                };

                return BingoCardService;
            }()) || _class));

            _export('BingoCardService', BingoCardService);
        }
    };
});
//# sourceMappingURL=bingo-card-service.js.map
