const clock = document.querySelector('.h1-clock'); //시계 호출

// 디지털 시계 함수 
function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  //clock.innerHTML = hour +":" + minutes + ":"+seconds;
  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 글자 하나씩 나타나는 함수
const content = "안녕하세요 ";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
//init 
function init() {
  setInterval(getTime, 1000);
  setInterval(typing, 200);
  setInterval(scrollCheck);
}

init();

// toggle 함수
const testBtn = document.querySelector('.test');
const nineCtn = document.querySelector('.nine_container');
const mainArr = document.querySelector('.main_arr');
const contentsBtn = document.querySelector('.contents_btn');
const contentsArr = document.querySelector('.contents');
let pageCounter = 0;

testBtn.addEventListener('click', () => {
  nineCtn.classList.add('active');
  mainArr.classList.add('active');
  box.classList.add('active');
  pageCounter = 1;
})

contentsBtn.addEventListener('click', () => {
  mainArr.classList.add('active');
  contentsArr.classList.add('active');
  pageCounter = 2;
})

function noScroll() {
  window.scrollTo(0, 0)
}
// window noscrll
function scrollCheck() {
  if (pageCounter === 0) {
  } else if (pageCounter === 1) {
    window.addEventListener('scroll', noScroll);
  } else if (pageCounter === 2) {

  }
}

// 박스 움직임
const box = document.querySelector('.box');
let btnClicker = 100;
let currentPage = 5;

window.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log(event.keyCode);


  var KeC = event.keyCode;
  var currentPositionLeft = window.getComputedStyle(box, null).getPropertyValue("left");
  currentPositionLeft = currentPositionLeft.replace('px', '');
  var currentPositionTop = window.getComputedStyle(box, null).getPropertyValue("top");
  currentPositionTop = currentPositionTop.replace('px', '');
  var currentPositionRight = window.getComputedStyle(box, null).getPropertyValue("right");
  currentPositionRight = currentPositionRight.replace('px', '');
  var currentPositionBottom = window.getComputedStyle(box, null).getPropertyValue("bottom");
  currentPositionBottom = currentPositionBottom.replace('px', '');

  switch (KeC) {
    case 37: //ArrowLeft
      console.log(currentPositionLeft);
      console.log(currentPositionRight);
      console.log(currentPositionTop);
      console.log(currentPositionBottom);
      box.style.left = parseInt(currentPositionLeft) - btnClicker + 'px';
      break;
    case 38: //ArrowUp
      console.log(currentPositionLeft);
      console.log(currentPositionRight);
      console.log(currentPositionTop);
      console.log(currentPositionBottom);
      box.style.top = parseInt(currentPositionTop) - btnClicker + 'px';
      break;
    case 39:  //arrowright
      console.log(currentPositionLeft);
      console.log(currentPositionRight);
      console.log(currentPositionTop);
      console.log(currentPositionBottom);
      box.style.left = parseInt(currentPositionLeft) + btnClicker + 'px';
      break;
    case 40: //ArrowDown
      console.log(currentPositionLeft);
      console.log(currentPositionRight);
      console.log(currentPositionTop);
      console.log(currentPositionBottom);
      box.style.top = parseInt(currentPositionTop) + btnClicker + 'px';
      break;

  }
  wallCrashCheck();
  console.log(currentPage);
  function wallCrashCheck() {
    switch (currentPage) {
      case 1:
        if (currentPositionLeft >= 115 && currentPositionLeft <= 365 && currentPositionTop >= 85 && currentPositionTop <= 335) {
          console.log('hover');
          aboutMe();
        } else {
          const aboutMe = document.querySelector('.about_me_arr');
          aboutMe.classList.remove('active');
        }
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(0)';
          box.style.left = '0';
          currentPage = 1;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(0)';
          box.style.left = '0';
          currentPage = 2;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(0)';
          box.style.top = '0';
          currentPage = 1;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(-100vh)';
          box.style.top = '0';
          currentPage = 4;
        }
        break;
      case 2:
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(0)';
          box.style.left = '94vw';
          currentPage = 1;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(0)';
          box.style.left = '0';
          currentPage = 3;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(0)';
          box.style.top = '0';
          currentPage = 2;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(-100vh)';
          box.style.top = '0';
          currentPage = 5;
        }
        break;
      case 3:
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(0)';
          box.style.left = '94vw';
          currentPage = 2;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(0)';
          box.style.left = '94vw';
          currentPage = 3;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(0)';
          box.style.top = '0';
          currentPage = 3;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(-100vh)';
          box.style.top = '0';
          currentPage = 6;
        }
        break;
      case 4:
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(-100vh)';
          box.style.left = '0';
          currentPage = 4;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(-100vh)';
          box.style.left = '0';
          currentPage = 5;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(0)';
          box.style.top = '87vh';
          currentPage = 1;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(-200vh)';
          box.style.top = '0';
          currentPage = 7;
        }
        break;
      case 5:
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(-100vh)';
          box.style.left = '94vw';
          currentPage = 4;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(-100vh)';
          box.style.left = '0';
          currentPage = 6;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(0)';
          box.style.top = '87vh';
          currentPage = 2;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(-200vh)';
          box.style.top = '0';
          currentPage = 8;
        }
        break;
      case 6:
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(-100vh)';
          box.style.left = '94vw';
          currentPage = 5;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(-100vh)';
          box.style.left = '94vw';
          currentPage = 6;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(0)';
          box.style.top = '89vh';
          currentPage = 3;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(-200vh)';
          box.style.top = '0';
          currentPage = 9;
        }
        break;
      case 7:
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(-200vh)';
          box.style.left = '0';
          currentPage = 7;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(-200vh)';
          box.style.left = '0';
          currentPage = 8;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(0vw) translateY(-100vh)';
          box.style.top = '89vh';
          currentPage = 4;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(-200vh)';
          box.style.top = '87vh';
          currentPage = 7;
        }
        break;
      case 8:
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(0) translateY(-200vh)';
          box.style.left = '94vw';
          currentPage = 7;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(-200vh)';
          box.style.left = '0';
          currentPage = 9;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(-100vh)';
          box.style.top = '89vh';
          currentPage = 5;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(-200vh)';
          box.style.top = '87vh';
          currentPage = 8;
        }
        break;
      case 9:
        if (currentPositionLeft < 0) {
          nineCtn.style.transform = 'translateX(-100vw) translateY(-200vh)';
          box.style.left = '94vw';
          currentPage = 8;
        }
        if (currentPositionRight < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(-200vh)';
          box.style.left = '94vw';
          currentPage = 9;
        }
        if (currentPositionTop < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(-100vh)';
          box.style.top = '89vh';
          currentPage = 6;
        }
        if (currentPositionBottom < 0) {
          nineCtn.style.transform = 'translateX(-200vw) translateY(-200vh)';
          box.style.top = '87vh';
          currentPage = 9;
        }
        break;
    }
  }
})


function aboutMe() {
  const aboutMe = document.querySelector('.about_me_arr');
  aboutMe.classList.add('active');
}
