// 배지 스크롤 시 사라지게 하기
// lodash cdn 을 사용함 (구글에서 검색해볼 것)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')
// window 객체는 브라우저의 창을 의미함
// lodash throttle 기능은 자주쓰임
// _.throttle(함수, milsec)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    // 애니메이션 효과 gsap 라이브러리
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })
  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // 애니메이션 효과 gsap 라이브러리
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

// 순차적 애니메이션 실행
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// 스와이퍼 초기화
var swiper = new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,

});

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal', // 기본값이므로 생략도 가능함
  slidesPerView: 3, // 한번에 보여줄 슬라이스 개수
  spaceBetween: 10, // 슬라이드 사이의 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, // 기본값 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지네이션
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이더 버튼
    nextEl: '.promotion .swiper-next' // 다음 슬라이더 버튼
  }
});

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})

const toggleEl = document.querySelector('.notice .notice-line .inner__right .toggle-promotion .toggleBtn')
const promotionEl = document.querySelector('.promotion')
let isHidePromotion = false;

toggleEl.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
    toggleEl.innerHTML = 'download';
  } else {
    promotionEl.classList.remove('hide');
    toggleEl.innerHTML = 'upload';
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 플로팅 오브젝트

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5,2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Back.easeInOut.config(1.7),
    delay: random(0,delay)

  });
}
floatingObject('.floating1',1,15)
floatingObject('.floating2',.5,15)
floatingObject('.floating3',1.5,20)

// 스크롤 매직 - 요소가 화면에 보여짐 여부에 따른 요소 관리
const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})