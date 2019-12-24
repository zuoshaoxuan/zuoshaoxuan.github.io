$(function () {
	var w = 0;
    $(this).mousemove(function (e) {
        w = $("#topMenu").offset().top + 30;
        var mouseY = parseInt(e.pageY);
        if (mouseY < w+60 && mouseY > w) {
            var mouseX = parseInt(e.pageX);
            $("#topMenu img").each(function () {
                var obj = $(this);
                var objWidth = obj.css("width");
                //获取图片中心水平坐标 
                var objX = parseInt(obj.offset().left) + parseInt(objWidth.substr(0, objWidth.length - 2)) / 2;
                var x = Math.abs(objX - mouseX);
                if (x < 75) {
                    var w = 70 - ((20 * x * x) / (75 * 75));
                    if (w <= 50) {
                        w = 50 + "px";
                    }
                    else {
                        w = w + "px";
                    }
                    obj.css("width", w).css("height", w);
                    obj.css("padding-bottom", (20 - ((78 * x * x) / (75 * 75))) + "px");
                } else {
                    obj.css("width", "50px").css("height", "50px");
                    obj.css("padding-bottom", "0");
                }
            });
        } else {
            $("#topMenu img").each(function () {
                $(this).css("width", "50px").css("height", "50px");
                $(this).css("padding-bottom", "0");
            });
        }
    });
}); 