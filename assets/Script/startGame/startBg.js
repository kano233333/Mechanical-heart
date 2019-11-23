cc.Class({
    extends: cc.Component,

    properties: {
        meteor: {
            default: null,
            type: cc.Prefab
        },
        // cloud1: {
        //     default: null,
        //     type: cc.Prefab
        // },
        // cloud2: {
        //     default: null,
        //     type: cc.Prefab
        // },
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
    },
    cloudTranslate() {
        var jump1 = cc.moveBy(4, 0,30);
        var jump2 = cc.moveBy(4, 0, -60);
        var transX = cc.moveBy(20, 1334, 0);
        var series = cc.sequence(jump1,jump2).repeatForever();
        var series2 = cc.spawn(series, transX)
        this.cloud3.runAction(series2);
    }
});
