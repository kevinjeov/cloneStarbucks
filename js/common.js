// 검색 Input 돋보기 클릭 시 Focus 넣어주기

const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 올해가 몇 년도인지 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()