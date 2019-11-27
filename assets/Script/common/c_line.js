cc.Class({
    extends: cc.Component,

    properties: {
        fillStyle:'#4bd6d3',
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    start () {
        var ctx = this.node.getComponent(cc.Graphics);
        ctx.fillStyle = this.fillStyle;
        ctx.rect(this.x,this.y, this.width,this.height);
        ctx.fill();
    }
});
