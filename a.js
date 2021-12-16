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
// 돌아가는 시계 함수
// const deg = 6;
// const hr = document.querySelector('#hr');
// const mn = document.querySelector('#mn');
// const sc = document.querySelector('#sc');
// setInterval(() => {
//   let day = new Date();
//   let hh = day.getHours() * 30;
//   let mm = day.getMinutes() * deg;
//   let ss = day.getSeconds() * deg;
//   hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
//   mn.style.transform = `rotateZ(${mm}deg)`;
//   sc.style.transform = `rotateZ(${ss}deg)`;
// })
// 글자 하나씩 나타나는 함수
const content = "KEYU";
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
  setInterval(typing, 1000);
}

init();

// toggle 함수
const testBtn = document.querySelector('.test');
const nineCtn = document.querySelector('.nine_container');
const mainArr = document.querySelector('.main_arr');

testBtn.addEventListener('click', () => {
  nineCtn.classList.toggle('active');
  mainArr.classList.toggle('active');
  box.classList.toggle('active');
})
// window noscrll
function noScroll() {
  window.scrollTo(0, 0)
}
window.addEventListener('scroll', noScroll);

// 박스 움직임
const box = document.querySelector('.box');
let btnClicker = 20;
let xPas = -20;
let yPas = -20;
let currentxPas = 0;
let currentyPas = 0;

window.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log(event.keyCode);


  var KeC = event.keyCode;
  var currentPositionLeft = window.getComputedStyle(box, null).getPropertyValue("left");
  currentPositionLeft = currentPositionLeft.replace('px', '');
  var currentPositionTop = window.getComputedStyle(box, null).getPropertyValue("top");
  currentPositionTop = currentPositionTop.replace('px', '');

  if (xPas >= 0) {
    switch (KeC) {
      case 37: //ArrowLeft
        console.log(currentPositionLeft);
        xPas += 20;
        currentxPas = xPas;
        box.style.left = parseInt(currentPositionLeft) - btnClicker + 'px';
        break;
      case 38: //ArrowUp
        yPas += 20;
        currentyPas = yPas;
        console.log(currentPositionTop);
        box.style.top = parseInt(currentPositionTop) - btnClicker + 'px';
        break;
      case 39:  //arrowright
        xPas -= 20;
        currentxPas = xPas;
        console.log(currentPositionLeft);
        box.style.left = parseInt(currentPositionLeft) + btnClicker + 'px';
        break;
      case 40: //ArrowDown
        yPas -= 20;
        currentyPas = yPas;
        console.log(currentPositionTop);
        box.style.top = parseInt(currentPositionTop) + btnClicker + 'px';
        break;

    }
  } else {
    switch (KeC) {
      case 37: //ArrowLeft
        xPas += 20;
        currentxPas = xPas;
        console.log(currentxPas);
        nineCtn.style.transform = `translateX(${currentxPas}px) translateY(${currentyPas}px)`;
        break;
      case 38: //ArrowUp
        yPas += 20;
        currentyPas = yPas;
        console.log(currentyPas);
        nineCtn.style.transform = `translateY(${currentyPas}px) translateX(${currentxPas}px)`;
        break;
      case 39:  //arrowright
        xPas -= 20;
        currentxPas = xPas;
        console.log(currentxPas);
        nineCtn.style.transform = `translateX(${currentxPas}px) translateY(${currentyPas}px)`;
        break;
      case 40: //ArrowDown
        yPas -= 20;
        currentyPas = yPas;
        console.log(currentyPas);
        nineCtn.style.transform = `translateY(${currentyPas}px) translateX(${currentxPas}px)`;
        // nineCtn.style.transform = ``;

        break;

    }
  }
})
