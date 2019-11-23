const disX = 1334;
const disY = disX/Math.sqrt(3);
cc.Class({
    extends: cc.Component,

    properties: {
        positionX: 0
    },

    start () {
        this.node.scale = Math.random()+0.2;
        this.node.opacity = (Math.random()+0.5)*255;
        this.node.y = Math.random()*750;
        this.setAction();
    },
    setAction() {
        var duration = (Math.random()+0.5) * 10;
        var action = cc.moveTo(duration,cc.v2(this.positionX+disX,this.node.y-disY));
        this.node.runAction(action);
    },
    update() {
        if(cc.v2(this.node.x).x >= cc.v2(this.positionX+disX).x - 2 && cc.v2(this.node.x).x <= cc.v2(this.positionX+disX).x + 2){
            this.node.destroy();
        }
    }
});
