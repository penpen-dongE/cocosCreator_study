
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad: function () {
        cc.log("SelfRemove가 컴포넌트로 추가되었어요~");

        // Type#1 - Action
        const act = cc.sequence(
                    cc.delayTime(5.0),
                    cc.removeSelf(true),
                );
        //this.node.runAction(act);

        // Type#2 - Schedule Script
        cc.director.getScheduler().schedule(this.myTickOnce, this, 0.0, 0, 5.0, false);

    },

    // update (dt) {},


    myTickOnce: function(dt){
        this.node.destroy();
    },

    onDestroy: function() {
        cc.log("destroy가 호출되어서 죽어요~");
    },
});
