webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-page {\n    width: 100%;\n\theight: 100%;\n    background-color: #202020;\n}\n.switch-button {\n    position: fixed;\n    top: 20px;\n    left: 20px;\n    z-index: 10;\n}\n.top {\n    padding-top: 120px;\n    font-size: 100px;\n    text-align: center;\n    color: #ac9455;\n    font-family: kuoFont;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-justify-content: center;\n    font-family: kuoFont;\n}\ndiv.top div {\n    font-family: kuoFont;\n}\n.underline {\n    height: 2px;\n    width: 60px;\n    margin: auto;\n    margin-top: 50px;\n    background-color: #767676;\n}\n.top-three {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-justify-content: center;\n}\n.top-page-none {\n    margin-top: 150px;\n    height: 250px;\n    width: 360px;\n    cursor: pointer;\n}\n.top-page-one {\n    margin-top: 150px;\n    height: 250px;\n    width: 360px;\n    cursor: pointer;\n    border: 1px solid #767676;\n    box-shadow: #767676 0px 0px 6px;\n}\n.top-page-one:hover {\n    background-color: rgba(72, 188, 255, 0.05);\n}\n.top-page-two {\n    margin-top: 150px;\n    height: 250px;\n    width: 360px;\n    cursor: pointer;\n    border: 1px solid #767676;\n    box-shadow: #767676 0px 0px 6px;\n}\n.top-page-two:hover {\n    background-color: rgba(72, 188, 255, 0.05);\n}\ndiv.top-page-two:first-child {\n    -webkit-transform: matrix3d(1, 0, 0, 0.0006, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n            transform: matrix3d(1, 0, 0, 0.0006, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n}\ndiv.top-page-two:first-child:hover {\n    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n}\ndiv.top-page-two:last-child {\n    -webkit-transform: matrix3d(1, 0, 0, -0.0006, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n            transform: matrix3d(1, 0, 0, -0.0006, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n}\ndiv.top-page-two:last-child:hover {\n    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n}\ndiv.top-page-two + div.top-page-two {\n    margin-left: 100px !important;\n}\n.top-page-three {\n    margin-top: 150px;\n    height: 250px;\n    width: 360px;\n    cursor: pointer;\n    border: 1px solid #767676;\n    box-shadow: #767676 0px 0px 6px;\n}\n.top-page-three:hover {\n    background-color: rgba(72, 188, 255, 0.05);\n}\ndiv.top-page-three:first-child {\n    -webkit-transform: matrix3d(1, 0, 0, 0.0006, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n            transform: matrix3d(1, 0, 0, 0.0006, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n}\ndiv.top-page-three:first-child:hover {\n    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n}\ndiv.top-page-three:last-child {\n    -webkit-transform: matrix3d(1, 0, 0, -0.0006, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n            transform: matrix3d(1, 0, 0, -0.0006, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n}\ndiv.top-page-three:last-child:hover {\n    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n}\ndiv.top-page + div.top-page {\n    margin-left: 60px;\n}\n.page-icon {\n    text-align: center;\n    margin-top: 20px;\n}\n.page-title {\n    text-align: center;\n    margin-top: 40px;\n    margin-bottom: 20px;\n    color: #fff;\n    font-size: 18px;\n    font-family: SimHei;\n}\n.page-abstract {\n    text-align: center;\n    font-size: 14px;\n    font-family: SimHei;\n    color: #767676;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n.top-page:hover .page-abstract {\n    color: #a3a3a3;\n}\n.look-more {\n    position: fixed;\n    bottom: 0px;\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    font-size: 14px;\n    color: #767676;\n    cursor: pointer;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    -webkit-justify-content: space-evenly;\n}\n.look-more:hover {\n    color: #a3a3a3;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s;\n}\n.arrow-left {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAZCAYAAADaILXQAAABGklEQVRIie3WTyuEURTH8TMrL8ALUEpZKAtlQywkarIgKWOBUsrGxs7GxtI78hK8BpQsTBbkTwbjYzHX9DTNn+cxdubW2Zxzz/d3731Ov54SShGxHxEXKf5ilSNiKDCMDzxhBtFn7OILlz+JCj7xgOk+wFtZTrawg3oqTP0CvJHAzRdo3bCXrnSPyQLgNbzjBXM/+XYbD5JAFRM5wCuoJfBCttap4VBj3WG8C3g5gd+w1FrvdqKjJHCLsTb1RbwmeLkdo9eVj5PADUYz+fn0DDWsdurP87FOksA1RjCLZ43JWO/Wm3caTpPAFR4TeLNXX5E5PksCdWzn6Skp5i2ViKhGxPnAW/LGwFuaMfCW/+YtRf5H8npLRER8A1/wYe300USlAAAAAElFTkSuQmCC) center center/12px auto no-repeat;\n    width: 40px;\n    height: 40px;\n    -webkit-transform: rotateZ(90deg);\n            transform: rotateZ(90deg);\n}\n.arrow-right {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAZCAYAAADaILXQAAABGklEQVRIie3WTyuEURTH8TMrL8ALUEpZKAtlQywkarIgKWOBUsrGxs7GxtI78hK8BpQsTBbkTwbjYzHX9DTNn+cxdubW2Zxzz/d3731Ov54SShGxHxEXKf5ilSNiKDCMDzxhBtFn7OILlz+JCj7xgOk+wFtZTrawg3oqTP0CvJHAzRdo3bCXrnSPyQLgNbzjBXM/+XYbD5JAFRM5wCuoJfBCttap4VBj3WG8C3g5gd+w1FrvdqKjJHCLsTb1RbwmeLkdo9eVj5PADUYz+fn0DDWsdurP87FOksA1RjCLZ43JWO/Wm3caTpPAFR4TeLNXX5E5PksCdWzn6Skp5i2ViKhGxPnAW/LGwFuaMfCW/+YtRf5H8npLRER8A1/wYe300USlAAAAAElFTkSuQmCC) center center/12px auto no-repeat;\n    width: 40px;\n    height: 40px;\n    -webkit-transform: rotateZ(-90deg);\n            transform: rotateZ(-90deg);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n  <div>\n    <div class=\"top\" id=\"top\">\n      <div [@wordFlyIn]=\"word.trigger\" (@wordFlyIn.done)=\"animationDone($event, iterator)\" *ngFor=\"let word of words;let iterator = index;\"\n        [id]=\"iterator\">\n        {{ word.char }}\n      </div>\n    </div>\n    <div class=\"underline\"></div>\n    <div class=\"top-three\">\n      <div *ngIf=\"topThreePapers.length <= 0; else elseBlock\" class=\"top-page-none\">\n        No Paper Now!\n      </div>\n      <ng-template #elseBlock>\n        <div *ngFor=\"let paper of topThreePapers\" class=\"top-page\" [class.top-page-one]=\"topThreePapers.length === 1\" [class.top-page-two]=\"topThreePapers.length === 2\"\n          [class.top-page-three]=\"topThreePapers.length === 3\" (click)=\"toPaper(paper)\">\n          <div class=\"page-icon\">\n            <!-- TODO change icon image -->\n            <img src=\"static/assets/img/original.png\" />\n          </div>\n          <div class=\"page-title\">{{ paper.title }}</div>\n          <div class=\"page-abstract\">{{ paper.abstract }}</div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"look-more\" (click)=\"toList()\">\n    <div class=\"arrow-left\"></div>\n    <div>查看更多</div>\n    <div class=\"arrow-right\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(pageService) {
        var _this = this;
        this.pageService = pageService;
        this.words = [{ char: 'C', trigger: 'word-c' }, { char: 'h', trigger: 'word-h' }, { char: 'a', trigger: 'word-a' }, { char: 'n', trigger: 'word-n-0' }, { char: 'n', trigger: 'word-n-1' }, { char: 'i', trigger: 'word-i' }, { char: 'n', trigger: 'word-n-2' }, { char: 'g', trigger: 'word-g' }, { char: 'K', trigger: 'word-k' }, { char: 'u', trigger: 'word-u' }, { char: 'o', trigger: 'word-o' }];
        this.topThreePapers = [];
        pageService.topThreePages().then(function (res) {
            _this.topThreePapers = res.json().pages;
        }).catch(function (err) {
            console.log(err);
        });
    }
    /**
     * 删除'K'、'u'、'o'
     * @param {any} event
     * @param {any} index
     * @memberof AppComponent
     */
    AppComponent.prototype.animationDone = function (event, index) {
        if (event.toState === 'word-k' || event.toState === 'word-u' || event.toState === 'word-o') {
            event.element.remove();
        }
        // 减少angular自动渲染DOM带来的元素移动的突兀性
        // if (event.toState === 'word-k') {
        //   setTimeout(() => {
        //     document.getElementById('top').style.transform = 'translateX(-200px)';
        //   }, 50);
        //   setTimeout(() => {
        //     document.getElementById('top').style.transform = 'translateX(0)';
        //   }, 300);
        // }
    };
    /**
     * view the whole list
     */
    AppComponent.prototype.toList = function () {
        alert('Null');
    };
    /**
     * view the paper
     */
    AppComponent.prototype.toPaper = function (paper) {
        alert('Not prepared');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* PageService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('wordFlyIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-c', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-h', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-a', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-n-0', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-n-1', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-i', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-n-2', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-g', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-k', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-u', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('word-o', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-c', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-500%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-h', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-500%) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)  translateY(0)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-a', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-450%) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-n-0', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-400%) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-n-1', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(0) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-i', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(100%) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-n-2', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(100%) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-g', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(2500, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(350%) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 0.4 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'rotate(-20deg)', offset: 0.6 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'rotate(0deg)', offset: 0.8 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'rotate(10deg)', offset: 0.9 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'rotate(0deg)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-k', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(2000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(350%) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 0.5 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(700%) translateY(-700%)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-u', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(2000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(400%) translateY(-200%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 0.5 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(700%) translateY(-700%)', offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => word-o', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(2000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(500%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0.5 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(700%) translateY(-700%)', offset: 1 })
                        ]))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('hover', [])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* PageService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageService = (function () {
    function PageService(http) {
        this.http = http;
    }
    PageService.prototype.topThreePages = function () {
        return this.http.get('static/assets/pages.json').toPromise();
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map