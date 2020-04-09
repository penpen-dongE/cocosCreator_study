
cc.Class({
    extends: cc.Component,

    properties: {
        lblLabel4: cc.Label,
        lblLabel6: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad : function () {
        // 아래는 system fonts or TTF fonts 에만 사용 가능

        // outline
        var outline = this.lblLabel4.node.addComponent(cc.LabelOutline);
        outline.color = cc.Color.RED;
        outline.width = 3;
        // shadow
        var shadow = this.lblLabel6.node.addComponent(cc.LabelShadow);
        shadow.color = cc.Color.RED;
        shadow.offset = cc.v2(5,-5);

    },

    start () {

    },

    // update : function (dt) {},
});
