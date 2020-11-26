//目录菜单栏
 var header = document.querySelector('.header')
 header.onclick = function(e){
    var e = e || window.event
    var target = e.target || e.srcElement
     
    if(target.innerHTML == '目录'){
        
document.querySelector('.caidan').style.display = 'block'
       
    }
    if(target.className =='close2'){
        
 document.querySelector('.caidan').style.display = 'none'
    }

    if(target.id == 'mumu'){
        // console.log(11);
        document.querySelector('.cart').style.display = 'block'
    }
    if(target.className == 'closee'){
        document.querySelector('.cart').style.display = 'none'
    }
 }


//点击购物车图标显示
function showCart() {
  var open = document.querySelector('.openCart');
  var cart = document.querySelector('.cart');
  var closex = document.querySelector('.closex');
  open.onclick = function () {
    cart.style.display = 'block';
  };
  closex.onclick = function () {
    cart.style.display = 'none';
  };
}
showCart();



      
//底部下拉框
var kuang = document.querySelector('.kuang')
var bot = document.querySelector('.bot_1')

var a2 = document.querySelector('.a2')
var b1 = document.querySelector('.b1')
var flag = false;
bot.addEventListener('click', function () {
    // kuang.style.display = 'none';
    flag = !flag;
    if (flag) {
        //点击时显示上箭头和下拉框
        kuang.style.display = 'block';
        b1.style.display = 'inline-block';
        a2.style.display = 'none';
    } else {
        kuang.style.display = 'none';
        b1.style.display = 'none';
        a2.style.display = 'inline-block';
    }
}, false);



//返回顶部
function pageScroll() {
  window.scrollBy(0, -100);
  scrolldelay = setTimeout('pageScroll()', 100);

  var sTop = document.documentElement.scrollTop + document.body.scrollTop;
  if (sTop == 0) clearTimeout(scrolldelay);
}
