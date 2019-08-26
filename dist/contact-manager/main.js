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
/* harmony import */ var _components_contact_create_contact_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-create/contact-create.component */ "./src/app/components/contact-create/contact-create.component.ts");
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ "./src/app/components/contact-list/contact-list.component.ts");
/* harmony import */ var _components_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact-edit/contact-edit.component */ "./src/app/components/contact-edit/contact-edit.component.ts");
/* harmony import */ var _components_brackets_balance_brackets_balance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/brackets-balance/brackets-balance.component */ "./src/app/components/brackets-balance/brackets-balance.component.ts");







var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-contact' },
    { path: 'create-contact', component: _components_contact_create_contact_create_component__WEBPACK_IMPORTED_MODULE_3__["ContactCreateComponent"] },
    { path: 'edit-contact/:id', component: _components_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__["ContactEditComponent"] },
    { path: 'contacts-list', component: _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"] },
    { path: 'brackets', component: _components_brackets_balance_brackets_balance_component__WEBPACK_IMPORTED_MODULE_6__["BracketsBalanceComponent"] }
];
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

module.exports = ".menu-spacer {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">Gerenciador de Contatos</h5>\n  <nav class=\"my-2 my-md-0\">\n    <a class=\"mr-1 btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/contacts-list\">Ver Contatos</a>\n    <a class=\"mr-1 btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/brackets\">Validar Texto</a>\n    <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/create-contact\">Adicionar Contato</a>\n  </nav>\n  \n</div>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'Lista de Contatos';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_contact_create_contact_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact-create/contact-create.component */ "./src/app/components/contact-create/contact-create.component.ts");
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ "./src/app/components/contact-list/contact-list.component.ts");
/* harmony import */ var _components_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact-edit/contact-edit.component */ "./src/app/components/contact-edit/contact-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _components_brackets_balance_brackets_balance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/brackets-balance/brackets-balance.component */ "./src/app/components/brackets-balance/brackets-balance.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_contact_create_contact_create_component__WEBPACK_IMPORTED_MODULE_5__["ContactCreateComponent"],
                _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_6__["ContactListComponent"],
                _components_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_7__["ContactEditComponent"],
                _components_brackets_balance_brackets_balance_component__WEBPACK_IMPORTED_MODULE_11__["BracketsBalanceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/brackets-balance/brackets-balance.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/brackets-balance/brackets-balance.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJhY2tldHMtYmFsYW5jZS9icmFja2V0cy1iYWxhbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/brackets-balance/brackets-balance.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/brackets-balance/brackets-balance.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 brackets-form\">\n    <!-- form card register -->\n    <div class=\"card-body\">\n      <form [formGroup]=\"bracketsForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"inputbracketsString\">Brackets</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"bracketsString\">\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.bracketsString.errors?.required\">\n            Digite algum texto.\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.bracketsString.errors?.pattern\">\n              Numeros não são permitidos.\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n          <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Validar</button>\n        </div>\n      </form>\n\n    </div>\n  </div><!-- form card register -->\n</div>\n<div class=\"row justify-content-center\">\n  <div class=\"col-md-8\">\n    <!-- form card register -->\n    <h4 class=\"card-title center\">Seu texto é valido?</h4>\n    <div class=\"card-body center\">\n        {{ StringBrackets }}\n    </div>\n  </div><!-- form card register -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/brackets-balance/brackets-balance.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/brackets-balance/brackets-balance.component.ts ***!
  \***************************************************************************/
/*! exports provided: BracketsBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BracketsBalanceComponent", function() { return BracketsBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var BracketsBalanceComponent = /** @class */ (function () {
    function BracketsBalanceComponent(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.StringBrackets = '';
        this.submitted = false;
        this.mainForm();
    }
    BracketsBalanceComponent.prototype.ngOnInit = function () { };
    BracketsBalanceComponent.prototype.mainForm = function () {
        this.bracketsForm = this.fb.group({
            bracketsString: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[^A-Za-z0-9]*$')]],
        });
    };
    Object.defineProperty(BracketsBalanceComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.bracketsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    BracketsBalanceComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.bracketsForm.valid) {
            return false;
        }
        else {
            console.log(this.bracketsForm.value);
            this.StringBrackets = this.validBrackets(this.bracketsForm.value['bracketsString']);
        }
    };
    BracketsBalanceComponent.prototype.validBrackets = function (text) {
        var store = [];
        var key = {
            '(': ')',
            '[': ']',
            '{': '}',
        };
        for (var i = 0; i < text.length; i++) {
            if (text[i] === '(' || text[i] === '{' || text[i] === '[') {
                store.push(text[i]);
            }
            else {
                var list = store.pop();
                if (text[i] !== key[list]) {
                    return text + ' is not valid';
                }
            }
        }
        if (store.length !== 0) {
            return text + ' is not valid';
        }
        return text + ' is valid';
    };
    BracketsBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-brackets-balance',
            template: __webpack_require__(/*! ./brackets-balance.component.html */ "./src/app/components/brackets-balance/brackets-balance.component.html"),
            styles: [__webpack_require__(/*! ./brackets-balance.component.css */ "./src/app/components/brackets-balance/brackets-balance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], BracketsBalanceComponent);
    return BracketsBalanceComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-create/contact-create.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/contact-create/contact-create.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1jcmVhdGUvY29udGFjdC1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/contact-create/contact-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/contact-create/contact-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 register-contact\">\n    <!-- form card register -->\n    <div class=\"card-body\">\n      <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\n            Name is required.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputEmail3\">Email</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"email\">\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.required\">\n            Enter your email.\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\n            Enter valid email.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputPassword3\">Posição</label>\n          <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\n            formControlName=\"designation\">\n            <option value=\"\">Selecione...</option>\n            <option *ngFor=\"let contactProfile of ContactProfile\" value=\"{{contactProfile}}\">{{contactProfile}}\n            </option>\n          </select>\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.designation.errors?.required\">\n            Selecione uma Posição.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputVerify4\">Whatsapp</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"whatsappNumber\">\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.whatsappNumber.errors?.required\">\n            Insira um numero valido.\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.whatsappNumber.errors?.pattern\">\n            Digite apenas numeros.\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"inputVerify3\">Telefone</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\">\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\n              Insira um numero valido.\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\n              Digite apenas numeros.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Registrar</button>\n        </div>\n      </form>\n\n    </div>\n  </div><!-- form card register -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact-create/contact-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/contact-create/contact-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCreateComponent", function() { return ContactCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ContactCreateComponent = /** @class */ (function () {
    function ContactCreateComponent(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.submitted = false;
        this.ContactProfile = ['Administrador', 'Contato'];
        this.mainForm();
    }
    ContactCreateComponent.prototype.ngOnInit = function () { };
    ContactCreateComponent.prototype.mainForm = function () {
        this.contactForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            whatsappNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    };
    // Choose designation with select dropdown
    ContactCreateComponent.prototype.updateProfile = function (e) {
        this.contactForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(ContactCreateComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.contactForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ContactCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.contactForm.valid) {
            return false;
        }
        else {
            this.apiService.createContact(this.contactForm.value).subscribe(function (res) {
                console.log('Contact successfully created!');
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/contacts-list'); });
            }, function (error) {
                console.log(error);
            });
        }
    };
    ContactCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-contact-create',
            template: __webpack_require__(/*! ./contact-create.component.html */ "./src/app/components/contact-create/contact-create.component.html"),
            styles: [__webpack_require__(/*! ./contact-create.component.css */ "./src/app/components/contact-create/contact-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ContactCreateComponent);
    return ContactCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-edit/contact-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/contact-edit/contact-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1lZGl0L2NvbnRhY3QtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contact-edit/contact-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/contact-edit/contact-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"row justify-content-center\">\n   <div class=\"col-md-4 register-contact\">\n     <!-- form card register -->\n     <div class=\"card card-outline-secondary\">\n       <div class=\"card-header\">\n         <h3 class=\"mb-0\">Editar Contato</h3>\n       </div>\n       <div class=\"card-body\">\n         <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n           <div class=\"form-group\">\n             <label for=\"inputName\">Nome</label>\n             <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\n               Nome é obrigatório.\n             </div>\n           </div>\n           <div class=\"form-group\">\n             <label for=\"inputEmail3\">Email</label>\n             <input class=\"form-control\" type=\"text\" formControlName=\"email\">\n             <!-- error -->\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.required\">\n               Insira seu email.\n             </div>\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\n               Insira um email valido.\n             </div>\n           </div>\n\n           <div class=\"form-group\">\n             <label for=\"inputPassword3\">Posição</label>\n             <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\n               formControlName=\"designation\">\n               <option value=\"\">Selecione...</option>\n               <option *ngFor=\"let contactProfile of ContactProfile\" value=\"{{contactProfile}}\">{{contactProfile}}\n               </option>\n             </select>\n             <!-- error -->\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.designation.errors?.required\">\n               Escolha uma Posição\n             </div>\n           </div>\n           <div class=\"form-group\">\n            <label for=\"inputVerify3\">whatsapp</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"whatsappNumber\">\n            <!-- error -->\n            <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.whatsappNumber.errors?.required\">\n              Insira um Numero de telefone\n            </div>\n            <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.whatsappNumber.errors?.pattern\">\n              Insira Apenas numeros\n            </div>\n          </div>\n           <div class=\"form-group\">\n             <label for=\"inputVerify4\">Telefone</label>\n             <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\">\n             <!-- error -->\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\n               Insira um Numero de telefone\n             </div>\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\n               Insira Apenas numeros\n             </div>\n           </div>\n\n           <div class=\"form-group\">\n             <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Atualizar</button>\n           </div>\n         </form>\n       </div>\n     </div><!-- form  -->\n   </div>\n </div>\n"

/***/ }),

/***/ "./src/app/components/contact-edit/contact-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-edit/contact-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ContactEditComponent = /** @class */ (function () {
    function ContactEditComponent(fb, actRoute, apiService, router) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.router = router;
        this.submitted = false;
        this.ContactProfile = ['Administrador', 'Contato'];
    }
    ContactEditComponent.prototype.ngOnInit = function () {
        this.updateContact();
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.getContact(id);
        this.editForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            whatsappNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    };
    // Choose options with select-dropdown
    ContactEditComponent.prototype.updateProfile = function (e) {
        this.editForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(ContactEditComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ContactEditComponent.prototype.getContact = function (id) {
        var _this = this;
        this.apiService.getContact(id).subscribe(function (data) {
            _this.editForm.setValue({
                name: data['name'],
                email: data['email'],
                designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                whatsappNumber: data['whatsappNumber'],
                phoneNumber: data['phoneNumber'],
            });
        });
    };
    ContactEditComponent.prototype.updateContact = function () {
        this.editForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            whatsappNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    };
    ContactEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editForm.valid) {
            return false;
        }
        else {
            if (window.confirm('Você tem Certeza?')) {
                var id = this.actRoute.snapshot.paramMap.get('id');
                this.apiService.updateContact(id, this.editForm.value)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/contacts-list');
                    console.log('Atualizado com sucesso!');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    ContactEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-edit',
            template: __webpack_require__(/*! ./contact-edit.component.html */ "./src/app/components/contact-edit/contact-edit.component.html"),
            styles: [__webpack_require__(/*! ./contact-edit.component.css */ "./src/app/components/contact-edit/contact-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactEditComponent);
    return ContactEditComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-list/contact-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/contact-list/contact-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contact-list/contact-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/contact-list/contact-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- No data message -->\n  <p *ngIf=\"Contact.length <= 0\" class=\"no-data text-center\">Você não tem nenhum contato ainda!</p>\n\n  <!-- Contact list -->\n  <table class=\"table table-bordered\" *ngIf=\"Contact.length > 0\">\n    <thead class=\"table-success\">\n      <tr>\n        <th scope=\"col\">Nome</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Whatsapp</th>\n        <th scope=\"col\">Telefone</th>\n        <th scope=\"col\">Posição</th>\n        <th scope=\"col center\">Editar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let contact of Contact; let i = index\">\n        <th scope=\"row\">{{contact.name}}</th>\n        <td>{{contact.email}}</td>\n        <td>{{contact.whatsappNumber}}</td>\n        <td>{{contact.phoneNumber}}</td>\n        <td>{{contact.designation}}</td>\n        <td class=\"text-center edit-block\">\n          <span class=\"edit\" [routerLink]=\"['/edit-contact/', contact._id]\">\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\n          </span>\n          <span class=\"delete\" (click)=\"removeContact(contact, i)\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/contact-list/contact-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-list/contact-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");



var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(apiService) {
        this.apiService = apiService;
        this.Contact = [];
        this.readContact();
    }
    ContactListComponent.prototype.ngOnInit = function () { };
    ContactListComponent.prototype.readContact = function () {
        var _this = this;
        this.apiService.getContacts().subscribe(function (data) {
            _this.Contact = data;
        });
    };
    ContactListComponent.prototype.removeContact = function (contact, index) {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.apiService.deleteContact(contact._id).subscribe(function (data) {
                _this.Contact.splice(index, 1);
            });
        }
    };
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/components/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/components/contact-list/contact-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create
    ApiService.prototype.createContact = function (data) {
        var url = this.baseUri + "/create";
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Get all Contacts
    ApiService.prototype.getContacts = function () {
        return this.http.get("" + this.baseUri);
    };
    // Get Contact
    ApiService.prototype.getContact = function (id) {
        var url = this.baseUri + "/read/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Update Contact
    ApiService.prototype.updateContact = function (id, data) {
        var url = this.baseUri + "/update/" + id;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Delete Contact
    ApiService.prototype.deleteContact = function (id) {
        var url = this.baseUri + "/delete/" + id;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Error handling 
    ApiService.prototype.errorMgmt = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiService);
    return ApiService;
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

module.exports = __webpack_require__(/*! C:\Users\Yuri\Desktop\testes\bravi\server3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map