var nNum = 0;

cc.Class({
    extends: cc.Component,

    properties: {        
    },

    onLoad: function () {
        // 배경은 흰색
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 매 프레임마다 실행하기 : update 와 기능이 같다. 
        // cc.director.getScheduler().schedule(this.callEveryFrame, this, 0);

        // 지정된 시간마다 실행하기 : 2초마다 호출
        // cc.director.getScheduler().schedule(this.myTick, this, 2.0);

        // 딜레이 타임 후 한 번 실행하기 : 1.0 초 후 실행. 2.0초 간격으로 2번 실행.
        // 맨 뒤 파라미터(pause 여부를 정하는 파라미터)가 false여야 실행된다. 
        cc.director.getScheduler().schedule(this.myTickOnce, this, 2.0, 2, 1.0, false);
    },

    // update: function (dt) {},

    callEveryFrame: function(dt) {
        nNum++;
        if(nNum > 60){
            nNum = 1;
        }

        cc.log("fps..", nNum);
    },

    myTick: function (dt) {
        cc.log("tick ****************************** "+ dt);
    },

    myTickOnce: function (dt) {
        cc.log("tickOnce after delay : "+ dt);
    },
});
