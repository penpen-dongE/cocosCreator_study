
cc.Class({
    extends: cc.Component,

    properties: {
      anim : cc.Component,
      animState: cc.AnimationState,
    },

    onLoad: function () {
        this.anim = this.getComponent(cc.Animation);
        this.animState = this.anim.getAnimationState('dance');
        this.animState.wrapMode = cc.WrapMode.Loop;
        this.anim.play('dance');

        this.node.on('say-hello', this._sayHello, this);

    },

    _sayHello: function(arg1, arg2) {
        cc.log("2: ", arg1, arg2);
        this.doSomething();
    },

    doSomething: function () {
        if (this.animState.isPaused) {
            this.anim.resume("dance");
        } else {
            this.anim.pause("dance");
        }
    },

});
