
$(document).ready(function() {
    $('#eye').click(function(){
        // alert('Đã hiện mật khẩu');
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }
        else{
            $(this).prev().attr('type', 'password')
        }
    });
});