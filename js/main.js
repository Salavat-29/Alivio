
const mobilenavbutton = document.querySelector('.mobile-nav-button');
const mobilenavicon = document.querySelector('.mobile-nav-button__icon');
const mobilenav = document.querySelector('.mobile-nav');

mobilenavbutton.addEventListener('click', function () {
mobilenavicon.classList.toggle('active');
mobilenav.classList.toggle('active');
document.body.classList.toggle('no-scroll');
})



const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', function (){

    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }

    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src='./img/story/pause-white.svg';

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;

    } else {
        videoFile.pause();
        videoBtnIcon.src='./img/story/play-white.svg';
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
})


