let acc = document.getElementsByClassName("platform__faq");
let i;
let buttonScroll = document.getElementsByClassName("button-scroll")[0];
let menu = document.getElementsByClassName("header")[0];
let apple = document.getElementsByClassName('download_apple');
let google = document.getElementsByClassName("download_google");
let learnImg1 = document.getElementsByClassName("learn__cover__block__img")[0];
let learnImg2 = document.getElementsByClassName("learn__cover__block__img")[1];
let missionImg = document.getElementsByClassName("mission__block__img")[0];
let header = document.getElementsByClassName("header__block")[0];
let browserLang;

if(navigator.language.slice(0,2) == "es")
  browserLang = "es";
else
  browserLang = "en";

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
		item.classList.remove('header__block__link_active');
	});
	e.target.classList.add('header__block__link_active');
}

window.onscroll = function() {
  if(document.documentElement.scrollTop > 1500)
    buttonScroll.style.display = "block";
  else 
    buttonScroll.style.display = "none";
  if(document.documentElement.scrollTop > 41)
    document.getElementsByClassName("header")[0].style.padding = "15px 0 15px 0";
  else
    document.getElementsByClassName("header")[0].style.padding = "40px 0 40px 0";
}

function ButtonScroll() {
  document.documentElement.scrollTop = 0;
}

document.getElementById("open").click();

function changeLanguage() {
  document.querySelector('title').innerHTML = lang['title'][browserLang];

  for(let key in lang) {
    let elem = document.querySelector('.lng-' + key);
    if(elem) 
      elem.innerHTML = lang[key][browserLang];
  }
  learnImg1.style.background = "url('img/learn/" + browserLang + "/learn-1.png') no-repeat center";
  learnImg2.style.background = "url('img/learn/" + browserLang + "/learn-2.png') no-repeat center";
  missionImg.style.background = "url('img/learn/" + browserLang + "/learn-1.png') no-repeat center";
}

changeLanguage();

function dark(store){
  if(store == "apple" && window.innerWidth > 1250)
    for(i = 0; i < 3; i++) 
      apple[i].style.background = "url('img/download/" + browserLang + "/apple-dark.svg') no-repeat center";

  if(store == "google" && window.innerWidth > 1250)
    for(i = 0; i < 3; i++) 
      google[i].style.background = "url('img/download/" + browserLang + "/google-dark.svg') no-repeat center";
}
  
function light(store){
  if(store == "apple")
    for(i = 0; i < 3; i++) 
      apple[i].style.background = "url('img/download/" + browserLang + "/apple-light.svg') no-repeat center";

  if(store == "google")
    for(i = 0; i < 3; i++) 
      google[i].style.background = "url('img/download/" + browserLang + "/google-light.svg') no-repeat center";
}

light("apple");
light("google");

function onEntry(entry) {
  entry.forEach(change => {
    if(change.isIntersecting) 
      change.target.classList.add('animate');
  });
}
  
let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('section');
  
for(let elm of elements)
  observer.observe(elm);

function OpenMenu(){
  header.style.transform='translateX(0)';
}
  
function CloseMenu(){
  if(window.innerWidth < 1251)  
    header.style.transform='translateX(-100%)';
} 

function OpenModal(ModalName){
  document.getElementById(ModalName).style.display='block';
  document.getElementsByTagName('body')[0].style.overflowY="hidden";
}

function CloseModal(ModalName){
  document.getElementById(ModalName).style.display='none';
  document.getElementsByTagName('body')[0].style.overflowY="scroll";
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});