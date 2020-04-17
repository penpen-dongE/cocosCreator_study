
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad: function () {

        this.node.on("touchend", function(){
            
            if(this.node.parent.parent.getComponent("Game").ispaused === true){
                return;
            }
            this.node.dispatchEvent(new cc.Event.EventCustom("food_catch", true));
            this.node.removeFromParent();            
        },this);
        
    },


    // update (dt) {},
});
