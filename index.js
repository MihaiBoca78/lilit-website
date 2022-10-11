//  <!-- for-navbar js -->

const menuToggel = document.querySelector('.menuToggel');

const navigation = document.querySelector('.navigation');

menuToggel.onclick = function () {
  navigation.classList.toggle('open');
};

const list = document.querySelectorAll('.list');
function activeLink() {
  list.forEach(item => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach(item => item.addEventListener('click', activeLink));

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

// <!-- end of-navbar js -->

//<!-- for-contactme js -->

const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

//<!-- end of-contactme js -->
