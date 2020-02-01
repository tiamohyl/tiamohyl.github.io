// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        console.log('in here ');
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.7/favicon.ico");
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        console.log('in here==----- ');
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.7/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});


