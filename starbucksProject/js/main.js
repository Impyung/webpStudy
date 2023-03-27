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
