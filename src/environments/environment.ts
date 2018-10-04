// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
    apiKey: 'AIzaSyDEkMhQOYwgYwjb323LTEArgquOxLtuA1M',
    authDomain: 'my-memories-angular-ng6.firebaseapp.com',
    databaseURL: 'https://my-memories-angular-ng6.firebaseio.com',
    projectId: 'my-memories-angular-ng6',
    storageBucket: 'my-memories-angular-ng6.appspot.com',
    messagingSenderId: '575825708329'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
