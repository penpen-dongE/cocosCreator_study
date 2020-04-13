
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad: function () {
        const anim = this.getComponent(cc.Animation);

        const animState = anim.play('dance');
        animState.wrapMode = cc.WrapMode.Loop;

    },


    // update (dt) {},

    doSomething: function() {
        cc.log(this.node.name + " : I'm doing somethis ... " );
    },
});
