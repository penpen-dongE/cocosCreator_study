
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/02.Script/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa95ajXXjND6aoPMJaKMUMe', 'Star');
// 02.Script/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    // 별과 주인공 사이의 거리가 이 값보다 작으면 수집이 완료
    // 별과 주인공의 크기를 이용하여 적당히 판단한 값
    this.pickRadius = 60; // 타이머

    this.timer = 0;
  },
  getPlayerDistance: function getPlayerDistance() {
    // 플레이어 노드 위치 구하기
    var playerPos = this.game.player.getPosition(); // 플레이어 위치를 기준으로 두 점 사이의 거리 계산

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // 별이 수집되면 채점 함수 호출
    this.game.gainScore(); // 수집된 현재 스타 노드 파괴

    this.node.destroy();
  },
  update: function update(dt) {
    // 각 프레임마다 별과 주인공 사이의 거리가 충돌 거리보다 작은지 확인
    if (this.getPlayerDistance() < this.pickRadius) {
      // 수집 동작 호출
      this.onPicked();
      return;
    } // dt값이 3초 이상이면 별 사라짐
    // if (this.timer > 3.0) {


    if (this.timer > this.game.starDuration) {
      this.node.destroy();
      return;
    }

    this.timer += dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMDIuU2NyaXB0XFxTdGFyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwicGlja1JhZGl1cyIsInRpbWVyIiwiZ2V0UGxheWVyRGlzdGFuY2UiLCJwbGF5ZXJQb3MiLCJnYW1lIiwicGxheWVyIiwiZ2V0UG9zaXRpb24iLCJkaXN0Iiwibm9kZSIsInBvc2l0aW9uIiwic3ViIiwibWFnIiwib25QaWNrZWQiLCJnYWluU2NvcmUiLCJkZXN0cm95IiwidXBkYXRlIiwiZHQiLCJzdGFyRHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQjtBQUNBO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQixDQUpnQixDQUtoQjs7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNILEdBZEk7QUFnQkxDLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFZO0FBQzNCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsRUFBaEIsQ0FGMkIsQ0FHM0I7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUJQLFNBQXZCLEVBQWtDUSxHQUFsQyxFQUFYO0FBQ0EsV0FBT0osSUFBUDtBQUNILEdBdEJJO0FBd0JMSyxFQUFBQSxRQUFRLEVBQUUsb0JBQVk7QUFDbEI7QUFDQSxTQUFLUixJQUFMLENBQVVTLFNBQVYsR0FGa0IsQ0FHbEI7O0FBQ0EsU0FBS0wsSUFBTCxDQUFVTSxPQUFWO0FBQ0gsR0E3Qkk7QUE4QkxDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLZCxpQkFBTCxLQUEyQixLQUFLRixVQUFwQyxFQUFnRDtBQUM1QztBQUNBLFdBQUtZLFFBQUw7QUFDQTtBQUNILEtBTmlCLENBUWxCO0FBQ0E7OztBQUNBLFFBQUksS0FBS1gsS0FBTCxHQUFhLEtBQUtHLElBQUwsQ0FBVWEsWUFBM0IsRUFBeUM7QUFDckMsV0FBS1QsSUFBTCxDQUFVTSxPQUFWO0FBQ0E7QUFDSDs7QUFDRCxTQUFLYixLQUFMLElBQWNlLEVBQWQ7QUFDSDtBQTdDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8g67OE6rO8IOyjvOyduOqztSDsgqzsnbTsnZgg6rGw66as6rCAIOydtCDqsJLrs7Tri6Qg7J6R7Jy866m0IOyImOynkeydtCDsmYTro4xcclxuICAgICAgICAvLyDrs4Tqs7wg7KO87J246rO17J2YIO2BrOq4sOulvCDsnbTsmqntlZjsl6wg7KCB64u57Z6IIO2MkOuLqO2VnCDqsJJcclxuICAgICAgICB0aGlzLnBpY2tSYWRpdXMgPSA2MDtcclxuICAgICAgICAvLyDtg4DsnbTrqLhcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDtlIzroIjsnbTslrQg64W465OcIOychOy5mCDqtaztlZjquLBcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIO2UjOugiOydtOyWtCDsnITsuZjrpbwg6riw7KSA7Jy866GcIOuRkCDsoJAg7IKs7J207J2YIOqxsOumrCDqs4TsgrBcclxuICAgICAgICB2YXIgZGlzdCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyUG9zKS5tYWcoKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcblxyXG4gICAgb25QaWNrZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDrs4TsnbQg7IiY7KeR65CY66m0IOyxhOygkCDtlajsiJgg7Zi47LacXHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG4gICAgICAgIC8vIOyImOynkeuQnCDtmITsnqwg7Iqk7YOAIOuFuOuTnCDtjIzqtLRcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8g6rCBIO2UhOugiOyehOuniOuLpCDrs4Tqs7wg7KO87J246rO1IOyCrOydtOydmCDqsbDrpqzqsIAg7Lap64+MIOqxsOumrOuztOuLpCDsnpHsnYDsp4Ag7ZmV7J24XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xyXG4gICAgICAgICAgICAvLyDsiJjsp5Eg64+Z7J6RIO2YuOy2nFxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGR06rCS7J20IDPstIgg7J207IOB7J2066m0IOuzhCDsgqzrnbzsp5BcclxuICAgICAgICAvLyBpZiAodGhpcy50aW1lciA+IDMuMCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5nYW1lLnN0YXJEdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9LFxyXG59KTtcclxuIl19