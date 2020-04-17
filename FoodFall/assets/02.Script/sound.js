
cc.Class({
    extends: cc.Component,

    properties: {
        sound_on:{
            default: null,
            type: cc.Sprite,
        },
        sound_off:{
            default: null,
            type: cc.Sprite,
        },
    },

    // onLoad () {},

    start () {
        this.sound_On();
        this.sound_Off();
    },

    sound_On: function() {
        var self = this.sound_off;
        this.sound_on.node.on("touchend", function(){
            cc.log("on 터치!");
            self.node.parent.parent.getComponent("Game").isPlayAudio = true;
            self.node.setPosition(cc.v2(0,0));
            // this.sound_on.setPositionx(100);
            cc.audioEngine.resumeAll();
            
        })
    },

    sound_Off: function() {
        var self = this.sound_off;
        this.sound_off.node.on("touchend", function(){
            cc.log("off 터치!");
            self.node.parent.parent.getComponent("Game").isPlayAudio = false;
            // this.sound_off.node.setPosition(cc.v2(200,0));
            self.node.setPosition(cc.v2(5000,0));
            cc.audioEngine.pauseAll();
            // cc.AudioSource.pauseAll();
        })
    },

    // update (dt) {},
});
