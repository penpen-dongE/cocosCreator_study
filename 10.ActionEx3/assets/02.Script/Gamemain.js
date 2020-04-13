
cc.Class({
    extends: cc.Component,

    properties: {
        imgMan : cc.Sprite,
        imgWoman1 : cc.Sprite,
        imgWoman2 : cc.Sprite,
        imgBall : cc.Sprite,
        btnMenu : cc.Button,
    },
   
    onLoad : function () {
        // 배경은 흰색
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 메뉴 버튼에 액션 연결
        this.btnMenu.node.on('click', this.doAction, this);
    },

    // update : function (dt) {},

    doAction: function () {
        //위치 초기화
        this.imgMan.node.setPosition(-380, 240);
        this.imgWoman1.node.setPosition(-380, 110);
        this.imgWoman2.node.setPosition(-380, -20);
        this.imgBall.node.setPosition(-380, -130);

        // this.doActionEase();
        // this.doActionElastic();
        this.doActionBounce();
        // this.doActionSpeed();
    },

    doActionEase: function() {
        // 정상 속도
        const move = cc.moveBy(3.0, cc.v2(700,0));

        // 빨라지기 : 시작이 늦고 나중에 빠름
        const ease_in = move.clone().easing(cc.easeIn(2.0));
        // 느려지기 : 시작이 빠르고 나중에 늦음
        const ease_out = move. clone().easing(cc.easeOut(2.0));
        // 빨라졌다 느려지기 : 시작과 끝이 느리고 중간이 빠름
        const ease_inout = move.clone().easing(cc.easeInOut(2.0));

        this.imgMan.node.runAction(move);
        this.imgWoman1.node.runAction(ease_in);
        this.imgWoman2.node.runAction(ease_out);
        this.imgBall.node.runAction(ease_inout);
    },

    doActionElastic : function () {
        const move = cc.moveBy(3.0, cc.v2(700,0));

        const ease_in = move.clone().easing(cc.easeElasticIn(1.0));
        const ease_out = move.clone().easing(cc.easeElasticssOut(1.0));
        const ease_inout = move.clone().easing(cc.easeElasticInOut(1.0));

        this.imgMan.node.runAction(move);
        this.imgWoman1.node.runAction(ease_in);
        this.imgWoman2.node.runAction(ease_out);
        this.imgBall.node.runAction(ease_inout);
    },

    doActionBounce: function() {
        const move = cc.moveBy(3.0, cc.v2(700,0));

        const ease_in = move.clone().easing(cc.easeBounceIn());
        const ease_out = move.clone().easing(cc.easeBounceOut());
        const ease_inout = move.clone().easing(cc.easeBounceInOut());

        this.imgMan.node.runAction(move);
        this.imgWoman1.node.runAction(ease_in);
        this.imgWoman2.node.runAction(ease_out);
        this.imgBall.node.runAction(ease_inout);
    },

    doActionSpeed: function() {
        // 정상 속도
        const move = cc.moveBy(3.0, cc.v2(700,0));

        // 스피드 
        const speed1 = cc.speed(move.clone(), 2.0);
        const speed2 = cc.speed(move.clone(), 3.0);
        const speed3 = cc.speed(move.clone(), 4.0);

        this.imgMan.node.runAction(move);
        this.imgWoman1.node.runAction(speed1);
        this.imgWoman2.node.runAction(speed2);
        this.imgBall.node.runAction(speed3);
    },

});
