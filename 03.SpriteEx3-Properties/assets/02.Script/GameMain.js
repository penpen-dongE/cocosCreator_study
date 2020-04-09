
cc.Class({
    extends: cc.Component,

    properties: {
        imgMan : cc.Sprite,
    },

    
    onLoad : function() {

        // 배경색 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 1. 스프라이트의 여러가지 속성 지정
        // this.imgMan.node.setPosition(cc.v2(-200,0));    // 좌표 지정
        // this.imgMan.node.setScale(2.0,2.0);             // 이미지의 사이즈 설정
        // this.imgMan.node.angle = -20.0;                 // 이미지 회전, degree 기준을 사용

        // 2. 스프라이트의 색 지정
        this.imgMan.node.color = cc.color(0,0,255);         // 칼라 설정
        this.imgMan.node.opacity = 100;                     // 투명도 설정 0 ~ 255
        this.imgMan.node.active = false;                    // 이미지를 보여줄 건지 안 보여줄 건지 설정
                                                                // false : 안보여줌
    
        // flip 속성은 지원하지 않는다. 
        // action 으로는 사용할 수 없다. 
    },

    // update : function (dt) {},
});
