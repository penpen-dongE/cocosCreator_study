
cc.Class({
    extends: cc.Component,

    properties: {
        imgNemo1: cc.Sprite,
        imgNemo2: cc.Sprite,
    },

    onLoad: function () {
        // 배경색 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 절대값 : (absolute value)
        cc.log( Math.abs(-5) );
        cc.log( Math.abs(-2.3) );

        // 랜덤값 : 0 <= 실수값 < 1.0
        const rand = Math.random();
        cc.log('rand', rand);

        // 1~100 까지의 랜덤값
        const num = Math.round( rand*100+1 );
        cc.log('num', num);

        // 10 ~ 60 사이의 랜덤값
        cc.log('범위 지정', this.getRandom(10, 60));

        //--------------------------------------------
        cc.log(this.imgNemo1.node.position);
        cc.log(this.imgNemo2.node.position);
        // 거리 구하기
        const distance = this.getDistance(this.imgNemo1.node.position, this.imgNemo2.node.position);
        cc.log('distance', distance);

        //회전각 구하기
        const angle = this.getAngle(this.imgNemo1.node.position, this.imgNemo2.node.position);
        cc.log('angle', angle);
    },


    // update: function (dt) {},


    getRandom: function (min, max) {
        return Math.round(Math.random() * ( max-min ) + min);
    },

    getDistance: function (pos1, pos2) {
        const x = pos2.x - pos1.x;
        const y = pos2.y - pos1.y;
        const distance = Math.sqrt( x*x + y*y );
        return distance;
    },

    getAngle: function(pos1, pos2) {
        let angle = Math.atan2(pos2.x-pos1.x, pos2.y-pos1.y);
        angle = angle * (180/Math.PI);
        return angle;
    },

});
