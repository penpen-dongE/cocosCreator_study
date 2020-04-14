
cc.Class({
    extends: cc.Component,

    properties: {
        pageView: cc.PageView,
        btnLeft: cc.Button,
        btnRight: cc.Button,
    },

    onLoad: function () {
        // 배경은 흰색
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // 메뉴 버튼에 함수 연결
        this.btnLeft.node.on('click', this.onPrevPage, this);
        this.btnRight.node.on('click', this.onNextPage, this);

        // 페이지뷰 이벤트 등록
        this.pageView.node.on('page-turning', this.callback, this);
    },

    // update: function (dt) {},

    onPrevPage: function() {
        const pView = this.pageView.node.getComponent(cc.PageView);
        let nCur = pView.getCurrentPageIndex() - 1;
        if (nCur < 0) {
            nCur = 0;
        } 
        pView.setCurrentPageIndex(nCur);
    },

    onNextPage: function() {
        const pView = this.pageView.node.getComponent(cc.PageView);
        let nCur = pView.getCurrentPageIndex() + 1;
        const nMax = pView.getPages().length;
        if(nCur > nMax) {
            nCur = nMax;
        }
        pView.setCurrentPageIndex(nCur);
    },

    callback: function() {
        // The Parameter of the callback is the pageView component.
        const nCur = this.pageView.getCurrentPageIndex();
        cc.log(nCur);
    },
});
