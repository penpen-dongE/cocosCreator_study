var num = 0;

cc.Class({
    extends: cc.Component,

    properties: {
        lblDesc: cc.Label,
        // test: cc.Sprite,
    },

    onLoad : function () {
        const anim = this.getComponent(cc.Animation);

        const animState = anim.play('scale');
        animState.wrapMode = cc.WrapMode.Loop;
        
    },

    // 애니메이션의 이벤트로 불리는 함수는
    // 자기 자신에 속해 있는 Component 스크립트의 함수만 호출이 된다. 
    // GameMain.js에 있는 함수는 호출이 안된다. 
    OnScaleEnd: function() {
        this.lblDesc.string = ++num;
        cc.log("scale animation end 2 ...");
    },
});

