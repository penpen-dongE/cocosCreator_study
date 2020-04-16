
cc.Class({
    extends: cc.Component,

    properties: {
        lifeLabel:{
            default : null,
            type : cc.Label,
        },

        scoreLabel:{
            default : null,
            type : cc.Label,
        },
        
        cupScore: 0,
        maxLife: 0,
    },

    onLoad: function () {

        this.scheduleOnce(function(){
            this.initGame();
        },1)
    },

    start () {

    },

    // 게임 초기화
    initGame: function() {
        this.cupScore = 0;
        this.maxLife = 3;

        this.life = this.maxLife;
        this.lifeLabel.string = this.life;

    },

    // update : 프레임이 바뀔 때마다 항상 실행 , dt = delta 값으로, 프레임을 로드 시킬때 걸리는 시간
    update (dt) {
            
    },
});
