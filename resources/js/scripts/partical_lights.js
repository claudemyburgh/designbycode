
require('particles.js')

export default class ParticalLights {

    constructor(args) {
        this.args = args || ''
        this.init()
    }

    default() {
        for (var a = arguments, t = 0; t < a.length; t++) {
            if (void 0 !== a[t]) return a[t]
        }
    }

    get options() {
        return {
            element: this.default(this.args.element, '#particles'),
            config: this.default(this.args.config,   `${appurl}/js/particlesjs-config.json`)
        }
    }

    init() {
        this.run()
    }

    run() {
        particlesJS.load(this.options.element, this.options.config, () => {})
    }

}
