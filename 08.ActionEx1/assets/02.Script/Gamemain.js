
cc.Class({
    extends: cc.Component,

    properties: {
        imgMan : cc.Sprite,
        imgWoman : cc.Sprite,
        btnMenu : cc.Button,
    },

    onLoad : function () {
        // 배경색 흰색으로 
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 메뉴버튼 이벤트에 함수 연결
        this.btnMenu.node.on('click', this.doAction, this);
    },

    // update : function (dt) {},

    doAction : function(){
        //위치 초기화
        this.imgMan.node.setPosition(-360,200);
        this.imgWoman.node.setPosition(-360,-50);

        // this.doActsionMove();
        this.doActionJump();
    },

    doActionMove: function () {
        const myActionTo = cc.moveTo(2, cc.v2(360,200));
        const myActionBy = cc.moveBy(2, cc.v2(360,200));

        this.imgMan.node.runAction(myActionTo);
        this.imgWoman.node.runAction(myActionBy);
    },

    doActionJump : function() {
        const myActionTo = cc.jumpTo(2, cc.v2(400,0), 50, 3);
        const myActionBy = cc.jumpBy(2, cc.v2(400,0), 50, 3);

        this.imgMan.node.runAction(myActionTo);
        this.imgWoman.node.runAction(myActionBy);
    },
});
