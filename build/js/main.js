$(document).ready(function(){var e=document.querySelector(".menu-burguer");e.addEventListener("click",function(){e.classList.contains("open")?e.classList.remove("open"):e.classList.add("open")},!1),$(".menu-burguer").click(function(){$(".gz-menu").toggleClass("active"),$(".gz-menu a").toggleClass("fadeInRight"),$(".overlay").toggleClass("active")}),$(".overlay").click(function(){$(this).removeClass("active"),$(".gz-menu").removeClass("active"),$(".menu-burguer").removeClass("open"),$(".gz-menu a").removeClass("fadeInRight")}),$(".gz-menu a").click(function(){$(".gz-menu").removeClass("active"),$(".overlay").removeClass("active"),$(".menu-burguer").removeClass("open"),$(".gz-menu a").removeClass("fadeInRight")})}),$(window).load(function(){$(".gz-nav").addClass("down-load")});