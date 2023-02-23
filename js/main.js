window.onscroll = function() {
  let buttonScroll = document.getElementsByClassName("button-scroll")[0];

  if(document.documentElement.scrollTop > 1500) {
    buttonScroll.style.display = "block";
  } 
  else {
    buttonScroll.style.display = "none";
  }
};

function ButtonScroll() {
  document.documentElement.scrollTop = 0;
}

let acc = document.getElementsByClassName("platform__faq");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("platform__faq_active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function openTab(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("blog__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("blog__tab__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" blog__tab__link_active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " blog__tab__link_active";
}

document.getElementById("open").click();

window.onscroll = function() {
  if(document.documentElement.scrollTop > 41) {
    document.getElementsByClassName("header")[0].style.padding = "15px 0 15px 0";
  } 
  else {
    document.getElementsByClassName("header")[0].style.padding = "40px 0 40px 0";
  }
};

let menu = document.getElementsByClassName("header")[0];

menu.onclick = function(e) {
	if (e.target.tagName.toLowerCase() != 'a') return;
	[].forEach.call(menu.querySelectorAll('a'), function(item) {
		item.classList.remove('header__link_active');
	});
	e.target.classList.add('header__link_active');
};