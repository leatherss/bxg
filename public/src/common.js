define(['jquery','cookie'],function($){

if(document.cookie.indexOf('PHPSESSID') == -1 && location.pathname != '/login') {
    location.href = '/login';
}

// 获取用户的登录信息(被记录在了cookie中)
var loginfo = $.cookie('loginfo') && JSON.parse($.cookie('loginfo'));

console.log(loginfo);

// 退出登录
$('#logout').on('click', function () {

    // /api http://api.botue.com
    $.ajax({
        url: '/api/logout',
        type: 'post',
        success: function (info) {
            if(info.code == 200) {
                alert('退出成功!');
                location.href = '/login';
            }
        }
    })
});


})