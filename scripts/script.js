// fullpage js 플러그인 연결 필수!
$("#fullpage").fullpage({
    scrollBar : true, 
    scrollingSpeed : 100,
    // nav
    navigation : true,
    // navigationTooltips : ["소개", "특징", "프로젝트", "연락처"],
    showActiveTooltip : true,
    menu : "nav",
    // anchors : ["intro","special","project","contact"],
    //fullpage는 scrollTrigger와 함께 이용 불가
    //fullpage(구) 제이쿼리 기능으로 애니메이션도 제이쿼리로 연결해야한다.
    onLeave : function(index, nextIndex, direction) {
        console.log(index, nextIndex, direction)
        if(index == 2) {
            $(".s3 h1").css("color", "blue")
            //$(".s3 h1").addClass("animation class 입력")
            $(".s3 h1").addClass("ani")
        }
    },
})

// sns swiper
const snsS = new Swiper('.sns .swiper',{
    slidesPerView:3,//한번에 보일 슬라이드 수(모바일)
    spaceBetween:20,//슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteration:true,},
    loop:true,
    speed:8000,
    freemode:true,
    // 반응형 슬라이드 수
})