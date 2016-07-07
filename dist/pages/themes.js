'use strict';

System.register(['aurelia-framework', '../service/bingo-card-service'], function (_export, _context) {
    "use strict";

    var inject, BingoCardService, _dec, _class, Themes;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_serviceBingoCardService) {
            BingoCardService = _serviceBingoCardService.BingoCardService;
        }],
        execute: function () {
            _export('Themes', Themes = (_dec = inject(BingoCardService), _dec(_class = function () {
                function Themes(bingoCardService) {
                    _classCallCheck(this, Themes);

                    this.themes = [];

                    this.bingoCardService = bingoCardService;
                }

                Themes.prototype.activate = function activate() {
                    var _this = this;

                    return this.bingoCardService.getAllBingoThemes().then(function (themes) {
                        return _this.themes = themes;
                    });
                };

                return Themes;
            }()) || _class));

            _export('Themes', Themes);
        }
    };
});
//# sourceMappingURL=themes.js.map
