
        $('.lvli').click(function(){
            var level= $(this).attr('id');
            console.log(level);
            var yellow = '#FDCC0D';
            var orange = '#FD7D0D';
            var purple = '#5E00CF';
            if(level==='level1'){
                window.location.href = 'sightwords.php';
            }
            if(level==='level2'){
                nextPage(orange);
                setTimeout(() => {
                window.location.href = 'readingcomprehension.php';
                }, 2000);
            }
            if(level==='level3'){
                nextPage(purple);
                setTimeout(() => {
                window.location.href = 'other.php';
                }, 2000);
            }
        });

        $('.bplus').click(function(){
            var target= $(this).attr('id');
            var yellow = '#FDCC0D';
            var orange = '#FD7D0D';
            var purple = '#5E00CF';
            if(target==='memoryplus'){
                nextPage(yellow);
                setTimeout(() => {
                window.location.href = 'sightwords.php';
                }, 2000);
            }
            if(target==='listeningplus'){
                nextPage(orange);
                setTimeout(() => {
                window.location.href = 'readingcomprehension.php';
                }, 2000);
            }
            if(target==='writingplus'){
                nextPage(purple);
                setTimeout(() => {
                window.location.href = 'other.php';
                }, 2000);
            }
        });

        $('.module').click(function(){
            var module= $(this).attr('id');
            var yellow = '#FDCC0D';
            var orange = '#FD7D0D';
            var purple = '#5E00CF';
            if(module==='module1'){
                nextPage(yellow);
                setTimeout(() => {
                window.location.href = 'sightwords.php';
                }, 2000);
            }
            if(module==='module2'){
                nextPage(orange);
                setTimeout(() => {
                window.location.href = 'readingcomprehension.php';
                }, 2000);
            }
            if(module==='module3'){
                nextPage(purple);
                setTimeout(() => {
                window.location.href = 'other.php';
                }, 2000);
            }
        });