var bChange = false;

cc.Class({
    extends: cc.Component,

    properties: {
        btnStart: cc.Button,
        btnPause: cc.Button, 
        btnResume: cc.Button,
        btnChange: cc.Button,
        btnStop: cc.Button,
    },

    onLoad: function () {
        // 배경색 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        this.btnStart.node.on('click', this.doStart, this);
        this.btnPause.node.on('click', this.doPause, this);
        this.btnResume.node.on('click', this.doResume, this);
        this.btnChange.node.on('click', this.doChange, this);
        this.btnStop.node.on('click', this.doStop, this);

    },

    // update: function (dt) {},

    doStart: function() {
        // 1초마다 tick1함수 호출
        cc.director.getScheduler().schedule(this.tick1, this, 1.0);
        //2초마다 tick2 호출
        cc.director.getScheduler().schedule(this.tick2, this, 2.0);
    },

    doPause: function() {
        cc.director.getScheduler().pauseTarget(this);
    },

    doResume: function() {
        cc.director.getScheduler().resumeTarget(this);
    },

    doChange: function() {
        if (bChange){
            bChange = false;
            cc.director.getScheduler().schedule(this.tick2, this, 2.0);
        }
        else {
            bChange = true;
            cc.director.getScheduler().schedule(this.tick2, this, 3.0);
        }
    },

    doStop: function () {
        cc.director.getScheduler().unschedule(this.tick1, this);
        cc.director.getScheduler().unschedule(this.tick2, this);
    },

    tick1: function(dt) {
        cc.log("tick1 : " + dt);
    },

    tick2: function(dt) {
        cc.log("tick2 : "+ dt);
    },

});
