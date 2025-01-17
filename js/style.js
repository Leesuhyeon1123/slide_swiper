window.onload = function () {
  // itemSwiper 코드
  const itemSwiper = new Swiper(".itemSwiper", {
    // 자동으로 슬라이드 되게함
    autoplay: {
      // 초단위
      delay: 2500,
      disableOnInteraction: false,
    },
    // 사진 반복적으로 보이게 하기(앞으로 안돌아가게함)
    loop: true,
    // 슬라이드 넘길때 다음 사진 반틈 보이게하기
    slidesPerView: 1.5,
    // 사진간의 간격 띄우기
    spaceBetween: 20,
    // ex ) 1050이상일때 4장보이게하기
    breakpoints: {
      590: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      1050: {
        slidesPerView: 4,
      },
    },
  });
  //   visualSwiper 코드
  const visualSwiper = new Swiper(".visualSwiper", {
    autoplay: {
        // 초단위
        delay: 2500,
        disableOnInteraction: false,
      },
    slidesPerView: 1,
  });
};
