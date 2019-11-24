const jiange = 70;
cc.Class({
    extends: cc.Component,

    properties: {
       mainNode: {
        default: null,
        type: cc.Node
       },
       scrollRange: 120,
       scrollOneWidth: 440
    },

    start () {
        this.onTouchMain();
    },

    onTouchMain() {
        // var mainX = this.mainNode.x;
        // var flag = 0, moveFlag = 1;
        // var prePointX = 0;
        // this.mainNode.on(cc.Node.EventType.TOUCH_START, (e)=>{
        //     mainX = this.mainNode.x;
        //     flag = 1;
        //     prePointX = e.touch._point.x.toFixed(1);
        // }, this)

        // this.mainNode.on(cc.Node.EventType.TOUCH_MOVE, (e)=>{
        //     var x = e.touch._point.x.toFixed(1);
        //     var dis = x - prePointX;
        //     this.mainNode.x = mainX + dis;
        // }, this)

        /* touchend
            ^
            |
            |    -220   -440   -660   -880
            |______|______|______|______|___
            |  |||||||||  |  |||||||||  |
            |  |||||||||  |  |||||||||  |
            |  |||||||||  |  |||||||||  |
            |  |||||||||  |  |||||||||  |
            |__|||||||||__|__|||||||||__|_____>
                        **  左滑切换
                            **  右滑切换
          ..************     ************..  end时候滑回原位置
        */
        // this.mainNode.on(cc.Node.EventType.TOUCH_END, ()=>{
        //     if(this.mainNode.x < -this.scrollOneWidth*3/2 + this.scrollRange){
        //         let action = cc.moveTo(0.2, -this.scrollOneWidth*3/2, 0);
        //         this.mainNode.runAction(action);
        //     }else if(this.mainNode.x > -this.scrollOneWidth/2 - this.scrollRange){
        //         let action = cc.moveTo(0.2, -this.scrollOneWidth/2, 0);
        //         this.mainNode.runAction(action);
        //     }else if(this.mainNode.x < -this.scrollOneWidth/2 - this.scrollRange && this.mainNode.x > -this.scrollOneWidth && flag == 1){
        //         let action = cc.moveTo(0.3, -this.scrollOneWidth*3/2, 0);
        //         this.mainNode.runAction(action);
        //         flag = 0;
        //     }else if(this.mainNode.x > -this.scrollOneWidth*3/2 + this.scrollRange && this.mainNode.x < -this.scrollOneWidth && flag == 1){
        //         let action = cc.moveTo(0.3, -this.scrollOneWidth/2, 0);
        //         this.mainNode.runAction(action);
        //         flag = 0;
        //     }
        // }, this)
    }
});
