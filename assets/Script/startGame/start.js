cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    start () {
        this.node.on('touchend', ()=>{
            cc.director.loadScene('selectCheckpoint');
        })
    },

    // update (dt) {},
});
