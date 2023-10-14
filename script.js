const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementByClass("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementByClass("logo").style.fontSize = "40px";
  }
}

function searchfilter() {
    var input, filter, list, person, a, i, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    list = document.getElementById("directory");
    person = list.getElementsByTagName("div");
    for (i = 0; i < person.length; i++) {
      a = person[i].getElementsByTagName("span")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        person[i].style.display = "";
      } else {
        person[i].style.display = "none";
      }
    }
  }



 