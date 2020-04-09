
cc.Class({
    extends: cc.Component,

    properties: {
        lblTitle: cc.Label,
        btnLeft: cc.Button,
        btnRight: cc.Button,
    },

    onLoad : function() {
        this.btnLeft.node.on('click', this.changeText, this);
        this.btnRight.node.on('click', this.changeText, this);

    },

    start () {

    },

    // update : function (dt) {},

    changeText: function(sender) {
        switch (sender.node.name){
            case 'btnLeft' :
                this.lblTitle.string = "고무고무";
                break;
            case 'btnRight' :
                this.lblTitle.string = "동동";
                break;
            default :
                break;
        }
    },
});
