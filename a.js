

// toggle 함수
const testBtn = document.querySelector('.test');
const nineCtn = document.querySelector('.nine_container');
const contentsBtn = document.querySelector('.contents_btn');
const contentsArr = document.querySelector('.contents');
let pageCounter = 1;

// testBtn.addEventListener('click', () => {
//   nineCtn.classList.add('active');
//   box.classList.add('active');
//   contentsArr.classList.add('active');
//   pageCounter = 2;
//   scrollCheck();
//   window.scrollTo(0, 0)
// })


function noScroll() {
  window.scrollTo(0, 0)
}
// window noscrll
function scrollCheck() {
  if (pageCounter === 0) {
  } else if (pageCounter === 2) {
    window.addEventListener('scroll', noScroll);
  } else if (pageCounter === 1) {
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
const scrollDownArrow = document.querySelector('.scroll-down');
const contents = document.querySelector('.contents');
const secondArr = document.querySelector('.second_arr');
// gsap.registerPlugin(ScrollTrigger);
// gsap.to(scrollDownArrow, {
//   duration: 0.5,
//   color: "white",
//   scrollTrigger: {
//     scroller: contents,
//     trigger: secondArr,
//     toggleActions: "play reverse play reverse",
//     scrub: true,
//     start: "center bottom",
//     end: "center top",
//     markers: true,
//   }
// });

function activateString() {
  //get string element
  const li1 = document.querySelector('.li_transparent_1')
  const li2 = document.querySelector('.li_transparent_2')
  const li3 = document.querySelector('.li_transparent_3')
  const li4 = document.querySelector('.li_transparent_4')


  //get window height
  var windowHeight = window.innerHeight / 1.2;
  var liHeight = li1.getBoundingClientRect().top;

  //check windowHeight reaches element Height
  if (liHeight < windowHeight) {
    li1.classList.add('active')
    li2.classList.add('active')
    li3.classList.add('active')
    li4.classList.add('active')
  } else {
    li1.classList.remove('active')
    li2.classList.remove('active')
    li3.classList.remove('active')
    li4.classList.remove('active')
  }

}

window.addEventListener('scroll', activateString)


var thirdArrContainer = document.querySelector('.third_arr');

window.onwheel = changeBgColor;

var scrollValue = 0;

function changeBgColor(e) {
  scrollValue += e.deltaY * 0.01;
  console.log(scrollValue);
  const scrollContainer = document.querySelector('.scroll_container');
  if (scrollValue < 0) {
    scrollValue = 0;
  }

  if (scrollValue > 23.5) {
    thirdArrContainer.classList.add('active');
    thirdArrContainer.classList.remove('active_2');
  }
  else if (scrollValue < 23.5) {
    thirdArrContainer.classList.remove('active');
    thirdArrContainer.classList.add('active_2');
  }

  if (scrollValue < 3) {
    scrollDownArrow.classList.remove('active')
  } else {
    scrollDownArrow.classList.add('active')

  }

  // if (scrollValue >= 30 && scrollValue < 70) {
  //   const winX = window.pageXOffset;
  //   const winY = window.pageYOffset;
  //   window.onscroll = function () {
  //     window.scrollTo(winX, winY);
  //     console.log('1111')
  //   }
  //   scrollContainer.classList.add('bg1')
  // } else {
  //   window.onscroll = function () { };
  // }
}

const bubble1 = document.querySelector('.bubble_1');
const bubble2 = document.querySelector('.bubble_2');
const bubble3 = document.querySelector('.bubble_3');
const bubble4 = document.querySelector('.bubble_4');

const bubble1Ghost = document.querySelector('.bubble_1_ghost');
const bubble2Ghost = document.querySelector('.bubble_2_ghost');
const bubble3Ghost = document.querySelector('.bubble_3_ghost');
const bubble4Ghost = document.querySelector('.bubble_4_ghost');

const thirdArrContentsDiv = document.querySelector('.third_arr_contents_div_2');
const moduel = document.querySelector('.moduel');


bubble1.addEventListener('click', () => {
  bubble1Ghost.classList.toggle('active');
  bubble1.classList.toggle('active');
  bubble2.classList.toggle('hidden');
  bubble3.classList.toggle('hidden');
  bubble4.classList.toggle('hidden');
})

bubble2.addEventListener('click', () => {
  bubble2Ghost.classList.toggle('active');
  bubble1.classList.toggle('hidden');
  bubble2.classList.toggle('active');
  bubble3.classList.toggle('hidden');
  bubble4.classList.toggle('hidden');
})
bubble3.addEventListener('click', () => {
  bubble3Ghost.classList.toggle('active');
  bubble1.classList.toggle('hidden');
  bubble2.classList.toggle('hidden');
  bubble3.classList.toggle('active');
  bubble4.classList.toggle('hidden');
})
bubble4.addEventListener('click', () => {
  bubble4Ghost.classList.toggle('active');
  bubble1.classList.toggle('hidden');
  bubble2.classList.toggle('hidden');
  bubble3.classList.toggle('hidden');
  bubble4.classList.toggle('active');
})


