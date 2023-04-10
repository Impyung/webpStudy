const searchEl = document.querySelector('.search');
// document는 HTML을 의미
const searchInputEL = searchEl.querySelector('input');
// searchEL안에서 요소를 찾게됨(효율적)

searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEL.focus();
});

searchInputEL.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEL.setAttribute('placeholder', '통합검색');
  // HTML 속성을 ATTRIBUTE라 함
});
searchInputEL.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEL.setAttribute('placeholder', '');
});

const badgeEL = document.querySelector('header .badges');

window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // gasp.to(요소, 지속시간, 옵션)
      gsap.to(badgeEL, 0.4, {
        opacity: 0,
        display: 'none',
      });
    } else {
      gsap.to(badgeEL, 0.4, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

// img fade-in
const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function (fadeEL, index) {
  // fadeEL 은 원하는 이름으로 대체 가능
  // 반복되는 횟수를 index로 받아서 사용
  gsap.to(fadeEL, 1, {
    delay: (index + 1) * 0.6, // 0.6초 1.2초 1.8초 순서로 동작
    opacity: 1,
  });
});
