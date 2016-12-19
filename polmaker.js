/**
 * Created by Kuba on 12/14/2016.
 */




/*
function fixing () {


    //przechowuje wklejone napisy

    var str = document.getElementById("comment1").value;
    var fixed = str.replace(/d/g, "KKK");

    console.log(fixed);

    var proper = document.getElementById("comment2");
    proper.value = fixed;

  /*  var i;
    for (i = 0; i < str.length; i++)  {

        var string = str[i];
        string.replace(/³/, "l");
        console.log(string);

        }
*/
//}

function fixing () {


    var str = document.getElementById("comment1").value;
    var mapObj = {
        d: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
        e: "DDDDDDDDDDDDDDDDDDDDDDD",
        g: "GGGGGGGGGGGGGGGGGGGGGGGGG"
    };
    str = str.replace(/d|e|g/gi, function (matched) {
        return mapObj[matched];
        console.log(mapObj[matched]);
    });
}