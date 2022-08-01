function getTime() {
    const weekdays = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    let d = new Date();
    document.getElementById('time').innerHTML = 
    `${weekdays[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

function openNav() {
    var header = document.querySelector('header');
    var nav = document.getElementById('nav');
    var isOpen = header.clientHeight === 50;

    if (isOpen) {
        header.style.height = '315px';
        nav.style.display = "block";
    } 
    else {
        header.style.height = null;
        nav.style.display = 'none';
    }
}

function mail() {
    var mailBtn = document.getElementById("mail");
    alert("Đang mở ứng dụng mail");
}

function clickBtn() {
    var text = document.getElementById("send");
    alert("Nhấn vào biểu tượng bên cạnh");
}

$(document).ready(function() {
    $(".menu li").hover(function(){
        $(this).find("ul:first").slideDown(450);
    }, function() {
        $(this).find("ul:first").hide(50);
    })
})