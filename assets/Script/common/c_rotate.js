cc.Class({
    extends: cc.Component,

    properties: {
        speech: 10
    },
    start() {
        var action = cc.rotateBy(this.speech,360).repeatForever();
        this.node.runAction(action);
    }
});
