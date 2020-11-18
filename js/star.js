window.onload = function () {
    // 屏幕的尺寸
    var screenW = document.documentElement.clientWidth;
    var screenH = $("body").height();

    // 2. 动态创建多个星星
    for(var i=0; i<150; i++){
        var span = document.createElement('span');
        document.body.appendChild(span);
        //给span添加class属性
        span.className="star"
        
        
        //位置随机
        var x = parseInt(Math.random() * screenW);
        var y = parseInt(Math.random() * screenH);
        span.style.left = x + 'px';
        span.style.top = y + 'px';

        //大小随机
        var scale = Math.random() * 1.5;
        span.style.transform = 'scale('+ scale + ', ' + scale + ')';

        //频率随机
        var rate = Math.random() * 10;
        span.style.animationDelay = rate + 's';
    }
}