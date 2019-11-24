cc.Class({
    extends: cc.Component,

    properties: {
        meteor: {
            default: null,
            type: cc.Prefab
        },
        duration: 1
    },
    onLoad() {
        
    },
    start () {
        cc.director.getScheduler().schedule(()=>{
            this.spawnNew(this.meteor);
        }, this, this.duration)
    },
    spawnNew(prefab) {
        var _prefab = cc.instantiate(prefab);
        this.node.addChild(_prefab);
    }
});
