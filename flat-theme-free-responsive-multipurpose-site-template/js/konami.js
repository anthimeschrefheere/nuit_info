'use strict';
(function() {
    if (window.Notification && window.Notification.permission === 'default') {
        window.Notification.requestPermission(function(e) {
            if (e !== 'granted') {
                alert('Vous auriez dû ;-)\nChangez vos paramètres et réessayez\n↑ ↑ ↓ ↓...');
            }
        });
    }
    var play = (function() {
        var audio = document.createElement('audio');
        return function(sound, callback) {
            audio.src = 'sounds/konami/' + sound;
            audio.play();
            audio.addEventListener('ended', function() {
                if (callback) callback();
                audio.removeEventListener('ended', this);
            });
        };
    })();
    var notify = (function() {
        return function(title, body, icon, sound, callback) {
            if (window.Notification && window.Notification.permission === 'granted') {
                new window.Notification(title, {body: body, icon: 'images/konami/' + icon});
            } else {
                alert(title + '\n' + body);
            }
            if (sound) play(sound, callback || null);
        };
    })();
    var konami = (function() {
        var section = document.getElementById('konami');
        return {
            dom: section,
            image: section.getElementsByTagName('img')[0]
        };
    })();
    //konami
    var konamiFun = function() {
        notify('konami!', 'power up!!!', 'power-up.png', 'power-up.ogg');
    };
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', {done: konamiFun});
    cheet('k o n a m i', {done: konamiFun});
    //r2d2
    var r2d2 = function() {
        play('r2d2.ogg');
    };
    cheet('R 2 D 2', {done: r2d2});
    cheet('r kp_2 d kp_2', {done: r2d2});
    cheet('R kp_2 D kp_2', {done: r2d2});
    //trololo
    var trololo = function() {
        konami.image.src = 'images/konami/trololo.gif';
        play('trololo.ogg', function() {
            konami.dom.style.background = '';
            konami.dom.classList.add('hidden');
            konami.image.src = '';
        });
        konami.dom.classList.remove('hidden');
        konami.dom.style.background = 'white';
    };
    cheet('t r o l o l o', {done: trololo});
    cheet('t r o l l', {done: trololo});
    //happy
    cheet('h a p p y', {
        done: function() {
            konami.image.src = 'images/konami/happy.gif';
            play('happy.ogg', function() {
                konami.dom.classList.add('hidden');
                konami.image.src = '';
                konami.dom.style.background = '';
                konami.dom.style.transition = '';
                clearInterval(interval);
            });
            konami.dom.classList.remove('hidden');
            konami.dom.style.transition = 'background 0.5s linear';
            var interval = setInterval(function() {
                konami.dom.style.background = 'hsl(' + Math.floor(Math.random() * 360) + ', 80%, 50%)';
            }, 1000);
        }
    });
    //barrel roll
    var barrelRoll = function() {
        document.body.style.transition = 'transform 2s linear';
        document.body.style.transform = 'rotate(360deg)';
        setTimeout(function() {
            document.body.style.transition = '';
            document.body.style.transform = '';
        }, 2100);
    };
    cheet('d o a b a r r e l r o l l', {done: barrelRoll});
    cheet('d o space a space b a r r e l space r o l l', {done: barrelRoll});
    //nyan cat
    var nyan = function() {
        notify('nyan!', 'nyan nyan nyan nyan nyan', 'nyan.png', 'nyan.ogg', function() {
            konami.image.src = '';
            konami.dom.style.transition = '';
            konami.dom.style.transform = '';
            konami.dom.classList.add('hidden');
            clearInterval(interval);
        });
        konami.image.src = 'images/konami/nyan.gif';
        konami.dom.classList.remove('hidden');
        konami.dom.style.transition = 'transform 0.5s ease-in-out';
        var interval = setInterval(function() {
            konami.dom.style.transform = 'translate3d( ' + Math.floor(Math.random() * 100 - 50) + '%, ' + Math.floor(Math.random() * 100 - 50) + '%, 0)';
        }, 500);
    };
    cheet('n y a n', {done: nyan});
    cheet('N Y A N', {done: nyan});
    //NaN cat
    var nan = function() {
        notify('NaN!', 'NaN NaN NaN NaN', 'nan.png', 'nyan.ogg', function() {
            konami.image.src = '';
            konami.image.style.transition = '';
            konami.image.style.transform = '';
            konami.dom.style.background = '';
            konami.dom.classList.add('hidden');
            clearInterval(interval);
        });
        konami.image.src = 'images/konami/nan.png';
        konami.dom.classList.remove('hidden');
        konami.dom.style.background = 'black';
        konami.image.style.transition = 'transform 0.5s ease-in-out';
        var interval = setInterval(function() {
            konami.image.style.transform = 'translate3d( ' + Math.floor(Math.random() * 100 - 50) + '%, ' + Math.floor(Math.random() * 100 - 50) + '%, 0)';
        }, 500);
    };
    cheet('n a n', {done: nan});
    cheet('N a N', {done: nan});
    cheet('N A N', {done: nan});
})();
