cc.Class({
    extends: cc.Component,

    properties: {
        duration: 20,
        delay: 0
    },
    onLoad(){
        this.node.y = (Math.random()-0.2) * 375;
    },
    start () {
        this.scheduleOnce(this.cloudTranslate, this.delay);
        this.scheduleOnce(()=>{
            this.node.destroy();
        }, this.duration);
    },
    cloudTranslate() {
        var jump1 = cc.moveTo(2, this.node.x, this.node.y + 60);
        var jump2 = cc.moveTo(2, this.node.x, this.node.y - 120);
        var transX1 = cc.moveTo(this.duration, 1334/2 + this.node.width/2, this.node.y);
        // var transX2 = cc.moveTo(0, -1334/2 - this.node.width/2, this.node.y);

        // var transX1 = cc.moveTo(3, 1334/2, this.node.y);
        // var transX2 = cc.moveTo(0, -1334/2, this.node.y);

        var series1 = cc.sequence(jump1,jump2).repeatForever();
        var series2 = cc.spawn(series1, transX1);
        
        this.node.runAction(series2);
    }
});
