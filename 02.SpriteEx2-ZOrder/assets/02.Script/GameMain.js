
cc.Class({
    extends: cc.Component,

    properties: {
       imgMan : cc.Sprite,
       imgWoman : cc.Sprite,
    },

    onLoad : function () {
        // 배경색 흰색으로 - 공부용
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 기본 zIndex 값은 0이다.
        cc.log(this.imgMan.node.zIndex);
        cc.log(this.imgWoman.node.zIndex);

        
        this.imgMan.node.zIndex = 1;
    },

    // update : function (dt) {},
});
