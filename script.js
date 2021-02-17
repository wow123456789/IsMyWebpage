function revealMessage(){document.getElementById("hiddenmessage").style.display='block';}
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
<script>
function my webpage(){var q=document.getElementById("My webpage");var v=document.getElementById("video");var n=document.getElementById("about");g.style.display="block";v.style.display="none";n.style.display="none";}
 function opentabs(my webpage,video,about) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";}
  const tags=document.querySelectorAll('[data-tab-target')
tabs.for each(tab=>{tab.addEventListener('click',()=>{const target=document.querySelector(tab.dataset.tabTarget)target.classList.add('active')consttabContents=document.querySelectorAll('[data-tab-content')tabContents.foreach(tabContent=>tabContent.classList.remove('active'))})})
greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');


// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
  // Run
setBgGreet();
getName();
getFocus();
