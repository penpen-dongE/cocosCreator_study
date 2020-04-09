var test6 = "광개토대왕";

cc.Class({
    extends: cc.Component,

    properties: {
      
    },

    

    onLoad : function () {
        // 변수의 선언
        var str = "고무고무";
        var num1 = 1;
        var num2 = 2.0;

        cc.log(str);
        cc.log(typeof num1);
        cc.log(num2);
        cc.log(typeof num2);

        const test1 = "또로롱"; //const 는 상수
        // test1 = '끼얍' //  <-- test1은 read-only 이므로 실행 불가
        cc.log(test1);

        let test2 = '끼얍';
        test2 = '멍뭉';
        cc.log(test2);

        //------------------------------------------
        // 아래와 같은 사용은 지양
        var num2 = '이순신';
        cc.log(num2);
        //------------------------------------------
        //아래와 같은 사용은 지양
        this.test3 = '또돗';
        cc.log(this.test3);
        //------------------------------------------
        this.test4 = '제주도';
        this.test5 = 10;

        //------------------------------------------

        //함수 콜
        //myFunction1();    <--this 를 붙여 주어야 한다.
        this.myFunction1();
        this.myFunction2("동동이");
        //변수의 사용
        this.myFunction3();

        //함수를 파라미터로 사용할 때
        var myFunc = function(){
            if(this.test5 > 5) {    //익명 함수는 this를 모름
                cc.log('5보다 큽니다.');
            } else{
                cc.log('5보다 같거나 작습니다.');
            }
        }.bind(this);
        this.myFunction4(myFunc);
    },

    myFunction1: function(){
        cc.log('myFunction1');
    },

    myFunction2: function(param){
        cc.log('myFunction2 : ' + param);
        cc.log('myFunction2 : ' , param);  // <-- cocos 스타일
    },

    myFunction3: function(){
        // cc.log(str);
        // cc.log(test1);
        // cc.log(test2);
        cc.log(this.test3);
        cc.log(this.test4);
        cc.log(this.test5);
        cc.log(this.test6);
        cc.log(test6);
    },

    myFunction4: function (param) {
        param();
    },
});
