
import Scrollmagic from 'scrollmagic'
require('debug.addIndicators')

export default class SkikyLaptop {

    constructor() {

        this.init()
    }

    init() {
        this.controller = new Scrollmagic.Controller();
        this.element = document.querySelectorAll('.panelz')
        this.run()
    }

    run() {

        this.element.forEach( (elm) => {
            let scene = new Scrollmagic.Scene({
                triggerElement: elm,
                triggerHook: 'onLeave',
                duration: "100%"
            })
            .addIndicators()
            .setPin(elm, {pushFollowers: false})
            .addTo(this.controller)

        })


    }


}
