
cc.Class({
    extends: cc.Component,

    properties: {
        btnSceneChange: cc.Button,
    },


    onLoad: function () {

        // 배경은 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 메뉴 버튼에 액션 연결
        this.btnSceneChange.node.on('click', this.doTransitionScene, this);

        // get the parameter 
        let username = cc.sys.localStorage.getItem('name');
        // remove the item of the key (username)
        cc.sys.localStorage.removeItem('name');
        // cc.sys.localStorage.clear();
        if (username) {
            cc.log('name : '+ username);
        }

        this.node.opacity = 0;
        this.node.runAction (
            cc.fadeIn(1.0),
        );
    },

    // update: function (dt) {},

    doTransitionScene: function() {
        cc.director.loadScene('MainScene');
    },
});
