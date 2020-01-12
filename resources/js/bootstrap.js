
try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

const luna =  require('luna-sass/Framework/js/luna.js');
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// import Animations from './scripts/animations'
import NavSticky from './scripts/nav_sticky'
// import obscure from './scripts/obscure'

// import SkikyLaptop from './scripts/sticky_laptop'
import TriggerAnimation from './scripts/trigger_animation'

// import ParticalLights from './scripts/partical_lights'

(function($, window, document){

    'use strict';

    $(document).Luna();

    new NavSticky()

    // new SkikyLaptop()
    new TriggerAnimation()

    // var _particles = $('.particles').length
    // if(_particles) {
    //     for (let i = 1; i <= _particles; i++) {
    //         new ParticalLights({
    //             element: `particles-js-${i}`
    //         })
    //     }
    // }

})(jQuery, window, document);

