
cc.Class({

    extends: cc.Component,

    properties: {

        btnSceneChange: cc.Button,

    },

    // component가 처음 실행될 때 호출된다.
    // (Scene이 로드되거나, node가 실행되었을 때)

    onLoad: function () {

        // 배경색 흰색으로 - 단순히 공부용
        cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

        // 메뉴버튼에 액션 연결
        this.btnSceneChange.node.on('click', this.doTransitionScene, this);

        cc.log('Main : onLoad');
    },

    // start 콜백함수는 component 의 첫 실행시에만 호출된다.
    // update의 첫 프레임 이전에 실행된다고 생각하면 된다.

    start: function () {
        cc.log('Main : start');
    },


    // 매 프레임마다 호출된다.
    // update는 모든 animation update 전에 실행된다.
    update: function (dt) {
    },

    // animation 업데이트 이후에 뭔가를 실행하고 싶거나,
    // 모든 컴포넌트들의 update가 끝나고 뭔가를 하고 싶다면 사용하면 된다.

    lateUpdate: function (dt) {
    },  

    // component나 node가 destroy() 호출했을 때 호출된다.
    // destroy가 호출된 프레임이 끝나게 되면 실행된다.

    onDestroy: function () {

        cc.log('Main : onDestroy');
    },

    // 컴포넌트가 달린 node의 active 프로퍼티가 false에서 true가 될 때나,
    // 컴포넌트의 enabled 프로퍼티가 false에서 true가 될 때 호출된다.
    // 만약 node가 처음 만들어졌고, enabled가 true라면,
    // onLoad 이후에 하지만 onStart 이전에 onEnable 콜백은 실행될 것이다.

    onEnable: function () {
        cc.log('Main : onEnable');
    },


    onDisable: function () {
        cc.log('Main : onDisable');
    },

    doTransitionScene: function () {
        cc.director.loadScene('TestScene2');
    },

});

