
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
        
        cupScore: 0,
        maxLife: 0,
    },

    onLoad: function () {

        this.scheduleOnce(function(){
            this.initGame();
        },1);

        this.foodLayer.node.setContentSize(this.background.width, this.background.height);
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
        // cc.log(dt);
        this.SpawnFood(dt);
    },

    // food apqwn 
    SpawnFood: function(dt) {

        this.delta += dt;

        if (this.delta < 1) {
            return;
        }
        this.delta = 0;

        var layer_food = this.foodLayer.node;
        var positionSize = layer_food.getContentSize();

        var rand_fish = Math.ceil((this.foods.length -1) * Math.random());
        cc.log(rand_fish);

        var food = cc.instantiate(this.foods[rand_fish]);

        food.setPosition(this.CreateFoodPosition());

        // 내려오는 속도
        var speed = Math.random()*8 + 2;
        var moveby = cc.moveBy(speed,0,-positionSize.height);

        var sequence = cc.sequence(
            moveby,
            cc.removeSelf(true),
        );

        food.runAction(sequence);

        layer_food.addChild(food);

    },

    // food spawn 위치
    CreateFoodPosition:function() {
        
        var positionSize = this.foodLayer.node.getContentSize();
        
        var x = positionSize.width * Math.random();
        var y = positionSize.height - 100;
        // cc.log(x, y);
        return cc.Vec2(x,y);

    },
});
