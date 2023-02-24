let acc = document.getElementsByClassName("platform__faq");
let i;
let buttonScroll = document.getElementsByClassName("button-scroll")[0];
let menu = document.getElementsByClassName("header")[0];

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("platform__faq_active");
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight) 
      panel.style.maxHeight = null;
    else 
      panel.style.maxHeight = panel.scrollHeight + "px";
  });
}

function openTab(evt, tabName) {
  let tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("blog__content");
  tablinks = document.getElementsByClassName("blog__tab__link");

  for(i = 0; i < tabcontent.length; i++) 
    tabcontent[i].style.display = "none";
  
  for(i = 0; i < tablinks.length; i++) 
    tablinks[i].className = tablinks[i].className.replace(" blog__tab__link_active", "");
  
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " blog__tab__link_active";
}

menu.onclick = function(e) {
	[].forEach.call(menu.querySelectorAll('a'), function(item) {
		item.classList.remove('header__link_active');
	});
	e.target.classList.add('header__link_active');
};

window.onscroll = function() {
  if(document.documentElement.scrollTop > 1500)
    buttonScroll.style.display = "block";
  else 
    buttonScroll.style.display = "none";
  if(document.documentElement.scrollTop > 41)
    document.getElementsByClassName("header")[0].style.padding = "15px 0 15px 0";
  else
    document.getElementsByClassName("header")[0].style.padding = "40px 0 40px 0";
};

function ButtonScroll() {
  document.documentElement.scrollTop = 0;
}

document.getElementById("open").click();