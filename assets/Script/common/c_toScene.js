cc.Class({
    extends: cc.Component,

    properties: {
       scene: 'startGame'
    },

    start () {
        this.node.on('touchend', ()=>{
            cc.director.loadScene(this.scene);
        })
    },

    // update (dt) {},
});
