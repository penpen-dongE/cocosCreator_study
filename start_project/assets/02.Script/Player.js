
cc.Class({
    extends: cc.Component,

    properties: {
        jumpAudio: {    // 점프 소리
            type: cc.AudioClip,
            default: null,
        },
    },

    onLoad: function () {
        this.accLeft = false,
        this.accRight = false,
        this.moveSpeed = 0;

        // 키보드 입력 이벤트 모니터링 등록
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        // 시작과 동시에 주인공 점프 동작
        this.doJumpAction();
    },

    onDestroy() {
        // 키보드 입력 이벤트 모니터링 삭제
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    doJumpAction: function() {
        // 점프 액션
        var jumpUp = cc.moveBy(0.4, cc.v2(0, 300));
        var jumpDown = cc.moveBy(0.4, cc.v2(0, -300));
        var callback = cc.callFunc(this.playJumpSound, this);
        // 무한 반복 - 착륙 후 소리를 재생 콜백 호출
        var rep = cc.repeatForever(cc.sequence(jumpUp, jumpDown,callback));

        this.node.runAction(rep);
    },

    playJumpSound: function() {
        // 사운드 엔진을 호출하여 사운드 재생
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    onKeyDown: function(event) {
        // 좌, 우 이동키 감지 시작
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    },

    onKeyUp: function(event) {
        // 좌, 우 이동키 감지 끝
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    },

    update: function (dt) {
        // 현재 이동 방향에 따라 속도 변경
        if (this.accLeft){
            this.moveSpeed = -150;
        } else if (this.accRight) {
            this.moveSpeed = 150;
        }

        // 주인공의 위치 업데이트
        this.node.x += this.moveSpeed * dt;

        // 주인공이 화면(캔버스) 바깥으로 나가지 않게 조정
        if (this.node.x < -480) {
            this.node.x = -480
        }
        if (this.node.x > 480) {
            this.node.x = 480
        }
    },
});
