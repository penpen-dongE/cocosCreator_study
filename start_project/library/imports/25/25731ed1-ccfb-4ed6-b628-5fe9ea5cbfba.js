"use strict";
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