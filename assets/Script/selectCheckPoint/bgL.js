// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    start () {
        let scaleForShowAll = Math.min(
            cc.view.getCanvasSize().width / this.node.width, 
            cc.view.getCanvasSize().height / this.node.height
            );
        let realWidth = this.node.width * scaleForShowAll;
        let realHeight = this.node.height * scaleForShowAll;
        
        // this.node.scale = Math.max(
        // cc.view.getCanvasSize().width / realWidth, 
        // cc.view.getCanvasSize().height / realHeight
        // );
        this.node.scaleX = cc.view.getCanvasSize().width / realWidth;
        this.node.scaleY = cc.view.getCanvasSize().height / realHeight;
    },

    // update (dt) {},
});
