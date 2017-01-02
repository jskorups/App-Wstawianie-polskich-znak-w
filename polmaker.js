/**
 * Created by Kuba on 12/14/2016.
 */

function fixing () {


    var str = document.getElementById("comment1").value;
    var mapObj = {
          æ: "ć",
          œ: "ś",
        "³": "ł",
        "¹": "ą",
          Ÿ: "ź",
          ê:  "ę",
        "¿": "ż",
          ñ: "ń",
        "¯": "Ż"
    };
    str = str.replace(/æ|œ|³|¹|Ÿ|ê|¿|ñ|¯/gi, function (matched) {
        return mapObj[matched];
    });

    var str2 = document.getElementById("comment2");
    str2.innerHTML = str;

}
