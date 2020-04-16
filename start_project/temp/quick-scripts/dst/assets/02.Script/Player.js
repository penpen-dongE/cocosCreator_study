
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/02.Script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ebe9467unBEILv5D2J34y55', 'Player');
// 02.Script/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    jumpAudio: {
      // 점프 소리
      type: cc.AudioClip,
      "default": null
    }
  },
  onLoad: function onLoad() {
    this.accLeft = false, this.accRight = false, this.moveSpeed = 0; // 키보드 입력 이벤트 모니터링 등록

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this); // 시작과 동시에 주인공 점프 동작

    this.doJumpAction();
  },
  onDestroy: function onDestroy() {
    // 키보드 입력 이벤트 모니터링 삭제
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  doJumpAction: function doJumpAction() {
    // 점프 액션
    var jumpUp = cc.moveBy(0.4, cc.v2(0, 300));
    var jumpDown = cc.moveBy(0.4, cc.v2(0, -300));
    var callback = cc.callFunc(this.playJumpSound, this); // 무한 반복 - 착륙 후 소리를 재생 콜백 호출

    var rep = cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    this.node.runAction(rep);
  },
  playJumpSound: function playJumpSound() {
    // 사운드 엔진을 호출하여 사운드 재생
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    // 좌, 우 이동키 감지 시작
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // 좌, 우 이동키 감지 끝
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  update: function update(dt) {
    // 현재 이동 방향에 따라 속도 변경
    if (this.accLeft) {
      this.moveSpeed = -150;
    } else if (this.accRight) {
      this.moveSpeed = 150;
    } // 주인공의 위치 업데이트


    this.node.x += this.moveSpeed * dt; // 주인공이 화면(캔버스) 바깥으로 나가지 않게 조정

    if (this.node.x < -480) {
      this.node.x = -480;
    }

    if (this.node.x > 480) {
      this.node.x = 480;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMDIuU2NyaXB0XFxQbGF5ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqdW1wQXVkaW8iLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiYWNjTGVmdCIsImFjY1JpZ2h0IiwibW92ZVNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwiZG9KdW1wQWN0aW9uIiwib25EZXN0cm95Iiwib2ZmIiwianVtcFVwIiwibW92ZUJ5IiwidjIiLCJqdW1wRG93biIsImNhbGxiYWNrIiwiY2FsbEZ1bmMiLCJwbGF5SnVtcFNvdW5kIiwicmVwIiwicmVwZWF0Rm9yZXZlciIsInNlcXVlbmNlIiwibm9kZSIsInJ1bkFjdGlvbiIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImQiLCJ1cGRhdGUiLCJkdCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUU7QUFBSztBQUNaQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sU0FERjtBQUVQLGlCQUFTO0FBRkY7QUFESCxHQUhQO0FBVUxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLQyxPQUFMLEdBQWUsS0FBZixFQUNBLEtBQUtDLFFBQUwsR0FBZ0IsS0FEaEIsRUFFQSxLQUFLQyxTQUFMLEdBQWlCLENBRmpCLENBRGdCLENBS2hCOztBQUNBVixJQUFBQSxFQUFFLENBQUNXLFdBQUgsQ0FBZUMsRUFBZixDQUFrQlosRUFBRSxDQUFDYSxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLElBQXJFO0FBQ0FoQixJQUFBQSxFQUFFLENBQUNXLFdBQUgsQ0FBZUMsRUFBZixDQUFrQlosRUFBRSxDQUFDYSxXQUFILENBQWVDLFNBQWYsQ0FBeUJHLE1BQTNDLEVBQW1ELEtBQUtDLE9BQXhELEVBQWlFLElBQWpFLEVBUGdCLENBU2hCOztBQUNBLFNBQUtDLFlBQUw7QUFDSCxHQXJCSTtBQXVCTEMsRUFBQUEsU0F2QkssdUJBdUJPO0FBQ1I7QUFDQXBCLElBQUFBLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVSxHQUFmLENBQW1CckIsRUFBRSxDQUFDYSxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTVDLEVBQXNELEtBQUtDLFNBQTNELEVBQXNFLElBQXRFO0FBQ0FoQixJQUFBQSxFQUFFLENBQUNXLFdBQUgsQ0FBZVUsR0FBZixDQUFtQnJCLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxTQUFmLENBQXlCRyxNQUE1QyxFQUFvRCxLQUFLQyxPQUF6RCxFQUFrRSxJQUFsRTtBQUNILEdBM0JJO0FBNkJMQyxFQUFBQSxZQUFZLEVBQUUsd0JBQVc7QUFDckI7QUFDQSxRQUFJRyxNQUFNLEdBQUd0QixFQUFFLENBQUN1QixNQUFILENBQVUsR0FBVixFQUFldkIsRUFBRSxDQUFDd0IsRUFBSCxDQUFNLENBQU4sRUFBUyxHQUFULENBQWYsQ0FBYjtBQUNBLFFBQUlDLFFBQVEsR0FBR3pCLEVBQUUsQ0FBQ3VCLE1BQUgsQ0FBVSxHQUFWLEVBQWV2QixFQUFFLENBQUN3QixFQUFILENBQU0sQ0FBTixFQUFTLENBQUMsR0FBVixDQUFmLENBQWY7QUFDQSxRQUFJRSxRQUFRLEdBQUcxQixFQUFFLENBQUMyQixRQUFILENBQVksS0FBS0MsYUFBakIsRUFBZ0MsSUFBaEMsQ0FBZixDQUpxQixDQUtyQjs7QUFDQSxRQUFJQyxHQUFHLEdBQUc3QixFQUFFLENBQUM4QixhQUFILENBQWlCOUIsRUFBRSxDQUFDK0IsUUFBSCxDQUFZVCxNQUFaLEVBQW9CRyxRQUFwQixFQUE2QkMsUUFBN0IsQ0FBakIsQ0FBVjtBQUVBLFNBQUtNLElBQUwsQ0FBVUMsU0FBVixDQUFvQkosR0FBcEI7QUFDSCxHQXRDSTtBQXdDTEQsRUFBQUEsYUFBYSxFQUFFLHlCQUFXO0FBQ3RCO0FBQ0E1QixJQUFBQSxFQUFFLENBQUNrQyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBSy9CLFNBQS9CLEVBQTBDLEtBQTFDO0FBQ0gsR0EzQ0k7QUE2Q0xZLEVBQUFBLFNBQVMsRUFBRSxtQkFBU29CLEtBQVQsRUFBZ0I7QUFDdkI7QUFDQSxZQUFPQSxLQUFLLENBQUNDLE9BQWI7QUFDSSxXQUFLckMsRUFBRSxDQUFDc0MsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS2hDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBQ0osV0FBS1IsRUFBRSxDQUFDc0MsS0FBSCxDQUFTQyxHQUFULENBQWFFLENBQWxCO0FBQ0ksYUFBS2hDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQTtBQU5SO0FBUUgsR0F2REk7QUF5RExTLEVBQUFBLE9BQU8sRUFBRSxpQkFBU2tCLEtBQVQsRUFBZ0I7QUFDckI7QUFDQSxZQUFPQSxLQUFLLENBQUNDLE9BQWI7QUFDSSxXQUFLckMsRUFBRSxDQUFDc0MsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS2hDLE9BQUwsR0FBZSxLQUFmO0FBQ0E7O0FBQ0osV0FBS1IsRUFBRSxDQUFDc0MsS0FBSCxDQUFTQyxHQUFULENBQWFFLENBQWxCO0FBQ0ksYUFBS2hDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQTtBQU5SO0FBUUgsR0FuRUk7QUFxRUxpQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQjtBQUNBLFFBQUksS0FBS25DLE9BQVQsRUFBaUI7QUFDYixXQUFLRSxTQUFMLEdBQWlCLENBQUMsR0FBbEI7QUFDSCxLQUZELE1BRU8sSUFBSSxLQUFLRCxRQUFULEVBQW1CO0FBQ3RCLFdBQUtDLFNBQUwsR0FBaUIsR0FBakI7QUFDSCxLQU5pQixDQVFsQjs7O0FBQ0EsU0FBS3NCLElBQUwsQ0FBVVksQ0FBVixJQUFlLEtBQUtsQyxTQUFMLEdBQWlCaUMsRUFBaEMsQ0FUa0IsQ0FXbEI7O0FBQ0EsUUFBSSxLQUFLWCxJQUFMLENBQVVZLENBQVYsR0FBYyxDQUFDLEdBQW5CLEVBQXdCO0FBQ3BCLFdBQUtaLElBQUwsQ0FBVVksQ0FBVixHQUFjLENBQUMsR0FBZjtBQUNIOztBQUNELFFBQUksS0FBS1osSUFBTCxDQUFVWSxDQUFWLEdBQWMsR0FBbEIsRUFBdUI7QUFDbkIsV0FBS1osSUFBTCxDQUFVWSxDQUFWLEdBQWMsR0FBZDtBQUNIO0FBQ0o7QUF2RkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAganVtcEF1ZGlvOiB7ICAgIC8vIOygkO2UhCDshozrpqxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlLFxyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZSxcclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIC8vIO2CpOuztOuTnCDsnoXroKUg7J2067Kk7Yq4IOuqqOuLiO2EsOungSDrk7HroZ1cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDsi5zsnpHqs7wg64+Z7Iuc7JeQIOyjvOyduOqztSDsoJDtlIQg64+Z7J6RXHJcbiAgICAgICAgdGhpcy5kb0p1bXBBY3Rpb24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIO2CpOuztOuTnCDsnoXroKUg7J2067Kk7Yq4IOuqqOuLiO2EsOungSDsgq3soJxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRvSnVtcEFjdGlvbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8g7KCQ7ZSEIOyVoeyFmFxyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy5tb3ZlQnkoMC40LCBjYy52MigwLCAzMDApKTtcclxuICAgICAgICB2YXIganVtcERvd24gPSBjYy5tb3ZlQnkoMC40LCBjYy52MigwLCAtMzAwKSk7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2MuY2FsbEZ1bmModGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcclxuICAgICAgICAvLyDrrLTtlZwg67CY67O1IC0g7LCp66WZIO2bhCDshozrpqzrpbwg7J6s7IOdIOy9nOuwsSDtmLjstpxcclxuICAgICAgICB2YXIgcmVwID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duLGNhbGxiYWNrKSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24ocmVwKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheUp1bXBTb3VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8g7IKs7Jq065OcIOyXlOynhOydhCDtmLjstpztlZjsl6wg7IKs7Jq065OcIOyerOyDnVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIC8vIOyijCwg7JqwIOydtOuPme2CpCDqsJDsp4Ag7Iuc7J6RXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbktleVVwOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIC8vIOyijCwg7JqwIOydtOuPme2CpCDqsJDsp4Ag64GdXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8g7ZiE7J6sIOydtOuPmSDrsKntlqXsl5Ag65Sw6528IOyGjeuPhCDrs4Dqsr1cclxuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSAtMTUwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IDE1MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOyjvOyduOqzteydmCDsnITsuZgg7JeF642w7J207Yq4XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5tb3ZlU3BlZWQgKiBkdDtcclxuXHJcbiAgICAgICAgLy8g7KO87J246rO17J20IO2ZlOuptCjsupTrsoTsiqQpIOuwlOq5peycvOuhnCDrgpjqsIDsp4Ag7JWK6rKMIOyhsOyglVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC00ODApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAtNDgwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IDQ4MCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IDQ4MFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=