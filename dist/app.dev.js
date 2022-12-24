"use strict";

var sections = document.querySelectorAll('.section');
var sectBtns = document.querySelectorAll('.controls');
var sectBtn = document.querySelectorAll('.control');
var allSections = document.querySelector('.main-content');

function pageTransition() {
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      var currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  } //sections active class


  allSections.addEventListener('click', pageT);
}

function pageT(e) {
  var id = e.target.dataset.id;

  if (id) {
    sectBtns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    sections.forEach(function (section) {
      section.classList.remove('active');
    });
    var element = document.getElementById(id);
    element.classList.add('active');
  }
} //toggle theme


var themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', function () {
  var element = document.body;
  element.classList.toggle('light-mode');
});
pageTransition();