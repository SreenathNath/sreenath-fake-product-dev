(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\n    font-family: inherit;\n    color: #4c7acc;\n    font-weight: 500;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGNvbG9yOiAjNGM3YWNjO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default title\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n         \n          <span class=\"navbar-brand\">FAKE PRODUCTS</span>\n      </div>\n     \n  </div>\n</nav>\n\n\n<app-registration></app-registration>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fake-products-dev';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/product/product.component */ "./src/app/products/product/product.component.ts");
/* harmony import */ var _products_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/cart/cart.component */ "./src/app/products/cart/cart.component.ts");
/* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                _products_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _products_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                _products_products_service__WEBPACK_IMPORTED_MODULE_11__["ProductsService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/products/cart/cart.component.css":
/*!**************************************************!*\
  !*** ./src/app/products/cart/cart.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n body{\n    background:#f6f6f6;\n    padding:100px 0;\n }\n\n .section-30{\n   margin-bottom: 110px;\n}\n\n .top{\n    padding:30px;\n }\n\n .list-inline-item{\n   padding: 10px;\n }\n\n .footer {\n   position: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   background-color: rgb(167 202 245);\n   text-align: center;\n}\n\n .middle{\n    padding:0 30px;\n }\n\n .quantity{\n   font-size: 16px;\n   display: flex;\n   margin-top: 10px;\n   font-weight: 400;\n }\n\n .bottom{\n   padding: 10px 30px;\n    position:relative;\n }\n\n h3{\n    margin:0;\n }\n\n ul.product-description{\n    margin:0;\n    padding:0;\n    list-style-type:none;\n    /*\n    border-top:1px solid #cdcdcd;\n    border-bottom:1px solid #cdcdcd;\n    */\n }\n\n img{\n    width: -webkit-fill-available;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 30px 50px 90px;\n }\n\n ul.product-description li{\n    line-height:2;\n }\n\n .my-crt{\n   color: gray;\n   padding-left: 120px;\n   margin-bottom: 10px;\n }\n\n ul.product-description li i{\n    color:#ffc007;\n    font-size:1.25em;\n    line-height:2;\n }\n\n .shop-buttons a{\n    background:#007aff;\n    color:#fff;\n    display:block;\n    padding:15px;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    border-radius:4px;\n }\n\n .shop-buttons a:first-of-type{\n    background:#f6f6f6;\n    color:#000;\n    display:inline-block;\n    padding:15px;\n    margin-bottom:15px;\n }\n\n .empty-cart{\n   text-align: center;\n   padding: 10px;\n }\n\n .empty-cart p{\n   font-size: 18px;\n }\n\n .box{\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n }\n\n .pointer{\n    cursor: pointer;\n }\n\n .plus {\n   font-size: 18px;\n    background: gainsboro;\n    width: 25px;\n    height: 28px;\n    border: 1px solid #d4d3d3;\n    padding: px;\n    margin-left: 2px;\n    text-align: center;\n    font-weight: 600;\n }\n\n a{\n    cursor: pointer;\n }\n\n .cart-item{\n    margin: 20px;\n    font-weight: 500;\n    color: green;\n }\n\n .right{\n    float: right !important;\n}\n\n .shop-buttons .pricing{\n    font-size: 28px;\n    font-weight: 700;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0NBRUE7R0FDRSxvQkFBb0I7QUFDdkI7O0NBRUM7SUFDRyxZQUFZO0NBQ2Y7O0NBQ0E7R0FDRSxhQUFhO0NBQ2Y7O0NBRUE7R0FDRSxlQUFlO0dBQ2YsT0FBTztHQUNQLFNBQVM7R0FDVCxXQUFXO0dBQ1gsa0NBQWtDO0dBQ2xDLGtCQUFrQjtBQUNyQjs7Q0FFQztJQUNHLGNBQWM7Q0FDakI7O0NBRUE7R0FDRSxlQUFlO0dBQ2YsYUFBYTtHQUNiLGdCQUFnQjtHQUNoQixnQkFBZ0I7Q0FDbEI7O0NBRUE7R0FDRSxrQkFBa0I7SUFDakIsaUJBQWlCO0NBQ3BCOztDQUVBO0lBQ0csUUFBUTtDQUNYOztDQUVBO0lBQ0csUUFBUTtJQUNSLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEI7OztLQUdDO0NBQ0o7O0NBRUE7SUFDRyw2QkFBNkI7SUFDN0IsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0NBQzFCOztDQUVBO0lBQ0csYUFBYTtDQUNoQjs7Q0FFQTtHQUNFLFdBQVc7R0FDWCxtQkFBbUI7R0FDbkIsbUJBQW1CO0NBQ3JCOztDQUVBO0lBQ0csYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCOztDQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7Q0FFQTtJQUNHLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7O0NBRUE7R0FDRSxrQkFBa0I7R0FDbEIsYUFBYTtDQUNmOztDQUVBO0dBQ0UsZUFBZTtDQUNqQjs7Q0FFQTtHQUNFLDBDQUEwQztDQUM1Qzs7Q0FDQTtJQUNHLGVBQWU7Q0FDbEI7O0NBRUE7R0FDRSxlQUFlO0lBQ2QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7Q0FJQTtJQUNHLGVBQWU7Q0FDbEI7O0NBRUE7SUFDRyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjs7Q0FFQTtJQUNHLHVCQUF1QjtBQUMzQjs7Q0FDQztJQUNHLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIGJvZHl7XG4gICAgYmFja2dyb3VuZDojZjZmNmY2O1xuICAgIHBhZGRpbmc6MTAwcHggMDtcbiB9XG5cbiAuc2VjdGlvbi0zMHtcbiAgIG1hcmdpbi1ib3R0b206IDExMHB4O1xufVxuIFxuIC50b3B7XG4gICAgcGFkZGluZzozMHB4O1xuIH1cbiAubGlzdC1pbmxpbmUtaXRlbXtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gfVxuXG4gLmZvb3RlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3IDIwMiAyNDUpO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIFxuIC5taWRkbGV7XG4gICAgcGFkZGluZzowIDMwcHg7XG4gfVxuXG4gLnF1YW50aXR5e1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgZGlzcGxheTogZmxleDtcbiAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICBmb250LXdlaWdodDogNDAwO1xuIH1cbiBcbiAuYm90dG9te1xuICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuIH1cbiBcbiBoM3tcbiAgICBtYXJnaW46MDtcbiB9XG4gXG4gdWwucHJvZHVjdC1kZXNjcmlwdGlvbntcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgLypcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjY2RjZGNkO1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjZGNkY2Q7XG4gICAgKi9cbiB9XG5cbiBpbWd7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHggOTBweDtcbiB9XG4gXG4gdWwucHJvZHVjdC1kZXNjcmlwdGlvbiBsaXtcbiAgICBsaW5lLWhlaWdodDoyO1xuIH1cblxuIC5teS1jcnR7XG4gICBjb2xvcjogZ3JheTtcbiAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuIH1cbiBcbiB1bC5wcm9kdWN0LWRlc2NyaXB0aW9uIGxpIGl7XG4gICAgY29sb3I6I2ZmYzAwNztcbiAgICBmb250LXNpemU6MS4yNWVtO1xuICAgIGxpbmUtaGVpZ2h0OjI7XG4gfVxuIFxuIC5zaG9wLWJ1dHRvbnMgYXtcbiAgICBiYWNrZ3JvdW5kOiMwMDdhZmY7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHBhZGRpbmc6MTVweDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gfVxuIFxuIC5zaG9wLWJ1dHRvbnMgYTpmaXJzdC1vZi10eXBle1xuICAgIGJhY2tncm91bmQ6I2Y2ZjZmNjtcbiAgICBjb2xvcjojMDAwO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6MTVweDtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG4gfVxuXG4gLmVtcHR5LWNhcnR7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBwYWRkaW5nOiAxMHB4O1xuIH1cblxuIC5lbXB0eS1jYXJ0IHB7XG4gICBmb250LXNpemU6IDE4cHg7XG4gfVxuXG4gLmJveHtcbiAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiB9XG4gLnBvaW50ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cblxuIC5wbHVzIHtcbiAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQzZDM7XG4gICAgcGFkZGluZzogcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiB9XG5cblxuXG4gYXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gfVxuXG4gLmNhcnQtaXRlbXtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogZ3JlZW47XG4gfVxuIFxuIC5yaWdodHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cbiAuc2hvcC1idXR0b25zIC5wcmljaW5ne1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/products/cart/cart.component.html":
/*!***************************************************!*\
  !*** ./src/app/products/cart/cart.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- my-new-section -->\n  <div *ngIf=\"cart_items.length == 0\" class=\"empty-cart\">\n     <p>YOUR CART IS EMPTY</p>\n     <a (click)=\"backToProductList()\">BACK TO PRODUCTS</a>\n  </div>\n  <div *ngIf=\"cart_items.length > 0\" class=\"section-30\">\n     <h4 class=\"my-crt\">MY CART</h4>\n     <div *ngFor=\"let item of cart_items\"class=\"container\">\n        <div class=\"row\">\n           <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"row box\">\n                 <div class=\"col-lg-3\">\n                    <img [src]=\"item.image\" style=\"width:90%; height:90%\">\n                 </div>\n                 <div class=\"col-lg-9\">\n                    <div class=\"top product-title\">\n                       <h3>{{item.title}}</h3>\n                    </div>\n                    <div class=\"middle\">\n                       <ul class=\"product-description\">\n                          <li>{{item.description}}</li>\n                       </ul>\n                    </div>\n                   \n                    <div class=\"middle quantity\">Quantity :\n                     <div *ngIf=\"item.item_quantity > 1\"(click)=\"updateQuantity(item, 'sub')\"class=\"plus pointer\">-</div>\n                     <div class=\"plus\">{{item.item_quantity}}</div>\n                     <div (click)=\"updateQuantity(item, 'add')\"class=\"plus pointer\">+</div>\n\n                    </div>\n                    <div class=\"bottom shop-buttons\">\n                       <p class=\"pricing\">{{getPrice(item) | currency:'INR'}}</p>\n                       <!-- <a (click)=\"backToProductList()\">BACK</a> -->\n                       <a (click)=\"removeItem(item)\" class=\"right\">Remove</a>\n\n                    </div>\n                 </div>\n              </div>\n           </div>\n        </div>\n     </div>\n  </div>\n\n  <div *ngIf=\"cart_items.length > 0\" class=\"footer\">\n   <ul class=\"list-inline text-center \">\n      <li class=\"list-inline-item \">\n        <h4 class=\"mb-1\">TOTAL AMOUNT :  {{getTotalAmount() | currency:'INR'}}</h4>\n      </li>\n      <li class=\"list-inline-item\">\n         <button type=\"button\" (click)=\"backToProductList()\" class=\"btn btn-secondary\">BACK</button>\n       </li>\n      <li class=\"list-inline-item\">\n        <button type=\"button\" class=\"btn btn-primary\">PLACE ORDER</button>\n      </li>\n\n    </ul>\n   </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/products/cart/cart.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/cart/cart.component.ts ***!
  \*************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.updateQuantity = function (item, action) {
        if (action == 'add') {
            item.item_quantity = item.item_quantity + 1;
        }
        else if (action == 'sub') {
            item.item_quantity = item.item_quantity - 1;
        }
    };
    CartComponent.prototype.backToProductList = function () {
        this.onBack.emit(false);
    };
    CartComponent.prototype.removeItem = function (item) {
        var item_index = this.cart_items.findIndex(function (x) { return x.id == item.id; });
        if (item_index > -1) {
            this.cart_items.splice(item_index, 1);
        }
        console.log("this.cart_items-----", this.cart_items);
    };
    CartComponent.prototype.getTotalAmount = function () {
        var _this = this;
        var amount = 0;
        this.cart_items.forEach(function (x) {
            amount = amount + _this.getPrice(x);
        });
        return amount;
    };
    CartComponent.prototype.getPrice = function (item) {
        if (item) {
            return item.price * item.item_quantity;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CartComponent.prototype, "cart_items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartComponent.prototype, "onBack", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/products/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/products/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/products/product/product.component.css":
/*!********************************************************!*\
  !*** ./src/app/products/product/product.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n body{\n    background:#f6f6f6;\n    padding:100px 0;\n }\n \n .top{\n    padding:30px;\n }\n \n .middle{\n    padding:0 30px;\n }\n \n .bottom{\n    padding:30px;\n    position:relative;\n }\n \n .shop-buttons  input{\n    width: 50px;\n    margin: 10px;\n }\n \n h3{\n    margin:0;\n }\n \n ul.product-description{\n    margin:0;\n    padding:0;\n    list-style-type:none;\n    /*\n    border-top:1px solid #cdcdcd;\n    border-bottom:1px solid #cdcdcd;\n    */\n }\n \n img{\n    width: -webkit-fill-available;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 30px 50px 90px;\n }\n \n ul.product-description li{\n    line-height:2;\n }\n \n ul.product-description li i{\n    color:#ffc007;\n    font-size:1.25em;\n    line-height:2;\n }\n \n .shop-buttons a{\n    background:#007aff;\n    color:#fff;\n    display:block;\n    padding:15px;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    border-radius:4px;\n }\n \n .shop-buttons a:first-of-type{\n    background:#f6f6f6;\n    color:#000;\n    display:inline-block;\n    padding:15px;\n    margin-bottom:15px;\n }\n \n .cart-btn{\n   background: #71d06b !important;\n }\n \n .cart-item{\n    margin: 20px 0px 0px 30px;\n    font-weight: 500;\n    color: green;\n }\n \n .right{\n    float: right !important;\n}\n \n a{\n   cursor: pointer;\n  }\n \n .shop-buttons .pricing{\n    font-size: 28px;\n    font-weight: 700;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0NBRUE7SUFDRyxZQUFZO0NBQ2Y7O0NBRUE7SUFDRyxjQUFjO0NBQ2pCOztDQUVBO0lBQ0csWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjs7Q0FFQTtJQUNHLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7O0NBRUE7SUFDRyxRQUFRO0NBQ1g7O0NBRUE7SUFDRyxRQUFRO0lBQ1IsU0FBUztJQUNULG9CQUFvQjtJQUNwQjs7O0tBR0M7Q0FDSjs7Q0FFQTtJQUNHLDZCQUE2QjtJQUM3QiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUI7O0NBRUE7SUFDRyxhQUFhO0NBQ2hCOztDQUVBO0lBQ0csYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCOztDQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7Q0FFQTtJQUNHLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7O0NBRUE7R0FDRSw4QkFBOEI7Q0FDaEM7O0NBRUE7SUFDRyx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjs7Q0FFQTtJQUNHLHVCQUF1QjtBQUMzQjs7Q0FFRTtHQUNDLGVBQWU7RUFDaEI7O0NBRUQ7SUFDRyxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiBib2R5e1xuICAgIGJhY2tncm91bmQ6I2Y2ZjZmNjtcbiAgICBwYWRkaW5nOjEwMHB4IDA7XG4gfVxuIFxuIC50b3B7XG4gICAgcGFkZGluZzozMHB4O1xuIH1cbiBcbiAubWlkZGxle1xuICAgIHBhZGRpbmc6MCAzMHB4O1xuIH1cbiBcbiAuYm90dG9te1xuICAgIHBhZGRpbmc6MzBweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiB9XG5cbiAuc2hvcC1idXR0b25zICBpbnB1dHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gfVxuXG4gaDN7XG4gICAgbWFyZ2luOjA7XG4gfVxuIFxuIHVsLnByb2R1Y3QtZGVzY3JpcHRpb257XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgIC8qXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2NkY2RjZDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2RjZGNkO1xuICAgICovXG4gfVxuXG4gaW1ne1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMzBweCA1MHB4IDkwcHg7XG4gfVxuIFxuIHVsLnByb2R1Y3QtZGVzY3JpcHRpb24gbGl7XG4gICAgbGluZS1oZWlnaHQ6MjtcbiB9XG4gXG4gdWwucHJvZHVjdC1kZXNjcmlwdGlvbiBsaSBpe1xuICAgIGNvbG9yOiNmZmMwMDc7XG4gICAgZm9udC1zaXplOjEuMjVlbTtcbiAgICBsaW5lLWhlaWdodDoyO1xuIH1cbiBcbiAuc2hvcC1idXR0b25zIGF7XG4gICAgYmFja2dyb3VuZDojMDA3YWZmO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBwYWRkaW5nOjE1cHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuIH1cbiBcbiAuc2hvcC1idXR0b25zIGE6Zmlyc3Qtb2YtdHlwZXtcbiAgICBiYWNrZ3JvdW5kOiNmNmY2ZjY7XG4gICAgY29sb3I6IzAwMDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOjE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuIH1cblxuIC5jYXJ0LWJ0bntcbiAgIGJhY2tncm91bmQ6ICM3MWQwNmIgIWltcG9ydGFudDtcbiB9XG5cbiAuY2FydC1pdGVte1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogZ3JlZW47XG4gfVxuIFxuIC5yaWdodHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuICBhe1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAuc2hvcC1idXR0b25zIC5wcmljaW5ne1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/products/product/product.component.html":
/*!*********************************************************!*\
  !*** ./src/app/products/product/product.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- my-new-section -->\n  <div class=\"section-30\">\n     <div class=\"container\">\n        <div class=\"row\">\n           <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"row\">\n                 <div class=\"col-lg-5\">\n                    <img [src]=\"selected_product.image\" style=\"height: 60%;width: 80%;\">\n                 </div>\n                 <div class=\"col-lg-7\">\n                    <div class=\"top product-title\">\n                       <h3>{{selected_product.title}}</h3>\n                    </div>\n                    <h6 class=\"middle\">\n                     Category : {{selected_product.category}}\n                    </h6>\n                    <div class=\"middle\">\n                       <ul class=\"product-description\">\n                          <li>{{selected_product.description}}</li>\n                       </ul>\n                    </div>\n                    <div *ngIf=\"isItemExistOnCart()\" class=\"cart-item\">ITEM ADDED TO CART!</div>\n\n                    <div class=\"bottom shop-buttons\">\n                       <div>\n                       <p class=\"pricing\">{{selected_product.price | currency:'INR'}}</p>\n                       <div>\n                        <label>Quantity : </label>\n                        <input type=\"number\" [(ngModel)]=\"item_quantity\"  name=\"quantity\" value=\"1\">\n                       </div>\n                     </div>\n\n                       <a (click)=\"backToProductList()\">BACK</a>\n                       <a *ngIf=\"!isItemExistOnCart()\" class=\"right\" (click)=\"addToCart(selected_product)\">ADD TO CART</a>\n                       <a *ngIf=\"isItemExistOnCart()\" class=\"right cart-btn\" (click)=\"goToCart()\">GO TO CART</a>\n\n                    </div>\n                 </div>\n              </div>\n           </div>\n        </div>\n     </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product/product.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/products/product/product.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.item_quantity = 1;
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUpdateCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addToCart = function (item) {
        item.item_quantity = this.item_quantity;
        this.cart_items.push(item);
        this.onUpdateCart.emit(this.cart_items);
    };
    ProductComponent.prototype.backToProductList = function () {
        this.onBack.emit(false);
    };
    ProductComponent.prototype.goToCart = function () {
        this.onGoCart.emit(false);
    };
    ProductComponent.prototype.isItemExistOnCart = function () {
        var _this = this;
        if (this.cart_items && this.cart_items.find(function (x) { return x.id == _this.selected_product.id; })) {
            return true;
        }
        else {
            return false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "selected_product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "cart_items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "onBack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "onGoCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "onUpdateCart", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/products/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/products/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 300px;\n    height: 500px;\n    margin: 20px !important;\n    text-align: center;\n    font-family: arial;\n  }\n\n  .prdt{\n    color: gray;\n    padding-left: 40px;\n    margin-bottom: 10px;\n  }\n\n  .center{\n    text-align: center;\n    padding-left: 47%;\n    width: 200px;\n  }\n\n  .price {\n    color: grey;\n    font-size: 22px;\n  }\n\n  .margin-10{\n    margin: 10px;\n  }\n\n  .inline-cart{\n    display: inline-block;\n    padding: 10px;\n  }\n\n  .notification {\n    padding: 15px 26px;\n    position: relative;\n    display: inline-block;\n  }\n\n  .notification .badge {\n    position: absolute;\n    top: 5px;\n    right: 30px;\n    padding: 5px 10px;\n    border-radius: 50%;\n    background-color: red;\n  }\n\n  .cart{\n    position: absolute;\n    font-size: 18px;\n    font-weight: 600;\n    color: #595757;\n    top: 06px;\n    display: inline-block;\n    right: 70px;\n  }\n\n  .nav-name{\n    position: absolute;\n    font-size: 18px;\n    font-weight: 500;\n    color: #595757;\n    top: 15px;\n    display: inline-block;\n    right: 220px;\n  }\n\n  .card button {\n    border: none;\n    outline: 0;\n    padding: 12px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 18px;\n  }\n\n  .loader {\n    border: 10px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 10px solid #3498db;\n    width: 50px;\n    height: 50px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 1s linear infinite;\n  }\n\n  /* Safari */\n\n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n\n  a{\n    cursor: pointer;\n   }\n\n  .card button:hover {\n    opacity: 0.7;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztJQUNULHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztJQUNULHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUEwQyxFQUFFLFdBQVc7SUFDdkQsa0NBQWtDO0VBQ3BDOztFQUVBLFdBQVc7O0VBQ1g7SUFDRSxLQUFLLCtCQUErQixFQUFFO0lBQ3RDLE9BQU8saUNBQWlDLEVBQUU7RUFDNUM7O0VBRUE7SUFDRSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8seUJBQXlCLEVBQUU7RUFDcEM7O0VBRUE7SUFDRSxlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogYXJpYWw7XG4gIH1cblxuICAucHJkdHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNDclO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICBcbiAgLnByaWNlIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAubWFyZ2luLTEwe1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5pbmxpbmUtY2FydHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb24ge1xuICAgIHBhZGRpbmc6IDE1cHggMjZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAubm90aWZpY2F0aW9uIC5iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cblxuICAuY2FydHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM1OTU3NTc7XG4gICAgdG9wOiAwNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICByaWdodDogNzBweDtcbiAgfVxuXG4gIC5uYXYtbmFtZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM1OTU3NTc7XG4gICAgdG9wOiAxNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICByaWdodDogMjIwcHg7XG4gIH1cbiAgXG4gIC5jYXJkIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5sb2FkZXIge1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzNDk4ZGI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLyogU2FmYXJpICovXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cblxuICBhe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIH1cbiAgXG4gIC5jYXJkIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!is_loading\" class=\"nav-name\">{{registration_info.name}}</div>\n<div class=\"cart\" *ngIf=\"!is_loading\" (click)=\"navigateCart()\">\n  <i class=\"fa fa-shopping-cart\" style=\"font-size:30px\"></i>\n  <p class=\"inline-cart\">Cart</p>\n  <a *ngIf=\"cart_items && cart_items.length > 0\"href=\"#\" class=\"notification\">\n    <span class=\"badge\">{{cart_items.length}}</span>\n  </a>\n</div>\n\n\n<div *ngIf=\"is_loading\" class=\"center\">\n  <div class=\"loader center\"></div>\n</div>\n\n\n<div *ngIf=\"!is_loading && !is_selected_item && !is_nav_cart\">\n  <h4 class=\"prdt\">PRODUCTS</h4>\n\n  <div *ngFor=\"let product of product_lists\" class=\"col-lg-3\">\n    <div class=\"card\" (click)=\"selectProduct(product)\">\n      <img [src]=\"product.image\" alt=\"Denim Jeans\" class=\"margin-10\" style=\"width:60%; height: 50%;\">\n      <h4>{{product.title}}</h4>\n      <p class=\"price\">{{product.price | currency:'INR'}}</p>\n      <!-- <p class=\"margin-5\">{{product.description}}</p> -->\n      <!-- <p><button>Add to Cart</button></p> -->\n    </div>\n  </div>\n</div>\n\n<app-product *ngIf=\"is_selected_item\" [selected_product]=\"selected_product\" [cart_items]=\"cart_items\" (onBack)=\"onBack($event)\" (onGoCart)=\"onGoCart($event)\" (onUpdateCart)=\"onUpdateCart($event)\"></app-product>\n\n<app-cart *ngIf=\"is_nav_cart\" [cart_items]=\"cart_items\" (onBack)=\"onBack($event)\"></app-cart>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "./src/app/products/products.service.ts");



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
        this.product_lists = [];
        this.is_selected_item = false;
        this.is_loading = true;
        this.is_nav_cart = false;
        this.cart_items = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().then(function (resp) {
            _this.product_lists = resp;
            _this.is_loading = false;
        });
    };
    ProductsComponent.prototype.getsShortDescription = function (description) {
        if (description && description.length > 110) {
            return description.slice(0, 105) + "...";
        }
        else {
            return description;
        }
    };
    ProductsComponent.prototype.selectProduct = function (product) {
        this.selected_product = product;
        this.is_selected_item = true;
    };
    ProductsComponent.prototype.onBack = function () {
        this.is_selected_item = false;
        this.is_nav_cart = false;
    };
    ProductsComponent.prototype.onGoCart = function () {
        this.is_selected_item = false;
        this.is_nav_cart = true;
    };
    ProductsComponent.prototype.onUpdateCart = function (cart_items) {
        this.cart_items = cart_items;
    };
    ProductsComponent.prototype.navigateCart = function () {
        this.is_nav_cart = true;
        this.is_selected_item = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductsComponent.prototype, "registration_info", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/products/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



;
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getProducts = function () {
        var url = "https://fakestoreapi.com/products";
        return this.http.get(url)
            .toPromise();
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg-form{\n    padding: 10px 25%;\n}\n.shadow{\n    padding: 30px;\n    box-shadow: 0 0 1px rgb(57 70 78 / 15%), 0 20px 55px -8px rgb(57 70 78 / 25%);\n}\n.no-padding-left{\n    padding-left: 0px !important\n}\n.no-padding-right{\n    padding-right: 0px !important\n}\n.valAlert{\n  color: red;\n  font-size: 14px;\n\n}\n.inline-div{\n    display: flex;\n}\n.padding-15{\n    padding-left: 15px\n}\na{\n cursor: pointer;\n}\n.btn{\n    float: right;\n    margin-right: 20px;\n}\n.mandatory{\n    color: #ca2d18;\n    padding: 5px;\n}\n.plus {\n    font-size: 18px;\n    background: gainsboro;\n    width: 25px;\n    border: 1px solid #d4d3d3;\n    height: auto;\n    padding: 2px;\n    height: auto;\n    margin-left: 2px;\n    text-align: center;\n    font-weight: 600;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkVBQTZFO0FBQ2pGO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTs7QUFFakI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJO0FBQ0o7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnLWZvcm17XG4gICAgcGFkZGluZzogMTBweCAyNSU7XG59XG4uc2hhZG93e1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2IoNTcgNzAgNzggLyAxNSUpLCAwIDIwcHggNTVweCAtOHB4IHJnYig1NyA3MCA3OCAvIDI1JSk7XG59XG5cbi5uby1wYWRkaW5nLWxlZnR7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudFxufVxuXG4ubm8tcGFkZGluZy1yaWdodHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudFxufVxuXG4udmFsQWxlcnR7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxufVxuXG4uaW5saW5lLWRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGFkZGluZy0xNXtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHhcbn1cblxuYXtcbiBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1hbmRhdG9yeXtcbiAgICBjb2xvcjogI2NhMmQxODtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wbHVzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQzZDM7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!view_product_list\"> \n<form class=\"reg-form\" #regForm=\"ngForm\">\n  <h3>REGISTRATION</h3>\n  <div class=\"shadow col-md-12\">\n    <div class=\"form-group col-lg-12\">\n      <label for=\"name\">Name <span class=\"mandatory\">*</span></label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"registration_info.name\" required id=\"name\" name=\"name\" aria-describedby=\"emailHelp\" placeholder=\"Enter Name\">\n    </div>\n    <div class=\"form-group col-lg-12\">\n      <label for=\"emailID\">Email address<span class=\"mandatory\">*</span></label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"registration_info.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required id=\"emailID\" name=\"emailID\" #email=\"ngModel\" aria-describedby=\"emailHelp\"\n        placeholder=\"Enter Email\">\n        <div *ngIf=\"email.invalid\" class=\"valAlert\" [ngClass]=\"{'hidden': email.valid || email.pristine}\">\n          Please enter valid email id\n        </div>\n    </div>\n    <div class=\"form-group col-lg-12\">\n      <label for=\"phnNumber\">Phone Number<span class=\"mandatory\">*</span></label>\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"registration_info.phone_no\" required id=\"phnNumber\" name=\"phnNumber\" aria-describedby=\"emailHelp\"\n        placeholder=\"Enter Phone Number\">\n    </div>\n    <div class=\"form-group col-lg-12\">\n      <label for=\"billingAddress\">Billing Address<span class=\"mandatory\">*</span></label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"registration_info.billing_address\" required id=\"billingAddress\"name=\"billingAddress\"  aria-describedby=\"emailHelp\"\n        placeholder=\"Enter Billing Address\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"registration_info.billing_pincode\" required id=\"billingPin\" name=\"billingPin\" aria-describedby=\"emailHelp\" placeholder=\"Enter Pincode\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"registration_info.billing_phone_no\" required id=\"billingNo\"name=\"billingNo\"   aria-describedby=\"emailHelp\" placeholder=\"Enter Phone Number\">\n    </div>\n    <div *ngFor=\"let adrs of registration_info.shipping_address; let i = index\">\n      <div class=\"form-group col-lg-12\">\n        <label for=\"shippingAddress\">Shipping Address<span *ngIf=\"i == 0\" class=\"mandatory\">*</span></label>\n        <div class=\"inline-div\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"adrs.address\" [required]=\"i==0\" id=\"shippingAddress{{i}}\"name=\"shippingAddress{{i}}\"  aria-describedby=\"emailHelp\"\n          placeholder=\"Enter Shipping Address\">\n          <div *ngIf=\"registration_info.shipping_address.length > 1\"(click)=\"removeShippingAddress(i)\"class=\"plus\">-</div>\n          </div>\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"adrs.pincode\" [required]=\"i==0\" id=\"shippingPin{{i}}\" name=\"shippingPin{{i}}\" aria-describedby=\"emailHelp\"\n          placeholder=\"Enter Pincode\">\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"adrs.phone_no\" [required]=\"i==0\" id=\"shippingNo{{i}}\" name=\"shippingNo{{i}}\" aria-describedby=\"emailHelp\"\n          placeholder=\"Enter Phone Number\">\n      </div>\n    </div>\n    <div class=\"padding-15\">\n      <a (click)=\"addShippingAddress()\"> +Add another shipping address</a>\n    </div>\n    <button type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"regForm.invalid\" title=\"Please enter all mandatory fields\" class=\"btn btn-primary\">Submit</button>\n  </div>\n</form>\n</div>\n\n<app-products *ngIf=\"view_product_list\" [registration_info]=\"registration_info\"></app-products>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration */ "./src/app/registration/registration.ts");



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.registration_info = new _registration__WEBPACK_IMPORTED_MODULE_2__["Registration"];
        this.view_product_list = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var address = new _registration__WEBPACK_IMPORTED_MODULE_2__["Address"];
        this.registration_info.shipping_address.push(address);
    };
    RegistrationComponent.prototype.onSubmit = function () {
        this.view_product_list = true;
    };
    RegistrationComponent.prototype.addShippingAddress = function () {
        var address = new _registration__WEBPACK_IMPORTED_MODULE_2__["Address"];
        this.registration_info.shipping_address.push(address);
    };
    RegistrationComponent.prototype.removeShippingAddress = function (index) {
        this.registration_info.shipping_address.splice(index, 1);
    };
    RegistrationComponent.prototype.isFormValid = function () {
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.ts":
/*!**********************************************!*\
  !*** ./src/app/registration/registration.ts ***!
  \**********************************************/
/*! exports provided: Registration, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registration", function() { return Registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Registration = /** @class */ (function () {
    function Registration() {
        this.shipping_address = [];
    }
    return Registration;
}());

var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sreenathj/Documents/sreenath-fake-product-dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map