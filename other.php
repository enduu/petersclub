<?php

include("conn.php");
include("session.php");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/vocab_style.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="shortcut icon" href="img/favs/favicon5.png" type="image/png">
    <title>Peter's Club</title>
</head>

<body class="purpleb2">
    <div class="loading-container mainload purplegb">
        <p class="loading-txt">
            <p><img class="amoment" src="img/loading.svg" alt=""></p>
        </p>
    </div>

    <header class="vocabhead">
        <div class="logocont">
            <img class="logoim" src="img/petersworld.png" alt="">
            <p>Peter's Club</p>
        </div>
    </header>

    <div class="swiper-container advanced">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper economy">
            <!-- Slides -->
             <?php $count = 6;

                    for ($i = 0; $i < $count; $i++) {
                        echo '<div id="c';
                        echo $i+1;
                        echo '" class="swiper-slide" style="background-image: url(\'img/oth/oth (';
                        echo $i+1;
                        echo ').jpg\');">';
                        echo '   <div class="gomenu"></div>';
                        echo '   <div class="assisttext">';
                        echo  '      <div class="budge">Worksheets</div>';
                        echo  '      <div class="line">';
                        echo  '          <h2>Other</h2> <span class="pron">Page: ';
                        echo $i+1;
                        echo '</span>';
                        echo            '<div class="plays" id="download';
                        echo $i+1;
                        echo '"><img class="play___holder" src="img/download.svg" alt="">';
                        echo            '<object class="playing" type="image/svg+xml" data="img/download.svg"></object>';
                        echo            '</div>';
                        echo        '</div>';
                        echo        '<button class="nextbutton nextel"></button>';
                        echo    '</div>';
                        echo '</div>';
                    }
            ?>
        </div>

        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
    </div>

    <script src="js/jquery-1.8.3.min.js"></script>
    <script src="js/swiper.min.js"></script>
    <script src="js/redir.js"></script>
    <script>
        //WON'T WORK IF NOT INLINE

        var swiper = new Swiper('.swiper-container', {
            init: false,
            // pagination: {
            //     el: '.swiper-pagination',
            // },
            navigation: {
                nextEl: '.nextel',
            },
        });

        swiper.on('init', function () {
            /* do something */
            // init Swiper
            setTimeout(() => {
                $('header').addClass('animate__animated animate__fadeInDown');
                $('.assisttext').addClass('animate__animated animate__fadeInUp');
                $('.gomenu').addClass('animate__animated animate__fadeIn');
            }, 5500);
        });
        swiper.init();

        swiper.on('touchStart', function () {
            //console.log('swipped');
            $('header').removeClass('animate__animated animate__fadeInDown');
            $('.assisttext').removeClass('animate__animated animate__fadeInUp');
            $('.gomenu').removeClass('animate__animated animate__fadeIn');
        });

        swiper.on('slideChange', function () {
            /*console.log('slide changed');*/
            $('header').addClass('animate__animated animate__fadeInDown');
            $('.assisttext').addClass('animate__animated animate__fadeInUp');
            $('.gomenu').addClass('animate__animated animate__fadeIn');
        });

    </script>
<script>
  $('div[id^="download"]').on('click', function () {
    const btnId = $(this).attr('id'); // e.g. "download1"
    const num = btnId.replace('download', ''); // Get "1"
    const imageUrl = `img/oth/oth (${num}).jpg`;
    const fileName = `${num}.jpg`;

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
</script>
<!-- <script src="js/playAnimation.js"></script> -->
<!-- <script src="js/vocabAudioAdvanced.js"></script> -->
<!-- not working -->
<script src="js/removeanimate.js"></script>
</body>

</html>