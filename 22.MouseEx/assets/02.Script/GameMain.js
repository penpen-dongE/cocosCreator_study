
cc.Class({
    extends: cc.Component,

    properties: {
        imgMan: cc.Sprite,
    },

    onLoad: function () {
        // 배경색 흰색
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
    },

    // update:function (dt) {},

    onMouseDown: function (event) {
        cc.log('onMouseDown');

    },

    onMouseEnter: function (event) {
        cc.log('onMouseEnter');

    },

    onMouseMove: function (event) {
        cc.log('onMouseMove');

        const mousePoint = event.getLocation();
        const point = this.node.convertToNodeSpaceAR(mousePoint);
        const angle = this.getAngle(point, this.imgMan.node.position);
        this.imgMan.node.angle = -angle + 180;
    },

    onMouseLeave: function (event) {
        cc.log('onMouseLeave');

    },

    onMouseUp: function (event) {
        cc.log('onMouseUp');

    },

    onMouseWheel: function (event) {
        cc.log('onMouseWheel');

    },

    getAngle: function (pos1, pos2) {
        let angle = Math.atan2(pos2.x-pos1.x, pos2.y-pos1.y);
        angle = angle * (180/Math.PI);
        return angle;
    },

});
