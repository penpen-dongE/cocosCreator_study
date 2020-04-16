
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad: function () {

        // 별과 주인공 사이의 거리가 이 값보다 작으면 수집이 완료
        // 별과 주인공의 크기를 이용하여 적당히 판단한 값
        this.pickRadius = 60;
        // 타이머
        this.timer = 0;
    },

    getPlayerDistance: function () {
        // 플레이어 노드 위치 구하기
        var playerPos = this.game.player.getPosition();
        // 플레이어 위치를 기준으로 두 점 사이의 거리 계산
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    },

    onPicked: function () {
        // 별이 수집되면 채점 함수 호출
        this.game.gainScore();
        // 수집된 현재 스타 노드 파괴
        this.node.destroy();
    },
    update: function (dt) {
        // 각 프레임마다 별과 주인공 사이의 거리가 충돌 거리보다 작은지 확인
        if (this.getPlayerDistance() < this.pickRadius) {
            // 수집 동작 호출
            this.onPicked();
            return;
        }

        // dt값이 3초 이상이면 별 사라짐
        // if (this.timer > 3.0) {
        if (this.timer > this.game.starDuration) {
            this.node.destroy();
            return;
        }
        this.timer += dt;
    },
});
