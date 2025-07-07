//click to find audio
        $('.wordcont').click(function (e) {
            e.preventDefault();
            var omega=$(this);
            playPulse(omega);
        });

        $('.let').click(function (e) {
            e.preventDefault();
            var omega=$(this);
            playDefault(omega);
        });

        $('.eleme').click(function (e) {
            e.preventDefault();
            var omega=$(this);
            playPulse(omega);            
        });

        $('.num').click(function (e) { 
            e.preventDefault();
            var omega=$(this);
            playPulse(omega);
        });

        $('.flagcont').click(function (e) { 
            e.preventDefault();
            var omega=$(this);
            playDefault(omega);
        });

        $('.play-pulse').click(function (e) { 
            e.preventDefault();
            var omega=$(this);
            playPulse(omega);
        });

//find the audio and animate the element

        function playPulse(omega) {
            var name = omega.attr('data-name');
            var type = omega.attr('data-type');
            findAudio(name, type);
            omega.addClass('animate__animated animate__pulse');
            omega.on('animationend', function () {
                omega.removeClass('animate__animated animate__pulse');
            });
        }

        function playDefault(omega){
            var name = omega.attr('data-name');
            var type = omega.attr('data-type');
            findAudio(name, type);
        }