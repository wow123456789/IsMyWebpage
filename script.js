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