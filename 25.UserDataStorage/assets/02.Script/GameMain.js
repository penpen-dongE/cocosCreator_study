var UserData = {
    name: "고무고무",
    level: 1,
    vip: false,
};

var Base64;
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        // 배경은 흰색
        cc.Camera.main.backgroundColor = cc.color(255,255,255);

        // Save Data ------------------------------------------
        // Type #1:
        cc.sys.localStorage.setItem("name", "빙글빙글");    // 키, 값 형식으로 저장
        // Type #2:
        const dataString = JSON.stringify(UserData);    // 데이터는 json 타입으로 바꿔주고
        cc.sys.localStorage.setItem('userData', dataString);    // 키, 값으로 저장

        // READ Data
        const sName = cc.sys.localStorage.getItem("name");
        cc.log(sName);

        const rtnUserData = JSON.parse(cc.sys.localStorage.getItem('userData'));
        cc.log(rtnUserData.name);

        // ---------------------------------------------------
        // Encryption
        Base64 = require('base64');

        // Save Data - Encrypt
        // btoa 라는 메소드를 사용하여 base64로 암호화
        const encrypted = btoa(encodeURI(dataString));
        cc.sys.localStorage.setItem('userData2', encrypted);

        // Read Data - Decrypt
        const cipherText = cc.sys.localStorage.getItem('userData2');
        const decryptionText = decodeURI(atob(cipherText));
        const rtnUserData2 = JSON.parse(decryptionText);
        cc.log(rtnUserData2.name);

        // -------------------------------------------------------
        // Remove Key-value pair
        // cc.sys.localStorage.removeItem(key);
        // Clear all key-value pair
        // cc.sys.localStorage.clear();
    },


    // update (dt) {},
});
