/**
 * Created by Kuba on 12/14/2016.
 */

function fixing () {


    var str = document.getElementById("comment1").value;
    var mapObj = {
        æ: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
        "¹": "DDDDDDDDDDDDDDDDDDDDDDD",
        g: "GGGGGGGGGGGGGGGGGGGGGGGGG"
    };
    str = str.replace(/æ|¹|g/gi, function (matched) {
        return mapObj[matched];
    });

    var str2 = document.getElementById("comment2");
    str2.innerHTML = str;

}
