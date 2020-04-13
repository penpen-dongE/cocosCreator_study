
cc.Class({
    extends: cc.Component,

    properties: {
       imgMan1 : cc.Sprite,
    },

    onLoad: function () {

        // 배경색 흰색
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        const anim = this.imgMan1.getComponent(cc.Animation);

        // loadRes 는 지정된 resources 폴더에서 자료를 읽는다. 
        cc.loader.loadRes('grossini_anchors', cc.SpriteAtlas, function(err, atlas){
            // cc.log("atlas : " +atlas);
            // sprite.spriteFrame = atlas.getSpriteFrame("grosinni_dance_05");
            var spriteFrames = atlas.getSpriteFrames();
            cc.log(spriteFrames);

            // 초당 5개의 스프라이트 프레임 지정. 이전 예제에서 3개로 지정한 것 참조.
            var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 5);
            clip.name = 'run';
            clip.wrapMode = cc.WrapMode.Loop;
            // clip.speed = 0.3;
            anim.addClip(clip);
            anim.play('run');
            }
        );
    },

    // update: function (dt) {},
});
