"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroeComponent = void 0;
var core_1 = require("@angular/core");
var HeroeComponent = /** @class */ (function () {
    function HeroeComponent() {
        this.nombre = 'Iroman';
        this.edad = 45;
    }
    Object.defineProperty(HeroeComponent.prototype, "nombreCapitalizado", {
        get: function () {
            return this.nombre.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    HeroeComponent.prototype.obtenerNombre = function () {
        return this.nombre + " - " + this.edad;
    };
    HeroeComponent.prototype.cambiarNombre = function () {
        this.nombre = 'Spiderman';
    };
    HeroeComponent.prototype.cambiarEdad = function () {
        console.log("hey...");
        this.edad = 30;
    };
    HeroeComponent = __decorate([
        core_1.Component({
            selector: 'app-heroe',
            templateUrl: 'heroe.component.html'
        })
    ], HeroeComponent);
    return HeroeComponent;
}());
exports.HeroeComponent = HeroeComponent;
