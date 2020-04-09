cc.Class({
    extends: cc.Component,

    properties: {
    
        imgCocos : cc.Sprite,   //변수 선언
    },

    // use this for initialization
    onLoad: function () {           // 최초 1회 실행됨
        var size = cc.winSize;
        cc.log("width: "+ size.width);

        // *** Position ***     1,2,4를 많이 사용
        //Type1
        // this.imgCocos.node.x = 300;
        // this.imgCocos.node.y = 100;
        //Type2
        // this.imgCocos.node.setPosition(-300,100);
        //Type3
        // this.imgCocos.node.setPosition(cc.v2(-300,100));
        //Type4
        // this.imgCocos.node.position= cc.v2(-300,100);

        // *** Anchor Point x:0.5 y:0.5
        // this.imgCocos.node.setPosition(-480,-320);
        //Type1
        // this.imgCocos.node.anchorX = 0.5;
        // this.imgCocos.node.anchorY = 0.5;
        //Type2
        // this.imgCocos.node.setAnchorPoint(1,1);

        // *** Scale ***
        //Type1
        // this.imgCocos.node.scaleX = 0.5;
        // this.imgCocos.node.scaleY = 0.5;
        //Type2
        // this.imgCocos.node.setScale(2,2);

        // *** Size( width & height ) w:195 h:270 ***
        // Type1
        this.imgCocos.node.width = 100;
        this.imgCocos.node.height = 100;
        // Type2 
        // this.imgCocos.node.setContentSize(300,300);
        //Type3
        // this.imgCocos.node.setContentSize(cc.size(300,100));
    },

    // // called every frame
    // update: function (dt) {
    // },
});
