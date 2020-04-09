
cc.Class({
    extends: cc.Component,

    properties: {
        imgMan : cc.Sprite,
        btnMenu : cc.Button,
    },

    onLoad : function () {
        // 배경색은 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 메뉴버튼의 이벤트에 함수 연결
        this.btnMenu.node.on('click', this.doAction, this);

    },

    // update : function (dt) {},

    doAction: function (event) {
        //위치 초기화
        this.imgMan.node.setPosition(-360, 0);

        // this.ActionSequence();
        // this.ActionSpawn();
        // this.ActionRepeat();
        // this.ActionRepeatForever();
        this.ActionDelayTime();
    
    },

    ActionSequence: function() {
        const action = cc.sequence(
            cc.moveBy(2, cc.v2(600,0)),
            cc.rotateBy(2, 720)
        );
        this.imgMan.node.runAction(action);
    },

    ActionSpawn: function() {
        // 4초에 4번 점프(초당 1번 점프)
        // 회전은 2초만
        // 그러므로 점프 두 번 하는 동안 회전, 나머지는 그냥 점프만 함
        const action = cc.spawn(
            cc.jumpBy(4, cc.v2(600,0), 50, 3),
            cc.rotateBy(2, 720)
        );
        this.imgMan.node.runAction(action);
    },

    ActionRepeat : function() {
        const myActionForward = cc.moveBy(2, cc.v2(600, 0));
        const myActionBack = myActionForward.reverse();
        const myAction = cc.sequence(myActionForward, myActionBack);

        const rep1 = cc.repeat(myAction, 2);

        this.imgMan.node.runAction(rep1);
    },

    ActionRepeatForever : function () {
        const myActionForward = cc.moveBy(2, cc.v2(600,0));
        const myActionBack = myActionForward.reverse();
        const myAction = cc.sequence(myActionForward, myActionBack);

        const rep2 = cc.repeatForever(myAction);

        this.imgMan.node.runAction(rep2);
    },

    ActionDelayTime: function() {
        const act1 = cc.rotateTo(1, 150);
        const act2 = cc.rotateTo(1,0);
        const act3 = cc.flipX(true);
        const act4 = cc.removeSelf(true);
        const myAction = cc.sequence(
            act1,
            cc.delayTime(2.0),
            act2,
            cc.delayTime(1.0),
            act3,
            cc.delayTime(1.0),
            act4,
        );

        this.imgMan.node.runAction(myAction);
    },
});
