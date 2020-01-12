import Scrollmagic from 'scrollmagic'
import { TweenMax, TimelineMax, Back, Elastic } from 'gsap'
require('animation.gsap');
// require('debug.addIndicators');

export default class TriggerAnimation {

    constructor(args) {
        this.args = args || {}
        this.init()
    }

    defaults() {
        for (let a = arguments, i = 0; i < a.length; i++) {
            if (void 0 !== a[i]) return a[1]
        }
    }

    get options() {
        return {
            parent: this.defaults(this.args.parent, '.scroll__trigger'),
            child: this.defaults(this.args.child, '.scroll__trigger--element'),
            hook: this.defaults(this.args.hook, '0.85'),
            duration: this.defaults(this.args.duration, false),
        }
    }

    init() {
        this.parent = document.querySelectorAll(this.options.parent)
        this.controller = new Scrollmagic.Controller()
        this.triggerAnimationJumps()
        this.speadAnimation()
        this.heroAnimation()
    }

    triggerAnimationJumps() {

        if (this.parent.length) {
            this.parent.forEach( (elem) => {
                let tween = TweenMax.staggerFrom($(elem).find(this.options.child), 1, {
                    scale: 0.75,
                    opacity: 0,
                    y: 160,
                    ease:Back.easeInOut
                    }, 0.15)

                let scene = new Scrollmagic.Scene({
                    triggerElement: elem,
                    triggerHook: this.options.hook,
                    // duration: this.options.duration
                })
                .setTween(tween)
                // .addIndicators()
                .addTo(this.controller)
            })
        }
    }

    heroAnimation() {
        TweenMax.from('.comin', 1, {x: "120%", opacity: 0, ease:Back.easeOut, delay: 0.25})
    }

    speadAnimation() {
        var spreadContainer = document.getElementById('spread__container')

        if (spreadContainer) {

            var tween = new TimelineMax()
                .staggerTo('.spread', 2, {
                    cycle: {
                        x: [0, 175, -175, 325, -325],
                        scale: [1, 0.8, 0.8, 0.6, 0.6],
                    },
                    ease: Elastic.easeOut.config(1, 0.3)
                }, 0)

           new Scrollmagic.Scene({
                triggerElement: spreadContainer,
                triggerHook: 0.25,
                reverse: true
                // duration: "50%"
            })
            .setTween(tween)
            .addIndicators()
            .addTo(this.controller)
        }

    }


}
