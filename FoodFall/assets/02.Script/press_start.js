
cc.Class({
    extends: cc.Component,

    properties: {
   
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

        // 게임화면을 미리 로드시켜놓는다. 
        cc.director.preloadScene("GameScene");

        // 터치가 끝나면 화면 전환
        this.node.on("touchend", function() {
            cc.director.loadScene("GameScene");
            cc.log("게임화면으로 전환");
        });

    },

    start () {

    },

    // update (dt) {},
});
