(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_vegies-modal_kale-modal_kale-modal_module_ts"],{

/***/ 54846:
/*!**********************************************************************!*\
  !*** ./src/app/vegies-modal/kale-modal/kale-modal-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KaleModalPageRoutingModule": () => (/* binding */ KaleModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _kale_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kale-modal.page */ 67631);




const routes = [
    {
        path: '',
        component: _kale_modal_page__WEBPACK_IMPORTED_MODULE_0__.KaleModalPage
    }
];
let KaleModalPageRoutingModule = class KaleModalPageRoutingModule {
};
KaleModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KaleModalPageRoutingModule);



/***/ }),

/***/ 63462:
/*!**************************************************************!*\
  !*** ./src/app/vegies-modal/kale-modal/kale-modal.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KaleModalPageModule": () => (/* binding */ KaleModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _kale_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kale-modal-routing.module */ 54846);
/* harmony import */ var _kale_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kale-modal.page */ 67631);







let KaleModalPageModule = class KaleModalPageModule {
};
KaleModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _kale_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.KaleModalPageRoutingModule
        ],
        declarations: [_kale_modal_page__WEBPACK_IMPORTED_MODULE_1__.KaleModalPage]
    })
], KaleModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_vegies-modal_kale-modal_kale-modal_module_ts.js.map