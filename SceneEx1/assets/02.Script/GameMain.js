
cc.Class({
    extends: cc.Component,

    properties: {
      btnSceneChange1: cc.Button,
      btnSceneChange2: cc.Button,
      btnSceneChange3: cc.Button,

    },

    onLoad: function () {
        // 배경은 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 메뉴 버튼에 액션 연결
        this.btnSceneChange1.node.on('click', this.doTransitionScene, this);
        this.btnSceneChange2.node.on('click', this.doTransitionSceneWithParam, this);
        this.btnSceneChange3.node.on('click', this.doTransitionSceneWithEffect, this);
    },

    // update: function (dt) {},

    doTransitionScene: function() { 
        cc.director.loadScene('TestScene2');
    },

    doTransitionSceneWithParam: function() { 
        // save the parameter
        cc.sys.localStorage.setItem('name', '고무고무');

        cc.director.loadScene('TestScene2');
    },

    doTransitionSceneWithEffect: function() { 
        this.node.runAction(cc.sequence(
            cc.fadeOut(1.0),
            cc.callFunc(function(){
                cc.director.loadScene('TestScene2');
            })
        ));
    },
});
