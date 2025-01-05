import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './app/app.config';
import { MfeDemoComponent } from './app/mfe/mfe-demo/mfe-demo.component';

import 'zone.js';

console.log('main.build.ts');

createApplication(appConfig)
  .then((appRef) => {
    const demo1 = createCustomElement(MfeDemoComponent, { injector: appRef.injector });
    customElements.define('mfe-demo', demo1);
  })
  .catch((err) => console.error(err));
