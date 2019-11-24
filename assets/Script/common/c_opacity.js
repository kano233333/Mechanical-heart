cc.Class({
    extends: cc.Component,

    properties: {
        fromOpacity: 60,
        toOpacity: 255,
        duration: 4
    },
    
    start () {
        this.node.opacity = this.fromOpacity;
        cc.tween(this.node)
        .to(this.duration, {opacity: this.toOpacity})
        .to(this.duration, {opacity: this.fromOpacity})
        .union()
        .repeatForever()
        .start();
    }
});
