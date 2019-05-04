/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {hmrModule} from "@angularclass/hmr";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if ((<any>environment).hmr) {
  if (module[ 'hot' ]) {
    // hmrBootstrap(module, bootstrap);
    bootstrap().then((ngModuleRef) => {
      return hmrModule(ngModuleRef, module);
    }).catch(err => console.log(err));
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap().catch(err => console.log(err));
}