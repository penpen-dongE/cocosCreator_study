
cc.Class({
    extends: cc.Component,

    properties: {
        imgMan: cc.Sprite,
    },

    onLoad : function() {
        // 배경색 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        const anim = this.imgMan.getComponent(cc.Animation);

        const animState = anim.play('anim1');

        // animState.wrapMode = cc.WrapMode.Normal;
        animState.wrapMode = cc.WrapMode.Loop;
        // animState.repeatCount = 2;
        // animState.repeatCount = Infinity;
        // animState.speed = 0.05;

        // anim.setCurrentTime(1,'test');
        // anim.play();
        // anim.play('test');
        // anim.pause('test');
        // anim.pause();
        // anim.resume('test');
        // anim.resume();
        // anim.stop('test');
        // anim.stop();
    },

    // update : function (dt) {},
});
