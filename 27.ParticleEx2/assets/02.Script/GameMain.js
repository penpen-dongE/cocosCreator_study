
cc.Class({
    extends: cc.Component,

    properties: {
        effect : cc.Prefab,
    },

    onLoad: function () {   

        // 터치 이벤트에 함수 연결
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);

        cc.log("onLoad: " + this.node.name);
    },

    // update: function (dt) {},

    onTouchBegin: function(event) {
        let temp = event.getLocation();
        let tempClick = this.node.convertToNodeSpaceAR(temp);

        this.doCreateEffect(tempClick);
    },

    doCreateEffect : function(pos) {
        const effect = cc.instantiate(this.effect);
        effect.position = pos;
        this.node.addChild(effect);
        cc.log("doCreateEffect: " + this.node.name);

        // 파티클이 끝날 때 함수를 호출하고 싶다면 다음 스케쥴러를 이용할 수 있다. 
        cc.director.getScheduler().schedule(this.myThickOnce, effect, 0.0, 0, 2.0, false);

    },

    myThickOnce: function (dt) {
        // 셀렉터 타겟이 effect 였기에 여기서의 this는 Canvas가 아니다. 
        cc.log("myThickOnce : " + this.name + " : " + dt);
        const particle = this.getComponent(cc.ParticleSystem);
        if (particle) {
            particle.stopSystem();
            this.destroy();
        }
    },
});
