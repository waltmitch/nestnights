document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Feedback for book now button
document.getElementById('book_harmony').addEventListener('click', function() {
    this.textContent = 'Booking...';
    this.style.backgroundColor = '#092e40';
});

// update the preview image when a thumbnail is clicked
document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(function(thumb) {
                thumb.classList.remove('active');
            });

            // Add active class to clicked thumbnail
            this.classList.add('active');

            // Update preview image
            var preview = this.parentElement.nextElementSibling;
            preview.src = this.src;
        });
    });

    var previews = document.querySelectorAll('.preview');
    previews.forEach(function(preview) {
        preview.addEventListener('mouseover', function() {
            // Play video on hover
            var video = this.nextElementSibling;
            video.setAttribute('autoplay', '');
        });
    });
});

// Handle video play and pause on hover
var videos = document.querySelectorAll('.video');
videos.forEach(function(video) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video.id + '?enablejsapi=1');
    iframe.setAttribute('frameborder', '0');
    video.appendChild(iframe);
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player(iframe);
    }
    video.addEventListener('mouseover', function() {
        player.playVideo();
    });
    video.addEventListener('mouseout', function() {
        player.pauseVideo();
    });
});