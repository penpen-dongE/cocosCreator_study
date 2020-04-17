
cc.Class({
    extends: cc.Component,

    properties: {
        background:{
            default: null,
            type: cc.Node,
        },

        foodLayer:{
            default : null,
            type: cc.Layout,
        },

        gameoverLayer:{
            default: null,
            type: cc.Layout,
        },

        lifeLabel:{
            default : null,
            type : cc.Label,
        },

        scoreLabel:{
            default : null,
            type : cc.Label,
        },
        
        foods:{
            default: [],
            type : cc.Prefab,
        },

        LbPaused: {
            default: null, 
            type: cc.Label,
        },
        Audio_Catch:{
            default: null,
            type: cc.AudioClip,
        },

        cupScore: 0,
        maxLife: 0,
        isLaunched: false,
        isPaused: false,
        isPlayAudio: true,
    },

    onLoad: function () {

        this.scheduleOnce(function(){
            this.initGame();
        },1);

        this.node.on("food_catch", function(){
            // food.js의 dispatchEvent를 통해서 이쪽으로 옴 
            // cc.log("콜 되었다!! ");
            if(this.isPlayAudio === true){
                cc.audioEngine.play(this.Audio_Catch, false, 0.5);
            };
            
            this.increaseScore(1);
        }, this);

        this.foodLayer.node.setContentSize(this.background.width, this.background.height);
    },

    // 게임 오버 체크
    gameoverCheck: function() {
        // 라이프 -1
        this.life--;
        this.lifeLabel.string = this.life;

        if(this.life === 0){
            // 게임 오버
            
            this.isLaunched = false;
            //gameover 레이어 보이게 설정
            this.gameoverLayer.node.active = true;
            this.foodLayer.node.stopAllActions();
            this.foodLayer.node.removeAllChildren();
            
        } else {
            
            //gameover 레이어 안보이게 설정 
            this.gameoverLayer.node.active = false;
        }
    },

    // 점수 증가 함수 
    increaseScore:function(newScore){
        this.cupScore += newScore;
        // cc.log(this.cupScore);
        this.scoreLabel.string = this.cupScore;
        
    },

    // 게임 초기화
    initGame: function() {
        cc.log(" initGame 콜 되었다!! ");
        this.cupScore = 0;
        this.maxLife = 3;
        this.isLaunched = true;

        this.life = this.maxLife;
        this.lifeLabel.string = this.life;

    },

    // update : 프레임이 바뀔 때마다 항상 실행 , dt = delta 값으로, 프레임을 로드 시킬때 걸리는 시간
    update: function (dt) {
        // cc.log(dt);
        
        this.SpawnFood(dt);
    },

    // food spawn 
    SpawnFood: function(dt) {
        
        this.delta += dt;

        if (this.delta < 1) {
            // cc.log("delta값이 1을 안넘어서 패스!")
            return;
        }

        if(this.isLaunched === false){
            return;
        }
        
        cc.log("내려간다");

        this.delta = 0;

        var layer_food = this.foodLayer.node;
        var positionSize = layer_food.getContentSize();

        var rand_fish = Math.ceil((this.foods.length -1) * Math.random());
        // cc.log(rand_fish);

        var food = cc.instantiate(this.foods[rand_fish]);

        food.setPosition(this.CreateFoodPosition());

        // 내려오는 속도
        var speed = Math.random()*8 + 2;
        var moveby = cc.moveBy(speed,0,-positionSize.height);

        var sequence = cc.sequence(
            moveby,
            cc.removeSelf(true),
            cc.callFunc(function(){ this.gameoverCheck();}, this),
        );

        food.runAction(sequence);

        layer_food.addChild(food);

    },

    // food spawn 위치
    CreateFoodPosition:function() {
        
        var positionSize = this.foodLayer.node.getContentSize();
        cc.log("가로 길이: "+positionSize.width);
        var x = Math.random(0, 610)*1000;
        if(x>600){
            x = 350;
        }
        if(x<40){
            x = 90;
        }
        var y = positionSize.height - 300;
        cc.log("x : "+x+" , y : " + y);
        return cc.Vec2(x,y);

    },

    // 일시정지 함수
    onPause:function() {
        if(cc.director.isPaused())
        {
            this.ispaused = false;
            this.LbPaused.node.active = false;
            cc.director.resume();
        }
        else {
            this.ispaused = true;
            this.LbPaused.node.active = true;
            cc.director.pause();
        }
    },

});
