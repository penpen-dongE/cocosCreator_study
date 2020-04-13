
cc.Class({
    extends: cc.Component,

    properties: {
       imgMan: cc.Sprite,
       rotationSpeed: 50,
    },

    onLoad: function () {
        // 배경은 흰색
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        this.bLeft = false;
        this.bRight = false;

        //  키보드 이벤트 등록
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

    },

    // 매 프레임마다 bLeft 와 bRight을 체크해서 rotate 시켜줌.
    update: function (dt) {
        if (this.bLeft) {
            cc.log("bLeft : " + this.imgMan.node.angle);
            this.imgMan.node.angle += dt * this.rotationSpeed;
        }
        if (this.bRight) {
            this.imgMan.node.angle -= dt * this.rotationSpeed;
        }
    },

    onDestroy: function() {
        // 이벤트 해제하기
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    
    onKeyDown: function (event) {
        cc.log('aaa');
        switch(event.keyCode) {
            case cc.macro.KEY.left:
                this.bLeft = true;
                break;
            case cc.macro.KEY.right:
                this.bRight = true;
                break;
        }
    },

    onKeyUp: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.left:
                this.bLeft = false;
                break;
            case cc.macro.KEY.right:
                this.bRight = false; 
                break;
        }
    },
});
