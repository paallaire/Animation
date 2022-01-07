/* eslint-disable import/no-extraneous-dependencies */

// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Rellax from 'rellax';

import Alpine from 'alpinejs';

import debugInit from './debug/index';
import cursorCustomInit from './modules/cursorCustom';

/* Alpine
-------------------------------------------- */
window.Alpine = Alpine;
Alpine.start();

/* Custom javascript
-------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  debugInit();
  cursorCustomInit();

  const rellax = new Rellax('.rellax');
});
