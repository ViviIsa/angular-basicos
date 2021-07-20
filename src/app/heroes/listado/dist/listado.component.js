"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListadoComponent = void 0;
var core_1 = require("@angular/core");
var ListadoComponent = /** @class */ (function () {
    function ListadoComponent() {
        this.heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
        this.heroeBorrado = "";
    }
    ListadoComponent.prototype.borrarHeroe = function () {
        console.log("Borrando..");
        //var i = this.heroes.indexOf( 'Hulk');
        //this.heroes.splice( i, 1 );
        this.heroeBorrado = this.heroes.shift() || '';
        console.log(this.heroeBorrado);
    };
    ListadoComponent = __decorate([
        core_1.Component({
            selector: 'app-listado',
            templateUrl: './listado.component.html',
            styleUrls: ['./listado.component.css']
        })
    ], ListadoComponent);
    return ListadoComponent;
}());
exports.ListadoComponent = ListadoComponent;
