window.Headroom = require('headroom')

export default class NavSticky {

    constructor() {
        this.init()
    }

    init() {
        this.myElement = document.querySelector(".nav");
        this.run()
    }

    run() {
        var headroom  = new Headroom(this.myElement,{
            tolerance: 15,
            offset : 50,
        });
        headroom.init();
    }


}
