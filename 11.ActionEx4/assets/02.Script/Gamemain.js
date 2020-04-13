// 함수를 액션처럼 사용하기 

cc.Class({
    extends: cc.Component,

    properties: {
        imgMan : cc.Sprite,
        lblText1 : cc.Label,
        lblText2 : cc.Label,
        lblText3 : cc.Label,
        btnMenu : cc.Button,
    },

    onLoad : function () {
        // 배경은 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        this.lblText1.string="";
        this.lblText2.string="";
        this.lblText3.string="";

        // 메뉴 버튼의 이벤트에 함수 연결
        this.btnMenu.node.on('click', this.doAction, this);

    },

    // update : function (dt) {},

    doAction: function(event) {
        const action = cc.sequence(
            cc.place(cc.v2(-240, 150)),
            cc.delayTime(1.5),
            cc.hide(),
            cc.delayTime(1.5),
            cc.show(),

            //callFunc 라는 애가 함수를 콜백함수로 만들어주는 역할을 함
            
            cc.callFunc(this.callback1, this),
            cc.delayTime(1.5),
            cc.callFunc(this.callback2, this, 111),
            cc.delayTime(1.5),
            cc.callFunc(function(){
                this.lblText3.string = "callback 3 called";
            }.bind(this)),
            cc.removeSelf(true),
        );
        this.imgMan.node.runAction(action);
    },

    // CallFunc without data
    callback1: function (target) {
        cc.log("callback 1 called");
        this.lblText1.string = "callback 1 called";
    },

    // CallFunc with data
    callback2: function(target, data) {
        cc.log("callback 2 called : " + data);
        this.lblText2.string = "callback 2 called";
    },

});
