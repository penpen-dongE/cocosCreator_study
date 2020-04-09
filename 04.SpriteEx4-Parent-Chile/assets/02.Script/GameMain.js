
cc.Class({
    extends: cc.Component,

    properties: {
       imgParent: cc.Sprite,
       imgChild: cc.Sprite, 
    },

    onLoad : function() {
        //배경색 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        //스프라이트의 부모 & 자식 개념
        this.imgParent.node.color = cc.color(0,255,0); // 칼라 설정
        let parentSize = this.imgParent.node.getContentSize();
        cc.log(parentSize.width);

        // 자식 회전
        this.imgChild.node.angle = -90.0;       //이미지 회전

        //자식 위치 이동
        this.imgChild.node.setPosition(cc.v2(parentSize.width / 2, 0));

    },

    // update (dt) {},
});
