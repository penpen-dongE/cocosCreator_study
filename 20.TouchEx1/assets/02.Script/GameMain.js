
cc.Class({
    extends: cc.Component,

    properties: {
        x:0,
        y:0,
       imgMan: cc.Sprite,
    },


    onLoad: function () {

        // 배경색 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // Use enumeration type to register
        // Only touch or mouse events can be registered in the capturing phase
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCanceled, this);

        // Use event name to register
        // touchstart, touchmove, touchend, touchcancel
        // node.on('touchstart', this.onTouchBegan, this);

        // Note, touch events support multi-touch,
        // each touch spot will send one event to the event listener.
        // You can get all the information of touch spot from cc.Touch.API:

    },

    // update (dt) {},

    onTouchBegan: function(event) {
        const touchPoint = event.touch.getLocation();
        // Converts a Point to node (local) space coordinates.
        const point = this.node.convertToNodeSpaceAR(touchPoint);

        cc.log("onTouchBegan id = " + event.touch.getID() +
                            ", x = " + point.x +
                            ", y = " + point.y );
        // 터치 되었을 때 두 개(x, y)의 값 초기화 시킴
        this.x = 0;
        this.y = 0;

        // touch check
        const rect = this.imgMan.node.getBoundingBox();
        if(rect.contains(point)){
            cc.log(" Sprite clicked !! ");
        }
    },

    onTouchMoved: function(event) {
        const touchPoint = event.touch.getLocation();
        const point = this.node.convertToNodeSpaceAR(touchPoint);

        // delta = 이전 터치 위치와 현재 터치 위치의 거리.
        var delta = event.touch.getDelta();
        this.x += delta.x;
        this.y += delta.y;

    },

    onTouchEnded: function(event) {
        const touchPoint = event.touch.getLocation();
        const point = this.node.convertToNodeSpaceAR(touchPoint);

        cc.log("onTouchEnd id = " + event.touch.getID() +
                            ", x = " + point.x +
                            ", y = " + point.y );
        cc.log("move : "+ this.x + " : " + this.y);
    },

    onTouchCanceled: function(event) {  
    },
});
