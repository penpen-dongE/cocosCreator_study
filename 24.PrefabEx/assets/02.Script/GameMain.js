
cc.Class({
    extends: cc.Component,

    properties: {
        btnCreate: cc.Button,
        btnRemove: cc.Button,
        btnGetComponent: cc.Button,
        btnCallFuncAll: cc.Button,
        btnCallFuncOne: cc.Button,
        enemy: cc.Prefab,
    },

    onLoad: function () {
        // 배경색 흰색
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 메뉴버튼에 함수 연결
        this.btnCreate.node.on('click', this.doCreate, this);
        this.btnRemove.node.on('click', this.doRemove, this);
        this.btnGetComponent.node.on('click', this.doGetComponent, this);
        this.btnCallFuncAll.node.on('click', this.doCallFuncAll, this);
        this.btnCallFuncOne.node.on('click', this.doCallFuncOne, this);
        
    },

    // update (dt) {},


    doCreate: function () {
        const enemy_root = this.node.getChildByName("enemy");
        // const enemy_root = cc.find("Canvas/enemy");

        // cc.log("CREATE button pushed");

        // instantiate node from prefab
        var enemy = cc.instantiate(this.enemy); // instantiate로 prefab을 동적으로 생성
        enemy.name = "enemy4";
        enemy.addComponent("SelfRemove");
        enemy.position = new cc.Vec2(-140, 50);
        enemy_root.addChild(enemy);
        // enemy.parent = enemy_root;
        // cc.log(enemy.name);

    },

    doRemove: function () {
        //객체를 찾기 위해 getChildByName 사용
        const enemy_root = this.node.getChildByName("enemy");
        const enemy = enemy_root.getChildByName("enemy4");
        // const enemy = cc.find("Canvas/enemy/enemy4");

        enemy.destroy();
    },

    doGetComponent: function () {
        const enemy = cc.find("Canvas/enemy/enemy2");
        const anim = enemy.getComponent(cc.Animation);
        const animState = anim.getAnimationState('dance');

        if (animState.isPaused) {
            cc.log("enemy paused!!")
            anim.resume("dance");
        } else {
            anim.pause("dance");
        }
    },

    doCallFuncAll: function () {
        const enemy = this.node.getChildByName("enemy");
        // let enemies = [];
        for (var i = 0; i < enemy.childrenCount; i++) {
            //enemies[i] = enemy.children[i];
            // cc.log(enemy.children[i]);
            let script = enemy.children[i].getComponent("Dance");
            script.doSomething();
        }
    },

    doCallFuncOne: function () {
        const enemy = cc.find("Canvas/enemy/enemy3");
        const script = enemy.getComponent("Dance");
        //cc.log(script);
        script.doSomething();
    },
});
