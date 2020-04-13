
cc.Class({
    extends: cc.Component,

    properties: {
       btnEvent: cc.Button,
    },

    onLoad: function () {
        // 배경색은 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 메뉴 버튼에 함수 연결
        this.btnEvent.node.on('click', this.doEvent, this);

        this.node.on('say-hello', this._sayHello, this);
    },

    // update (dt) {},

    _sayHello: function(arg1, arg2) {
        cc.log("1: ", arg1, arg2);
    },

    doEvent: function() {
        // this.node.emit('say-hello', '홍길동', '고무고무');

        const enemy = this.node.getChildByName("enemy");
        for (var i = 0; i < enemy.childrenCount; i++){
            enemy.children[i].emit('say-hello', '길동이', '또치');
        }
    },
});
