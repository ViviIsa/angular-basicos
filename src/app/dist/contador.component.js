"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContadorComponent = void 0;
var core_1 = require("@angular/core");
var ContadorComponent = /** @class */ (function () {
    function ContadorComponent() {
        this.titulo = 'Contador app';
        this.numero = 10;
        this.base = 5;
    }
    ContadorComponent.prototype.sumar = function () {
        this.numero += 1;
    };
    ContadorComponent.prototype.restar = function () {
        this.numero -= 1;
    };
    ContadorComponent.prototype.acumular = function (valor) {
        this.numero += valor;
    };
    ContadorComponent = __decorate([
        core_1.Component({
            selector: 'app-contador',
            template: "<h1>{{titulo}}</h1>\n    <h3>La base es: <strong>{{base}}</strong></h3>\n    \n    <!--<button (click)=\"numero = numero +1\" >+1</button>\n    <button (click)=\"sumar()\" >+1</button>-->\n    <button (click)=\"acumular(+base)\">+{{base}}</button>\n    \n    <span>{{numero}}</span>\n    \n    <!--<button (click)=\"numero = numero -1\">-1</button>\n    <button (click)=\"restar()\">-1</button>-->\n    <button (click)=\"acumular(-base)\">-{{base}}</button>"
        })
    ], ContadorComponent);
    return ContadorComponent;
}());
exports.ContadorComponent = ContadorComponent;
