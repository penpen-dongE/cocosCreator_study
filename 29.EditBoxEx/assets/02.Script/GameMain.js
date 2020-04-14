
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad: function () {
        // 배경을 흰색으로
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

    },

    // update (dt) {},

    // This method is called when an edit box loses focus after keyboard is hidden.
    onEditDidBegan: function(event) {
        console.log('onEditDidBegan :' + event.node.name);
    },

    // This method is called when an edit box loses focus after keyboard is hidden.
    onEditDidEnded: function(event) {
        console.log('onEditDidEnded : '+ event.node.name);
    },

    // This method is called when an edit box text was changed.
    onTextChanged: function(text, event) {
        console.log('onTextChanged : '+ event.node.name + " : " + text);
    },

    onEditingReturn: function(event) {
        console.log('onEditingReturn : ' + event.node.name);
    },
});
