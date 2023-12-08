import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class DeepuriderLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DeepuriderLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DeepuriderLibComponent, selector: "lib-deepurider-lib", ngImport: i0, template: `
    <p>
      This is just for testing purpose. This is another version of this package.
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-deepurider-lib', template: `
    <p>
      This is just for testing purpose. This is another version of this package.
    </p>
  ` }]
        }] });

class DeepuriderLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibModule, declarations: [DeepuriderLibComponent], exports: [DeepuriderLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeepuriderLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DeepuriderLibComponent
                    ],
                    imports: [],
                    exports: [
                        DeepuriderLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of deepurider-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DeepuriderLibComponent, DeepuriderLibModule, DeepuriderLibService };
//# sourceMappingURL=deepurider-lib.mjs.map
