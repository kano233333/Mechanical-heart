cc.Class({
    extends: cc.Component,

    properties: {
        duration: 0.5,
        delay: 0,
        fromScaleX: 0,
        fromScaleY: 0
    },

    onLoad () {
        this.node.scaleX = this.fromScaleX;
        this.node.scaleY = this.fromScaleY;
        var timeCallback = function (dt) {
            var actTo = cc.scaleTo(this.duration, 1);
            this.node.runAction(actTo);
        }
        this.scheduleOnce(timeCallback, this.delay);
    },
});
