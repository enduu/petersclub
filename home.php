<?php

include("conn.php");
include("session.php");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/click.css">
    <link rel="stylesheet" href="css/stylesheet.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="shortcut icon" href="img/favs/favicon5.png" type="image/png">
    <title>Peter's Club</title>
</head>

<body class="main purpleb">
    <div class="loading-container mainload purpleb">
        <!-- <img class="logo_splash" src="img/loading.svg" alt=""> -->
        <p class="loading-txt">
            <p><img class="amoment" src="img/loading.svg" alt=""></p>
        </p>
    </div>
    <header class="mainheader">
        <div class="logocont">
            <img class="logoim" src="img/petersworld.png" alt="">
            <p>Peter's Club</p>
        </div>

        <div class="userwindow">
            <div class="userpic" style="background-image: url('img/user/<?php echo $user_sex; ?>.jpg')">
            </div>
            <div class="userinfo">
                <p class='username'><i> <?php echo $user_title; ?> </i><?php echo $login_session ?></p>
                <div class="infoline">
                    <div class="viptype vip1">VIP 1</div>
                    <div class="trophy"></div>
                    <div class="logoutb" onClick='logout()'>
                        <img src="img/logoutb.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="white-cont">
        <h2 class="hello">Hello <?php echo $login_session ?>,
            <span class="welcome">this is where to start</span></h2>
        <h3>Worksheets</h3>
        <div class="swiper-container">
            <div class="vocabcarousel swiper-wrapper">
                <div id="level1" class="lvli swiper-slide">
                    <!-- <div class="difficultycont">
                        
                    </div> -->
                    <h3>Sight words 🔥</h3>
                    <p>Sight word worksheets to practice writing and word recognition.</p>

                    <div class="unlocked downsw" data-pdf="sw" onclick="downloadPDF(event)">
                        Download
                    </div>

                    <div class="completionp">
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle" stroke-dasharray="100, 100" d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <h2>41</h2>
                        <h3>Pages</h3>
                    </div>

                </div>
                <div id="level2" class="lvli swiper-slide">
                    <!-- <div class="difficultycont">
                        
                    </div> -->
                    <h3>Reading comprehension 👍</h3>
                    <p>Short stories to practice reading and understanding simple text</p>

                    <div class="unlocked downrc" data-pdf="rc" onclick="downloadPDF(event)">
                        Download
                    </div>

                    <div class="completionp">
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle" stroke-dasharray="100, 100" d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <h2>118</h2>
                        <h3>Pages</h3>
                    </div>
                </div>
                <div id="level3" class="lvli swiper-slide">
                    <!-- <div class="difficultycont">
                        
                    </div> -->
                    <h3>Other 💪</h3>
                    <p>Fun worksheets for extra practice with various skills</p>

                    <div class="locked downow">
                        Download
                    </div>

                    <div class="completionp">
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle" stroke-dasharray="6, 100" d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <h2>6</h2>
                        <h3>Pages</h3>
                    </div>
                </div>
                <!-- <div class="mewelc">
                    <img src="img/petersworld.png" alt="">
                </div> -->

                
                <!-- <div id="level3" class="lvli swiper-slide">
                    <div class="difficultycont">
                        
                    </div>
                    <h3>Writing+</h3>
                </div> -->
</div>
        </div>
        <script src="js/jquery-1.8.3.min.js"></script>
        <script src="js/main-transitions.js"></script>
        <script>
            function logout() {
                window.location.href = 'logout.php';
            }
        </script>
        <script>
            function downloadPDF(event) {
                event.stopPropagation();
                const fileKey = event.currentTarget.getAttribute('data-pdf');
                let filePath = '';

                if (fileKey === 'sw') {
                    filePath = 'down/sightw1.pdf';
                } else if (fileKey === 'rc') {
                    filePath = 'down/readingc1.pdf';
                }

                if (filePath) {
                    fetch(filePath)
                    .then(res => res.blob())
                    .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = filePath.split('/').pop();
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        window.URL.revokeObjectURL(url);
                    });
                }
            }
        </script>
        <!--<script src="js/loading-main.js"></script>-->
        <script>

        $(document).ready(function(){
            setTimeout(() => {
                /*$('.loading-txt').css('display','block');*/
                $('.amoment').addClass('animate__animated');
                $('.amoment').addClass('animate__fadeOut');
                $('.logo_splash').addClass('animate__animated');
                $('.logo_splash').addClass('animate__fadeOut');
                setTimeout(() => {
                    $('body').css('overflow','visible');
                    $('.loading-container').css('display','none');
                    $('.signin').css('display','table');
                    $('.white-cont').addClass('animate__animated');
                    $('.white-cont').addClass('animate__fadeInUp');
                }, 500);
            }, 4000);
        });

        </script>
        <script src="js/transitions-all.js"></script>
        <script src="js/removeanimate.js"></script>
        <script src="js/swiper.min.js"></script>
        <script src="js/redirect-main.js"></script>
        <script>
            let loopCount = 0;
            //WON'T WORK IF NOT INLINE
            const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1.2,
            spaceBetween: 5,
            loop: true,
            initialSlide: 2,
            speed: 1000,
            effect: 'slide',
            loopAdditionalSlides: 3,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            on: {
                slideChangeTransitionEnd: function () {
                loopCount++;
                if (loopCount >= 4) {
                    this.autoplay.stop();
                    this.loopDestroy?.(); // Use optional chaining for safety
                }
                }
            },
            observer: true,
            observeParents: true,
            breakpoints: {
                1000: {
                slidesPerView: 2.2,
                spaceBetween: 15,
                autoHeight: false,
                // No autoplay or on here!
                }
            }
            });
            swiper.init();
            // var swiper2 = new Swiper('.modulecont', {
            //     slidesPerView: 1.2,
            //     spaceBetween: 2,
            // });

            // swiper.on('init', function () {
            //     /* do something */
            //     // init Swiper
            //     setTimeout(() => {
            //         $('.bplus').css('visibility', 'visible').addClass(
            //             'animate__animated animate__zoomIn');
            //         removefadeIn();
            //     }, 6500);
            //     $('header').addClass('animate__animated');
            //     $('header').addClass('animate__fadeInDown');
            //     $('.modl').addClass('animate__animated');
            //     $('.modl').addClass('animate__fadeOut');
            // });
            

            // var mySwiper = document.querySelector('.swiper-container').swiper;

            // swiper.on('slideChange', function () {
            //     //console.log('slide changed');
            //     // $('header').addClass('animate__animated');
            //     // $('header').addClass('animate__fadeInDown');
            //     // $('.assisttext').addClass('animate__animated');
            //     // $('.assisttext').addClass('animate__fadeInUp');
            //     $('.bplus').removeClass('animate__animated');
            //     $('.bplus').removeClass('animate__fadeIn');
            //     $('.bplus').removeClass('animate__fadeOut');
            //     $('.bplus2').removeClass('animate__animated');
            //     $('.bplus2').removeClass('animate__fadeIn');
            //     $('.bplus2').removeClass('animate__fadeOut');
            //     var active = mySwiper.activeIndex;
            //     if (active == 0) {
            //         $('.bplus').addClass('animate__animated');
            //         $('.bplus').addClass('animate__fadeIn');
            //         $('.bplus2').addClass('animate__animated');
            //         $('.bplus2').addClass('animate__fadeOut');
            //         console.log('cur1');
            //     }
            //     if (active == 1) {
            //         $('.bplus2').addClass('animate__animated');
            //         $('.bplus2').addClass('animate__fadeIn');
            //         $('.bplus').addClass('animate__animated');
            //         $('.bplus').addClass('animate__fadeOut');
            //         console.log('cur2');
            //     }
            // });

            // swiper.on('slideChangeTransitionStart', function () {

            //     //   $('.wordcont').css('visibility', 'hidden');
            //     //   $('.answerc').css('visibility', 'hidden');
            //     //   $('input').css('visibility', 'hidden');
            //     //   $('.dragme').removeClass('animate__animated animate__rubberBand animate__repeat-3');
            //     //   $('.floating').css('display','none');
            //     //   $('.graybgc').css('visibility', 'hidden').removeClass('animate__animated animate__zoomIn');
            // });
        </script>
</body>

</html>