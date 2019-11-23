cc.Class({
    extends: cc.Component,

    properties: {
        moveX: 10,
        moveY: 40
    },

    start () {
        this.cloudTranslate();
    },
    cloudTranslate() {
        var duration = (Math.random()+0.5)*10;
        var jump1 = cc.moveTo(duration, this.node.x + this.moveX, this.node.y + this.moveY);
        var jump2 = cc.moveTo(duration, this.node.x - this.moveX*2, this.node.y - this.moveY*2);
        var series1 = cc.sequence(jump1,jump2).repeatForever();
        this.node.runAction(series1);
    }
});
