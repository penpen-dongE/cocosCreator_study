
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/02.Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '257317RzPtO1rYoX+nqXL+6', 'Game');
// 02.Script/Game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    starPrefab: cc.Prefab,
    player: cc.Node,
    scoreDisplay: cc.Label,
    scoreAudio: {
      type: cc.AudioClip,
      "default": null
    }
  },
  onLoad: function onLoad() {
    // 별의 지속시간 설정
    this.starDuration = 3.0; // 득점 초기화

    this.score = 0; // 새로운 별 계속 생성 - 별의 지속시간 참조 

    cc.director.getScheduler().schedule(this.spawnNewStar, this, this.starDuration);
  },
  spawnNewStar: function spawnNewStar() {
    // Prefab을 사용하여 새 노드 생성
    var newStar = cc.instantiate(this.starPrefab); // Canvas 노드 아래에 새 노드를 추가

    this.node.addChild(newStar); // 별에 대한 임의의 위치를 설정

    newStar.setPosition(this.getNewStarPosition()); // 스타 컴포넌트에서 게임 오브젝트에 대한 참조 설정 : 변수(game) 생성하고 세팅

    newStar.getComponent('Star').game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    // 별의 y좌표 임의로 가져오기 : 지면보다 높게, Canvas의 높이보다 아래로
    var maxY = this.node.height / 2;
    var randY = this.getRandom(0, maxY) - 60; // 화면 너비에 따라 별의 x 좌표 임의로 가져오기

    var maxX = this.node.width - 60;
    var randX = this.getRandom(0, maxX) - 450; // 별 좌표 반환

    return cc.v2(randX, randY);
  },
  getRandom: function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  },
  gainScore: function gainScore() {
    this.score += 1; // 점수 갱신

    this.scoreDisplay.string = 'Score: ' + this.score; // 스코어 사운드 재생

    cc.audioEngine.playEffect(this.scoreAudio, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMDIuU2NyaXB0XFxHYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhclByZWZhYiIsIlByZWZhYiIsInBsYXllciIsIk5vZGUiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInNjb3JlQXVkaW8iLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwic3RhckR1cmF0aW9uIiwic2NvcmUiLCJkaXJlY3RvciIsImdldFNjaGVkdWxlciIsInNjaGVkdWxlIiwic3Bhd25OZXdTdGFyIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwibWF4WSIsImhlaWdodCIsInJhbmRZIiwiZ2V0UmFuZG9tIiwibWF4WCIsIndpZHRoIiwicmFuZFgiLCJ2MiIsIm1pbiIsIm1heCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImdhaW5TY29yZSIsInN0cmluZyIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxNQURQO0FBRVJDLElBQUFBLE1BQU0sRUFBRU4sRUFBRSxDQUFDTyxJQUZIO0FBR1JDLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDUyxLQUhUO0FBSVJDLElBQUFBLFVBQVUsRUFBRTtBQUNSQyxNQUFBQSxJQUFJLEVBQUVYLEVBQUUsQ0FBQ1ksU0FERDtBQUVSLGlCQUFTO0FBRkQ7QUFKSixHQUhQO0FBY0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsR0FBcEIsQ0FGZ0IsQ0FHaEI7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FKZ0IsQ0FLaEI7O0FBQ0FmLElBQUFBLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FBWUMsWUFBWixHQUEyQkMsUUFBM0IsQ0FBb0MsS0FBS0MsWUFBekMsRUFBdUQsSUFBdkQsRUFBNkQsS0FBS0wsWUFBbEU7QUFDSCxHQXJCSTtBQXdCTEssRUFBQUEsWUFBWSxFQUFFLHdCQUFXO0FBQ3JCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHcEIsRUFBRSxDQUFDcUIsV0FBSCxDQUFlLEtBQUtqQixVQUFwQixDQUFkLENBRnFCLENBR3JCOztBQUNBLFNBQUtrQixJQUFMLENBQVVDLFFBQVYsQ0FBbUJILE9BQW5CLEVBSnFCLENBS3JCOztBQUNBQSxJQUFBQSxPQUFPLENBQUNJLFdBQVIsQ0FBb0IsS0FBS0Msa0JBQUwsRUFBcEIsRUFOcUIsQ0FPckI7O0FBQ0FMLElBQUFBLE9BQU8sQ0FBQ00sWUFBUixDQUFxQixNQUFyQixFQUE2QkMsSUFBN0IsR0FBb0MsSUFBcEM7QUFDSCxHQWpDSTtBQW1DTEYsRUFBQUEsa0JBQWtCLEVBQUUsOEJBQVc7QUFFM0I7QUFDQSxRQUFJRyxJQUFJLEdBQUcsS0FBS04sSUFBTCxDQUFVTyxNQUFWLEdBQW1CLENBQTlCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSCxJQUFsQixJQUEwQixFQUF0QyxDQUoyQixDQUszQjs7QUFDQSxRQUFJSSxJQUFJLEdBQUcsS0FBS1YsSUFBTCxDQUFVVyxLQUFWLEdBQWtCLEVBQTdCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtILFNBQUwsQ0FBZSxDQUFmLEVBQWtCQyxJQUFsQixJQUEwQixHQUF0QyxDQVAyQixDQVEzQjs7QUFDQSxXQUFPaEMsRUFBRSxDQUFDbUMsRUFBSCxDQUFNRCxLQUFOLEVBQWFKLEtBQWIsQ0FBUDtBQUNILEdBN0NJO0FBK0NMQyxFQUFBQSxTQUFTLEVBQUUsbUJBQVVLLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUMzQixXQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCSCxHQUFHLEdBQUdELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQO0FBQ0gsR0FqREk7QUFtRExLLEVBQUFBLFNBQVMsRUFBRSxxQkFBWTtBQUNuQixTQUFLMUIsS0FBTCxJQUFjLENBQWQsQ0FEbUIsQ0FFbkI7O0FBQ0EsU0FBS1AsWUFBTCxDQUFrQmtDLE1BQWxCLEdBQTJCLFlBQVksS0FBSzNCLEtBQTVDLENBSG1CLENBSW5COztBQUNBZixJQUFBQSxFQUFFLENBQUMyQyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS2xDLFVBQS9CLEVBQTJDLEtBQTNDO0FBQ0g7QUF6REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3RhclByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIHBsYXllcjogY2MuTm9kZSwgXHJcbiAgICAgICAgc2NvcmVEaXNwbGF5OiBjYy5MYWJlbCxcclxuICAgICAgICBzY29yZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g67OE7J2YIOyngOyGjeyLnOqwhCDshKTsoJVcclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDMuMDtcclxuICAgICAgICAvLyDrk53soJAg7LSI6riw7ZmUXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7IFxyXG4gICAgICAgIC8vIOyDiOuhnOyatCDrs4Qg6rOE7IaNIOyDneyEsSAtIOuzhOydmCDsp4Dsho3si5zqsIQg7LC47KGwIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNjaGVkdWxlKHRoaXMuc3Bhd25OZXdTdGFyLCB0aGlzLCB0aGlzLnN0YXJEdXJhdGlvbik7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzcGF3bk5ld1N0YXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFByZWZhYuydhCDsgqzsmqntlZjsl6wg7IOIIOuFuOuTnCDsg53shLFcclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgLy8gQ2FudmFzIOuFuOuTnCDslYTrnpjsl5Ag7IOIIOuFuOuTnOulvCDstpTqsIBcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcbiAgICAgICAgLy8g67OE7JeQIOuMgO2VnCDsnoTsnZjsnZgg7JyE7LmY66W8IOyEpOyglVxyXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XHJcbiAgICAgICAgLy8g7Iqk7YOAIOy7tO2PrOuEjO2KuOyXkOyEnCDqsozsnoQg7Jik67iM7KCd7Yq47JeQIOuMgO2VnCDssLjsobAg7ISk7KCVIDog67OA7IiYKGdhbWUpIOyDneyEse2VmOqzoCDshLjtjIVcclxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb246IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyDrs4TsnZggeeyijO2RnCDsnoTsnZjroZwg6rCA7KC47Jik6riwIDog7KeA66m067O064ukIOuGkuqyjCwgQ2FudmFz7J2YIOuGkuydtOuztOuLpCDslYTrnpjroZxcclxuICAgICAgICB2YXIgbWF4WSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyIDtcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdldFJhbmRvbSgwLCBtYXhZKSAtIDYwO1xyXG4gICAgICAgIC8vIO2ZlOuptCDrhIjruYTsl5Ag65Sw6528IOuzhOydmCB4IOyijO2RnCDsnoTsnZjroZwg6rCA7KC47Jik6riwXHJcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGggLSA2MDtcclxuICAgICAgICB2YXIgcmFuZFggPSB0aGlzLmdldFJhbmRvbSgwLCBtYXhYKSAtIDQ1MDtcclxuICAgICAgICAvLyDrs4Qg7KKM7ZGcIOuwmO2ZmFxyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRSYW5kb206IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICAvLyDsoJDsiJgg6rCx7IugXHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZTtcclxuICAgICAgICAvLyDsiqTsvZTslrQg7IKs7Jq065OcIOyerOyDnVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19