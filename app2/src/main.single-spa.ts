import './set-public-path'
import 'core-js/es7/reflect';
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';

if (environment.production) {
  enableProdMode();
}


const angularLifecycles = singleSpaAngular({
  bootstrapFunction: () => platformBrowserDynamic().bootstrapModule(AppModule).then( module => {
    const ngZone = module.injector.get(NgZone);
    window.addEventListener('single-spa:routing-event', () => {
      ngZone.run(() => console.log("Angular Zone Run!!!"))
    });
    return module;
  }),
  template: '<app2-root />',
  Router,
  NgZone: NgZone,
});

export const bootstrap = angularLifecycles.bootstrap;
export const mount = angularLifecycles.mount;
export const unmount = angularLifecycles.unmount;
