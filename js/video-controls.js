// Add event listeners to all videos using event delegation
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(function(video) {
        const overlay = video.parentElement.querySelector('.video-overlay');
        
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
        
        video.addEventListener('play', function() {
            overlay.classList.add('hidden');
        });
        
        video.addEventListener('pause', function() {
            overlay.classList.remove('hidden');
        });
        
        video.addEventListener('ended', function() {
            overlay.classList.remove('hidden');
        });
    });
}); 