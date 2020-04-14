
cc.Class({

    extends: cc.Component,

    properties: {

        btnSceneChange: cc.Button,

    },


    onLoad: function () {

        // 배경색 흰색으로 - 단순히 공부용
        cc.Camera.main.backgroundColor = cc.color(0, 255, 255);

        // 메뉴버튼에 액션 연결
        this.btnSceneChange.node.on('click', this.doTransitionScene, this);

        cc.log('TestScene2 : onLoad');
    },

    start: function () {
        cc.log('TestScene2 : start');
    },

    update: function (dt) {
    },

    lateUpdate: function (dt) {
    },  

    onDestroy: function () {

        cc.log('TestScene2 : onDestroy');
    },

    onEnable: function () {
        cc.log('TestScene2 : onEnable');
    },


    onDisable: function () {
        cc.log('TestScene2 : onDisable');
    },

    doTransitionScene: function () {
        cc.director.loadScene('MainScene');
    },

});

