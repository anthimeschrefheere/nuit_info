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
        return function(sound) {
            audio.src = 'sounds/konami/' + sound;
            audio.play();
        };
    })();
    var notify = (function() {
        return function(title, body, icon, sound) {
            if (window.Notification && window.Notification.permission === 'granted') {
                new window.Notification(title, {body: body, icon: 'images/konami/' + icon});
            } else {
                alert(title + '\n' + body);
            }
            if (sound) play(sound);
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
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', {
        done: function() {
            notify('konami!', 'power up!!!', 'power-up.png', 'power-up.ogg');
        }
    });
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
        play('trololo.ogg');
        konami.dom.classList.remove('hidden');
        konami.dom.style.background = 'white';
        setTimeout(function() {
            konami.dom.style.background = '';
            konami.dom.classList.add('hidden');
            konami.image.src = '';
        }, 18000);
    };
    cheet('t r o l o l o', {done: trololo});
    cheet('t r o l l', {done: trololo});
    //happy
    cheet('h a p p y', {
        done: function() {
            konami.image.src = 'images/konami/happy.gif';
            play('happy.ogg');
            konami.dom.classList.remove('hidden');
            konami.dom.style.transition = 'background 0.5s linear';
            var interval = setInterval(function() {
                konami.dom.style.background = 'hsl(' + Math.floor(Math.random() * 360) + ', 80%, 50%)';
            }, 1000);
            setTimeout(function() {
                konami.dom.classList.add('hidden');
                konami.image.src = '';
                konami.dom.style.background = '';
                clearInterval(interval);
            }, 12000);
        }
    });
})();
